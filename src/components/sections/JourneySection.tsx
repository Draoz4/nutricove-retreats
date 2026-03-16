"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Choose Your Theme",
    description: "Pick the life challenge that matches where you are right now.",
  },
  {
    step: "02",
    title: "Pick Your Destination",
    description: "Thailand, Dominican Republic, or one of our upcoming locations.",
  },
  {
    step: "03",
    title: "Complete Your Intake",
    description: "A brief wellness conversation to tailor your experience.",
  },
  {
    step: "04",
    title: "Transform",
    description: "Seven nights of clinically-guided transformation.",
  },
];

export default function JourneySection() {
  return (
    <section className="bg-warm-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-4 text-terracotta">
            Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-deep-forest">
            Four Steps to Transformation
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal connecting line — hidden on mobile */}
          <div className="hidden md:block absolute top-6 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-terracotta/30 via-gold/30 to-sage/30" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="text-center"
              >
                {/* Circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-deep-forest flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-xs font-sans font-bold tracking-wider text-gold-light">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-deep-forest mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-secondary-text font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
