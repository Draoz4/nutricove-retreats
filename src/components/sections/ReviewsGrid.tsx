"use client";

import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";
import type { Review } from "@/types";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

interface ReviewsGridProps {
  reviews?: Review[];
}

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="bg-warm-white py-24 relative overflow-hidden">
      {/* Subtle ambient decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,148,62,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Guest Reviews" headline="What Guests Are Saying" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.name + review.date}
              variants={cardVariants}
              className={cn(
                "group bg-pure-white rounded-2xl p-6 ring-1 ring-brand-border hover:ring-gold/30 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
                i === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-3 -scale-x-100" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={cn(
                      "w-4 h-4",
                      j < review.rating
                        ? "fill-gold text-gold"
                        : "fill-brand-border/30 text-transparent"
                    )}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-body-text leading-relaxed font-light line-clamp-5">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-brand-border/50">
                {/* Avatar circle */}
                <div className="w-9 h-9 rounded-full bg-deep-forest/8 flex items-center justify-center shrink-0">
                  <span className="font-sans text-xs font-bold text-deep-forest">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="font-sans text-sm font-semibold text-deep-forest block truncate">
                    {review.name}
                  </span>
                  <span className="text-xs text-muted-text">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
