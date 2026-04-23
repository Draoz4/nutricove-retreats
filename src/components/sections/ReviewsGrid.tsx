"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { Review } from "@/types";

interface ReviewsGridProps {
  reviews?: Review[];
}

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  const handleChange = (index: number) => {
    if (!reviews || index === active || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    if (!reviews) return;
    const newIndex = active === 0 ? reviews.length - 1 : active - 1;
    handleChange(newIndex);
  };

  const handleNext = () => {
    if (!reviews) return;
    const newIndex = active === reviews.length - 1 ? 0 : active + 1;
    handleChange(newIndex);
  };

  // Autoplay
  useEffect(() => {
    if (!reviews || reviews.length <= 1 || paused) return;
    autoplayTimerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % reviews.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }, 7000);
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [reviews, paused]);

  if (!reviews || reviews.length === 0) return null;
  const current = reviews[active];

  return (
    <section className="bg-warm-white py-28 relative overflow-hidden">
      {/* Ambient decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(184,148,62,0.05)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(191,99,54,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Guest Reviews" headline="What Guests Are Saying" />

        <div
          className="mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote + giant index */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-6 md:gap-10"
          >
            {/* Giant index number */}
            <span
              className="font-serif text-[100px] md:text-[140px] leading-none text-deep-forest/[0.08] select-none shrink-0 transition-all duration-500"
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {String(active + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 pt-4 md:pt-8 min-w-0">
              {/* Stars */}
              <div
                className={`flex items-center gap-0.5 mb-6 transition-all duration-300 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                aria-label={`${current.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < current.rating
                        ? "fill-gold text-gold"
                        : "fill-brand-border/30 text-transparent"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className={`font-serif text-xl md:text-3xl font-light leading-[1.4] text-deep-forest tracking-tight transition-all duration-300 before:content-['\\201C'] before:text-gold/60 before:mr-1 after:content-['\\201D'] after:text-gold/60 after:ml-1 ${
                  isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                }`}
              >
                {current.text}
              </blockquote>

              {/* Author info */}
              <div
                className={`mt-10 transition-all duration-300 delay-100 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar circle with first letter */}
                  <div className="relative w-12 h-12 rounded-full bg-deep-forest/8 flex items-center justify-center ring-2 ring-gold/20">
                    <span className="font-serif text-lg text-deep-forest">
                      {current.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-deep-forest">
                      {current.name}
                    </p>
                    <p className="text-sm text-secondary-text">
                      Guest
                      <span className="mx-2 text-deep-forest/20">/</span>
                      <span>{current.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation — editorial line-selector */}
          <div className="mt-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Line indicators */}
              <div className="flex items-center gap-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleChange(index)}
                    className="group relative py-4"
                    aria-label={`Go to review ${index + 1}`}
                  >
                    <span
                      className={`block h-px transition-all duration-500 ease-out ${
                        index === active
                          ? "w-12 bg-deep-forest"
                          : "w-6 bg-deep-forest/20 group-hover:w-8 group-hover:bg-deep-forest/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs text-secondary-text tracking-[0.2em] uppercase font-sans">
                {String(active + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full text-deep-forest/40 hover:text-deep-forest hover:bg-deep-forest/5 transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full text-deep-forest/40 hover:text-deep-forest hover:bg-deep-forest/5 transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
