"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Syringe, Pill, Zap, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";
import { addOns, addOnPackages } from "@/data/pricing";

const categoryIcons: Record<string, React.ElementType> = {
  "IV Drip Infusions": Syringe,
  "Peptide Injections": Pill,
  "IM Vitamin Shots": Zap,
};

const tabs = [
  ...addOns.map((a) => ({ label: a.category, type: "category" as const })),
  { label: "Packages", type: "packages" as const },
];

export default function AddOnsMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Premium Add-Ons"
          headline="Physician-Supervised Wellness Services"
          subhead="Optional enhancements administered by a physician in the comfort of your villa. All services are physician-supervised."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, i) => {
            const Icon = tab.type === "packages" ? Package : categoryIcons[tab.label] || Zap;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300",
                  activeTab === i
                    ? "bg-deep-forest text-pure-white shadow-lg"
                    : "bg-cream text-secondary-text hover:bg-warm-sand"
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab < addOns.length ? (
              <div className="grid gap-3">
                {addOns[activeTab].items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-5 rounded-xl bg-pure-white border border-brand-border hover:shadow-md transition-all group"
                  >
                    <div className="flex-1">
                      <h4 className="font-serif text-lg text-deep-forest">{item.name}</h4>
                      {item.description && (
                        <p className="text-sm font-sans text-muted-text mt-0.5">{item.description}</p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <span className="font-serif text-xl text-terracotta font-semibold">${item.price}</span>
                      {item.unit && <span className="text-xs text-muted-text block">/{item.unit}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid gap-4">
                {addOnPackages.map((pkg, i) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative p-6 rounded-2xl bg-deep-forest text-pure-white overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(184,148,62,0.08),transparent)]" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-serif text-xl text-pure-white">{pkg.name}</h4>
                          <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-gold/20 text-gold-light">
                            {pkg.savings}
                          </span>
                        </div>
                        <p className="text-sm font-sans text-warm-sand/60">{pkg.items}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-2xl text-gold-light font-semibold">${pkg.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
