import { PageFrame } from "@/app/_components/page-frame";

export default function PrivacyPolicyPage() {
  return (
    <PageFrame
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="Effective date: March 2, 2026"
    >
      <article className="legal-doc">
        <h2>1. Information we collect</h2>
        <p>
          We may collect contact details, transaction metadata, and product
          access activity when customers interact with Velvet Vow Systems.
        </p>

        <h2>2. How we use information</h2>
        <p>
          Information is used to fulfill purchases, deliver digital products,
          provide support, maintain account-level order history, and prevent
          fraud or abuse of licensed assets.
        </p>

        <h2>3. Payments</h2>
        <p>
          Payments are processed by third-party payment providers. We do not
          store full payment card numbers on our systems.
        </p>

        <h2>4. Data sharing</h2>
        <p>
          We do not sell customer personal data. Data may be shared with
          service providers required to run storefront, analytics, payments,
          and email delivery.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We retain records as needed for support, tax, legal compliance, and
          order verification, unless deletion is required by applicable law.
        </p>

        <h2>6. Your rights</h2>
        <p>
          Depending on location, you may request access, correction, or
          deletion of personal data by contacting support.
        </p>

        <h2>7. Contact</h2>
        <p>
          For privacy requests, contact{" "}
          <a href="mailto:revolveevents@protonmail.com">
            revolveevents@protonmail.com
          </a>
          .
        </p>
      </article>
    </PageFrame>
  );
}
