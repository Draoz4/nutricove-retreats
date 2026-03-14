"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/destinations/thailand", label: "Thailand" },
  { href: "/destinations/dominican-republic", label: "Dominican Republic" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-pure-white/80 backdrop-blur-xl shadow-sm border-b border-brand-border/50"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <span className={cn(
                "font-serif text-xl lg:text-2xl font-semibold transition-colors",
                scrolled ? "text-deep-forest" : "text-pure-white"
              )}>
                NutriCove
              </span>
              <span className={cn(
                "hidden sm:inline text-[10px] font-sans font-bold tracking-[0.2em] uppercase mt-1 transition-colors",
                scrolled ? "text-terracotta" : "text-gold-light"
              )}>
                Retreats
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-sans font-medium tracking-wide transition-colors hover:text-terracotta",
                    scrolled ? "text-secondary-text" : "text-pure-white/80 hover:text-pure-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="rounded-full bg-terracotta hover:bg-terracotta-hover text-pure-white px-6">
                <Link href="/book">Book a Retreat</Link>
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-deep-forest" : "text-pure-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-pure-white pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl text-deep-forest hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="rounded-full bg-terracotta hover:bg-terracotta-hover text-pure-white px-8 mt-4">
                <Link href="/book" onClick={() => setMobileOpen(false)}>Book a Retreat</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
