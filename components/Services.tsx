"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Performance Audit",
    credits: 5,
    description: "Load times, Core Web Vitals, and optimization roadmap.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Security Assessment",
    credits: 10,
    description: "Vulnerabilities, misconfigurations, and remediation across your stack.",
    gradient: "from-red-500/20 to-orange-500/20",
    featured: true,
  },
  {
    title: "Code Review",
    credits: 8,
    description: "Architecture, patterns, best practices, and maintainability.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Stack Evaluation",
    credits: 7,
    description: "Strategic assessment of your technology choices.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "SEO Audit",
    credits: 5,
    description: "Crawlability, indexing, structured data, and technical SEO.",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Custom Report",
    credits: 15,
    description: "Bespoke technical analysis on any topic you need covered.",
    gradient: "from-blue-500/20 to-purple-500/20",
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="max-w-lg text-muted">
              Fixed credit costs per deliverable. No hourly billing, no scope creep.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              delay={i * 0.06}
              className={service.featured ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="group flex h-full flex-col justify-between rounded-xl border border-card-border bg-card/40 p-6 transition-colors hover:border-muted/40">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base font-semibold">{service.title}</h3>
                    <span className={`rounded-full bg-gradient-to-r ${service.gradient} px-3 py-1 text-xs font-medium text-foreground/80`}>
                      {service.credits} cr
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
