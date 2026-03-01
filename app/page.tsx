const featuredBundles = [
  {
    name: "Wedding Planner Client OS",
    price: "$229",
    description:
      "Contracts, timeline boards, client onboarding, vendor handoff sheets, and reusable planning workflows.",
    includes: "26 editable files",
  },
  {
    name: "Wedding Photographer Delivery Stack",
    price: "$189",
    description:
      "Inquiry scripts, booking kit, shot-list templates, gallery delivery email flows, and album upsell documents.",
    includes: "21 editable files",
  },
  {
    name: "Venue Marketing Kit",
    price: "$149",
    description:
      "Tour scripts, package one-pagers, social content calendars, and offer positioning docs for venue teams.",
    includes: "17 editable files",
  },
];

const productGrid = [
  { name: "Client Discovery Questionnaire", type: "Google Docs", price: "$9" },
  { name: "Wedding Budget Tracker", type: "Google Sheets", price: "$12" },
  { name: "Vendor Outreach Email Scripts", type: "Docs + PDF", price: "$15" },
  { name: "Proposal Cover Sheet Set", type: "Canva", price: "$19" },
  { name: "Booking Call Script Pack", type: "Notion + Docs", price: "$19" },
  { name: "Wedding Weekend Timeline Builder", type: "Sheets + Notion", price: "$29" },
  { name: "Planner Onboarding Kit", type: "Docs + PDF", price: "$39" },
  { name: "Photographer Prep Checklist Vault", type: "Notion", price: "$39" },
  { name: "Venue Tour Conversion Kit", type: "Canva + Docs", price: "$49" },
  { name: "Social Promo Calendar (12-Month)", type: "Canva + Sheets", price: "$59" },
  { name: "Contract Clause Library", type: "Docs", price: "$69" },
  { name: "Wedding Pro Launch Bundle", type: "Mixed format", price: "$99" },
];

const faqs = [
  {
    question: "Is this subscription-based?",
    answer:
      "No. Every product is a one-time payment with instant access and lifetime usage rights for your own client work.",
  },
  {
    question: "Can buyers edit everything themselves?",
    answer:
      "Yes. Every asset ships in editable formats (Canva, Google Docs/Sheets, Notion, or PDF) and includes a quick-start guide.",
  },
  {
    question: "Why buy this instead of prompting ChatGPT?",
    answer:
      "These are production-ready operating systems with polished layouts, sequencing, and workflow dependencies already solved. Buyers save hours of setup and testing.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-shell topbar">
        <div className="brand-mark">
          <span className="brand-symbol">VV</span>
          <span>Velvet Vow Systems</span>
        </div>
        <nav className="top-nav">
          <a href="#catalog">Catalog</a>
          <a href="#bundles">Bundles</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="site-shell hero">
        <p className="eyebrow">One-time payment digital products for wedding pros</p>
        <h1>
          A template store built for planners, photographers, and venues that
          need systems now.
        </h1>
        <p className="hero-copy">
          Sell-ready kits designed for real client workflows. Every download is
          editable, premium-looking, and priced in the sweet spot of $5-$250.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#catalog">
            Browse Products
          </a>
          <a className="btn btn-ghost" href="#bundles">
            View Best-Sellers
          </a>
        </div>
      </section>

      <section className="site-shell metrics">
        <article>
          <h2>$5-$250</h2>
          <p>Price architecture engineered for high conversion and upsells.</p>
        </article>
        <article>
          <h2>100% One-Time</h2>
          <p>No recurring plans, no subscriptions, no hidden access fees.</p>
        </article>
        <article>
          <h2>AI-Resistant Value</h2>
          <p>Workflow sequencing + polished design + implementation guides.</p>
        </article>
      </section>

      <section className="site-shell section" id="bundles">
        <div className="section-head">
          <p className="eyebrow">Best-selling bundles</p>
          <h3>High-AOV packs that still fit your one-time model</h3>
        </div>
        <div className="bundle-grid">
          {featuredBundles.map((bundle) => (
            <article key={bundle.name} className="bundle-card">
              <div className="bundle-top">
                <p className="bundle-price">{bundle.price}</p>
                <span>{bundle.includes}</span>
              </div>
              <h4>{bundle.name}</h4>
              <p>{bundle.description}</p>
              <button type="button" className="btn btn-primary">
                Add to cart
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section" id="catalog">
        <div className="section-head">
          <p className="eyebrow">Template catalog</p>
          <h3>Entry products to premium kits</h3>
        </div>
        <div className="product-grid">
          {productGrid.map((product) => (
            <article key={product.name} className="product-card">
              <div>
                <h4>{product.name}</h4>
                <p>{product.type}</p>
              </div>
              <strong>{product.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section rationale">
        <div className="section-head">
          <p className="eyebrow">Why this niche works</p>
          <h3>Demand is practical, not trend-dependent</h3>
        </div>
        <ul>
          <li>Wedding pros repeatedly buy assets that save execution time per client.</li>
          <li>Buyers pay for polish and structure, not just generic text output.</li>
          <li>Bundled workflows increase average order value while staying under $250.</li>
        </ul>
      </section>

      <section className="site-shell section faq" id="faq">
        <div className="section-head">
          <p className="eyebrow">Frequently asked questions</p>
          <h3>Simple model, clear expectations</h3>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article key={item.question} className="faq-card">
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell cta">
        <h3>Launch with a catalog that can realistically target $500/day.</h3>
        <p>
          Start with 12-20 products, push bundles, and keep every offer
          one-time. This storefront is now built for that model.
        </p>
        <a className="btn btn-primary" href="#catalog">
          Start with the catalog
        </a>
      </section>
    </main>
  );
}
