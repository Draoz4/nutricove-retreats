"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ── Animated organic shape ── */
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/* ── Hero ── */
interface HeroSectionProps {
  headline: string;
  highlightWord?: string;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  label?: string;
  height?: "full" | "large" | "medium";
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export default function HeroSection({
  headline,
  highlightWord,
  subtext,
  primaryCta,
  secondaryCta,
  label,
  height = "full",
}: HeroSectionProps) {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  const renderHeadline = () => {
    if (!highlightWord) return headline;
    const parts = headline.split(highlightWord);
    return (
      <>
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
          {parts[0]}
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold to-terracotta italic">
          {highlightWord}
        </span>
        {parts[1] && (
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            {parts[1]}
          </span>
        )}
      </>
    );
  };

  return (
    <section
      className={`relative ${heightClasses[height]} w-full flex items-center justify-center overflow-hidden`}
    >
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1A12] via-deep-forest to-[#0E1A12]" />

      {/* Subtle color washes */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/[0.04] via-transparent to-sage/[0.04] blur-3xl" />

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-terracotta/[0.12]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-sage/[0.12]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-gold/[0.12]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-terracotta/[0.10]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-sage-light/[0.10]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {label && (
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-10"
          >
            <span className="h-2 w-2 rounded-full bg-terracotta/80" />
            <span className="text-sm text-white/60 tracking-wide font-sans">
              {label}
            </span>
          </motion.div>
        )}

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-[clamp(42px,7vw,76px)] font-light leading-[1.08] mb-6 tracking-tight"
        >
          {renderHeadline()}
        </motion.h1>

        {subtext && (
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-sans text-base sm:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide"
          >
            {subtext}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-full bg-terracotta px-10 py-4 text-sm font-semibold text-pure-white hover:bg-terracotta-hover transition-all shadow-[0_4px_28px_rgba(191,99,54,0.3)] hover:shadow-[0_8px_36px_rgba(191,99,54,0.4)] hover:-translate-y-0.5"
              >
                {primaryCta.label} &rarr;
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-white/15 px-10 py-4 text-sm font-medium text-white/70 hover:bg-white/[0.04] hover:border-white/25 hover:text-white/90 transition-all"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}

        {height === "full" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-[72px] flex flex-col items-center gap-2"
          >
            <span className="text-[11px] text-white/25 tracking-[0.12em] uppercase font-sans">
              Explore
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A12] via-transparent to-[#0E1A12]/80 pointer-events-none" />
    </section>
  );
}
