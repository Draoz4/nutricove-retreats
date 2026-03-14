import Navbar from "@/components/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Apply \u2014 NutriCove Retreats",
  description:
    "Apply to join the NutriCove network as a retreat practitioner or resort partner.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />

      <PageHero
        label="Join the Network"
        headline="Apply to NutriCove"
        subtext="We partner with licensed practitioners and world-class resorts. Choose your application below."
      />

      {/* Application sections */}
      <section className="bg-warm-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Practitioner Application */}
            <div>
              <h2 className="font-serif text-2xl text-deep-forest mb-2">For Practitioners</h2>
              <p className="font-sans text-sm text-secondary-text font-light mb-6">
                Licensed therapists, counselors, and clinical practitioners interested in leading retreat programs.
              </p>
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/7o2zwieP5spTqFHKFwMi"
                style={{ border: "none", width: "100%", minHeight: "600px" }}
                scrolling="no"
                id="7o2zwieP5spTqFHKFwMi"
                title="Practitioner Application"
              />
            </div>

            {/* Resort Application */}
            <div>
              <h2 className="font-serif text-2xl text-deep-forest mb-2">For Resorts</h2>
              <p className="font-sans text-sm text-secondary-text font-light mb-6">
                Resort owners and managers interested in hosting NutriCove retreat programs.
              </p>
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/4FNIYpfk5bKY6keHNREC"
                style={{ border: "none", width: "100%", minHeight: "600px" }}
                scrolling="no"
                id="4FNIYpfk5bKY6keHNREC"
                title="Resort Application"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
