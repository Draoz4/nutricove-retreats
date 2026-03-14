"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import type { Review } from "@/types";

interface ReviewsGridProps {
  reviews?: Review[];
}

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Guest Reviews" headline="What Guests Are Saying" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name + review.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-pure-white border border-brand-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-body-text leading-relaxed mb-4 font-light">{review.text}</p>
              <div className="flex items-center justify-between pt-3 border-t border-brand-border/50">
                <span className="font-sans text-sm font-semibold text-deep-forest">{review.name}</span>
                <span className="text-xs text-muted-text">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
