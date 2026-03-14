"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  headline: string;
  subhead?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({ label, headline, subhead, dark = false, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("text-center mb-16", className)}
    >
      {label && (
        <span className={cn(
          "inline-block text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-4",
          dark ? "text-gold-light" : "text-terracotta"
        )}>
          {label}
        </span>
      )}
      <h2 className={cn(
        "font-serif text-3xl sm:text-4xl md:text-5xl leading-tight",
        dark ? "text-pure-white" : "text-deep-forest"
      )}>
        {headline}
      </h2>
      {subhead && (
        <p className={cn(
          "mt-4 max-w-2xl mx-auto font-sans text-base md:text-lg font-light leading-relaxed",
          dark ? "text-warm-sand/80" : "text-secondary-text"
        )}>
          {subhead}
        </p>
      )}
    </motion.div>
  );
}
