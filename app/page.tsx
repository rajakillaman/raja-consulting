const featuredPacks = [
  {
    name: "Planner Business Suite",
    price: "$229",
    details: "26 assets · Canva + Docs + Sheets",
    description:
      "Client onboarding, timeline frameworks, vendor coordination tools, and polished proposal documents.",
  },
  {
    name: "Photographer Workflow Vault",
    price: "$189",
    details: "21 assets · Notion + Docs + Canva",
    description:
      "Inquiry handling, booking flows, shot-list systems, gallery delivery sequences, and upsell scripts.",
  },
  {
    name: "Venue Sales Toolkit",
    price: "$149",
    details: "17 assets · Canva + Docs",
    description:
      "Tour conversion scripts, package one-pagers, and monthly promotion planning templates for venue teams.",
  },
];

const quickProducts = [
  { name: "Client Discovery Questionnaire", format: "Google Docs", price: "$9" },
  { name: "Wedding Budget Tracker", format: "Google Sheets", price: "$12" },
  { name: "Booking Call Script Pack", format: "Notion + Docs", price: "$19" },
  { name: "Planner Onboarding Kit", format: "Docs + PDF", price: "$39" },
  { name: "Venue Tour Conversion Kit", format: "Canva + Docs", price: "$49" },
  { name: "Contract Clause Library", format: "Google Docs", price: "$69" },
];

const productSpotlights = [
  {
    title: "Planner Business Suite",
    audience: "For wedding planners",
    price: "$229",
    cta: "Buy Planner Suite",
    points: [
      "Client onboarding scripts and intake packets",
      "Wedding-day timeline framework templates",
      "Vendor communication and handoff systems",
      "Proposal and pricing presentation pages",
    ],
  },
  {
    title: "Photographer Workflow Vault",
    audience: "For wedding photographers",
    price: "$189",
    cta: "Buy Photographer Vault",
    points: [
      "Inquiry response and booking sequence docs",
      "Shoot prep checklists and shot-list templates",
      "Gallery delivery and album upsell email flows",
      "Post-event referral and review templates",
    ],
  },
  {
    title: "Venue Sales Toolkit",
    audience: "For wedding venues",
    price: "$149",
    cta: "Buy Venue Toolkit",
    points: [
      "Tour script and objection handling sheets",
      "Package one-pagers and pricing table templates",
      "Offer positioning and promo campaign planners",
      "Lead follow-up and conversion sequence docs",
    ],
  },
];

