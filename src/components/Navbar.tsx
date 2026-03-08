"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#destinations", label: "Destinations" },
  { href: "#themes", label: "Retreat Themes" },
  { href: "#included", label: "What's Included" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-deep-forest/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-serif text-xl text-pure-white tracking-tight group-hover:text-gold-light transition-colors">
              NutriCove
            </span>
            <span className="text-[9px] font-sans font-bold tracking-[0.16em] uppercase text-gold-light/80 px-2.5 py-1 border border-gold/20 rounded-full">
              Retreats
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-[13px] font-medium text-white/85 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/book"
              className="ml-4 rounded-full bg-terracotta px-7 py-2.5 text-sm font-semibold text-pure-white hover:bg-terracotta-hover transition-all shadow-[0_2px_16px_rgba(191,99,54,0.25)] hover:shadow-[0_4px_24px_rgba(191,99,54,0.35)]"
            >
              Book a Retreat
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-pure-white p-2 hover:bg-white/[0.06] rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-deep-forest/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-sans text-white/85 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.04] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-pure-white mt-4"
              >
                Book a Retreat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
