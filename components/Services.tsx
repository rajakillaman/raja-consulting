"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "Performance Audit", credits: 25, description: "Load times, Core Web Vitals, and optimization roadmap.", color: "border-l-cyan-500" },
  { title: "Security Assessment", credits: 75, description: "Vulnerabilities, misconfigurations, and remediation across your stack.", color: "border-l-red-500" },
  { title: "Code Review", credits: 50, description: "Architecture, patterns, best practices, and maintainability.", color: "border-l-green-500" },
  { title: "Stack Evaluation", credits: 40, description: "Strategic assessment of your technology choices.", color: "border-l-violet-500" },
  { title: "SEO Audit", credits: 25, description: "Crawlability, indexing, structured data, and technical SEO.", color: "border-l-amber-500" },
  { title: "Custom Report", credits: 200, description: "Bespoke technical analysis on any topic you need covered.", color: "border-l-blue-500" },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Services
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <div className={`rounded-lg border border-card-border ${s.color} border-l-2 bg-card/40 px-5 py-4`}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <span className="text-xs tabular-nums text-muted">{s.credits} Credits</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
