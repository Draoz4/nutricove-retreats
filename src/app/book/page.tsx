import Navbar from "@/components/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book Your Retreat \u2014 NutriCove Retreats",
  description:
    "Reserve your 7-night all-inclusive wellness retreat. Choose your destination, select your theme, and begin your transformation.",
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />

      <PageHero
        label="Reserve Your Spot"
        headline="Book Your Retreat"
        subtext="Complete the form below to begin your transformation. Our team will follow up within 24 hours."
      />

      {/* LeadConnector embed */}
      <section className="bg-warm-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/4dF1ongdNm2U4ykGlWXz"
            style={{ border: "none", width: "100%", minHeight: "800px" }}
            scrolling="no"
            id="4dF1ongdNm2U4ykGlWXz"
            title="NutriCove Retreat Booking"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
