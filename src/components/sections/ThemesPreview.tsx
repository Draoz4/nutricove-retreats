"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const themes = [
  { name: "Release", color: "bg-terracotta", textColor: "text-terracotta" },
  { name: "Reset", color: "bg-ocean", textColor: "text-ocean" },
  { name: "Rise", color: "bg-sage", textColor: "text-sage" },
  { name: "Reconnect", color: "bg-gold", textColor: "text-gold" },
];

export default function ThemesPreview() {
  const [iframeHeight, setIframeHeight] = useState(300);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleMessage = useCallback((e: MessageEvent) => {
    if (typeof e.data === "object" && e.data !== null) {
      const height = e.data.height || e.data.iframeHeight || e.data.scrollHeight;
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
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Retreat Themes"
          headline="Which One Speaks to You?"
          subhead="Take the quiz to discover which retreat theme fits where you are right now."
        />

        {/* Theme dots in a row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-14"
        >
          {themes.map((theme, i) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2.5"
            >
              <div className={cn("w-3 h-3 rounded-full", theme.color)} />
              <span
                className={cn(
                  "font-sans text-sm md:text-base font-semibold tracking-wide uppercase",
                  theme.textColor
                )}
              >
                {theme.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Quiz embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative bg-deep-forest rounded-2xl p-6 md:p-10 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,148,62,0.1),transparent)]"
          />
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-block text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-3 text-gold-light">
              Find Your Fit
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-pure-white mb-6 text-center">
              Not Sure Which Theme Is Right for You?
            </h3>
            <div className="w-full max-w-2xl mx-auto">
              <iframe
                ref={iframeRef}
                src="https://api.leadconnectorhq.com/widget/quiz/LnXn0FbY0NJWX02U0bNv"
                style={{
                  border: "none",
                  width: "100%",
                  height: iframeHeight + "px",
                  borderRadius: "12px",
                  transition: "height 0.3s ease",
                }}
                scrolling="no"
                id="LnXn0FbY0NJWX02U0bNv"
                title="Retreat Theme Quiz"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
