"use client";

import { motion, type Variants } from "framer-motion";
import {
  Sun, Mountain, Waves, Leaf,
  Heart, Compass, Flame, Droplets,
  Wind, UtensilsCrossed, HandHeart, Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { Activity } from "@/types";

// Map activity names to icons for visual richness
const activityIconMap: Record<string, React.ElementType> = {
  "Sunrise Beach Meditation": Sun,
  "Temple Excursions": Compass,
  "Thai Herbal Workshops": Leaf,
  "Waterfall Hikes": Droplets,
  "Muay Thai": Flame,
  "Thai Massage": HandHeart,
  "Herbal Steam Ceremonies": Wind,
  "Snorkeling": Waves,
  "Kayaking": Waves,
  "Cooking Classes": UtensilsCrossed,
  "Monk Chats": Sparkles,
  "Contrast Therapy": Droplets,
  "Whale Watching (Seasonal)": Waves,
  "Waterfall Tours": Droplets,
  "Boat Rides to Playa Ermitaño": Waves,
  "Coffee & Cacao Route": Leaf,
  "Zipline Tours": Mountain,
  "Horseback Riding": Compass,
  "Beach Meditation": Sun,
  "Jungle Hikes": Mountain,
  "Cooking at Zaria Kitchen & Lab": UtensilsCrossed,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

interface ActivitiesGridProps {
  activities: Activity[];
  country: string;
}

export default function ActivitiesGrid({ activities, country }: ActivitiesGridProps) {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Activities & Excursions" headline={`Explore ${country}`} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10"
        >
          {activities.map((activity) => {
            const IconComponent = activityIconMap[activity.name] || Heart;
            return (
              <motion.div
                key={activity.name}
                variants={itemVariants}
                className="group bg-pure-white border border-brand-border rounded-xl p-5 text-center hover:-translate-y-1 hover:shadow-md hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-sage/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/10 transition-colors">
                  <IconComponent className="w-5 h-5 text-sage group-hover:text-gold transition-colors" />
                </div>
                <p className="font-sans text-sm font-medium text-deep-forest leading-snug">
                  {activity.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
