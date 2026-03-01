"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Starter",
    credits: 10,
    price: 29,
    perCredit: "2.90",
    popular: false,
    description: "Perfect for a single audit or quick assessment.",
    features: [
      "10 consulting credits",
      "All services available",
      "Credits never expire",
      "PDF report delivery",
    ],
  },
  {
    name: "Pro",
    credits: 50,
    price: 119,
    perCredit: "2.38",
    popular: true,
    savings: "18%",
    description: "Best value for ongoing consulting needs.",
    features: [
      "50 consulting credits",
      "All services available",
      "Credits never expire",
      "Priority delivery",
      "Follow-up call included",
    ],
  },
  {
    name: "Enterprise",
    credits: 150,
    price: 299,
    perCredit: "1.99",
    popular: false,
    savings: "31%",
    description: "For teams that need comprehensive, continuous coverage.",
    features: [
      "150 consulting credits",
      "All services available",
      "Credits never expire",
      "Priority delivery",
      "Dedicated consultant",
      "Slack channel access",
    ],
  },
];

export default function Pricing() {
  const [toast, setToast] = useState<string | null>(null);

  function handleBuy(planName: string) {
    setToast(`${planName} pack selected — payment integration coming soon!`);
    setTimeout(() => setToast(null), 3000);
  }

  return (
    <section id="pricing" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Credit Packs
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Buy credits once, use them whenever you need. No subscriptions, no
              commitments.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-xl p-8 transition-all ${
                  plan.popular
                    ? "border-0 bg-gradient-to-b from-accent/10 to-transparent shadow-lg shadow-accent/10"
                    : "border border-card-border bg-card/50 backdrop-blur-sm"
                }`}
                style={
                  plan.popular
                    ? {
                        background:
                          "linear-gradient(var(--color-card), var(--color-card)) padding-box, conic-gradient(from var(--gradient-angle, 0deg), #06b6d4, #3b82f6, #8b5cf6, #06b6d4) border-box",
                        border: "1px solid transparent",
                        animation: "rotate-gradient 4s linear infinite",
                      }
                    : undefined
                }
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-purple-500 px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}

                {"savings" in plan && plan.savings && (
                  <div className="mb-4 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    Save {plan.savings}
                  </div>
                )}

                <h3 className="mb-1 text-xl font-bold">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted">{plan.description}</p>

                <div className="mb-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                </div>
                <p className="mb-6 text-sm text-muted">
                  {plan.credits} credits &middot; ${plan.perCredit}/credit
                </p>

                {/* Feature list */}
                <ul className="mb-8 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuy(plan.name)}
                  className={`w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-accent text-background hover:bg-accent-hover"
                      : "border border-card-border bg-card text-foreground hover:border-accent/50"
                  }`}
                  style={plan.popular ? { animation: "pulse-glow 3s ease-in-out infinite" } : undefined}
                >
                  Buy {plan.name} Pack
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-card-border bg-card px-6 py-3 text-sm shadow-xl">
          {toast}
        </div>
      )}
    </section>
  );
}
