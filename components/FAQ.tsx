"use client";

import { useState } from "react";

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
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted">
            Everything you need to know about credits and our services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-card-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
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
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
