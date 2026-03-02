import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/app/_components/site-chrome";
import { TrackedLinkButton } from "@/app/_components/tracked-link-button";
import { ViewTracker } from "@/app/_components/view-tracker";
import { getProductBySlug, products } from "@/app/_data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.name} ${product.priceLabel}`,
    description: product.summary,
    openGraph: {
      title: `${product.name} ${product.priceLabel}`,
      description: product.summary,
      images: [product.heroImage],
      type: "article",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <ViewTracker
        eventName="view_product"
        payload={{
          product_slug: product.slug,
          product_name: product.name,
          price_value: product.priceValue,
        }}
      />
      <article className="shell product-page">
        <Link href="/catalog" className="article-back">
          ← Back to catalog
        </Link>

        <div className="product-hero-grid">
          <div>
            <p className="eyebrow">
              {product.category} · {product.audience}
            </p>
            <h1 className="article-title">{product.name}</h1>
            <p className="product-summary">{product.summary}</p>
            <div className="product-facts">
              <span>Price: {product.priceLabel}</span>
              <span>Format: {product.format}</span>
              <span>License: Single business usage</span>
            </div>
            <div className="product-actions">
              <TrackedLinkButton
                href={`/checkout/${product.slug}`}
                className="btn btn-primary"
                eventName="click_buy_now"
                eventPayload={{
                  product_slug: product.slug,
                  product_name: product.name,
                  price_value: product.priceValue,
                }}
              >
                Buy now
              </TrackedLinkButton>
              <Link href="/legal/refund-policy" className="btn btn-secondary">
                Refund policy
              </Link>
            </div>
          </div>

          <Image
            className="product-image"
            src={product.heroImage}
            alt={product.heroAlt}
            width={1400}
            height={900}
            priority
          />
        </div>

        <section className="product-section-grid">
          <section className="content-card">
            <h2>What&apos;s included</h2>
            <ul className="feature-list">
              {product.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="content-card">
            <h2>Why this product works</h2>
            <ul className="feature-list">
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </section>

        <aside className="commerce-note">
          <p>
            By purchasing, you agree to the{" "}
            <Link href="/legal/terms-of-service">Terms of Service</Link> and{" "}
            <Link href="/legal/refund-policy">Refund Policy</Link>.
          </p>
        </aside>
      </article>
      <SiteFooter />
    </main>
  );
}
