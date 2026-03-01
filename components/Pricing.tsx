"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    credits: 10,
    price: 29,
    perCredit: "2.90",
    popular: false,
    description: "Perfect for a single audit or quick assessment.",
  },
  {
    name: "Pro",
    credits: 50,
    price: 119,
    perCredit: "2.38",
    popular: true,
    description: "Best value for ongoing consulting needs.",
  },
  {
    name: "Enterprise",
    credits: 150,
    price: 299,
    perCredit: "1.99",
    popular: false,
    description: "For teams that need comprehensive, continuous coverage.",
  },
];

export default function Pricing() {
  const [toast, setToast] = useState<string | null>(null);

  function handleBuy(planName: string) {
    setToast(`${planName} pack selected — payment integration coming soon!`);
    setTimeout(() => setToast(null), 3000);
  }

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Credit Packs
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Buy credits once, use them whenever you need. No subscriptions, no
            commitments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 transition-all ${
                plan.popular
                  ? "border-accent bg-gradient-to-b from-accent/5 to-transparent shadow-lg shadow-accent/10"
                  : "border-card-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-background">
                  Most Popular
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

              <button
                onClick={() => handleBuy(plan.name)}
                className={`w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent text-background hover:bg-accent-hover"
                    : "border border-card-border bg-card text-foreground hover:border-accent/50"
                }`}
              >
                Buy {plan.name} Pack
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-card-border bg-card px-6 py-3 text-sm shadow-xl">
          {toast}
        </div>
      )}
    </section>
  );
}
