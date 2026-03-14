"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { pricingTiers } from "@/data/pricing";

export default function PricingSection() {
  return (
    <section className="bg-cream py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Investment"
          headline="Transparent Pricing. Meaningful Savings."
          subhead="One price covers everything — no hidden fees, no surprise add-ons. We reward commitment with real discounts."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-pure-white rounded-3xl p-8 text-center relative transition-all duration-500 hover:-translate-y-1 ${
                tier.featured
                  ? "border-2 border-terracotta shadow-[0_16px_56px_rgba(191,99,54,0.12)] md:scale-105"
                  : "border border-brand-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              }`}
            >
              {tier.savings && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-terracotta text-pure-white whitespace-nowrap">
                  {tier.savings}
                </div>
              )}
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-muted-text mb-4 font-sans">{tier.name}</p>
              {tier.originalPrice && (
                <p className="text-base text-muted-text line-through">${tier.originalPrice.toLocaleString()}</p>
              )}
              <p className="font-serif text-5xl font-semibold text-deep-forest leading-none">${tier.price.toLocaleString()}</p>
              <p className="text-sm text-secondary-text mt-1.5 mb-6">{tier.note}</p>
              <ul className="text-left space-y-0 mb-7">
                {tier.features.map((f) => (
                  <li key={f} className="text-[13px] text-body-text py-2 border-b border-brand-border/50 flex items-start gap-2.5">
                    <span className="text-sage font-bold shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className={`block w-full text-center rounded-full py-3.5 text-sm font-semibold transition-all duration-300 ${
                  tier.featured
                    ? "bg-terracotta text-pure-white hover:bg-terracotta-hover shadow-[0_4px_28px_rgba(191,99,54,0.3)]"
                    : "bg-deep-forest text-pure-white hover:bg-deep-forest/90"
                }`}
              >
                {tier.ctaLabel}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-9 p-7 bg-pure-white rounded-2xl border border-dashed border-brand-border max-w-2xl mx-auto">
          <p className="text-[13px] text-secondary-text mb-1"><strong className="text-deep-forest">Cancellation Policy:</strong> Full refund for documented medical emergencies. All other cancellations are non-refundable.</p>
          <p className="text-[13px] text-secondary-text mb-1"><strong className="text-deep-forest">Payment Deadline:</strong> Full balance must be received at least 15 days before arrival.</p>
          <p className="text-[13px] text-secondary-text"><strong className="text-deep-forest">Groups of 4+?</strong> Contact us for custom payment arrangements.</p>
        </div>
      </div>
    </section>
  );
}
