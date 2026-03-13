import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/app/_data/products";

// Force dynamic — checkout must not be statically cached
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return products
    .filter((p) => p.whopPlanId !== null)
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

  // No Whop plan configured yet — product not available for purchase
  if (!product.whopPlanId) notFound();

  const purchaseUrl = `https://whop.com/checkout/${product.whopPlanId}/`;

  // Referrer-stripping redirect — same privacy pattern as /checkout/whop.
  // The browser sends Referer: revolveevents.com to Whop, not our domain.
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
