import type { Metadata } from "next";
import { PageFrame } from "@/app/_components/page-frame";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Understand license rights, usage limits, and purchase terms for Velvet Vow Systems.",
};

export default function TermsOfServicePage() {
  return (
    <PageFrame
      eyebrow="Terms of Service"
      title="Terms of Service"
      intro="Effective date: March 2, 2026"
    >
      <article className="legal-doc">
        <h2>1. Agreement</h2>
        <p>
          By purchasing or using products from Velvet Vow Systems, you agree to
          these Terms of Service and all referenced policies.
        </p>

        <h2>2. License grant</h2>
        <p>
          Purchases grant a non-exclusive, non-transferable license to use
          assets for your own business/client operations. Ownership of source
          assets remains with Velvet Vow Systems unless explicitly stated.
        </p>

        <h2>3. Prohibited uses</h2>
        <ul>
          <li>Reselling templates as standalone files.</li>
          <li>Sharing original files publicly or with unauthorized parties.</li>
          <li>Claiming ownership of template source files.</li>
        </ul>

        <h2>4. Payments and taxes</h2>
        <p>
          Prices are listed in USD unless otherwise noted. You are responsible
          for any taxes, duties, or processing fees applied by payment providers.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          Products are provided on an as-is basis without guarantees of specific
          commercial outcomes or revenue performance.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Velvet Vow Systems is not
          liable for indirect, incidental, special, or consequential damages.
        </p>

        <h2>7. Changes to terms</h2>
        <p>
          We may update terms as needed. Continued use after updates indicates
          acceptance of the revised terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href="mailto:revolveevents@protonmail.com">
            revolveevents@protonmail.com
          </a>
          .
        </p>
      </article>
    </PageFrame>
  );
}
