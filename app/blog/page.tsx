import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/app/_components/site-chrome";
import { blogPosts } from "@/app/_data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tactical articles for wedding planners, photographers, and venue teams focused on sales and operations.",
  openGraph: {
    title: "Velvet Vow Systems Blog",
    description:
      "Tactical articles for wedding professionals focused on sales and operations.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      <SiteHeader />
      <section className="shell page-hero">
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">Actionable growth notes for wedding pros</h1>
        <p className="page-intro">
          Practical breakdowns on sales systems, client experience, and workflow
          documents that turn into better bookings.
        </p>
      </section>

      <section className="shell page-content">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} className="blog-image-link">
                <Image
                  className="blog-image"
                  src={post.coverImage}
                  alt={post.coverAlt}
                  width={1400}
                  height={840}
                  loading="lazy"
                />
              </Link>
              <div className="blog-body">
                <p className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.publishedAt}</span>
                  <span>{post.readTime}</span>
                </p>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn btn-secondary">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
