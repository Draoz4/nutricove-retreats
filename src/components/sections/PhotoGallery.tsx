"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

interface PhotoGalleryProps {
  images: string[];
  resortName: string;
}

export default function PhotoGallery({ images, resortName }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length < 2) return null;

  const displayImages = images.slice(0, 12);

  // Bento grid span pattern for visual variety
  const getSpanClass = (index: number) => {
    if (index === 0) return "col-span-2 row-span-2";
    if (index === 3) return "col-span-2";
    if (index === 7) return "col-span-2";
    return "";
  };

  const getHeight = (index: number) => {
    if (index === 0) return "h-72 md:h-96";
    return "h-40 md:h-52";
  };

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Gallery" headline="A Glimpse Inside" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10"
        >
          {displayImages.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${getSpanClass(i)}`}
              onClick={() => setSelectedImage(img)}
            >
              <div className={`relative ${getHeight(i)}`}>
                <Image
                  src={img}
                  alt={`${resortName} gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-forest/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`${resortName} gallery`}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-pure-white/80 hover:text-pure-white transition-colors p-2"
              aria-label="Close image view"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
