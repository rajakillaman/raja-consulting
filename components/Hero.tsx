"use client";

import { motion } from "framer-motion";

const headlineWords = [
  { text: "Expert", weight: "font-light" },
  { text: "IT", weight: "font-bold" },
  { text: "insights,", weight: "font-light" },
];

const gradientWords = [
  { text: "delivered", weight: "font-bold" },
  { text: "on", weight: "font-extralight" },
  { text: "demand", weight: "font-bold" },
];

const stats = [
  { value: "500+", label: "Reports" },
  { value: "98%", label: "Satisfaction" },
  { value: "48hr", label: "Delivery" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[5%] top-[30%] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
            animation: "float-slow 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[30%] h-[350px] w-[350px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #3b82f6, transparent 70%)",
            animation: "float-slower 12s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full border border-card-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm"
          >
            Premium Tech Consulting, Simplified
          </motion.div>

          <h1 className="mb-6 text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={`${word.weight} inline-block mr-[0.25em]`}
              >
                {word.text}
              </motion.span>
            ))}
            <br className="hidden sm:block" />
            {gradientWords.map((word, i) => (
              <motion.span
                key={`g-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className={`${word.weight} inline-block mr-[0.25em] bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent`}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mb-10 max-w-xl text-lg text-muted md:text-xl"
          >
            Purchase credits and redeem them for professional audits, security
            assessments, code reviews, and technical reports — all from a team of
            seasoned consultants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#pricing"
              className="rounded-lg bg-accent px-8 py-3.5 text-center text-base font-semibold text-background transition-colors hover:bg-accent-hover"
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            >
              View Credit Packs
            </a>
            <a
              href="#services"
              className="rounded-lg border border-card-border px-8 py-3.5 text-center text-base font-semibold text-foreground transition-colors hover:border-muted"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex gap-8 border-t border-card-border pt-8 sm:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold tracking-tight md:text-3xl">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
