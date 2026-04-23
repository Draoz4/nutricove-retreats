"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FloatingConsultButtonProps {
  revolvingText?: string;
  revolvingSpeed?: number;
  popupHeading?: string;
  popupDescription?: string;
  popupBadgeText?: string;
  ctaButtonText?: string;
  ctaHref?: string;
  centerImage?: string;
}

/**
 * Floating consult button — revolving text around a brand mark, opens a modal.
 * Mounted once at the root layout so it appears on every page.
 */
export default function FloatingConsultButton({
  revolvingText = "BEGIN YOUR JOURNEY · BOOK A CALL · ",
  revolvingSpeed = 14,
  popupHeading = "Ready to Begin?",
  popupDescription = "A brief, no-obligation conversation with our intake team to explore which retreat theme and destination fits where you are right now.",
  popupBadgeText = "Free",
  ctaButtonText = "Book a Discovery Call",
  ctaHref = "/book",
  centerImage,
}: FloatingConsultButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-deep-forest/40 backdrop-blur-sm z-[60]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[70] bg-warm-white rounded-3xl shadow-2xl p-7 md:p-9 max-w-md w-[calc(100vw-2rem)] border border-brand-border"
            style={{
              bottom: "calc(2rem + 150px)",
              right: "2rem",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute -top-12 -right-2 text-pure-white hover:text-gold-light transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="space-y-5">
              {/* Badge + heading */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-3xl md:text-4xl text-deep-forest leading-[1.1]">
                  {popupHeading}
                </h3>
                <span className="shrink-0 text-deep-forest px-3 py-1 border border-deep-forest/20 rounded-full text-xs font-sans tracking-[0.15em] uppercase">
                  {popupBadgeText}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-body-text leading-relaxed font-light">
                {popupDescription}
              </p>

              {/* CTA */}
              <Link
                href={ctaHref}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-terracotta hover:bg-terracotta-hover text-pure-white px-8 py-4 rounded-full font-sans font-medium text-base shadow-lg shadow-terracotta/20 hover:shadow-xl hover:shadow-terracotta/30 transition-all duration-300"
              >
                {ctaButtonText}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button — bottom right */}
      <div
        className="fixed z-[65] bottom-6 right-6 md:bottom-8 md:right-8"
        aria-hidden={isOpen}
      >
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          className="relative cursor-pointer group w-[118px] h-[118px] md:w-[140px] md:h-[140px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3 }}
          aria-label="Open booking dialog"
        >
          {/* Rotating text ring */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: revolvingSpeed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path
                  id="consult-circle-path"
                  d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
                />
              </defs>
              <text className="fill-deep-forest font-sans font-medium uppercase" style={{ fontSize: "16px", letterSpacing: "0.12em" }}>
                <textPath href="#consult-circle-path" startOffset="0%">
                  {revolvingText}
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Center disc */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 w-[70px] h-[70px] md:w-[84px] md:h-[84px] ${
                centerImage
                  ? "bg-deep-forest"
                  : "bg-gradient-to-br from-terracotta to-gold flex items-center justify-center"
              }`}
            >
              {centerImage ? (
                <img
                  src={centerImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-7 h-7 md:w-9 md:h-9 text-pure-white"
                >
                  <path
                    d="M12 2l2.5 6.5L21 10l-5 4.5L17.5 21 12 17.5 6.5 21 8 14.5 3 10l6.5-1.5L12 2z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
          </div>
        </motion.button>
      </div>
    </>
  );
}
