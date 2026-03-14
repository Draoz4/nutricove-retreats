"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

interface PhotoGalleryProps {
  images: string[];
  resortName: string;
}

export default function PhotoGallery({ images, resortName }: PhotoGalleryProps) {
  if (images.length < 2) return null;

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Gallery" headline="A Glimpse Inside" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {images.slice(0, 12).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "h-80" : "h-40"}`}>
                <Image
                  src={img}
                  alt={`${resortName} gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
