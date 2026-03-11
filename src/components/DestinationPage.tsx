"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { retreatThemes } from "@/data/retreat-themes";
import { pricingTiers, addOns, addOnPackages } from "@/data/pricing";
import type { Destination, FAQItem } from "@/types";

const themeColorMap: Record<string, { accent: string; text: string; bg: string }> = {
  terracotta: { accent: "bg-terracotta", text: "text-terracotta", bg: "bg-terracotta/5" },
  ocean: { accent: "bg-ocean", text: "text-ocean", bg: "bg-ocean/5" },
  sage: { accent: "bg-sage", text: "text-sage", bg: "bg-sage/5" },
  gold: { accent: "bg-gold", text: "text-gold", bg: "bg-gold/5" },
};

const dailyRhythm = [
  { time: "6:30 AM", activity: "Sunrise beach meditation or earthing walk" },
  { time: "7:00 AM", activity: "Morning yoga" },
  { time: "8:30 AM", activity: "Organic breakfast" },
  { time: "9:30 AM", activity: "Guided Transformation Session (90 min)" },
  { time: "11:00 AM", activity: "Free time / optional add-ons / pool / beach" },
  { time: "12:30 PM", activity: "Organic lunch" },
  { time: "2:00 PM", activity: "Scheduled activity (varies by theme and day)" },
  { time: "4:00 PM", activity: "Free time / journaling / rest" },
  { time: "5:30 PM", activity: "Sunset yoga or breathwork" },
  { time: "7:00 PM", activity: "Organic dinner" },
  { time: "8:30 PM", activity: "Evening ceremony or experience" },
];

interface DestinationPageProps {
  destination: Destination;
  faqs: FAQItem[];
}

