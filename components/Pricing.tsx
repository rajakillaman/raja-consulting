"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const packs = [
  { credits: 30, price: 5, perCredit: "0.167" },
  { credits: 70, price: 8, perCredit: "0.114" },
  { credits: 150, price: 15, perCredit: "0.100" },
  { credits: 300, price: 25, perCredit: "0.083", tag: "Popular" },
  { credits: 500, price: 40, perCredit: "0.080" },
  { credits: 1000, price: 70, perCredit: "0.070" },
  { credits: 2000, price: 100, perCredit: "0.050" },
  { credits: 6250, price: 250, perCredit: "0.040", tag: "Best Value" },
];

export default function Pricing() {
  const [toast, setToast] = useState<string | null>(null);

  function handleBuy(credits: number) {
    setToast(`${credits} credit pack selected — payment integration coming soon!`);
    setTimeout(() => setToast(null), 3000);
  }

  return (
    <section id="pricing" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Credit Packs
            </h2>
            <p className="mx-auto max-w-xl text-muted">
              Buy once, use anytime. The more you buy, the less you pay per credit.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-2">
          {packs.map((pack, i) => {
            const isPopular = pack.tag === "Popular";
            const isBest = pack.tag === "Best Value";

            return (
              <AnimatedSection key={pack.credits} delay={i * 0.04}>
                <button
                  onClick={() => handleBuy(pack.credits)}
                  className={`group flex w-full items-center justify-between rounded-xl border px-6 py-5 text-left transition-all ${
                    isPopular
                      ? "border-accent/40 bg-accent/5 hover:border-accent/60"
                      : isBest
                        ? "border-purple-500/40 bg-purple-500/5 hover:border-purple-500/60"
                        : "border-card-border bg-card/50 hover:border-muted/40"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className={`text-2xl font-bold tabular-nums md:text-3xl ${
                      isBest
                        ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        : isPopular
                          ? "text-accent"
                          : "text-foreground"
                    }`}>
                      {pack.credits.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted">credits</span>
                    {pack.tag && (
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        isBest
                          ? "bg-purple-500/15 text-purple-400"
                          : "bg-accent/15 text-accent"
                      }`}>
                        {pack.tag}
                      </span>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold tabular-nums md:text-2xl">
                      ${pack.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-muted tabular-nums">
                      ${pack.perCredit}/credit
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            );
          })}
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
