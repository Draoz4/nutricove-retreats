"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { retreatThemes } from "@/data/retreat-themes";

const themeColors: Record<string, { accent: string; text: string; bg: string; border: string }> = {
  terracotta: { accent: "bg-terracotta", text: "text-terracotta", bg: "bg-terracotta/5", border: "border-terracotta/20" },
  ocean: { accent: "bg-ocean", text: "text-ocean", bg: "bg-ocean/5", border: "border-ocean/20" },
  sage: { accent: "bg-sage", text: "text-sage", bg: "bg-sage/5", border: "border-sage/20" },
  gold: { accent: "bg-gold", text: "text-gold", bg: "bg-gold/5", border: "border-gold/20" },
};

export default function ThemesPreview() {
  return (
    <section className="bg-warm-white py-24" id="themes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Retreat Themes"
          headline="One Structure. Four Transformations."
          subhead="Every retreat runs the same 7-night framework. The difference is what you're working through — and who it's designed for."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {retreatThemes.map((theme, i) => {
            const colors = themeColors[theme.color];
            return (
              <motion.div
                key={theme.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-pure-white border rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ${colors.border}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent}`} />
                <div className="mb-4">
                  <h3 className="font-serif text-3xl text-deep-forest leading-tight">{theme.name}</h3>
                  <p className={`text-[11px] font-sans font-bold tracking-[0.14em] uppercase mt-1.5 ${colors.text}`}>{theme.subtitle}</p>
                </div>
                <div className={`text-[13px] font-medium text-deep-forest p-3 rounded-lg mb-4 ${colors.bg}`}>
                  For: <span className="font-normal text-secondary-text">{theme.forText}</span>
                </div>
                <p className="text-sm text-secondary-text leading-relaxed mb-4">{theme.description}</p>
                <div className="pt-4 border-t border-brand-border/50">
                  <p className="text-xs text-muted-text italic">
                    Arc: {theme.arc.join(" → ")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="text-center mt-9 text-sm text-secondary-text">
          All four themes rotate across destinations on a published calendar.<br />
          Can&apos;t make a date in Thailand? The same program runs in the Dominican Republic.
        </p>
      </div>
    </section>
  );
}
