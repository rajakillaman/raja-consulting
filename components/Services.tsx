"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Website Performance Audit",
    credits: 5,
    description:
      "Comprehensive analysis of load times, Core Web Vitals, and optimization opportunities.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    span: false,
  },
  {
    title: "Security Assessment",
    credits: 10,
    description:
      "Identify vulnerabilities, misconfigurations, and security risks across your entire stack. Includes penetration testing insights and remediation roadmap.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    span: true,
  },
  {
    title: "Code Review",
    credits: 8,
    description:
      "In-depth review of architecture, patterns, best practices, and maintainability.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    span: false,
  },
  {
    title: "Tech Stack Evaluation",
    credits: 7,
    description:
      "Strategic assessment of your technology choices with recommendations for improvement.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    span: false,
  },
  {
    title: "SEO Technical Audit",
    credits: 5,
    description:
      "Crawlability, indexing, structured data, and technical SEO health check.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    span: false,
  },
  {
    title: "Custom Report",
    credits: 15,
    description:
      "Tailored technical report on any topic — from infrastructure planning to DevOps pipelines. Fully bespoke to your needs.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    span: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What Your Credits Buy
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Choose from a range of professional consulting deliverables. Each
              service has a fixed credit cost — no surprises, no hourly billing.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              delay={i * 0.08}
              className={service.span ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="glow-card group h-full rounded-xl border border-card-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-accent/30">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent/20 to-purple-500/20 p-3 text-accent">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="inline-block rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 px-3 py-1 text-xs font-semibold text-accent">
                  {service.credits} credits
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
