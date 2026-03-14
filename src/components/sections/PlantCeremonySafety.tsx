"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { plantCeremonyIntro, plantCeremonySafetyItems, plantCeremonyNote } from "@/data/plant-ceremony";

const safetyIcons = ["🤲", "🏥", "🍃", "🙏", "⚕️", "📋"];

export default function PlantCeremonySafety() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Safety & Preparation"
          headline="Sacred Plant Ceremonies"
          subhead="Tradition meets clinical safety. Here's how we approach plant medicine responsibly."
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-secondary-text leading-relaxed text-center max-w-3xl mx-auto mt-8 mb-12"
        >
          {plantCeremonyIntro}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plantCeremonySafetyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-pure-white rounded-2xl p-6 border border-brand-border hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-sage/10 border border-sage/15 mb-4">
                {safetyIcons[i]}
              </div>
              <h4 className="font-sans text-sm font-semibold text-deep-forest mb-2">{item.title}</h4>
              <p className="text-xs text-secondary-text leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-5 bg-sage/5 rounded-xl border border-sage/15 text-center"
        >
          <p className="text-xs text-sage leading-relaxed italic">{plantCeremonyNote}</p>
        </motion.div>

        <div className="text-center mt-8">
          <a href="mailto:retreats@nutricove.com" className="inline-flex items-center text-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors">
            Questions about ceremonies? Contact our team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
