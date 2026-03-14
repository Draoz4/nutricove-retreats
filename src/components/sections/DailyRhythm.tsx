"use client";

import { motion, type Variants } from "framer-motion";
import {
  Sun, Flower2, UtensilsCrossed, Brain,
  Palmtree, BookOpen, Wind, Moon, Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const dailyRhythm = [
  { time: "6:30 AM", activity: "Sunrise beach meditation or earthing walk", icon: Sun },
  { time: "7:00 AM", activity: "Morning yoga", icon: Flower2 },
  { time: "8:30 AM", activity: "Organic breakfast", icon: UtensilsCrossed },
  { time: "9:30 AM", activity: "Guided Transformation Session (90 min)", icon: Brain },
  { time: "11:00 AM", activity: "Free time / optional add-ons / pool / beach", icon: Palmtree },
  { time: "12:30 PM", activity: "Organic lunch", icon: UtensilsCrossed },
  { time: "2:00 PM", activity: "Scheduled activity (varies by theme and day)", icon: Sparkles },
  { time: "4:00 PM", activity: "Free time / journaling / rest", icon: BookOpen },
  { time: "5:30 PM", activity: "Sunset yoga or breathwork", icon: Wind },
  { time: "7:00 PM", activity: "Organic dinner", icon: UtensilsCrossed },
  { time: "8:30 PM", activity: "Evening ceremony or experience", icon: Moon },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function DailyRhythm() {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Daily Rhythm"
          headline="A Day at the Retreat"
          subhead="The shared daily structure across all themes and destinations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-10"
        >
          {/* Timeline line */}
          <div className="absolute left-[26px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/30 via-terracotta/20 to-gold/30" />

          {dailyRhythm.map((entry, i) => {
            const IconComponent = entry.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex items-start gap-5 py-4 group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 w-[52px] shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-cream border-2 border-gold/20 flex items-center justify-center group-hover:border-terracotta/40 group-hover:bg-terracotta/5 transition-all duration-300">
                    <IconComponent className="w-4 h-4 text-terracotta/70 group-hover:text-terracotta transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex items-start gap-4 py-1.5">
                  <span className="font-sans text-sm font-semibold text-terracotta w-[70px] shrink-0">
                    {entry.time}
                  </span>
                  <span className="font-sans text-sm text-body-text font-light leading-relaxed">
                    {entry.activity}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
