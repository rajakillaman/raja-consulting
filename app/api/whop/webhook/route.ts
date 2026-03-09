import { NextRequest, NextResponse } from "next/server";
import { Webhook, WebhookVerificationError } from "svix";
import { normaliseWhopSecret } from "@/lib/whop-helpers";

export async function POST(req: NextRequest) {
  // 1. Read raw body bytes (CRITICAL: must be raw for svix HMAC verification)
  const rawBody = await req.text();
  const headers = Object.fromEntries(req.headers.entries());

  // 2. Verify Standard Webhooks signature via svix
  const secret = normaliseWhopSecret(process.env.WHOP_WEBHOOK_SECRET!);
  let payload: Record<string, unknown>;
  try {
    const wh = new Webhook(secret);
    payload = wh.verify(rawBody, headers) as Record<string, unknown>;
  } catch (e) {
    if (e instanceof WebhookVerificationError) {
      console.error("SECURITY: Whop webhook signature verification failed");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
    throw e;
  }

  const eventType = payload.type as string;
  console.log(`Whop webhook received: type=${eventType}`);

  if (eventType === "payment.succeeded") {
    return handlePaymentSucceeded(payload);
  }
  if (eventType === "payment.failed") {
    return handlePaymentFailed(payload);
  }

  return NextResponse.json({ status: "ok" });
}

async function handlePaymentSucceeded(payload: Record<string, unknown>) {
  const data          = payload.data as Record<string, unknown>;
  const whopPaymentId = data.id as string;
  const metadata      = (data.metadata ?? {}) as Record<string, string>;
  const wcOrderId     = metadata.wc_order_id;

  if (!wcOrderId || !whopPaymentId) {
    console.error("Missing metadata in Whop webhook:", { whopPaymentId, wcOrderId });
    return NextResponse.json({ error: "Missing metadata" }, { status: 500 });
  }

  // Call leakifyhub.com fulfillment endpoint.
  // The WordPress side is idempotent — it checks order status and returns
  // "already completed" if the webhook fires twice, so no extra tracking needed here.
  const fulfillRes = await fetch(process.env.LH_FULFILL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      wc_order_id:     parseInt(wcOrderId),
      whop_payment_id: whopPaymentId,
      secret:          process.env.LH_FULFILLMENT_SECRET,
    }),
  });

  if (!fulfillRes.ok) {
    const err = await fulfillRes.text();
    console.error("Fulfillment callback failed:", fulfillRes.status, err);
    // Return 500 so Whop retries the webhook
    return NextResponse.json({ error: "Fulfillment failed" }, { status: 500 });
  }

  return NextResponse.json({ status: "ok" });
}

async function handlePaymentFailed(payload: Record<string, unknown>) {
  const data          = payload.data as Record<string, unknown>;
  const whopPaymentId = data.id as string;
  const metadata      = (data.metadata ?? {}) as Record<string, string>;
  console.warn("Whop payment.failed:", {
    whopPaymentId,
    wcOrderId: metadata.wc_order_id,
  });
  // WC order stays in "pending" and will be cancelled by WC's cleanup cron
  return NextResponse.json({ status: "ok" });
}
