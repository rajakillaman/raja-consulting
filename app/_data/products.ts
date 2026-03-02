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
  },
];

export const featuredPackSlugs = [
  "planner-business-suite",
  "photographer-workflow-vault",
  "venue-sales-toolkit",
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
