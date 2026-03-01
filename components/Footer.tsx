export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12">
      {/* Gradient divider */}
      <div className="mx-auto mb-12 h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Raja
              </span>{" "}
              Consulting
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Premium tech consulting delivered through a simple credit-based
              system. Expert insights without the overhead of traditional
              consulting engagements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Services
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted">
              <a href="#services" className="transition-colors hover:text-foreground">
                Performance Audit
              </a>
              <a href="#services" className="transition-colors hover:text-foreground">
                Security Assessment
              </a>
              <a href="#services" className="transition-colors hover:text-foreground">
                Code Review
              </a>
              <a href="#services" className="transition-colors hover:text-foreground">
                Custom Report
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Company
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted">
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-card-border pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Raja Consulting. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
