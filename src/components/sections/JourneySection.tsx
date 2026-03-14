"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const journeySteps = [
  { num: "01", title: "Choose Your Theme", desc: "Heartbreak, burnout, grief, or identity — select the retreat designed for where you are right now." },
  { num: "02", title: "Pick Your Destination", desc: "Thailand, Dominican Republic, or upcoming locations in Peru and Colombia. Same quality, different landscape." },
  { num: "03", title: "We Handle Everything", desc: "Accommodations, meals, practitioners, ceremonies, excursions, transfers. Your only job is to arrive." },
  { num: "04", title: "Leave Renewed", desc: "Seven nights of guided therapeutic work, cultural immersion, and deep rest — plus aftercare to keep it going." },
];

export default function JourneySection() {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Your Journey"
          headline="Four Steps to Transformation"
          subhead="Every retreat is built around a specific life challenge — not a generic wellness menu. Here's how it works."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-14 bg-pure-white rounded-2xl overflow-hidden border border-brand-border shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 text-center relative group hover:bg-warm-sand/30 transition-all duration-300 ${
                i < journeySteps.length - 1 ? "lg:border-r border-brand-border/50" : ""
              } ${i < 2 ? "sm:border-b lg:border-b-0 border-brand-border/50" : ""}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-serif text-3xl font-semibold text-terracotta mb-2">{step.num}</div>
              <h4 className="font-sans text-[15px] font-semibold text-deep-forest mb-2">{step.title}</h4>
              <p className="font-sans text-[13px] text-secondary-text leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
