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
    readTime: "6 min read",
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
      },
    ],
  },
  {
    slug: "venue-follow-up-sequence-that-books-more-tours",
    title: "The Venue Follow-Up Sequence That Books More Tours",
    excerpt:
      "A lightweight email and script sequence venue teams can deploy this week to increase tour-to-booking conversion.",
    category: "Operations",
    readTime: "5 min read",
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
      },
      {
        heading: "Create one script for each objection category",
        body:
          "Pricing, timing, and guest-count concerns are predictable. Having prewritten response templates improves consistency across your sales team and shortens response time.",
      },
    ],
  },
  {
    slug: "photographer-delivery-workflow-clients-love",
    title: "A Photographer Delivery Workflow Clients Actually Love",
    excerpt:
      "How to package gallery delivery, feedback, and upsell opportunities without making your post-event process feel salesy.",
    category: "Client Experience",
    readTime: "7 min read",
    publishedAt: "February 27, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Wedding photographer reviewing images on laptop",
    sections: [
      {
        heading: "Deliver with context, not just a link",
        body:
          "Clients value guidance. A short delivery message that explains what to expect, where to download, and how to share files improves satisfaction and reduces support questions.",
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
      },
    ],
  },
];
