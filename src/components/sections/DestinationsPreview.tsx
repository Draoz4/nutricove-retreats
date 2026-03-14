"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const destinations = [
  {
    href: "/destinations/thailand",
    image: "/images/thailand/pool-villa.jpg",
    badge: "Flagship",
    name: "Narai Healing Sanctuary",
    location: "Lipa Noi, Koh Samui — Thailand",
    desc: "Beachfront on Koh Samui's western coast. Ancient Thai healing arts meet modern therapeutic practice — sunrise yoga, temple excursions, and evening beach rituals.",
    tags: ["Beachfront", "Thai Healing Arts", "Full Spa", "55 Guests"],
  },
  {
    href: "/destinations/dominican-republic",
    image: "/images/zaria/hero-aerial-pool.jpg",
    badge: "Now Open",
    name: "Zaria Eco Retreat",
    location: "El Valle, Samaná — Dominican Republic",
    desc: "Nestled in lush jungle hills, walking distance to pristine Caribbean beaches. Whale watching, waterfall hikes, horseback riding, and the Zaria Kitchen & Lab.",
    tags: ["Jungle & Beach", "Whale Watching", "Waterfall Tours", "Horseback Riding"],
  },
];

const comingSoon = [
  { name: "Peru", desc: "The ancestral home of plant medicine traditions. Our Peruvian location will honor indigenous healing lineages in their birthplace." },
  { name: "Colombia", desc: "Caribbean warmth meets Andean mysticism. One of the richest healing landscapes on Earth." },
];

export default function DestinationsPreview() {
  return (
    <section className="bg-cream py-24" id="destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Destinations"
          headline="Where Healing Happens"
          subhead="Each location is chosen for its natural beauty, cultural depth, and capacity to hold transformative work."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link href={d.href} className="group rounded-3xl overflow-hidden bg-pure-white border border-brand-border shadow-[0_2px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 block">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/20 to-deep-forest/70 z-10" />
                  <Image src={d.image} alt={d.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 z-20">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase bg-pure-white/10 text-pure-white/90 backdrop-blur-sm border border-white/10 mb-2">{d.badge}</span>
                    <h3 className="font-serif text-4xl text-pure-white leading-tight">{d.name}</h3>
                    <p className="text-sm text-pure-white/65 mt-1">{d.location}</p>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm text-secondary-text leading-relaxed mb-5">{d.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {d.tags.map((h) => (
                      <span key={h} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage/8 text-sage border border-sage/15">{h}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-terracotta group-hover:text-terracotta-hover transition-colors">
                    View Destination &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          {comingSoon.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-3xl overflow-hidden bg-pure-white border border-brand-border opacity-50"
            >
              <div className="relative h-48 bg-gradient-to-br from-deep-forest/80 to-warm-charcoal/60 flex items-end p-7">
                <div>
                  <h3 className="font-serif text-3xl text-pure-white">{d.name}</h3>
                  <p className="text-sm text-pure-white/50 mt-1">Location Coming Soon</p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm text-secondary-text leading-relaxed mb-4">{d.desc}</p>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/15">Coming 2027</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
