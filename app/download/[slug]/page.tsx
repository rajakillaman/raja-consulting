import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/app/_components/site-chrome";
import { verifyDownloadToken } from "@/lib/product-download";
import { getProductBySlug } from "@/app/_data/products";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return { robots: "noindex, nofollow", title: "Your download is ready" };
}

export default async function DownloadPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { slug } = await params;
  const { token } = await searchParams;

  const product = getProductBySlug(slug);
  if (!product?.downloadFile) notFound();

  const payload = token ? verifyDownloadToken(token) : null;
  const isValid = payload?.slug === slug;

  const downloadHref = isValid
    ? `/api/download/file/${encodeURIComponent(slug)}?token=${encodeURIComponent(token!)}`
    : null;

  return (
    <main>
      <SiteHeader />
      <div className="shell" style={{ paddingTop: "80px", paddingBottom: "80px", maxWidth: "600px" }}>
        {isValid ? (
          <>
            <p className="eyebrow">Purchase confirmed</p>
            <h1 className="article-title" style={{ marginBottom: "16px" }}>
              Your download is ready
            </h1>
            <p style={{ color: "var(--c-text-muted)", marginBottom: "32px", lineHeight: "1.7" }}>
              Thank you for purchasing <strong>{product.name}</strong>. Click the button below
              to download your file. This link is valid for 2 hours — save the file to your
              device before it expires.
            </p>
            <a
              href={downloadHref!}
              className="btn btn-primary"
              style={{ display: "inline-block" }}
            >
              Download {product.name}
            </a>
            <p style={{ marginTop: "24px", fontSize: "13px", color: "var(--c-text-muted)" }}>
              Need help? Email us at{" "}
              <a href="mailto:revolveevents@protonmail.com">revolveevents@protonmail.com</a>
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow">Link expired or invalid</p>
            <h1 className="article-title" style={{ marginBottom: "16px" }}>
              This download link is no longer valid
            </h1>
            <p style={{ color: "var(--c-text-muted)", marginBottom: "32px", lineHeight: "1.7" }}>
              Download links expire after 2 hours. If you&apos;ve already purchased this product
              and need a new link, please reach out and we&apos;ll send one right away.
            </p>
            <a
              href="mailto:revolveevents@protonmail.com?subject=Download link request"
              className="btn btn-primary"
              style={{ display: "inline-block", marginBottom: "12px" }}
            >
              Request a new link
            </a>
            <br />
            <Link href="/catalog" className="btn btn-secondary" style={{ display: "inline-block" }}>
              Back to catalog
            </Link>
          </>
        )}
      </div>
      <SiteFooter />
    </main>
  );
}
