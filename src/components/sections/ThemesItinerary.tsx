"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { retreatThemes } from "@/data/retreat-themes";

const themeColorMap: Record<string, { accent: string; text: string; bg: string }> = {
  terracotta: { accent: "bg-terracotta", text: "text-terracotta", bg: "bg-terracotta/5" },
  ocean: { accent: "bg-ocean", text: "text-ocean", bg: "bg-ocean/5" },
  sage: { accent: "bg-sage", text: "text-sage", bg: "bg-sage/5" },
  gold: { accent: "bg-gold", text: "text-gold", bg: "bg-gold/5" },
};

export default function ThemesItinerary() {
  const [activeTheme, setActiveTheme] = useState(0);
  const theme = retreatThemes[activeTheme];
  const colors = themeColorMap[theme.color];

  return (
    <section className="bg-deep-forest py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Four Retreat Themes"
          headline="Your 7-Day Journey"
          subhead="Each theme follows a unique therapeutic arc. Tap a theme to see the full day-by-day itinerary."
          dark
        />

        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {retreatThemes.map((t, i) => {
            const c = themeColorMap[t.color];
            return (
              <button
                key={t.slug}
                onClick={() => setActiveTheme(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTheme === i
                    ? `${c.accent} text-pure-white shadow-lg`
                    : "bg-pure-white/10 text-pure-white/60 hover:text-pure-white hover:bg-pure-white/15"
                }`}
              >
                {t.name}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={theme.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-pure-white/5 border border-pure-white/10 rounded-2xl p-8"
          >
            <div className="mb-8">
              <h3 className="font-serif text-3xl text-pure-white mb-1">{theme.name}</h3>
              <p className={`text-sm font-semibold ${colors.text}`}>{theme.subtitle}</p>
              <p className="text-sm text-pure-white/50 font-light mt-3 leading-relaxed">{theme.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {theme.arc.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="text-xs text-pure-white/70">{step}</span>
                    {i < theme.arc.length - 1 && <span className="text-pure-white/30">&rarr;</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {theme.days.map((day) => (
                <div key={day.day} className="flex gap-5 p-4 rounded-xl bg-pure-white/5 border border-pure-white/5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colors.accent}`}>
                    <span className="text-pure-white font-bold text-sm">{day.day}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-pure-white leading-snug">&ldquo;{day.title}&rdquo;</h4>
                    <p className="text-sm text-pure-white/50 font-light mt-1 leading-relaxed">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
