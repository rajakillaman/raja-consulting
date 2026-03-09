import { NextRequest, NextResponse } from "next/server";
import { verifyOrderSig } from "@/lib/whop-helpers";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const oid    = searchParams.get("oid") ?? "";
  const sig    = searchParams.get("sig") ?? "";
  // Whop appends ?status=success or ?status=error to the redirect_url
  const status = searchParams.get("status") ?? "error";

  // Verify the signed order ID to prevent redirect manipulation
  if (!oid || !verifyOrderSig(oid, sig)) {
    return new NextResponse("Invalid payment reference.", { status: 400 });
  }

  const noReferrer = new Headers({ "Referrer-Policy": "no-referrer" });

  if (status === "success") {
    // Send customer to WooCommerce order-received page.
    // Note: WC normally expects ?key=wc_order_key but will still show the page
    // for logged-in customers. Guests see a generic confirmation — acceptable.
    const url = `${process.env.LH_SUCCESS_URL_BASE}/${oid}/`;
    return NextResponse.redirect(url, { headers: noReferrer });
  }

  // status === "error" covers both cancellation and failed payment
  return NextResponse.redirect(process.env.LH_CANCEL_URL!, { headers: noReferrer });
}
