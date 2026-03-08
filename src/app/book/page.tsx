"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Complete the form below and our team will reach out within 24 hours to finalize your booking.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-pure-white border border-brand-border rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl text-deep-forest mb-3">Thank You</h2>
              <p className="text-secondary-text">
                Your booking request has been received. Our team will contact you within 24 hours to discuss your retreat and finalize the details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-pure-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Full Name *</label>
                  <input type="text" required className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta" />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Email *</label>
                  <input type="email" required className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Phone</label>
                <input type="tel" className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Preferred Destination *</label>
                  <select required className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta">
                    <option value="">Select destination</option>
                    <option value="thailand">Thailand — Narai Healing Sanctuary</option>
                    <option value="dominican-republic">Dominican Republic — Zaria Eco Retreat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Preferred Theme *</label>
                  <select required className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta">
                    <option value="">Select theme</option>
                    <option value="release">Release — Separation & Heartbreak</option>
                    <option value="reset">Reset — Burnout & Exhaustion</option>
                    <option value="return">Return — Grief & Loss</option>
                    <option value="reclaim">Reclaim — Identity & Purpose</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Preferred Dates</label>
                <input type="text" placeholder="e.g., March 2026, flexible" className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta" />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Payment Preference</label>
                <select className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta">
                  <option value="">Select preference</option>
                  <option value="payment-plan">Payment Plan — $7,000</option>
                  <option value="half-upfront">Half Upfront — $6,500 (Save $500)</option>
                  <option value="pay-in-full">Pay in Full — $6,000 (Save $1,000)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">Health Considerations or Questions</label>
                <textarea rows={4} className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta resize-none" placeholder="Any medical conditions, dietary restrictions, allergies, or questions..." />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-deep-forest mb-2 uppercase tracking-wider">How Did You Hear About Us?</label>
                <select className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm font-sans text-body-text bg-warm-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta">
                  <option value="">Select</option>
                  <option value="instagram">Instagram</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Friend / Referral</option>
                  <option value="podcast">Podcast</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-terracotta px-8 py-4 text-sm font-semibold text-pure-white hover:bg-terracotta-hover transition-all shadow-[0_4px_28px_rgba(183,107,72,0.35)] hover:shadow-[0_8px_36px_rgba(183,107,72,0.45)]"
              >
                Submit Booking Request &rarr;
              </button>

              <p className="text-xs text-muted-text text-center">
                This form does not charge your card. Our team will contact you to finalize your booking and arrange payment.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
