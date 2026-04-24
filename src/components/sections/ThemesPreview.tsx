"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const themes = [
  {
    slug: "release",
    name: "Release",
    subtitle: "Separation & Heartbreak",
    tag: "For letting go",
    accent: "text-terracotta",
    dot: "bg-terracotta",
  },
  {
    slug: "reset",
    name: "Reset",
    subtitle: "Burnout & Exhaustion",
    tag: "For recovery",
    accent: "text-ocean",
    dot: "bg-ocean",
  },
  {
    slug: "return",
    name: "Return",
    subtitle: "Grief & Loss",
    tag: "For grief work",
    accent: "text-sage",
    dot: "bg-sage",
  },
  {
    slug: "reclaim",
    name: "Reclaim",
    subtitle: "Identity & Purpose",
    tag: "For rebuilding",
    accent: "text-gold",
    dot: "bg-gold",
  },
];

function ThemeCard({ theme, index }: { theme: (typeof themes)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered) {
      v.currentTime = 0;
      const p = v.play();
      if (p !== undefined) p.catch(() => {});
    } else {
      v.pause();
    }
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-brand-border/60 bg-deep-forest"
    >
      {/* Poster — visible by default */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(/posters/${theme.slug}.jpg)`,
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Video — plays on hover */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={`/posters/${theme.slug}.jpg`}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
          hovered ? "opacity-100" : "opacity-0"
        )}
      >
        <source src={`/videos/${theme.slug}.webm`} type="video/webm" />
        <source src={`/videos/${theme.slug}.mp4`} type="video/mp4" />
      </video>

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-deep-forest/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Top: tag pill */}
        <div className="flex items-center gap-2">
          <span className={cn("w-1.5 h-1.5 rounded-full", theme.dot)} />
          <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-pure-white/70">
            {theme.tag}
          </span>
        </div>

        {/* Bottom: name + subtitle */}
        <div>
          <h3
            className={cn(
              "font-serif text-4xl md:text-5xl text-pure-white leading-none transition-transform duration-500",
              "group-hover:-translate-y-1"
            )}
          >
            {theme.name}
          </h3>
          <p className="mt-2 text-sm font-sans text-pure-white/70 font-light">
            {theme.subtitle}
          </p>
          <div className="mt-4 h-px w-10 bg-gold/50 group-hover:w-20 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ThemesPreview() {
  const [iframeHeight, setIframeHeight] = useState(640);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleMessage = useCallback((e: MessageEvent) => {
    if (typeof e.data === "object" && e.data !== null) {
      const height = (e.data as { height?: number; iframeHeight?: number; scrollHeight?: number }).height ||
        (e.data as { iframeHeight?: number }).iframeHeight ||
        (e.data as { scrollHeight?: number }).scrollHeight;
      if (typeof height === "number" && height > 0) {
        setIframeHeight(height);
      }
    }
    if (typeof e.data === "string") {
      try {
        const parsed = JSON.parse(e.data);
        const height = parsed.height || parsed.iframeHeight || parsed.scrollHeight;
        if (typeof height === "number" && height > 0) {
          setIframeHeight(height);
        }
      } catch {
        // not JSON
      }
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    window.addEventListener("message", handleMessage);
    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  return (
    <section className="bg-warm-white py-24" id="themes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Retreat Themes"
          headline="Which One Speaks to You?"
          subhead="Four paths. One week. Hover to feel each one."
        />

        {/* Theme cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {themes.map((theme, i) => (
            <ThemeCard key={theme.slug} theme={theme} index={i} />
          ))}
        </div>

        {/* Quiz embed — clean white card to blend with the quiz's native white UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mt-20 max-w-3xl mx-auto"
        >
          {/* Heading sits on page background */}
          <div className="text-center mb-8">
            <span className="inline-block text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-3 text-gold">
              Find Your Fit
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-deep-forest">
              Not Sure Which Theme Is Right for You?
            </h3>
            <p className="mt-3 text-sm font-sans text-secondary-text max-w-md mx-auto">
              Takes under two minutes. We&apos;ll recommend the retreat theme best matched to where you are right now.
            </p>
          </div>

          {/* White card frames the quiz iframe so its native UI blends cleanly */}
          <div className="relative bg-pure-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(27,42,33,0.12)] ring-1 ring-brand-border/60 overflow-hidden">
            <iframe
              ref={iframeRef}
              src="https://api.leadconnectorhq.com/widget/quiz/LnXn0FbY0NJWX02U0bNv"
              style={{
                border: "none",
                width: "100%",
                height: iframeHeight + "px",
                minHeight: "640px",
                display: "block",
                transition: "height 0.35s ease",
              }}
              scrolling="no"
              id="LnXn0FbY0NJWX02U0bNv"
              title="Retreat Theme Quiz"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
