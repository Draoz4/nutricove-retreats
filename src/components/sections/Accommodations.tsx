"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import type { Accommodation } from "@/types";

interface AccommodationsProps {
  accommodations: Accommodation[];
}

export default function Accommodations({ accommodations }: AccommodationsProps) {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Accommodations" headline="Your Home for the Week" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {accommodations.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-pure-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="relative h-56">
                <Image src={room.image} alt={room.name} fill className="object-cover" />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-2xl text-deep-forest">{room.name}</h3>
                  <span className="text-xs font-medium text-muted-text bg-cream px-3 py-1 rounded-full">{room.capacity}</span>
                </div>
                <p className="text-sm text-secondary-text font-light leading-relaxed mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((a) => (
                    <span key={a} className="text-xs text-body-text bg-cream/80 px-2.5 py-1 rounded">{a}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
