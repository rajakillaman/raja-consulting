"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What are credits?",
    answer:
      "Credits are a simple currency you purchase upfront. Each consulting service has a fixed credit cost, so you always know exactly what you're spending. No hourly rates, no surprise invoices.",
  },
  {
    question: "Do credits expire?",
    answer:
      "No. Once purchased, your credits are yours to use whenever you need them. There's no expiration date or time pressure.",
  },
  {
    question: "What's included in a report?",
    answer:
      "Every report includes a detailed written analysis, actionable recommendations, priority rankings, and a follow-up summary. Reports are delivered as professional PDF documents.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most reports are delivered within 3-5 business days. Complex assessments like full security audits may take up to 7 business days. You'll receive a timeline estimate after placing your order.",
  },
  {
    question: "Can I request a custom service?",
    answer:
      "Absolutely. Our Custom Report option (15 credits) lets you request any technical analysis that isn't covered by our standard services. Just describe what you need and we'll tailor the deliverable.",
  },
  {
    question: "Who performs the consulting work?",
    answer:
      "All work is performed by experienced engineers and consultants with deep expertise across web performance, security, architecture, and DevOps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted">
              Everything you need to know about credits and our services.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div
                className={`overflow-hidden rounded-xl border transition-colors ${
                  openIndex === i
                    ? "border-accent/30 bg-card/80"
                    : "border-card-border bg-card/50"
                }`}
              >
                <div className="flex">
                  {/* Left accent bar */}
                  <div
                    className={`w-1 shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? "bg-gradient-to-b from-accent to-purple-500"
                        : "bg-transparent"
                    }`}
                  />

                  <div className="flex-1">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="font-medium">{faq.question}</span>
                      <motion.svg
                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-5 w-5 shrink-0 text-muted"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
