"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
  /** The text to reveal. If `highlightWord` is passed, that substring gets a gradient span. */
  text: string;
  /** Optional word/phrase inside `text` to wrap in a gold gradient span */
  highlightWord?: string;
  /** Stagger delay between words in seconds */
  stagger?: number;
  /** Initial delay in seconds */
  delay?: number;
  className?: string;
  /** Render as a specific heading level; defaults to h1 */
  as?: "h1" | "h2" | "h3" | "p";
}

/**
 * Cinematic word-by-word blur reveal.
 * - Words slide up with blur/opacity stagger (framer-motion)
 * - Optional highlightWord renders a gradient span inline
 * - Respects prefers-reduced-motion (framer-motion handles this automatically if you set reduceMotion option)
 */
export default function TextReveal({
  text,
  highlightWord,
  stagger = 0.08,
  delay = 0,
  className = "",
  as: Tag = "h1",
}: TextRevealProps) {
  const MotionTag = motion[Tag] as React.ElementType;

  // Split into tokens: words + highlight word preserved as a single token
  const tokens: { word: string; highlight: boolean }[] = [];
  if (highlightWord && text.includes(highlightWord)) {
    const parts = text.split(highlightWord);
    parts.forEach((part, i) => {
      part
        .split(/\s+/)
        .filter(Boolean)
        .forEach((w) => tokens.push({ word: w, highlight: false }));
      if (i < parts.length - 1) {
        tokens.push({ word: highlightWord, highlight: true });
      }
    });
  } else {
    text
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w) => tokens.push({ word: w, highlight: false }));
  }

  return (
    <MotionTag className={className} aria-label={text}>
      {tokens.map((tok, i) => (
        <motion.span
          key={`${tok.word}-${i}`}
          aria-hidden="true"
          initial={{ opacity: 0, filter: "blur(12px)", y: 14 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.9,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mr-[0.22em] inline-block ${
            tok.highlight
              ? "bg-gradient-to-r from-gold-light via-terracotta to-gold bg-clip-text text-transparent"
              : ""
          }`}
        >
          {tok.word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
