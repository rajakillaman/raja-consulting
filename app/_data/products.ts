export type StoreProduct = {
  slug: string;
  name: string;
  priceLabel: string;
  priceValue: number;
  category: "Pack" | "Template";
  audience: string;
  format: string;
  summary: string;
  includes: string[];
  highlights: string[];
  heroImage: string;
  heroAlt: string;
  /**
   * Variation A — Whop plan ID (pre-created product in Whop dashboard).
   * Set to e.g. "plan_xxxxxxxx" to enable. User lands on whop.com to download.
   */
  whopPlanId: string | null;
  /**
   * Variation B — filename inside _private/downloads/ (e.g. "pricing-sheet-starter.html").
   * When set, a dynamic Whop checkout is created on-the-fly and the file is served
   * by this site after payment — no pre-created Whop product needed.
   */
  downloadFile: string | null;
};

export const products: StoreProduct[] = [
  {
    slug: "planner-business-suite",
    name: "Planner Business Suite",
    priceLabel: "$229",
    priceValue: 229,
    category: "Pack",
    audience: "Wedding planners",
    format: "Canva + Docs + Sheets",
    summary:
      "Complete operating system for planners handling mid-to-high-ticket weddings.",
    includes: [
      "Client onboarding scripts and intake packet",
      "Wedding-day timeline framework templates",
      "Vendor communication and handoff system",
      "Proposal, pricing, and scope presentation pages",
      "Post-booking project tracker and internal checklist",
    ],
    highlights: [
      "Best for teams handling multiple weddings per month",
      "Designed to reduce admin time and improve client experience",
      "One-time purchase with editable source files",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Wedding planner desk with tablet, flowers and documents",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
  {
    slug: "photographer-workflow-vault",
    name: "Photographer Workflow Vault",
    priceLabel: "$189",
    priceValue: 189,
    category: "Pack",
    audience: "Wedding photographers",
    format: "Notion + Docs + Canva",
    summary:
      "Client communication and delivery workflows that turn shoots into repeatable systems.",
    includes: [
      "Inquiry-to-booking message sequence",
      "Pre-shoot prep checklist and shot-list templates",
      "Gallery handoff email stack and FAQ snippets",
      "Review request templates and referral prompts",
      "Album and print upsell templates",
    ],
    highlights: [
      "Ideal for photographers who want a consistent premium process",
      "Built around conversion and smoother delivery",
      "Fits solo photographers and small studio teams",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Wedding photographer shooting bridal portrait outdoors",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
  {
    slug: "venue-sales-toolkit",
    name: "Venue Sales Toolkit",
    priceLabel: "$149",
    priceValue: 149,
    category: "Pack",
    audience: "Wedding venue teams",
    format: "Canva + Docs",
    summary:
      "Conversion-oriented documents for tours, follow-up, and package positioning.",
    includes: [
      "Venue tour script and objection handlers",
      "Package one-pager and pricing table templates",
      "Lead follow-up sequence scripts",
      "Seasonal promotion calendar templates",
      "Sales handoff notes and team response checklist",
    ],
    highlights: [
      "Built for fast-moving venue sales environments",
      "Clear one-time purchase and editable docs",
      "Supports better inquiry-to-booking conversion",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Elegant wedding venue reception setup",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
  {
    slug: "pricing-sheet-starter",
    name: "Pricing Sheet Starter",
    priceLabel: "$9.99",
    priceValue: 9.99,
    category: "Template",
    audience: "Wedding planners and venues",
    format: "Canva + PDF",
    summary:
      "Quick-start pricing one-pager template for cleaner package presentation.",
    includes: [
      "Service tier comparison block",
      "Add-on pricing section",
      "FAQ and policy footer",
      "Mobile-friendly layout variant",
    ],
    highlights: [
      "Built for first-touch inquiries",
      "Fast setup in under 20 minutes",
      "Editable in Canva and export-ready",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Pricing sheet mockup on a desk",
    whopPlanId: null, // TODO: set this to your Whop plan ID, e.g. "plan_xxxxxxxx"
    downloadFile: "pricing-sheet-starter.html", // Variation B: served from _private/downloads/
  },
  {
    slug: "follow-up-email-bundle",
    name: "Follow-Up Email Bundle",
    priceLabel: "$14.99",
    priceValue: 14.99,
    category: "Template",
    audience: "Planners, photographers, and venues",
    format: "Docs + PDF",
    summary:
      "Conversion-focused follow-up email scripts for inquiry and tour leads.",
    includes: [
      "Same-day inquiry reply template",
      "Post-call recap template",
      "No-response reactivation sequence",
      "Booking urgency close template",
    ],
    highlights: [
      "Designed to reduce lead drop-off",
      "Plug-and-play copy blocks",
      "Works across Gmail and CRM tools",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Email workflow shown on laptop screen",
    whopPlanId: null, // TODO: set this to your Whop plan ID, e.g. "plan_xxxxxxxx"
    downloadFile: "follow-up-email-bundle.html", // Variation B: served from _private/downloads/
  },
  {
    slug: "client-onboarding-mini-kit",
    name: "Client Onboarding Mini Kit",
    priceLabel: "$19.99",
    priceValue: 19.99,
    category: "Template",
    audience: "Wedding planners",
    format: "Docs + PDF",
    summary:
      "A compact onboarding set to kick off projects with fewer delays.",
    includes: [
      "Welcome message template",
      "Client intake form",
      "Kickoff call agenda",
      "Expectations checklist",
    ],
    highlights: [
      "Ideal low-ticket first offer",
      "Improves project clarity early",
      "Adaptable for solo or team workflows",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Client onboarding documents near laptop",
    whopPlanId: null, // TODO: set this to your Whop plan ID, e.g. "plan_xxxxxxxx"
    downloadFile: "client-onboarding-mini-kit.html", // Variation B: served from _private/downloads/
  },
  {
    slug: "vendor-comms-starter-pack",
    name: "Vendor Comms Starter Pack",
    priceLabel: "$29.99",
    priceValue: 29.99,
    category: "Template",
    audience: "Wedding planners and venue teams",
    format: "Docs + Sheets",
    summary:
      "Essential vendor coordination templates for smoother handoffs and updates.",
    includes: [
      "Vendor intro email templates",
      "Timeline confirmation script",
      "Change request communication format",
      "Pre-event final check email",
    ],
    highlights: [
      "Cuts coordination back-and-forth",
      "Clear communication framework",
      "Useful across multi-vendor events",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Team discussing event documents in meeting",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
  {
    slug: "proposal-conversion-kit",
    name: "Proposal Conversion Kit",
    priceLabel: "$39.99",
    priceValue: 39.99,
    category: "Template",
    audience: "Planners, photographers, and venues",
    format: "Canva + Docs",
    summary:
      "Proposal framework and objection-ready scripts to improve close rates.",
    includes: [
      "Proposal cover and structure template",
      "Scope and boundaries section",
      "Pricing options comparison block",
      "Objection response script bank",
    ],
    highlights: [
      "Conversion-oriented proposal design",
      "Balanced for clarity and speed",
      "Pairs well with follow-up sequence templates",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Sales proposal pages open on tablet and desk",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
  {
    slug: "planner-onboarding-kit",
    name: "Planner Onboarding Kit",
    priceLabel: "$39",
    priceValue: 39,
    category: "Template",
    audience: "Wedding planners",
    format: "Docs + PDF",
    summary:
      "Client onboarding documents for a smoother kickoff and fewer project delays.",
    includes: [
      "Welcome email template",
      "Client onboarding questionnaire",
      "Kickoff call agenda template",
      "Project expectation agreement",
    ],
    highlights: [
      "Great entry product for newer planners",
      "Fast implementation in under one hour",
      "Compatible with standard Google Workspace workflow",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Planner reviewing client documents on laptop",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
  {
    slug: "venue-tour-conversion-kit",
    name: "Venue Tour Conversion Kit",
    priceLabel: "$49",
    priceValue: 49,
    category: "Template",
    audience: "Wedding venue teams",
    format: "Canva + Docs",
    summary:
      "Short-format scripts and templates to improve confidence during venue tours.",
    includes: [
      "Tour path script by space/zone",
      "Pricing objection response snippets",
      "Post-tour recap template",
      "Booking reminder script",
    ],
    highlights: [
      "Simple conversion-focused package",
      "Designed for in-person and virtual tours",
      "One-time purchase, lifetime internal use",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1530023367847-a683933f4175?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Wedding venue interior with floral decor",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
  {
    slug: "contract-clause-library",
    name: "Contract Clause Library",
    priceLabel: "$69",
    priceValue: 69,
    category: "Template",
    audience: "Planners, photographers, and venues",
    format: "Google Docs",
    summary:
      "Reusable clause bank and explanation notes for faster contract preparation.",
    includes: [
      "Scope and deliverable clauses",
      "Timeline and revision clauses",
      "Rescheduling and cancellation language",
      "Force majeure and communication policy clauses",
    ],
    highlights: [
      "Speeds up contract drafting",
      "Pairs well with proposal templates",
      "Built for adaptation, not legal advice replacement",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Signed document and pen on desk",
    whopPlanId: null, // TODO: add Whop plan ID after creating product in Whop dashboard
    downloadFile: null,
  },
];

export const featuredPackSlugs = [
  "planner-business-suite",
  "photographer-workflow-vault",
  "venue-sales-toolkit",
  "pricing-sheet-starter",
  "follow-up-email-bundle",
  "client-onboarding-mini-kit",
  "vendor-comms-starter-pack",
  "proposal-conversion-kit",
];

export const starterProductSlugs = [
  "planner-onboarding-kit",
  "venue-tour-conversion-kit",
  "contract-clause-library",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCheckoutUrlForProduct(product: StoreProduct) {
  // Direct Whop checkout — used when the product has a whopPlanId set
  if (product.whopPlanId) {
    return `/checkout/${product.slug}`;
  }

  // Legacy leakifyhub.com checkout — untouched
  const base = process.env.NEXT_PUBLIC_CHECKOUT_BASE_URL;
  if (base) {
    return `${base.replace(/\/$/, "")}/${product.slug}`;
  }

  const subject = encodeURIComponent(`Purchase request: ${product.name}`);
  const body = encodeURIComponent(
    `Hi,\n\nI want to purchase "${product.name}" (${product.priceLabel}).\nPlease send me the checkout link.\n\nThanks!`
  );
  return `mailto:revolveevents@protonmail.com?subject=${subject}&body=${body}`;
}
