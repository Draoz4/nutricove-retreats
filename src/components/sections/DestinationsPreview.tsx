"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { WorldMap } from "@/components/ui/map";

const mapDots = [
  {
    start: { lat: 25.7617, lng: -80.1918 },
    end: {
      lat: 9.512,
      lng: 100.0136,
      label: "Koh Samui",
      href: "/destinations/thailand",
    },
  },
  {
    start: { lat: 25.7617, lng: -80.1918 },
    end: {
      lat: 19.2074,
      lng: -69.3363,
      label: "Saman\u00e1",
      href: "/destinations/dominican-republic",
    },
  },
  {
    start: { lat: 9.512, lng: 100.0136 },
    end: {
      lat: -8.5069,
      lng: 115.2625,
      label: "Bali \u2022 Soon",
    },
  },
  {
    start: { lat: 25.7617, lng: -80.1918 },
    end: {
      lat: 9.7489,
      lng: -83.7534,
      label: "Costa Rica \u2022 Soon",
    },
  },
  {
    start: { lat: 25.7617, lng: -80.1918 },
    end: {
      lat: -13.1631,
      lng: -72.545,
      label: "Peru \u2022 Soon",
    },
  },
];

export default function DestinationsPreview() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Destinations"
          headline="Where Healing Happens"
          subhead="Click an active destination to explore. Our network is expanding across the globe."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <WorldMap
            dots={mapDots}
            lineColor="#B8943E"
            animationDuration={2}
            loop
          />
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-gold" />
            <span className="text-xs font-sans text-secondary-text">
              Active Destinations
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary-text/30" />
            <span className="text-xs font-sans text-secondary-text">
              Coming Soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
