import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/app/_data/products";
import { createCheckoutNonce } from "@/lib/product-download";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return NextResponse.redirect("https://revolveevents.com/catalog", { status: 302 });
  }

  // Products with a downloadFile redirect back here for secure delivery after payment.
  // Everything else goes to a simple thank-you page.
  const nonce = createCheckoutNonce(slug);
  const redirectUrl = product.downloadFile
    ? `https://revolveevents.com/api/download/grant?slug=${encodeURIComponent(slug)}&nonce=${encodeURIComponent(nonce)}`
    : `https://revolveevents.com/thank-you?slug=${encodeURIComponent(slug)}`;

  // Create a dynamic Whop checkout for this product — no pre-created Whop product needed.
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
        initial_price: product.priceValue,
        visibility: "quick_link",
      },
      redirect_url: redirectUrl,
      metadata: {
        slug: product.slug,
        product_name: product.name,
        source: "revolveevents",
      },
    }),
  });

  if (!whopRes.ok) {
    const err = await whopRes.text();
    console.error("Whop checkout creation failed:", whopRes.status, err);
    return NextResponse.redirect(
      `https://revolveevents.com/products/${slug}?checkout=error`,
      { status: 302 }
    );
  }

  const { purchase_url } = await whopRes.json();

  // Hard 302 redirect straight to Whop — no JavaScript, no intermediate page.
  const headers = new Headers({ "Referrer-Policy": "no-referrer" });
  return NextResponse.redirect(purchase_url, { status: 302, headers });
}
