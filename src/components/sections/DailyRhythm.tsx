"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const dailyRhythm = [
  { time: "6:30 AM", activity: "Sunrise beach meditation or earthing walk" },
  { time: "7:00 AM", activity: "Morning yoga" },
  { time: "8:30 AM", activity: "Organic breakfast" },
  { time: "9:30 AM", activity: "Guided Transformation Session (90 min)" },
  { time: "11:00 AM", activity: "Free time / optional add-ons / pool / beach" },
  { time: "12:30 PM", activity: "Organic lunch" },
  { time: "2:00 PM", activity: "Scheduled activity (varies by theme and day)" },
  { time: "4:00 PM", activity: "Free time / journaling / rest" },
  { time: "5:30 PM", activity: "Sunset yoga or breathwork" },
  { time: "7:00 PM", activity: "Organic dinner" },
  { time: "8:30 PM", activity: "Evening ceremony or experience" },
];

export default function DailyRhythm() {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Daily Rhythm" headline="A Day at the Retreat" subhead="The shared daily structure across all themes and destinations." />
        <div className="space-y-0 mt-10">
          {dailyRhythm.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-start gap-5 py-4 border-b border-brand-border/50 last:border-0"
            >
              <span className="font-sans text-sm font-semibold text-terracotta w-20 shrink-0">{entry.time}</span>
              <span className="font-sans text-sm text-body-text font-light">{entry.activity}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
