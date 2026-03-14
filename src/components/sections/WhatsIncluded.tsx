"use client";

import { motion } from "framer-motion";
import {
  Home, UtensilsCrossed, Brain, Flower2, Hand,
  Flame, TreePine, Car, Smartphone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const items = [
  { icon: Home, title: "7 Nights Accommodation", desc: "Private or shared suites at a handpicked partner resort." },
  { icon: UtensilsCrossed, title: "All Meals & Beverages", desc: "Locally-sourced, nourishing meals. All dietary needs accommodated." },
  { icon: Brain, title: "Guided Transformation Sessions", desc: "Daily clinically-guided group work led by a licensed practitioner." },
  { icon: Flower2, title: "Daily Yoga & Meditation", desc: "Morning sunrise and evening sessions adapted to your retreat arc." },
  { icon: Hand, title: "Spa & Bodywork", desc: "Included massage or bodywork treatment at each destination." },
  { icon: Flame, title: "Ceremonies & Rituals", desc: "Cacao ceremonies, bonfires, breathwork, and healing practices." },
  { icon: TreePine, title: "Curated Excursions", desc: "Temple visits, waterfall hikes, whale watching — unique to each location." },
  { icon: Car, title: "Airport Transfers", desc: "Round-trip transportation from the nearest international airport." },
  { icon: Smartphone, title: "Aftercare Integration", desc: "Post-retreat coaching, digital wellness toolkit, and alumni community." },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-deep-forest py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(184,148,62,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="All-Inclusive"
          headline="Everything Is Included"
          subhead="One price. No hidden fees. No surprise add-ons. Everything you need for seven days of transformation."
          dark
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-pure-white/10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-8 hover:bg-pure-white/[0.03] transition-colors duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-pure-white mb-2">{item.title}</h3>
              <p className="font-sans text-sm text-warm-sand/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