function Icon({ name }: { name: "price" | "bolt" | "layers" | "check" }) {
  if (name === "price") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M4 7h10l6 6-7 7-9-9z" />
        <circle cx="9.2" cy="9.2" r="1.2" />
      </svg>
    );
  }

  if (name === "bolt") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M13 2 5 13h6l-1 9 9-13h-6z" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="shell topbar">
        <div className="brand-mark" aria-label="Velvet Vow Systems">
          <span className="brand-symbol" aria-hidden>
            <svg viewBox="0 0 36 36">
              <path d="M9 11c2.2 0 3.8 1.6 5.1 4.4 1.2-2.8 2.8-4.4 5.1-4.4 3.2 0 5.5 2.4 5.5 5.8 0 5.3-5.1 8.7-10.6 12.5C8.7 25.5 3.6 22.1 3.6 16.8 3.6 13.4 5.9 11 9 11Z" />
              <path d="m14 14 4 10 4-10" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>Velvet Vow Systems</strong>
            <small>Wedding Business Template Atelier</small>
          </span>
        </div>
        <nav className="top-nav">
          <a href="#packs">Packs</a>
          <a href="#catalog">Catalog</a>
          <a href="#detail">Product Detail</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="shell hero">
        <p className="eyebrow">One-time payment digital products for wedding pros</p>
        <h1>
          A cleaner way for wedding pros to run client work with confidence.
        </h1>
        <p className="hero-copy">
          Premium templates for planners, photographers, and venues. Every asset
          is editable, practical, and sold as a one-time purchase between $5 and $250.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#catalog">
            Browse Catalog
          </a>
          <a className="btn btn-secondary" href="#packs">
            View Best Sellers
          </a>
        </div>
      </section>

      <section className="shell trust-strip">
        <article>
          <span className="icon-chip">
            <Icon name="price" />
          </span>
          <h2>$5-$250</h2>
          <p>Clear one-time pricing across all products.</p>
        </article>
        <article>
          <span className="icon-chip">
            <Icon name="bolt" />
          </span>
          <h2>100% one-time</h2>
          <p>No subscriptions, no recurring billing.</p>
        </article>
        <article>
          <span className="icon-chip">
            <Icon name="layers" />
          </span>
          <h2>Built for real workflows</h2>
          <p>Sequenced systems, not just text outputs.</p>
        </article>
      </section>

      <section className="shell section" id="packs">
        <div className="section-head">
          <p className="eyebrow">Best-selling packs</p>
          <h3>Complete systems for each wedding business role</h3>
        </div>
        <div className="pack-grid">
          {featuredPacks.map((pack) => (
            <article key={pack.name} className="pack-card">
              <div className="pack-top">
                <h4>{pack.name}</h4>
                <p className="pack-price">{pack.price}</p>
              </div>
              <p className="pack-details">{pack.details}</p>
              <p>{pack.description}</p>
              <button type="button" className="btn btn-primary block">
                Add to cart
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section" id="catalog">
        <div className="section-head">
          <p className="eyebrow">Starter catalog</p>
          <h3>Fast wins from low-ticket to premium</h3>
        </div>
        <div className="catalog-table-wrap">
          <table className="catalog-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Format</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {quickProducts.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.format}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="shell section detail" id="detail">
        <div className="section-head">
          <p className="eyebrow">Product detail pattern</p>
          <h3>Checkout-focused layouts for higher conversion intent</h3>
        </div>
        <div className="detail-grid">
          {productSpotlights.map((spotlight) => (
            <article key={spotlight.title} className="detail-card">
              <p className="detail-audience">{spotlight.audience}</p>
              <div className="detail-top">
                <h4>{spotlight.title}</h4>
                <p className="detail-price">{spotlight.price}</p>
              </div>
              <ul>
                {spotlight.points.map((point) => (
                  <li key={point}>
                    <span className="mini-icon">
                      <Icon name="check" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="btn btn-primary block">
                {spotlight.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section split">
        <div className="section-head">
          <p className="eyebrow">Why buyers convert</p>
          <h3>Practical value they can use with clients this week</h3>
        </div>
        <div className="points">
          <p>Templates save setup time for each new client and reduce process errors.</p>
          <p>Visual polish plus workflow sequencing makes these hard to replace with raw AI output.</p>
          <p>Bundled packs increase average order value while still fitting your $5-$250 pricing model.</p>
        </div>
      </section>

      <section className="shell section" id="faq">
        <div className="section-head">
          <p className="eyebrow">Frequently asked questions</p>
          <h3>Simple and transparent purchasing</h3>
        </div>
        <div className="faq-list">
          <article>
            <h4>Is this subscription-based?</h4>
            <p>No. Every product is a one-time payment with instant download access.</p>
          </article>
          <article>
            <h4>Can buyers edit everything?</h4>
            <p>Yes. Assets are delivered in editable formats (Canva, Docs, Sheets, Notion, or PDF).</p>
          </article>
          <article>
            <h4>Why buy these if AI exists?</h4>
            <p>These are complete systems with design quality, structure, and implementation flow already done.</p>
          </article>
        </div>
      </section>

      <section className="shell cta">
        <h3>Built for a clean storefront that can scale toward $500/day sales.</h3>
        <p>
          Expand from this foundation with 12-20 products, 3-5 premium packs,
          and one-time-only checkout paths.
        </p>
        <a className="btn btn-primary" href="#catalog">
          Explore catalog
        </a>
      </section>
    </main>
  );
}
