"use client";

import { useState } from "react";

const services = [
  { title: "Performance Audit", credits: 5, description: "Load times, Core Web Vitals, and optimization roadmap." },
  { title: "Security Assessment", credits: 10, description: "Vulnerabilities, misconfigurations, and remediation across your stack.", featured: true },
  { title: "Code Review", credits: 8, description: "Architecture, patterns, best practices, and maintainability." },
  { title: "Stack Evaluation", credits: 7, description: "Strategic assessment of your technology choices." },
  { title: "SEO Audit", credits: 5, description: "Crawlability, indexing, structured data, and technical SEO." },
  { title: "Custom Report", credits: 15, description: "Bespoke technical analysis on any topic you need covered.", featured: true },
];

/* ─── OPTION A: Minimal List ─── */
function LayoutA() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="divide-y divide-card-border">
        {services.map((s) => (
          <div key={s.title} className="group flex items-start justify-between gap-6 py-5">
            <div>
              <h3 className="font-medium text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.description}</p>
            </div>
            <span className="shrink-0 pt-0.5 text-sm tabular-nums text-muted">
              {s.credits} Credits
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── OPTION B: Two-Column Feature Split ─── */
function LayoutB() {
  const featured = services.find((s) => s.title === "Security Assessment")!;
  const rest = services.filter((s) => s.title !== "Security Assessment");

  return (
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
      {/* Left: featured */}
      <div className="lg:col-span-2">
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-8">
          <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            {featured.credits} Credits
          </span>
          <h3 className="mb-3 text-2xl font-bold">{featured.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{featured.description}</p>
        </div>
      </div>

      {/* Right: stacked list */}
      <div className="lg:col-span-3">
        <div className="divide-y divide-card-border rounded-xl border border-card-border bg-card/40">
          {rest.map((s) => (
            <div key={s.title} className="flex items-center justify-between px-6 py-4">
              <div>
                <h3 className="text-sm font-medium">{s.title}</h3>
                <p className="mt-0.5 text-xs text-muted">{s.description}</p>
              </div>
              <span className="shrink-0 text-xs tabular-nums text-muted">{s.credits} Credits</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── OPTION C: Compact Grid with Left Border ─── */
function LayoutC() {
  const colors = [
    "border-l-cyan-500", "border-l-red-500", "border-l-green-500",
    "border-l-violet-500", "border-l-amber-500", "border-l-blue-500",
  ];

  return (
    <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
      {services.map((s, i) => (
        <div
          key={s.title}
          className={`rounded-lg border border-card-border ${colors[i]} border-l-2 bg-card/40 px-5 py-4`}
        >
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-sm font-semibold">{s.title}</h3>
            <span className="text-xs tabular-nums text-muted">{s.credits} Credits</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.description}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── OPTION D: Accordion / Expandable ─── */
function LayoutD() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl space-y-1">
      {services.map((s, i) => (
        <button
          key={s.title}
          onClick={() => setOpen(open === i ? null : i)}
          className="w-full text-left"
        >
          <div className={`rounded-lg border px-6 py-4 transition-colors ${open === i ? "border-accent/30 bg-card/60" : "border-card-border bg-card/30 hover:border-muted/40"}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{s.title}</h3>
              <div className="flex items-center gap-3">
                <span className="text-xs tabular-nums text-muted">{s.credits} Credits</span>
                <svg
                  className={`h-4 w-4 text-muted transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {open === i && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

/* ─── Preview Page ─── */
export default function Preview() {
  return (
    <div className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-6xl space-y-24">
        <div>
          <h1 className="mb-2 text-center text-3xl font-bold">Services Layout Preview</h1>
          <p className="text-center text-muted">Pick the one you like best</p>
        </div>

        {/* A */}
        <section>
          <h2 className="mb-2 text-center text-xl font-bold text-accent">Option A — Minimal List</h2>
          <p className="mb-8 text-center text-sm text-muted">Clean rows, like a menu or spec sheet</p>
          <LayoutA />
        </section>

        {/* B */}
        <section>
          <h2 className="mb-2 text-center text-xl font-bold text-accent">Option B — Feature Split</h2>
          <p className="mb-8 text-center text-sm text-muted">Featured service on the left, rest stacked on the right</p>
          <LayoutB />
        </section>

        {/* C */}
        <section>
          <h2 className="mb-2 text-center text-xl font-bold text-accent">Option C — Compact Grid</h2>
          <p className="mb-8 text-center text-sm text-muted">Two-column grid with colored left border accents</p>
          <LayoutC />
        </section>

        {/* D */}
        <section>
          <h2 className="mb-2 text-center text-xl font-bold text-accent">Option D — Accordion</h2>
          <p className="mb-8 text-center text-sm text-muted">Click to expand and reveal descriptions</p>
          <LayoutD />
        </section>
      </div>
    </div>
  );
}
