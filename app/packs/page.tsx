import { PageFrame } from "@/app/_components/page-frame";

const packs = [
  {
    title: "Planner Business Suite",
    price: "$229",
    details: "26 assets · Canva + Docs + Sheets",
    bullets: [
      "Client intake templates and kickoff scripts",
      "Timeline planning and wedding-weekend run sheets",
      "Vendor communication packet system",
      "Proposal and pricing presentation templates",
    ],
  },
  {
    title: "Photographer Workflow Vault",
    price: "$189",
    details: "21 assets · Notion + Docs + Canva",
    bullets: [
      "Inquiry response and booking sequence docs",
      "Shoot prep and delivery checklists",
      "Gallery handoff and upsell email templates",
      "Referral + review post-event scripts",
    ],
  },
  {
    title: "Venue Sales Toolkit",
    price: "$149",
    details: "17 assets · Canva + Docs",
    bullets: [
      "Venue tour script and objection handling",
      "Package one-pager and pricing templates",
      "Seasonal campaign planner templates",
      "Lead follow-up conversion sequence assets",
    ],
  },
];

export default function PacksPage() {
  return (
    <PageFrame
      eyebrow="Packs"
      title="Role-specific systems designed for conversion"
      intro="These high-value bundles are built to save operational time while preserving a one-time payment model."
    >
      <div className="detail-grid">
        {packs.map((pack) => (
          <article key={pack.title} className="detail-card">
            <p className="detail-audience">{pack.details}</p>
            <div className="detail-top">
              <h4>{pack.title}</h4>
              <p className="detail-price">{pack.price}</p>
            </div>
            <ul>
              {pack.bullets.map((bullet) => (
                <li key={bullet}>
                    <span className="mini-icon" aria-hidden>
                      •
                    </span>
                    <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-primary block">
              Buy now
            </button>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
