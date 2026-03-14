"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Destination } from "@/types";

interface DestinationHeroProps {
  destination: Destination;
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {destination.heroImage ? (
        <Image
          src={destination.heroImage}
          alt={destination.resortName}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-deep-forest to-ocean/30" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/30 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 pt-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-3 py-1 rounded text-[10px] font-bold tracking-[0.1em] uppercase bg-pure-white/15 text-pure-white/90 backdrop-blur-sm mb-3"
        >
          {destination.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl text-pure-white leading-tight mb-2"
        >
          {destination.resortName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-sans text-lg text-pure-white/70"
        >
          {destination.location}
        </motion.p>
      </div>
    </section>
  );
}
