import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/app/_components/site-chrome";
import { blogPosts } from "@/app/_data/blog-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <article className="shell article">
        <Link href="/blog" className="article-back">
          ← Back to blog
        </Link>
        <p className="eyebrow">{post.category}</p>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-meta">
          <span>{post.publishedAt}</span>
          <span>{post.readTime}</span>
        </p>
        <Image
          className="article-image"
          src={post.coverImage}
          alt={post.coverAlt}
          width={1400}
          height={900}
          priority
        />
        <p className="article-excerpt">{post.excerpt}</p>

        <div className="article-sections">
          {post.sections.map((section) => (
            <section key={section.heading} className="article-section-card">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <aside className="article-callout">
          <h3>Want plug-and-play versions of these systems?</h3>
          <p>
            Browse our one-time purchase packs for planners, photographers, and
            venues, then customize for your own process.
          </p>
          <div className="article-callout-actions">
            <Link href="/packs" className="btn btn-primary">
              View packs
            </Link>
            <Link href="/catalog" className="btn btn-secondary">
              Browse catalog
            </Link>
          </div>
        </aside>
      </article>
      <SiteFooter />
    </main>
  );
}
