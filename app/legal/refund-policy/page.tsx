import type { Metadata } from "next";
import { PageFrame } from "@/app/_components/page-frame";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Review refund eligibility and request process for Velvet Vow Systems digital products.",
};

export default function RefundPolicyPage() {
  return (
    <PageFrame
      eyebrow="Refund Policy"
      title="Refund Policy"
      intro="Effective date: March 2, 2026"
    >
      <article className="legal-doc">
        <h2>1. Digital product policy</h2>
        <p>
          Due to the immediate-access nature of downloadable digital assets,
          all sales are generally final unless a product is proven defective or
          substantially not as described.
        </p>

        <h2>2. Eligible refund situations</h2>
        <ul>
          <li>Duplicate charge for the same order.</li>
          <li>Corrupt or inaccessible files that cannot be replaced.</li>
          <li>Material mismatch between listing description and delivered files.</li>
        </ul>

        <h2>3. Non-eligible situations</h2>
        <ul>
          <li>Change of mind after download.</li>
          <li>Lack of software familiarity (e.g. Canva, Notion, Google Docs).</li>
          <li>Requests made outside the refund request window.</li>
        </ul>

        <h2>4. Request window</h2>
        <p>
          Refund requests must be submitted within 7 calendar days of purchase
          and include order number, email used at checkout, and clear details.
        </p>

        <h2>5. Review process</h2>
        <p>
          Requests are reviewed case-by-case. If approved, refunds are issued
          to the original payment method.
        </p>

        <h2>6. Contact</h2>
        <p>
          Submit requests to{" "}
          <a href="mailto:revolveevents@protonmail.com">
            revolveevents@protonmail.com
          </a>
          .
        </p>
      </article>
    </PageFrame>
  );
}