export default function DestinationPage({ destination, faqs }: DestinationPageProps) {
  const [activeTheme, setActiveTheme] = useState(0);
  const theme = retreatThemes[activeTheme];
  const colors = themeColorMap[theme.color];

  return (
    <>
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {destination.gallery.length > 0 ? (
          <Image
            src={destination.heroImage}
            alt={destination.resortName}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-deep-forest to-ocean/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <span className="inline-block px-3 py-1 rounded text-[10px] font-bold tracking-[0.1em] uppercase bg-pure-white/15 text-pure-white/90 backdrop-blur-sm mb-3">
            {destination.badge}
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-pure-white leading-tight mb-2">
            {destination.resortName}
          </h1>
          <p className="font-sans text-lg text-pure-white/70">{destination.location}</p>
        </div>
      </section>

      {/* 2. About */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="About This Destination" headline={destination.resortName} />
          <p className="font-sans text-base text-body-text font-light leading-relaxed text-center">
            {destination.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {destination.highlights.map((h) => (
              <span key={h} className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-sage/10 text-sage">
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Photo Gallery */}
      {destination.gallery.length > 1 && (
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Gallery" headline="A Glimpse Inside" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
              {destination.gallery.slice(0, 12).map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <div className={`relative ${i === 0 ? "h-80" : "h-40"}`}>
                    <Image src={img} alt={`${destination.resortName} gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* Reviews */}
      {destination.reviews && destination.reviews.length > 0 && (
        <section className="bg-warm-white py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Guest Reviews" headline="What Guests Are Saying" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {destination.reviews.map((review) => (
                <div key={review.name + review.date} className="bg-pure-white border border-brand-border rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-body-text leading-relaxed mb-4 font-light">{review.text}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-brand-border/50">
                    <span className="font-sans text-sm font-semibold text-deep-forest">{review.name}</span>
                    <span className="text-xs text-muted-text">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* 4. Accommodations */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Accommodations" headline="Your Home for the Week" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {destination.accommodations.map((room) => (
              <div key={room.name} className="bg-pure-white border border-brand-border rounded-2xl overflow-hidden">
                <div className="relative h-56">
                  <Image src={room.image} alt={room.name} fill className="object-cover" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl text-deep-forest">{room.name}</h3>
                    <span className="text-xs font-medium text-muted-text bg-cream px-3 py-1 rounded-full">{room.capacity}</span>
                  </div>
                  <p className="text-sm text-secondary-text font-light leading-relaxed mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((a) => (
                      <span key={a} className="text-xs text-body-text bg-cream/80 px-2.5 py-1 rounded">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Activities */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Activities & Excursions" headline={`Explore ${destination.country}`} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {destination.activities.map((activity) => (
              <div key={activity.name} className="bg-pure-white border border-brand-border rounded-xl p-5 text-center hover:-translate-y-0.5 hover:shadow-md transition-all">
                <p className="font-sans text-sm font-medium text-deep-forest">{activity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Retreat Themes with Itineraries */}
      <section className="bg-deep-forest py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Four Retreat Themes"
            headline="Your 7-Day Journey"
            subhead="Each theme follows a unique therapeutic arc. Tap a theme to see the full day-by-day itinerary."
            light
          />

          {/* Theme tabs */}
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

          {/* Active theme details */}
          <div className="bg-pure-white/5 border border-pure-white/10 rounded-2xl p-8">
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

            {/* Day-by-day */}
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
          </div>
        </div>
      </section>

      {/* 7. Daily Rhythm */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Daily Rhythm" headline="A Day at the Retreat" subhead="The shared daily structure across all themes and destinations." />
          <div className="space-y-0 mt-10">
            {dailyRhythm.map((entry, i) => (
              <div key={i} className="flex items-start gap-5 py-4 border-b border-brand-border/50 last:border-0">
                <span className="font-sans text-sm font-semibold text-terracotta w-20 shrink-0">{entry.time}</span>
                <span className="font-sans text-sm text-body-text font-light">{entry.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Investment" headline="Transparent Pricing" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-pure-white rounded-3xl p-7 text-center relative transition-all hover:-translate-y-1 ${
                  tier.featured ? "border-2 border-terracotta shadow-[0_16px_56px_rgba(183,107,72,0.14)] md:scale-105" : "border border-brand-border"
                }`}
              >
                {tier.savings && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-bold bg-terracotta text-pure-white whitespace-nowrap">
                    {tier.savings}
                  </div>
                )}
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-text mb-3">{tier.name}</p>
                {tier.originalPrice && <p className="text-sm text-muted-text line-through">${tier.originalPrice.toLocaleString()}</p>}
                <p className="font-serif text-4xl font-semibold text-deep-forest">${tier.price.toLocaleString()}</p>
                <p className="text-xs text-secondary-text mt-1 mb-5">{tier.note}</p>
                <Link href="/book" className={`block w-full rounded-full py-3 text-sm font-semibold transition-all ${tier.featured ? "bg-terracotta text-pure-white hover:bg-terracotta-hover" : "bg-deep-forest text-pure-white hover:bg-deep-forest/90"}`}>
                  {tier.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Add-Ons */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Premium Add-Ons"
            headline="IV Therapy & Peptide Services"
            subhead="Physician-supervised. Administered in the comfort of your villa."
          />

          <div className="space-y-10 mt-12">
            {addOns.map((category) => (
              <div key={category.category}>
                <h3 className="font-serif text-xl text-deep-forest mb-4">{category.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="bg-pure-white border border-brand-border rounded-xl p-5 flex justify-between items-start">
                      <div>
                        <p className="font-sans text-sm font-medium text-deep-forest">{item.name}</p>
                        {item.description && <p className="text-xs text-secondary-text mt-0.5">{item.description}</p>}
                      </div>
                      <span className="font-sans text-sm font-semibold text-gold shrink-0 ml-3">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Packages */}
            <div>
              <h3 className="font-serif text-xl text-deep-forest mb-4">Packages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOnPackages.map((pkg) => (
                  <div key={pkg.name} className="bg-pure-white border border-brand-border rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-sans text-sm font-semibold text-deep-forest">{pkg.name}</h4>
                      <div className="text-right shrink-0 ml-3">
                        <span className="font-sans text-sm font-semibold text-gold">${pkg.price.toLocaleString()}</span>
                        <span className="block text-[10px] text-sage font-medium">{pkg.savings}</span>
                      </div>
                    </div>
                    <p className="text-xs text-secondary-text leading-relaxed">{pkg.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="FAQ" headline={`Visiting ${destination.country}`} />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 11. CTA */}
      <CTABlock
        headline="Ready to Transform?"
        body={`Secure your spot at ${destination.resortName}. Our team will guide you through the booking process.`}
        primaryCta={{ label: "Book Your Retreat", href: "/book" }}
        secondaryCta={{ label: "Questions? Talk to Our Team", href: "mailto:retreats@nutricove.com" }}
      />

      <Footer />
    </>
  );
}
