export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-card-border bg-card px-4 py-1.5 text-xs font-medium text-muted">
          Premium Tech Consulting, Simplified
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Expert IT insights,{" "}
          <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
            delivered on demand
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl">
          Purchase credits and redeem them for professional audits, security
          assessments, code reviews, and technical reports — all from a team of
          seasoned consultants.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            View Credit Packs
          </a>
          <a
            href="#services"
            className="rounded-lg border border-card-border px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-muted"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
