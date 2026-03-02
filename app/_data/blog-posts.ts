export type BlogSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  coverAlt: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-planners-close-higher-ticket-clients",
    title: "How Wedding Planners Close Higher-Ticket Clients With Better Collateral",
    excerpt:
      "A practical content and document stack that elevates your proposal experience without adding hours of admin work.",
    category: "Sales",
    readTime: "9 min read",
    publishedAt: "March 2, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Wedding planning documents on a desk with flowers",
    sections: [
      {
        heading: "Start with a polished first impression",
        body:
          "Most planners lose premium leads before the first call because their pre-call material looks improvised. A short welcome pack with process clarity and visual consistency immediately increases trust.",
        bullets: [
          "Lead with timeline and communication expectations.",
          "Show curated examples, not every past project.",
          "Include a simple next-step checklist after inquiry.",
        ],
      },
      {
        heading: "Turn your proposal into a decision tool",
        body:
          "High-ticket clients need structure to compare options. Instead of a plain quote, provide package framing, optional add-ons, and a clear path from decision to deposit.",
        bullets: [
          "Offer three tiers with visual comparison.",
          "Attach scope boundaries to avoid confusion later.",
          "Add a same-page FAQ for common objections.",
        ],
      },
      {
        heading: "Use handoff templates to reduce ghosting",
        body:
          "Post-call silence often comes from unclear next steps. A one-page handoff template with deadlines and required client inputs keeps momentum moving toward booking.",
        bullets: [
          "Confirm required decisions in one checklist.",
          "Set one follow-up date before ending the call.",
          "Attach one calendar link tied to deposit action.",
        ],
      },
      {
        heading: "Build trust with a micro case-study section",
        body:
          "Premium clients want proof, but they do not need a long portfolio dump. Add a short case-study block in your proposal with one challenge, one process decision, and one measurable result.",
        bullets: [
          "Use one before/after timeline visual.",
          "Include one client quote with context.",
          "Show one numbers-based outcome like budget adherence or vendor response speed.",
        ],
      },
      {
        heading: "Weekly implementation rhythm",
        body:
          "Convert this into a repeatable cadence: Monday update collateral, Tuesday optimize proposal language, Wednesday refresh testimonials, Thursday test objection scripts, Friday review win rates.",
      },
    ],
  },
  {
    slug: "venue-follow-up-sequence-that-books-more-tours",
    title: "The Venue Follow-Up Sequence That Books More Tours",
    excerpt:
      "A lightweight email and script sequence venue teams can deploy this week to increase tour-to-booking conversion.",
    category: "Operations",
    readTime: "8 min read",
    publishedAt: "March 1, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Elegant wedding venue table setup",
    sections: [
      {
        heading: "Use a 3-touch follow-up rhythm",
        body:
          "A single generic follow-up message is rarely enough. A timed sequence with one value-led reminder and one urgency-led reminder performs better in most local markets.",
        bullets: [
          "Touch 1: same-day thank-you with recap.",
          "Touch 2: value touch with package comparison.",
          "Touch 3: date-pressure reminder with a clear CTA.",
        ],
      },
      {
        heading: "Give prospects a visual package snapshot",
        body:
          "Instead of attaching long PDFs, send a one-page package sheet that is mobile-friendly and easy to forward to decision-makers.",
        bullets: [
          "Use one hero image per package tier.",
          "Display total value and what is included at a glance.",
          "Place your strongest differentiator in the top third.",
        ],
      },
      {
        heading: "Create one script for each objection category",
        body:
          "Pricing, timing, and guest-count concerns are predictable. Having prewritten response templates improves consistency across your sales team and shortens response time.",
        bullets: [
          "Prepare a price objection response focused on outcomes.",
          "Prepare a date-availability response with alternatives.",
          "Prepare a guest-count response with package fit guidance.",
        ],
      },
      {
        heading: "Use response-time standards your team can keep",
        body:
          "Prospects compare venues in parallel, and speed often wins. Define internal response SLAs and track them weekly so follow-up quality does not collapse during busy periods.",
        bullets: [
          "Set a 2-hour weekday first-response target.",
          "Preload templates in your inbox tools.",
          "Review response latency every Friday.",
        ],
      },
      {
        heading: "Simple KPI dashboard to monitor improvement",
        body:
          "Track inquiry-to-tour, tour-to-proposal, proposal-to-booking, and average days-to-close. Even a basic monthly dashboard highlights where your sequence needs work.",
      },
    ],
  },
  {
    slug: "photographer-delivery-workflow-clients-love",
    title: "A Photographer Delivery Workflow Clients Actually Love",
    excerpt:
      "How to package gallery delivery, feedback, and upsell opportunities without making your post-event process feel salesy.",
    category: "Client Experience",
    readTime: "10 min read",
    publishedAt: "February 27, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Wedding photographer reviewing images on laptop",
    sections: [
      {
        heading: "Deliver with context, not just a link",
        body:
          "Clients value guidance. A short delivery message that explains what to expect, where to download, and how to share files improves satisfaction and reduces support questions.",
        bullets: [
          "State exactly what was delivered in plain language.",
          "Include two suggested sharing options for family and vendors.",
          "Clarify turnaround windows for any requested edits.",
        ],
      },
      {
        heading: "Use a review request at the emotional high point",
        body:
          "The best review timing is shortly after delivery when the excitement is fresh. Include one direct review link and one optional prompt so clients can respond quickly.",
        bullets: [
          "Keep the review ask under five lines.",
          "Offer a prompt to make writing easier.",
          "Thank clients with a personal note, not automation tone.",
        ],
      },
      {
        heading: "Position upsells as completion options",
        body:
          "Albums and prints convert better when framed as part of a complete memory package, not an extra purchase. Use visual mockups and a simple decision window.",
        bullets: [
          "Offer one signature album option and one premium option.",
          "Use deadline-driven wording without pressure language.",
          "Bundle print credits with album choices where possible.",
        ],
      },
      {
        heading: "Post-delivery touchpoint that drives referrals",
        body:
          "Two to three weeks after delivery, send a short check-in message asking how they used the gallery and whether they need recommendation-ready files for social profiles or thank-you cards.",
        bullets: [
          "Keep the message personal and under 120 words.",
          "Provide one-click access to referral-ready assets.",
          "Include a soft referral ask only after value delivery.",
        ],
      },
      {
        heading: "Operational checklist for consistency",
        body:
          "Standardize your delivery quality by using one internal checklist for export settings, naming conventions, gallery organization, and backup confirmation before sending.",
      },
    ],
  },
];
