import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/app/_components/page-frame";

const legalPages = [
  {
    title: "Privacy Policy",
    href: "/legal/privacy-policy",
    summary: "How customer and visitor data is collected, used, and protected.",
  },
  {
    title: "Refund Policy",
    href: "/legal/refund-policy",
    summary: "Rules and limitations for refund requests on digital products.",
  },
  {
    title: "Terms of Service",
    href: "/legal/terms-of-service",
    summary: "License terms, usage boundaries, and service obligations.",
  },
];

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Access privacy policy, refund policy, and terms of service for Velvet Vow Systems.",
};

export default function LegalIndexPage() {
  return (
    <PageFrame
      eyebrow="Legal"
      title="Legal and policy documents"
      intro="Review the full policy set before purchase or distribution of any digital product."
    >
      <div className="simple-grid">
        {legalPages.map((item) => (
          <Link key={item.href} href={item.href} className="content-card legal-link">
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </Link>
        ))}
      </div>
    </PageFrame>
  );
}
