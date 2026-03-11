import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual, signOrderId, createCheckoutToken } from "@/lib/whop-helpers";

export async function POST(req: NextRequest) {
  // 1. Verify internal secret (constant-time)
  const secret = req.headers.get("x-internal-secret") ?? "";
  if (!timingSafeEqual(secret, process.env.LH_INTERNAL_SECRET!)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // 2. Parse and validate body
  let body: { wc_order_id?: number; total_usd?: number; items?: unknown[]; customer_email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { wc_order_id, total_usd, customer_email } = body;
  if (!wc_order_id || !total_usd || total_usd <= 0) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  // 3. Build signed result URL (revolveevents.com only — Whop never sees leakifyhub.com)
  const sig = signOrderId(wc_order_id);
  const resultUrl = `https://revolveevents.com/api/whop/result?oid=${wc_order_id}&sig=${sig}`;

  // 4. Create inline Whop checkout config
  //    CRITICAL: source_url intentionally omitted — would reveal originating site to Whop
  const whopRes = await fetch("https://api.whop.com/api/v1/checkout_configurations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.WHOP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      plan: {
        company_id: process.env.WHOP_COMPANY_ID,
        currency: "usd",
        plan_type: "one_time",
        initial_price: total_usd,
        visibility: "quick_link",
      },
      redirect_url: resultUrl,
      metadata: {
        wc_order_id: String(wc_order_id),
        site: "lh",
      },
      // source_url: NOT SET
    }),
  });

  if (!whopRes.ok) {
    const err = await whopRes.text();
    console.error("Whop API error:", whopRes.status, err);
    return NextResponse.json({ error: "Payment processor error" }, { status: 502 });
  }

  const config = await whopRes.json();
  // Whop returns purchase_url as a full URL
  const purchaseUrl = config.purchase_url as string;

  // Extract plan_id from purchase_url (e.g. https://whop.com/checkout/plan_xxx/)
  const planIdMatch = purchaseUrl.match(/\/checkout\/(plan_[^/?#]+)/);
  if (!planIdMatch) {
    console.error("Whop: could not extract plan_id from purchase_url:", purchaseUrl);
    return NextResponse.json({ error: "Payment processor error" }, { status: 502 });
  }
  const planId = planIdMatch[1];

  // 5. Create stateless signed token (embeds purchase_url + plan_id + email — no database needed)
  const token = createCheckoutToken(wc_order_id, purchaseUrl, planId, customer_email ?? "");

  // CRITICAL: Return revolveevents.com checkout URL, NOT the whop.com URL directly.
  // The browser must pass through our referrer-stripping page first so Whop sees
  // Referer: revolveevents.com rather than leakifyhub.com.
  return NextResponse.json({
    checkout_url: `https://revolveevents.com/checkout/whop?token=${token}`,
  });
}
