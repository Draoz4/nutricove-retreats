"use client";

import { motion, type Variants } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { leadershipTeam } from "@/data/leadership";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1,
    },
  },
};

export default function Leadership() {
  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(27,42,33,0.03),transparent)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Leadership"
          headline="Who Guides Your Experience"
          subhead="Every retreat is led by practitioners who combine deep expertise with genuine care for your transformation."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14"
        >
          {leadershipTeam.map((person) => (
            <motion.div
              key={person.name}
              variants={cardVariants}
              className="group bg-pure-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Gradient accent bar */}
              <div className="h-1 bg-gradient-to-r from-gold via-terracotta to-sage opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="p-8">
                {/* Avatar circle with initials */}
                <div className="w-16 h-16 rounded-full bg-deep-forest/8 flex items-center justify-center mb-5 ring-2 ring-gold/20 group-hover:ring-gold/40 transition-all">
                  <span className="font-serif text-2xl text-deep-forest font-semibold">
                    {person.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                {/* Name & credentials */}
                <h3 className="font-serif text-2xl text-deep-forest leading-tight">
                  {person.name}
                  {person.credentials && (
                    <span className="text-sm font-semibold text-gold ml-1">
                      , {person.credentials}
                    </span>
                  )}
                </h3>

                {/* Title */}
                <p className="text-[11px] font-sans font-bold tracking-[0.12em] uppercase text-terracotta mt-1 mb-4">
                  {person.title}
                </p>

                {/* Bio */}
                <p className="text-sm text-secondary-text leading-relaxed font-light">
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
