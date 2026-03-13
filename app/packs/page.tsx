import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/app/_components/page-frame";
import { featuredPackSlugs, products } from "@/app/_data/products";
import { TrackedLinkButton } from "@/app/_components/tracked-link-button";

const packs = products.filter((product) => featuredPackSlugs.includes(product.slug));

export const metadata: Metadata = {
  title: "Packs",
  description:
    "Role-specific premium packs for wedding planners, photographers, and venue teams.",
};

export default function PacksPage() {
  return (
    <PageFrame
      eyebrow="Packs"
      title="Role-specific systems designed for conversion"
      intro="From starter templates to complete systems, these one-time offers are built to save operational time and improve conversion."
    >
      <div className="detail-grid">
        {packs.map((pack) => (
          <article key={pack.slug} className="detail-card">
            <p className="detail-audience">{pack.format}</p>
            <div className="detail-top">
              <h4>{pack.name}</h4>
              <p className="detail-price">{pack.priceLabel}</p>
            </div>
            <ul>
              {pack.includes.map((bullet) => (
                <li key={bullet}>
                  <span className="mini-icon" aria-hidden>
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <TrackedLinkButton
              href={`/checkout/${pack.slug}`}
              className="btn btn-primary block"
              eventName="click_buy_from_pack_page"
              eventPayload={{
                product_slug: pack.slug,
                product_name: pack.name,
                price_value: pack.priceValue,
              }}
            >
              Buy now
            </TrackedLinkButton>
            <Link href={`/products/${pack.slug}`} className="btn btn-secondary block">
              View details
            </Link>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
