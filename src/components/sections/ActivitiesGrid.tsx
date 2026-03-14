"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import type { Activity } from "@/types";

interface ActivitiesGridProps {
  activities: Activity[];
  country: string;
}

export default function ActivitiesGrid({ activities, country }: ActivitiesGridProps) {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Activities & Excursions" headline={`Explore ${country}`} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-pure-white border border-brand-border rounded-xl p-5 text-center hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              <p className="font-sans text-sm font-medium text-deep-forest">{activity.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
