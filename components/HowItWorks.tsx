"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    step: "01",
    title: "Buy Credits",
    description:
      "Pick a credit pack that fits your needs. Credits never expire, so there's no rush.",
  },
  {
    step: "02",
    title: "Choose a Service",
    description:
      "Browse our catalog of audits, reviews, and reports. Select what you need.",
  },
  {
    step: "03",
    title: "Get Your Report",
    description:
      "Our consultants deliver a detailed, actionable report directly to your inbox.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Three simple steps to expert-level consulting deliverables.
            </p>
          </div>
        </AnimatedSection>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting gradient line - desktop */}
          <motion.div
            className="absolute left-0 top-[52px] hidden h-px w-full md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          >
            <div className="h-full w-full bg-gradient-to-r from-accent via-blue-500 to-purple-500" />
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((item, i) => (
              <AnimatedSection key={item.step} delay={0.15 + i * 0.15}>
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="relative mx-auto mb-6 flex h-[104px] w-[104px] items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl border border-card-border bg-card" />
                    <span className="relative bg-gradient-to-br from-accent via-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
