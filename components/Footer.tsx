export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="text-accent">Raja</span> Consulting
            </a>
            <p className="mt-1 text-sm text-muted">
              Premium tech consulting, simplified.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted">
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

        <div className="mt-8 border-t border-card-border pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Raja Consulting. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
