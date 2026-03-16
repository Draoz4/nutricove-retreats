"use client";

import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/sections/DestinationHero";
import Leadership from "@/components/sections/Leadership";
import PhotoGallery from "@/components/sections/PhotoGallery";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import Accommodations from "@/components/sections/Accommodations";
import ActivitiesGrid from "@/components/sections/ActivitiesGrid";
import ThemesItinerary from "@/components/sections/ThemesItinerary";
import DailyRhythm from "@/components/sections/DailyRhythm";
import AddOnsMenu from "@/components/sections/AddOnsMenu";
import type { Destination, FAQItem } from "@/types";

interface DestinationPageProps {
  destination: Destination;
  faqs: FAQItem[];
  showLeadership?: boolean;
}

export default function DestinationPage({ destination, faqs, showLeadership = false }: DestinationPageProps) {
  return (
    <>
      <Navbar />

      {/* 1. Hero */}
      <DestinationHero destination={destination} />

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

      {/* 3. Leadership (Thailand only) */}
      {showLeadership && <Leadership />}

      {/* 4. Photo Gallery */}
      <PhotoGallery images={destination.gallery} resortName={destination.resortName} />

      {/* 5. Reviews */}
      <ReviewsGrid reviews={destination.reviews} />

      {/* 6. Accommodations */}
      <Accommodations accommodations={destination.accommodations} />

      {/* 7. Activities */}
      <ActivitiesGrid activities={destination.activities} country={destination.country} />

      {/* 8. Retreat Themes with 7-Day Itineraries */}
      <ThemesItinerary />

      {/* 9. Daily Rhythm */}
      <DailyRhythm />

      {/* 10. Premium Add-Ons */}
      <AddOnsMenu />

      {/* 12. FAQ */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="FAQ" headline={"Visiting " + destination.country} />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 13. CTA */}
      <CTABlock
        headline="Ready to Transform?"
        body={"Secure your spot at " + destination.resortName + ". Our team will guide you through the booking process."}
        primaryCta={{ label: "Book Your Retreat", href: "/book" }}
        secondaryCta={{ label: "Questions? Talk to Our Team", href: "mailto:retreats@nutricove.com" }}
      />

      <Footer />
    </>
  );
}
