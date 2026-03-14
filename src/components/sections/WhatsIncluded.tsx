"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const includedItems = [
  { icon: "🏠", title: "7 Nights Accommodation", desc: "Private or shared suites at a handpicked partner resort." },
  { icon: "🍽", title: "All Meals & Beverages", desc: "Locally-sourced, nourishing meals. All dietary needs accommodated." },
  { icon: "🧠", title: "Guided Transformation Sessions", desc: "Daily clinically-guided group work led by a licensed practitioner." },
  { icon: "🧘", title: "Daily Yoga & Meditation", desc: "Morning sunrise and evening sessions adapted to your retreat arc." },
  { icon: "💆", title: "Spa & Bodywork", desc: "Included massage or bodywork treatment at each destination." },
  { icon: "🔥", title: "Ceremonies & Rituals", desc: "Cacao ceremonies, bonfires, breathwork, and healing practices." },
  { icon: "🌿", title: "Curated Excursions", desc: "Temple visits, waterfall hikes, whale watching — unique to each location." },
  { icon: "🚐", title: "Airport Transfers", desc: "Round-trip transportation from the nearest international airport." },
  { icon: "📱", title: "Aftercare Integration", desc: "Post-retreat coaching, digital wellness toolkit, and alumni community." },
];

const stats = [
  { val: "7", label: "Night Programs" },
  { val: "4", label: "Therapeutic Themes" },
  { val: "2", label: "Destinations Live" },
  { val: "∞", label: "Aftercare Support" },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-deep-forest py-24 relative overflow-hidden" id="included">
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/[0.03] via-transparent to-sage/[0.03]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="All-Inclusive"
          headline="Everything Is Handled"
          subhead="Your only job is to show up. Every retreat includes:"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {includedItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-pure-white/[0.04] border border-pure-white/[0.06] hover:bg-pure-white/[0.07] hover:border-pure-white/[0.1] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gold/10 shrink-0">
                {item.icon}
              </div>
              <div>
                <h5 className="font-sans text-sm font-semibold text-pure-white mb-1">{item.title}</h5>
                <p className="font-sans text-xs text-pure-white/40 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-12 sm:gap-16 py-12 mt-10 border-t border-pure-white/[0.06] border-b border-b-pure-white/[0.06] flex-wrap">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl font-semibold text-gold-light">{s.val}</div>
              <div className="text-[11px] text-pure-white/35 uppercase tracking-[0.1em] mt-1 font-sans">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
