"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const destinations = [
  {
    name: "Tulum, Mexico",
    resort: "NutriCove Tulum",
    badge: "Now Open",
    image: "/images/zaria/beach-hammock-palms.jpg",
    href: "/book",
    tags: ["Cenotes", "Mayan Heritage", "Jungle & Beach"],
    available: true,
  },
  {
    name: "Ubud, Bali",
    resort: "NutriCove Bali",
    badge: "Now Open",
    image: "/images/zaria/hero-aerial-pool.jpg",
    href: "/book",
    tags: ["Rice Terraces", "Sacred Temples", "Volcanic Springs"],
    available: true,
  },
  {
    name: "Costa Rica",
    resort: "Coming 2027",
    badge: "Coming Soon",
    image: "/images/zaria/waterfall.jpg",
    href: "#",
    tags: ["Cloud Forest", "Volcanos", "Wildlife"],
    available: false,
  },
  {
    name: "Peru",
    resort: "Coming 2027",
    badge: "Coming Soon",
    image: "/images/thailand/grounds-palms.jpg",
    href: "#",
    tags: ["Sacred Valley", "Andean Traditions", "Altitude Healing"],
    available: false,
  },
];

export default function DestinationsPreview() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Destinations"
          headline="Where Healing Happens"
          subhead="Each destination adds its own cultural healing traditions, landscapes, and excursions to the core therapeutic program."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={dest.href}
                className={cn(
                  "group relative block aspect-[16/10] rounded-2xl overflow-hidden shadow-lg",
                  !dest.available && "pointer-events-none"
                )}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/20 to-transparent" />
                {!dest.available && (
                  <div className="absolute inset-0 bg-deep-forest/40 backdrop-blur-[1px]" />
                )}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      dest.badge === "Now Open"
                        ? "bg-terracotta text-pure-white border-0"
                        : "bg-pure-white/20 text-pure-white border-pure-white/30 backdrop-blur-sm"
                    }
                  >
                    {dest.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold-light" />
                    <span className="text-sm font-sans text-warm-sand/80">
                      {dest.resort}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-pure-white mb-3">
                    {dest.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-sans px-2 py-1 rounded-full bg-pure-white/10 text-pure-white/80 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {dest.available && (
                    <span className="inline-flex items-center gap-1 text-sm font-sans font-medium text-gold-light group-hover:gap-2 transition-all">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
