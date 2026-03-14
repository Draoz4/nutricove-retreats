"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { leadershipTeam } from "@/data/leadership";

export default function Leadership() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Leadership"
          headline="Who Guides Your Experience"
          subhead="Every retreat is led by practitioners who combine deep expertise with genuine care for your transformation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {leadershipTeam.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-pure-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="h-3 bg-gradient-to-r from-gold via-terracotta to-sage" />
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-deep-forest/10 flex items-center justify-center mb-5">
                  <span className="font-serif text-2xl text-deep-forest font-semibold">
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-deep-forest leading-tight">{person.name}{person.credentials && <span className="text-sm font-semibold text-gold">, {person.credentials}</span>}</h3>
                <p className="text-[11px] font-sans font-bold tracking-[0.12em] uppercase text-terracotta mt-1 mb-4">
                  {person.title}
                </p>
                <p className="text-sm text-secondary-text leading-relaxed font-light">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
