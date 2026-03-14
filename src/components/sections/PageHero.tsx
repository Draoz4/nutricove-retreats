"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", bounce: 0.3, duration: 1.2 },
  },
};

interface PageHeroProps {
  label: string;
  headline: string;
  subtext?: string;
}

export default function PageHero({ label, headline, subtext }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-deep-forest py-24 md:py-32">
      {/* Ambient light effects */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none isolate opacity-50"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(184,148,62,0.08)_0,rgba(184,148,62,0.02)_50%,transparent_80%)]" />
      </div>
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(184,148,62,0.12)_0%,transparent_70%)]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3 text-gold-light"
        >
          {label}
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-pure-white mb-6 leading-tight"
        >
          {headline}
        </motion.h1>
        {subtext && (
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg text-pure-white/55 font-light leading-relaxed max-w-xl mx-auto"
          >
            {subtext}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
