import { PageFrame } from "@/app/_components/page-frame";

export default function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title="Sales and support contact"
      intro="For pre-purchase questions, licensing clarifications, or bundle recommendations."
    >
      <div className="simple-grid">
        <article className="content-card">
          <h2>Email</h2>
          <p>
            <a href="mailto:revolveevents@protonmail.com">
              revolveevents@protonmail.com
            </a>
          </p>
          <p>Typical response time: within 1 business day.</p>
        </article>
        <article className="content-card">
          <h2>Sales questions</h2>
          <p>
            Need help choosing between individual products and full packs?
            Reach out with your business type and monthly client volume.
          </p>
        </article>
        <article className="content-card">
          <h2>Refund and policy requests</h2>
          <p>
            Policy requests are handled according to our published legal pages.
            Include your order number in every request.
          </p>
        </article>
      </div>
    </PageFrame>
  );
}
