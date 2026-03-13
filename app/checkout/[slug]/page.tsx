import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/app/_data/products";
import { createCheckoutNonce } from "@/lib/product-download";

// Force dynamic — checkout must not be statically cached
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return products
    .filter((p) => p.whopPlanId !== null || p.downloadFile !== null)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata() {
  return { robots: "noindex, nofollow" };
}

export default async function ProductCheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  let purchaseUrl: string;

  // ── Variation B: self-hosted download ────────────────────────────────────
  // No pre-created Whop product needed. A dynamic checkout config is created
  // on-the-fly. After payment, Whop sends the user back to /api/download/grant
  // where we verify and issue a time-limited download token.
  if (product.downloadFile) {
    const nonce = createCheckoutNonce(slug);
    const redirectUrl =
      `https://revolveevents.com/api/download/grant` +
      `?slug=${encodeURIComponent(slug)}&nonce=${encodeURIComponent(nonce)}`;

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
          source: "direct_download",
        },
      }),
    });

    if (!whopRes.ok) {
      const err = await whopRes.text();
      console.error("Whop checkout creation failed:", whopRes.status, err);
      // Redirect back to product page with an error flag
      return (
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <title>Checkout error</title>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.location.replace(${JSON.stringify(`/products/${slug}?checkout=error`)});`,
              }}
            />
          </head>
          <body style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
            <p>Unable to reach checkout. Redirecting back…</p>
          </body>
        </html>
      );
    }

    const config = await whopRes.json();
    purchaseUrl = config.purchase_url as string;
  }

  // ── Variation A: Whop-hosted plan ────────────────────────────────────────
  // Pre-created plan in Whop dashboard. Whop handles file delivery natively.
  else if (product.whopPlanId) {
    purchaseUrl = `https://whop.com/checkout/${product.whopPlanId}/`;
  }

  // No checkout method configured
  else {
    notFound();
  }

  // Referrer-stripping redirect — same privacy pattern as /checkout/whop.
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="referrer" content="no-referrer" />
        <title>Redirecting to checkout…</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(purchaseUrl)});`,
          }}
        />
      </head>
      <body style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
        <p>Redirecting to secure checkout…</p>
        <noscript>
          <a href={purchaseUrl}>Click here if you are not redirected automatically.</a>
        </noscript>
      </body>
    </html>
  );
}
