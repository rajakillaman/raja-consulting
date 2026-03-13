import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/app/_components/site-chrome";
import { getProductBySlug } from "@/app/_data/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  title: "Purchase confirmed",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string; status?: string }>;
}) {
  const { slug, status } = await searchParams;
  const product = slug ? getProductBySlug(slug) : null;
  const cancelled = status === "cancelled";

  return (
    <main>
      <SiteHeader />
      <div className="shell" style={{ paddingTop: "80px", paddingBottom: "80px", maxWidth: "600px" }}>
        {cancelled ? (
          <>
            <p className="eyebrow">Checkout cancelled</p>
            <h1 className="article-title" style={{ marginBottom: "16px" }}>
              No problem — your order was not charged
            </h1>
            <p style={{ color: "var(--c-text-muted)", marginBottom: "32px", lineHeight: "1.7" }}>
              You can return to the product page and try again whenever you&apos;re ready.
            </p>
            {product && (
              <Link href={`/products/${product.slug}`} className="btn btn-primary" style={{ display: "inline-block", marginBottom: "12px" }}>
                Back to {product.name}
              </Link>
            )}
            <br />
            <Link href="/catalog" className="btn btn-secondary" style={{ display: "inline-block" }}>
              Browse catalog
            </Link>
          </>
        ) : (
          <>
            <p className="eyebrow">Purchase confirmed</p>
            <h1 className="article-title" style={{ marginBottom: "16px" }}>
              Thank you for your purchase
            </h1>
            <p style={{ color: "var(--c-text-muted)", marginBottom: "32px", lineHeight: "1.7" }}>
              {product ? (
                <>
                  Your order for <strong>{product.name}</strong> has been received.
                  We&apos;ll be in touch shortly with everything you need to get started.
                </>
              ) : (
                <>Your order has been received. We&apos;ll be in touch shortly.</>
              )}
            </p>
            <a
              href="mailto:revolveevents@protonmail.com"
              className="btn btn-secondary"
              style={{ display: "inline-block", marginBottom: "12px" }}
            >
              Contact us
            </a>
            <br />
            <Link href="/catalog" className="btn btn-secondary" style={{ display: "inline-block" }}>
              Browse catalog
            </Link>
          </>
        )}
      </div>
      <SiteFooter />
    </main>
  );
}
