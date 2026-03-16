import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import DestinationsPreview from "@/components/sections/DestinationsPreview";
import ThemesPreview from "@/components/sections/ThemesPreview";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQAccordion from "@/components/FAQAccordion";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { homeFaqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1. Hero */}
      <HeroSection
        label="Curated Wellness Retreats Worldwide"
        headline="Healing Has a Destination"
        highlightWord="Destination"
        subtext="Seven nights of clinically-guided transformation at world-class retreat centers. You pick the life challenge. We handle everything else."
        primaryCta={{ label: "Find Your Retreat", href: "/book" }}
      />

      {/* 2. Your Journey — Timeline */}
      <JourneySection />

      {/* 3. Destinations — Interactive Map */}
      <div id="destinations">
        <DestinationsPreview />
      </div>

      {/* 4. Retreat Themes — Quiz */}
      <div id="themes">
        <ThemesPreview />
      </div>

      {/* 5. What's Included */}
      <div id="included">
        <WhatsIncluded />
      </div>

      {/* 6. Blog Preview */}
      <BlogPreview />

      {/* 7. FAQ */}
      <section className="bg-warm-white py-24" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            headline="Before You Book"
          />
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* 8. Booking CTA */}
      <CTABlock
        headline="Ready to Transform?"
        body="Choose your theme, pick your destination, and secure your spot. Our team will walk you through a brief wellness intake to tailor your experience."
        primaryCta={{ label: "Start Your Booking", href: "/book" }}
        secondaryCta={{
          label: "Questions? Talk to Our Team",
          href: "mailto:retreats@nutricove.com",
        }}
      />

      {/* 9. Footer */}
      <Footer />
    </>
  );
}
