"use client";

import { motion } from "framer-motion";
import {
  Home, UtensilsCrossed, Brain, Flower2, Hand,
  Flame, TreePine, Smartphone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const items = [
  { icon: Home, title: "7 Nights Accommodation" },
  { icon: UtensilsCrossed, title: "All Meals & Beverages" },
  { icon: Brain, title: "Guided Transformation Sessions" },
  { icon: Flower2, title: "Daily Yoga & Meditation" },
  { icon: Hand, title: "Spa & Bodywork" },
  { icon: Flame, title: "Ceremonies & Rituals" },
  { icon: TreePine, title: "Curated Excursions" },
  { icon: Smartphone, title: "Aftercare Integration" },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-deep-forest py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(184,148,62,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="All-Inclusive"
          headline="Everything Is Included"
          subhead="One price. No hidden fees. No surprise add-ons."
          dark
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-center gap-3 rounded-xl bg-pure-white/[0.05] px-5 py-4 hover:bg-pure-white/[0.08] transition-colors duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-serif text-sm md:text-base text-pure-white leading-tight">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
