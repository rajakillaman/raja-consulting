import { notFound } from "next/navigation";
import { verifyCheckoutToken } from "@/lib/whop-helpers";
import WhopEmbed from "./WhopEmbed";

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

  // Referrer-Policy: no-referrer is enforced via next.config.ts headers for this route.
  // The user stays on revolveevents.com — Whop checkout renders inline via embed.
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="referrer" content="no-referrer" />
        <title>Secure Checkout</title>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <WhopEmbed planId={session.plan_id} email={session.customer_email} />
      </body>
    </html>
  );
}
