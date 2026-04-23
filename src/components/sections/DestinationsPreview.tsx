"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { GlobePolaroids, type PolaroidMarker } from "@/components/ui/cobe-globe-polaroids";

// Active retreat destinations — use our own poster frames as polaroid images
const activeDestinations = [
  {
    id: "koh-samui",
    name: "Koh Samui",
    country: "Thailand",
    location: [9.512, 100.0136] as [number, number],
    href: "/destinations/thailand",
    image: "/posters/thailand.jpg",
    rotate: -4,
  },
  {
    id: "samana",
    name: "Samaná",
    country: "Dominican Republic",
    location: [19.2074, -69.3363] as [number, number],
    href: "/destinations/dominican-republic",
    image: "/posters/dominican-republic.jpg",
    rotate: 3,
  },
];

// Coming soon destinations — Unsplash stock that matches each location
const upcomingDestinations = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    location: [-8.5069, 115.2625] as [number, number],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=200&fit=crop&q=70",
    rotate: 5,
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    country: "Nosara",
    location: [9.7489, -83.7534] as [number, number],
    image: "https://images.unsplash.com/photo-1518131678677-a8a7b5a38b32?w=200&h=200&fit=crop&q=70",
    rotate: -3,
  },
  {
    id: "peru",
    name: "Peru",
    country: "Sacred Valley",
    location: [-13.1631, -72.545] as [number, number],
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=200&h=200&fit=crop&q=70",
    rotate: 4,
  },
];

const polaroidMarkers: PolaroidMarker[] = [
  ...activeDestinations.map((d) => ({
    id: d.id,
    location: d.location,
    image: d.image,
    caption: d.name,
    rotate: d.rotate,
    status: "active" as const,
    href: d.href,
  })),
  ...upcomingDestinations.map((d) => ({
    id: d.id,
    location: d.location,
    image: d.image,
    caption: d.name,
    rotate: d.rotate,
    status: "soon" as const,
  })),
];

export default function DestinationsPreview() {
  return (
    <section className="bg-cream py-24 relative overflow-hidden" id="destinations">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(184,148,62,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Destinations"
          headline="Where Healing Happens"
          subhead="Two active sanctuaries. More on the horizon. Drag the globe to explore."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Polaroid Globe — left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl mx-auto lg:ml-0"
          >
            <GlobePolaroids
              markers={polaroidMarkers}
              markerColor={[0.72, 0.58, 0.24]}
              baseColor={[0.11, 0.17, 0.13]}
              glowColor={[0.97, 0.94, 0.89]}
              dark={1}
              mapBrightness={6}
              diffuse={1.2}
              speed={0.0022}
              className="w-full"
            />
          </motion.div>

          {/* Destination list — right */}
          <div className="space-y-8">
            {/* Active */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_12px_rgba(184,148,62,0.6)]" />
                <span className="text-xs font-sans uppercase tracking-[0.18em] text-secondary-text">
                  Now Welcoming Guests
                </span>
              </div>

              <div className="space-y-3">
                {activeDestinations.map((d, i) => (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={d.href}
                      className="group block p-5 rounded-xl bg-pure-white border border-brand-border hover:border-gold/50 hover:shadow-[0_8px_24px_-12px_rgba(184,148,62,0.25)] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-serif text-xl text-deep-forest">
                              {d.name}
                            </h3>
                            <p className="text-sm font-sans text-secondary-text mt-0.5">
                              {d.country}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-sans text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                          Explore →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coming soon */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-3.5 h-3.5 text-secondary-text/60" />
                <span className="text-xs font-sans uppercase tracking-[0.18em] text-secondary-text/70">
                  On the Horizon
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {upcomingDestinations.map((d, i) => (
                  <motion.span
                    key={d.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-warm-sand/60 text-sm font-sans text-secondary-text"
                  >
                    {d.name}
                    <span className="text-[10px] uppercase tracking-wider text-gold/70">
                      Soon
                    </span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
