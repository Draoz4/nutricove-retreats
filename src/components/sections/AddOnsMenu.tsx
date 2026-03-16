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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {addOns[activeTab].items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-deep-forest hover:bg-deep-forest/90 transition-colors"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                      {activeTab === 0 && <Syringe className="w-4 h-4" />}
                      {activeTab === 1 && <Pill className="w-4 h-4" />}
                      {activeTab === 2 && <Zap className="w-4 h-4" />}
                    </div>
                    <span className="font-serif text-sm text-pure-white leading-tight">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {addOnPackages.map((pkg, i) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-deep-forest hover:bg-deep-forest/90 transition-colors"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                      <Package className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-sm text-pure-white leading-tight">
                      {pkg.name}
                    </span>
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
