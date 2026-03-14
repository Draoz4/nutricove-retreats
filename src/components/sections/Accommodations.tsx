"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Users, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import type { Accommodation } from "@/types";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1,
    },
  },
};

interface AccommodationsProps {
  accommodations: Accommodation[];
}

export default function Accommodations({ accommodations }: AccommodationsProps) {
  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Accommodations" headline="Your Home for the Week" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {accommodations.map((room) => (
            <motion.div
              key={room.name}
              variants={cardVariants}
              className="group bg-pure-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Image with hover zoom */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Capacity badge overlay */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-deep-forest/80 text-pure-white backdrop-blur-sm border-0 flex items-center gap-1.5 px-3 py-1">
                    <Users className="w-3 h-3" />
                    <span className="text-xs">{room.capacity}</span>
                  </Badge>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl text-deep-forest mb-2">
                  {room.name}
                </h3>

                <p className="text-sm text-secondary-text font-light leading-relaxed mb-5">
                  {room.description}
                </p>

                {/* Amenities as check list */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-sage" />
                      </span>
                      <span className="text-xs text-body-text">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
