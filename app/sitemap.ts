import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/_data/blog-posts";
import { products } from "@/app/_data/products";

const base = "https://revolveevents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/catalog",
    "/contact",
    "/legal",
    "/legal/privacy-policy",
    "/legal/refund-policy",
    "/legal/terms-of-service",
    "/packs",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const productEntries = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticEntries, ...blogEntries, ...productEntries];
}
