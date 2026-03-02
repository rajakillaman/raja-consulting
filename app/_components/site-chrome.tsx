import Link from "next/link";

function BrandMark() {
  return (
    <span className="brand-mark" aria-label="Velvet Vow Systems">
      <span className="brand-symbol" aria-hidden>
        <svg viewBox="0 0 36 36">
          <path d="M9 11c2.2 0 3.8 1.6 5.1 4.4 1.2-2.8 2.8-4.4 5.1-4.4 3.2 0 5.5 2.4 5.5 5.8 0 5.3-5.1 8.7-10.6 12.5C8.7 25.5 3.6 22.1 3.6 16.8 3.6 13.4 5.9 11 9 11Z" />
          <path d="m14 14 4 10 4-10" />
        </svg>
      </span>
      <span className="brand-text">
        <strong>Velvet Vow Systems</strong>
        <small>Wedding Business Template Atelier</small>
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="shell topbar">
      <Link href="/" className="brand-link">
        <BrandMark />
      </Link>
      <nav className="top-nav">
        <Link href="/catalog">Catalog</Link>
        <Link href="/packs">Packs</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/legal">Legal</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="shell site-footer">
      <div>
        <p className="footer-title">Velvet Vow Systems</p>
        <p className="footer-copy">
          Premium one-time digital templates for wedding planners,
          photographers, and venue teams.
        </p>
        <p className="footer-meta">
          Contact:{" "}
          <a href="mailto:revolveevents@protonmail.com">
            revolveevents@protonmail.com
          </a>{" "}
          · Digital products only · Instant delivery after purchase
        </p>
      </div>
      <nav className="footer-links">
        <Link href="/catalog">Catalog</Link>
        <Link href="/packs">Packs</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/legal">Legal</Link>
        <Link href="/legal/privacy-policy">Privacy Policy</Link>
        <Link href="/legal/refund-policy">Refund Policy</Link>
        <Link href="/legal/terms-of-service">Terms of Service</Link>
      </nav>
    </footer>
  );
}
