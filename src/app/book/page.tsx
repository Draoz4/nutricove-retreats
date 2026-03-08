"use client";

import { useEffect } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookPage() {
  useEffect(() => {
    // Trigger resize for any already-loaded iframes
    const event = new Event("message");
    window.dispatchEvent(event);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20" />

      <section className="bg-deep-forest py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3 text-gold-light">
            Begin Your Journey
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-pure-white mb-4">
            Book Your Retreat
          </h1>
          <p className="font-sans text-base text-pure-white/50 font-light">
            Complete the form below and our team will reach out within 24 hours
            to finalize your booking.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-pure-white border border-brand-border rounded-2xl p-6 sm:p-10 shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/4dF1ongdNm2U4ykGlWXz"
              style={{ border: "none", width: "100%", minHeight: "600px" }}
              scrolling="no"
              id="4dF1ongdNm2U4ykGlWXz"
              title="NutriCove Retreat Booking"
            />
          </div>
          <p className="text-xs text-muted-text text-center mt-6">
            This form does not charge your card. Our team will contact you to
            finalize your booking and arrange payment.
          </p>
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
