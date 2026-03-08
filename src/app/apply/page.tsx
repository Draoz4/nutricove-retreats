"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = [
  {
    id: "practitioner",
    label: "Practitioner",
    fullLabel: "Practitioner Application",
    desc: "Licensed therapists, facilitators, and wellness practitioners — join our international team of retreat leaders.",
    iframeSrc:
      "https://api.leadconnectorhq.com/widget/survey/7o2zwieP5spTqFHKFwMi",
    iframeId: "7o2zwieP5spTqFHKFwMi",
  },
  {
    id: "resort",
    label: "Resort Partner",
    fullLabel: "Resort Partnership Application",
    desc: "Own or manage a world-class resort? Partner with NutriCove to host transformative retreats at your property.",
    iframeSrc:
      "https://api.leadconnectorhq.com/widget/survey/4FNIYpfk5bKY6keHNREC",
    iframeId: "4FNIYpfk5bKY6keHNREC",
  },
];

export default function ApplyPage() {
  const [activeTab, setActiveTab] = useState("practitioner");
  const active = tabs.find((t) => t.id === activeTab)!;

  useEffect(() => {
    // Re-trigger form embed resize when tab changes
    const event = new Event("message");
    window.dispatchEvent(event);
  }, [activeTab]);

  return (
    <>
      <Navbar />
      <div className="pt-20" />

      <section className="bg-deep-forest py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3 text-gold-light">
            Work With Us
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-pure-white mb-4">
            Partner Applications
          </h1>
          <p className="font-sans text-base text-pure-white/50 font-light">
            NutriCove is expanding. We&apos;re looking for world-class
            practitioners and exceptional resort properties to join our growing
            network.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-cream border border-brand-border rounded-full p-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold font-sans transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-deep-forest text-pure-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
                      : "text-secondary-text hover:text-deep-forest"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="bg-pure-white border border-brand-border rounded-2xl overflow-hidden shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
            {/* Tab Header */}
            <div className="border-b border-brand-border/50 p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-deep-forest mb-2">
                {active.fullLabel}
              </h2>
              <p className="text-sm text-secondary-text leading-relaxed">
                {active.desc}
              </p>
            </div>

            {/* Iframe Form */}
            <div className="p-6 sm:p-8">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={activeTab === tab.id ? "block" : "hidden"}
                >
                  <iframe
                    src={tab.iframeSrc}
                    style={{
                      border: "none",
                      width: "100%",
                      minHeight: "600px",
                    }}
                    scrolling="no"
                    id={tab.iframeId}
                    title={tab.fullLabel}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="bg-pure-white border border-brand-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h4 className="font-sans text-sm font-semibold text-deep-forest mb-1.5">
                For Practitioners
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                We seek licensed therapists, yoga instructors, breathwork
                facilitators, and healing arts practitioners with a minimum of 3
                years experience.
              </p>
            </div>
            <div className="bg-pure-white border border-brand-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h4 className="font-sans text-sm font-semibold text-deep-forest mb-1.5">
                For Resorts
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                Boutique resorts and wellness properties with 20–80 rooms, strong
                F&B programs, and dedicated wellness spaces are ideal NutriCove
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
