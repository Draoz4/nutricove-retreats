"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const themes = [
  {
    name: "Release",
    subtitle: "Divorce, Breakups & Letting Go",
    description: "A clinically-guided process for releasing attachment, processing grief, and rebuilding identity after the end of a relationship.",
    color: "bg-terracotta",
    textColor: "text-terracotta",
    bgAccent: "bg-terracotta/5",
    borderAccent: "border-terracotta/20",
    forText: "For anyone navigating separation, divorce, or the aftermath of a significant relationship ending.",
  },
  {
    name: "Reset",
    subtitle: "Burnout, Stress & Overstimulation",
    description: "Designed for high-achievers running on empty. Rebuild your nervous system, reclaim rest, and return to clarity.",
    color: "bg-ocean",
    textColor: "text-ocean",
    bgAccent: "bg-ocean/5",
    borderAccent: "border-ocean/20",
    forText: "For professionals, founders, and caregivers who have pushed past their limits.",
  },
  {
    name: "Rise",
    subtitle: "Confidence, Identity & New Chapters",
    description: "Step into the next version of yourself. Build confidence, set boundaries, and design the life you actually want.",
    color: "bg-sage",
    textColor: "text-sage",
    bgAccent: "bg-sage/5",
    borderAccent: "border-sage/20",
    forText: "For anyone at a crossroads — career change, empty nest, midlife reinvention, or simply feeling stuck.",
  },
  {
    name: "Reconnect",
    subtitle: "Relationships, Intimacy & Communication",
    description: "Rebuild the connections that matter. Guided work on communication patterns, intimacy, vulnerability, and trust.",
    color: "bg-gold",
    textColor: "text-gold",
    bgAccent: "bg-gold/5",
    borderAccent: "border-gold/20",
    forText: "For couples, close friends, or anyone wanting to deepen their ability to connect authentically.",
  },
];

export default function ThemesPreview() {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Retreat Themes"
          headline="Choose Your Path"
          subhead="Every retreat is built around one therapeutic theme. You pick the life challenge. We build the program."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl border ${theme.borderAccent} ${theme.bgAccent} p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${theme.color}`} />
                <span className={`text-sm font-sans font-bold tracking-wider uppercase ${theme.textColor}`}>
                  {theme.name}
                </span>
              </div>
              <h3 className="font-serif text-xl text-deep-forest mb-3">
                {theme.subtitle}
              </h3>
              <p className="font-sans text-sm text-secondary-text leading-relaxed mb-4">
                {theme.description}
              </p>
              <p className="font-sans text-xs text-muted-text italic mb-6">
                {theme.forText}
              </p>
              <Link
                href="/book"
                className={`inline-flex items-center gap-1 text-sm font-sans font-medium ${theme.textColor} group-hover:gap-2 transition-all`}
              >
                Book This Theme <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
