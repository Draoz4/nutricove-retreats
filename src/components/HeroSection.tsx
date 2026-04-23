"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import TextReveal from "@/components/ui/text-reveal";
import AnimatedStat from "@/components/ui/animated-stat";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

interface HeroSectionProps {
  label?: string;
  headline?: string;
  highlightWord?: string;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Background video slug (e.g. "home"). Looks up /videos/{slug}.{webm,mp4} + /posters/{slug}.jpg */
  videoSlug?: string;
}

export default function HeroSection({
  label = "Curated Wellness Retreats Worldwide",
  headline = "Healing Has a Destination",
  highlightWord = "Destination",
  subtext = "Seven days, five nights of clinically-guided transformation at world-class retreat centers. You pick the life challenge. We handle everything else.",
  primaryCta = { label: "Take the Quiz", href: "/#themes" },
  secondaryCta,
  videoSlug,
}: HeroSectionProps) {
  const headlineParts = highlightWord
    ? headline.split(highlightWord)
    : [headline];

  return (
    <section className="relative overflow-hidden bg-deep-forest min-h-[100vh] flex flex-col items-center justify-center">
      {/* Video background (if provided), otherwise ambient light effects */}
      {videoSlug ? (
        <HeroBackgroundVideo slug={videoSlug} overlayOpacity={62} />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none isolate opacity-50 contain-strict"
          >
            <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(184,148,62,0.08)_0,rgba(184,148,62,0.02)_50%,transparent_80%)]" />
            <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(184,148,62,0.06)_0,rgba(184,148,62,0.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(184,148,62,0.04)_0,rgba(184,148,62,0.02)_80%,transparent_100%)]" />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgba(27,42,33,0.95)_75%)]"
          />
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(184,148,62,0.12)_0%,transparent_70%)]"
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center pt-32 pb-24">
        {/* Animated content group with blur-slide transitions */}
        <AnimatedGroup variants={transitionVariants}>
          {/* Animated badge pill */}
          <Link
            href="#destinations"
            className="group mx-auto flex w-fit items-center gap-4 rounded-full border border-gold/20 bg-deep-forest/60 backdrop-blur-sm p-1 pl-4 shadow-md shadow-black/10 transition-all duration-300 hover:border-gold/40"
          >
            <span className="text-gold-light text-sm font-sans tracking-wide">
              {label}
            </span>
            <span className="block h-4 w-0.5 bg-gold/30" />
            <div className="bg-gold/10 group-hover:bg-gold/20 size-6 overflow-hidden rounded-full duration-500">
              <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3 text-gold-light" />
                </span>
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3 text-gold-light" />
                </span>
              </div>
            </div>
          </Link>

          {/* Main headline with word-by-word blur reveal + gradient highlight */}
          <TextReveal
            as="h1"
            text={headline}
            highlightWord={highlightWord}
            delay={0.2}
            stagger={0.09}
            className="mt-8 max-w-4xl mx-auto text-balance font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-pure-white leading-[1.1]"
          />

          {/* Subtext */}
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg font-sans text-pure-white/55 font-light leading-relaxed">
            {subtext}
          </p>
        </AnimatedGroup>

        {/* CTA Buttons with staggered animation */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-terracotta hover:bg-terracotta-hover text-pure-white font-sans font-medium px-8 text-base shadow-lg shadow-terracotta/20 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/30"
          >
            <Link href={primaryCta.href}>
              <span className="flex items-center gap-2">
                {primaryCta.label}
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </Button>

          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-gold/30 bg-transparent text-gold-light hover:bg-gold/10 hover:text-gold-light font-sans px-8 text-base"
            >
              <Link href={secondaryCta.href}>
                <span>{secondaryCta.label}</span>
              </Link>
            </Button>
          )}
        </AnimatedGroup>

        {/* Stats bar with delayed stagger */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 1.2,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <AnimatedStat value={5} label="Night Programs" delay={0} />
          <div className="h-8 w-px bg-gold/20 hidden sm:block" />
          <AnimatedStat value={4} label="Healing Themes" delay={150} />
          <div className="h-8 w-px bg-gold/20 hidden sm:block" />
          <AnimatedStat value={2} label="Global Destinations" delay={300} />
          <div className="h-8 w-px bg-gold/20 hidden sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-gold-light">All</p>
            <p className="text-xs font-sans uppercase tracking-[0.16em] text-pure-white/40 mt-1">Inclusive</p>
          </div>
        </AnimatedGroup>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
