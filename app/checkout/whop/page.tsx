import { notFound } from "next/navigation";
import { verifyCheckoutToken } from "@/lib/whop-helpers";

// Force dynamic rendering — token must be verified at request time
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return { robots: "noindex, nofollow" };
}

export default async function WhopCheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  if (!token) notFound();

  // Verify signature and expiry — stateless, no database needed
  const session = verifyCheckoutToken(token);
  if (!session) notFound();

  const purchaseUrl = session.purchase_url;

  // Must return raw HTML — cannot use Next.js redirect() here.
  // A 307 redirect sends Referer: leakifyhub.com to whop.com.
  // This page sets <meta name="referrer" content="no-referrer"> so the
  // browser sends Referer: revolveevents.com when it lands on whop.com.
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* Critical privacy: strips leakifyhub.com referrer before whop.com sees it */}
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
