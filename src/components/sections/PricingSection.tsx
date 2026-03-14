"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";
import { pricingTiers } from "@/data/pricing";

export default function PricingSection() {
  return (
    <section className="bg-cream py-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(27,42,33,0.04),transparent)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Investment"
          headline="Transparent Pricing"
          subhead="One price covers everything. We reward commitment with real savings."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, filter: "blur(4px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className={cn(
                "relative h-full overflow-hidden border p-6 rounded-2xl transition-all duration-300",
                tier.featured
                  ? "bg-deep-forest text-pure-white border-gold/30 shadow-2xl shadow-gold/10 scale-[1.02]"
                  : "bg-pure-white border-brand-border hover:shadow-lg"
              )}>
                {tier.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-gold to-terracotta" />
                )}
                <div className="flex flex-col items-center border-b pb-6 mb-6" style={{ borderColor: tier.featured ? "rgba(255,255,255,0.1)" : undefined }}>
                  <span className={cn(
                    "text-sm font-sans font-medium mb-1",
                    tier.featured ? "text-gold-light" : "text-secondary-text"
                  )}>
                    {tier.name}
                  </span>
                  {tier.savings && (
                    <Badge className={cn(
                      "mb-3 border-0",
                      tier.featured ? "bg-gold/20 text-gold-light" : "bg-terracotta/10 text-terracotta"
                    )}>
                      {tier.savings}
                    </Badge>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-bold">
                      ${tier.price.toLocaleString()}
                    </span>
                  </div>
                  <span className={cn(
                    "text-xs font-sans mt-1",
                    tier.featured ? "text-warm-sand/60" : "text-muted-text"
                  )}>
                    {tier.note}
                  </span>
                </div>
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className={cn(
                        "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                        tier.featured ? "bg-gold/20 text-gold-light" : "bg-sage/10 text-sage"
                      )}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span className={cn(
                        "text-sm font-sans",
                        tier.featured ? "text-warm-sand/80" : "text-secondary-text"
                      )}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className={cn(
                    "w-full rounded-full",
                    tier.featured
                      ? "bg-terracotta hover:bg-terracotta-hover text-pure-white"
                      : "bg-deep-forest hover:bg-deep-forest/90 text-pure-white"
                  )}
                >
                  <Link href="/book">{tier.ctaLabel}</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
