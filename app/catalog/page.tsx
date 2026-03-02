import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/app/_components/page-frame";
import { products } from "@/app/_data/products";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse one-time purchase templates and packs for wedding planners, photographers, and venues.",
};

export default function CatalogPage() {
  return (
    <PageFrame
      eyebrow="Catalog"
      title="Every one-time template product in one place"
      intro="Build your own stack from low-ticket quick wins to full workflow bundles."
    >
      <article className="content-card">
        <h2>Template catalog</h2>
        <div className="catalog-table-wrap">
          <table className="catalog-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Format</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.slug}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.format}</td>
                  <td>{product.priceLabel}</td>
                  <td>
                    <Link href={`/products/${product.slug}`} className="table-link">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </PageFrame>
  );
}
