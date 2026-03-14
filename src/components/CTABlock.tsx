"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABlockProps {
  headline: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABlock({ headline, body, primaryCta, secondaryCta }: CTABlockProps) {
  return (
    <section className="bg-deep-forest py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(184,148,62,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/[0.03] via-transparent to-sage/[0.03]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="inline-block text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-4 text-gold-light">
          Begin Your Journey
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-pure-white mb-6">
          {headline}
        </h2>
        {body && (
          <p className="font-sans text-base text-warm-sand/70 leading-relaxed mb-10 max-w-lg mx-auto">
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <Button asChild size="lg" className="rounded-full bg-terracotta hover:bg-terracotta-hover text-pure-white px-8 min-w-[200px]">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}
          {secondaryCta && (
            <Button asChild variant="ghost" size="lg" className="rounded-full border border-pure-white/20 bg-transparent text-pure-white hover:bg-pure-white/10 px-8 min-w-[200px]">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
