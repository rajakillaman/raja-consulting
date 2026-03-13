import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/app/_data/products";
import { createCheckoutNonce } from "@/lib/product-download";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
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

  // Build the post-payment redirect URL.
  // Products with a downloadFile go to the download grant handler.
  // Everything else goes to a thank-you page.
  const nonce = createCheckoutNonce(slug);
  const redirectUrl = product.downloadFile
    ? `https://revolveevents.com/api/download/grant?slug=${encodeURIComponent(slug)}&nonce=${encodeURIComponent(nonce)}`
    : `https://revolveevents.com/thank-you?slug=${encodeURIComponent(slug)}`;

  // Create a dynamic Whop checkout for this product on every request.
  // No pre-created Whop product needed.
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
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>Checkout unavailable</title>
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

  const { purchase_url } = await whopRes.json();

  // Referrer-stripping redirect — browser sends Referer: revolveevents.com to Whop
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="referrer" content="no-referrer" />
        <title>Redirecting to checkout…</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(purchase_url)});`,
          }}
        />
      </head>
      <body style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
        <p>Redirecting to secure checkout…</p>
        <noscript>
          <a href={purchase_url}>Click here if you are not redirected automatically.</a>
        </noscript>
      </body>
    </html>
  );
}
