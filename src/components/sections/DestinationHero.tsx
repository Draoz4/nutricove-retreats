"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import type { Destination } from "@/types";

// Map destination slugs to their video slugs
const DESTINATION_VIDEO_MAP: Record<string, string> = {
  thailand: "thailand",
  "dominican-republic": "dominican-republic",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.2,
    },
  },
};

interface DestinationHeroProps {
  destination: Destination;
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
  const videoSlug = DESTINATION_VIDEO_MAP[destination.slug];

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {videoSlug ? (
        <HeroBackgroundVideo slug={videoSlug} overlayOpacity={50} />
      ) : destination.heroImage ? (
        <>
          <Image
            src={destination.heroImage}
            alt={destination.resortName}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-deep-forest/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/30 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-deep-forest to-ocean/30" />
      )}

      {/* Gold ambient light at top */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(184,148,62,0.08)_0%,transparent_70%)] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-20 pt-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge className="bg-gold/20 text-gold-light border-gold/30 backdrop-blur-sm text-xs font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full">
              {destination.badge}
            </Badge>
          </motion.div>

          {/* Resort name */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pure-white leading-[1.05] mt-5"
          >
            {destination.resortName}
          </motion.h1>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mt-4">
            <MapPin className="w-4 h-4 text-gold-light" />
            <span className="font-sans text-lg text-pure-white/70 tracking-wide">
              {destination.location}
            </span>
          </motion.div>

          {/* Highlight pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-8">
            {destination.highlights.slice(0, 4).map((h) => (
              <span
                key={h}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-pure-white/10 text-pure-white/80 backdrop-blur-sm border border-pure-white/10"
              >
                {h}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
