"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Choose Your Theme",
    description:
      "Four clinically-designed retreat themes, each addressing a specific life challenge. Pick the one that matches where you are right now.",
    image: "/images/zaria/cacao-ceremony.jpg",
  },
  {
    step: "02",
    title: "Pick Your Destination",
    description:
      "Tulum or Bali \u2014 each location adds its own cultural healing traditions, landscapes, and excursions to the core program.",
    image: "/images/zaria/beach-aerial-boats.jpg",
  },
  {
    step: "03",
    title: "Complete Your Intake",
    description:
      "A brief wellness conversation with our team to tailor your experience. We learn about your goals, dietary needs, and any medical considerations.",
    image: "/images/thailand/pool-villa.jpg",
  },
  {
    step: "04",
    title: "Transform",
    description:
      "Seven nights of clinically-guided transformation. Daily therapeutic sessions, yoga, ceremonies, excursions, nourishing meals, and deep rest.",
    image: "/images/zaria/waterfall.jpg",
  },
];

export default function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoplayInterval = 5000;

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          advance();
          return 0;
        }
        return prev + 100 / (autoplayInterval / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [advance, activeIndex]);

  return (
    <section className="bg-warm-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-4 text-terracotta">
            Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-deep-forest">
            Four Steps to Transformation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <motion.button
                key={step.step}
                onClick={() => {
                  setActiveIndex(index);
                  setProgress(0);
                }}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-300 group",
                  activeIndex === index
                    ? "bg-deep-forest text-pure-white shadow-lg"
                    : "bg-transparent hover:bg-cream"
                )}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "text-sm font-sans font-bold tracking-wider mt-1",
                      activeIndex === index ? "text-gold-light" : "text-terracotta"
                    )}
                  >
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-serif text-xl mb-2",
                        activeIndex === index
                          ? "text-pure-white"
                          : "text-deep-forest"
                      )}
                    >
                      {step.title}
                    </h3>
                    {activeIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="font-sans text-sm text-warm-sand/80 leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="mt-4 h-0.5 bg-pure-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gold rounded-full"
                      style={{ width: progress + "%" }}
                    />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pure-white/90 text-deep-forest backdrop-blur-sm">
                {"Step " + steps[activeIndex].step + " of 04"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
