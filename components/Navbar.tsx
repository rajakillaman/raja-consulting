"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 512 512" fill="none" className="shrink-0">
      <defs>
        <linearGradient id="logo-g1" x1="80" y1="64" x2="432" y2="448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop stopColor="#8b5cf6" offset="1" />
        </linearGradient>
        <linearGradient id="logo-g2" x1="280" y1="260" x2="432" y2="448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop stopColor="#8b5cf6" offset="1" />
        </linearGradient>
      </defs>
      <rect x="80" y="64" width="56" height="384" rx="28" fill="url(#logo-g1)" />
      <path d="M108 64h120c77.32 0 140 62.68 140 140s-62.68 140-140 140H136" stroke="url(#logo-g1)" strokeWidth="56" strokeLinecap="round" fill="none" />
      <rect x="248" y="272" width="56" height="210" rx="28" transform="rotate(-25 248 272)" fill="url(#logo-g2)" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <LogoMark />
          <span>
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">Raja</span>{" "}
            Consulting
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          {user ? (
            <a
              href="/dashboard"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              Dashboard
            </a>
          ) : (
            <a
              href="/login"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              Sign In
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-t border-card-border bg-background md:hidden"
          >
            <div className="px-6 pb-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              {user ? (
                <motion.a
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-2 block rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
                >
                  Dashboard
                </motion.a>
              ) : (
                <motion.a
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-2 block rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
                >
                  Sign In
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
