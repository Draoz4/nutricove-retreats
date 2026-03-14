"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { addOns, addOnPackages } from "@/data/pricing";

const categoryIcons: Record<string, string> = {
  "IV Drip Infusions": "💉",
  "Peptide Injections": "🧬",
  "IM Vitamin Shots": "⚡",
};

export default function AddOnsMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["IV Drips", "Peptides", "IM Shots", "Packages"];

  return (
    <section className="bg-warm-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Premium Wellness"
          headline="IV Therapy, Peptides & Vitamin Services"
          subhead="Physician-supervised wellness upgrades available at all destinations. Administered in the comfort of your villa."
        />

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mt-12 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-deep-forest text-pure-white shadow-[0_4px_16px_rgba(27,42,33,0.2)]"
                  : "bg-pure-white text-secondary-text border border-brand-border hover:border-deep-forest/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* IV Drips, Peptides, IM Shots */}
          {activeTab < 3 && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="bg-pure-white rounded-2xl border border-brand-border overflow-hidden">
                <div className="p-6 border-b border-brand-border bg-cream/50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{categoryIcons[addOns[activeTab].category]}</span>
                    <div>
                      <h3 className="font-serif text-xl text-deep-forest">{addOns[activeTab].category}</h3>
                      <p className="text-xs text-muted-text mt-0.5">
                        {activeTab === 0 && "60-90 min sessions, physician-supervised"}
                        {activeTab === 1 && "Quick injections targeting specific health goals"}
                        {activeTab === 2 && "5-10 min quick boosts"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-brand-border/50">
                  {addOns[activeTab].items.map((item) => (
                    <div key={item.name} className="p-5 flex items-start justify-between gap-4 hover:bg-warm-sand/20 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-sans text-sm font-semibold text-deep-forest">{item.name}</h4>
                        {item.description && (
                          <p className="text-xs text-secondary-text mt-1 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-serif text-lg font-semibold text-gold">${item.price}</span>
                        {item.unit && <span className="text-[10px] text-muted-text block">{item.unit}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Packages */}
          {activeTab === 3 && (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {addOnPackages.map((pkg) => (
                <div key={pkg.name} className="bg-pure-white rounded-2xl border border-brand-border p-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-terracotta" />
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-serif text-lg text-deep-forest leading-tight">{pkg.name}</h4>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sage/10 text-sage border border-sage/15 whitespace-nowrap ml-2">
                      {pkg.savings}
                    </span>
                  </div>
                  <p className="text-xs text-secondary-text leading-relaxed mb-4">{pkg.items}</p>
                  <div className="pt-3 border-t border-brand-border/50">
                    <span className="font-serif text-2xl font-semibold text-gold">${pkg.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center mt-8 text-xs text-muted-text max-w-xl mx-auto">
          All IV and peptide services are administered by licensed physicians. Medical screening required. Prices are per session unless otherwise noted.
        </p>
      </div>
    </section>
  );
}
