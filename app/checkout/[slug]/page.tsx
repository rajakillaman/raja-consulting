import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/app/_components/site-chrome";
import { TrackedLinkButton } from "@/app/_components/tracked-link-button";
import { ViewTracker } from "@/app/_components/view-tracker";
import {
  getCheckoutUrlForProduct,
  getProductBySlug,
  products,
} from "@/app/_data/products";

type CheckoutPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: CheckoutPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product ? `Checkout · ${product.name}` : "Checkout",
    description: product
      ? `Secure checkout for ${product.name} (${product.priceLabel}).`
      : "Secure checkout page.",
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const checkoutUrl = getCheckoutUrlForProduct(product);
  const hasExternalCheckout = checkoutUrl.startsWith("http");

  return (
    <main>
      <SiteHeader />
      <ViewTracker
        eventName="reach_checkout"
        payload={{
          product_slug: product.slug,
          product_name: product.name,
          price_value: product.priceValue,
        }}
      />
      <section className="shell page-hero">
        <p className="eyebrow">Checkout</p>
        <h1 className="page-title">Complete your purchase</h1>
        <p className="page-intro">
          You&apos;re purchasing <strong>{product.name}</strong> for{" "}
          <strong>{product.priceLabel}</strong>.
        </p>
      </section>

      <section className="shell page-content">
        <article className="checkout-card">
          <h2>Order summary</h2>
          <p>
            Product: <strong>{product.name}</strong>
          </p>
          <p>
            Category: <strong>{product.category}</strong>
          </p>
          <p>
            Format: <strong>{product.format}</strong>
          </p>
          <p>
            Total: <strong>{product.priceLabel}</strong>
          </p>

          <div className="checkout-actions">
            <TrackedLinkButton
              href={checkoutUrl}
              className="btn btn-primary"
              eventName="click_checkout"
              eventPayload={{
                product_slug: product.slug,
                product_name: product.name,
                checkout_type: hasExternalCheckout ? "external" : "manual",
              }}
            >
              {hasExternalCheckout
                ? "Continue to secure checkout"
                : "Request checkout link"}
            </TrackedLinkButton>
            <Link href={`/products/${product.slug}`} className="btn btn-secondary">
              Back to product
            </Link>
          </div>

          <p className="checkout-note">
            By proceeding, you agree to our{" "}
            <Link href="/legal/terms-of-service">Terms of Service</Link> and{" "}
            <Link href="/legal/refund-policy">Refund Policy</Link>.
          </p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
