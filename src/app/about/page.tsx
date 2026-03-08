import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />

      {/* Hero */}
      <section className="bg-deep-forest py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3 text-gold-light">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-pure-white mb-6 leading-tight">
            Built by Healers.<br />Not by Marketers.
          </h1>
          <p className="font-sans text-lg text-pure-white/55 font-light leading-relaxed max-w-xl mx-auto">
            NutriCove Wellness Retreats exists because we believe transformation should be accessible, clinically-guided, and deeply personal.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Mission"
            headline="Why We Built This"
          />
          <div className="space-y-6 font-sans text-base text-body-text font-light leading-relaxed">
            <p>
              The wellness retreat industry is fractured. On one end, you have luxury resorts offering spa menus with no therapeutic depth. On the other, you have underground ceremonies with no clinical oversight. The middle ground &mdash; where real healing happens with professional support &mdash; barely exists.
            </p>
            <p>
              NutriCove was born from a simple idea: <strong className="font-medium text-deep-forest">partner with world-class resorts and bring the clinical framework to them.</strong> Instead of building one retreat center and hoping people find it, we curate a network of destinations and run the same evidence-based, therapeutically-guided program at each one.
            </p>
            <p>
              Every retreat is anchored by daily Guided Transformation Sessions &mdash; led by a licensed clinical practitioner who tailors the therapeutic work to your specific life challenge. This is the key differentiator. This is why it works.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Philosophy"
            headline="Three Pillars of Transformation"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-pure-white border-l-4 border-terracotta rounded-r-xl p-7">
              <h3 className="font-serif text-xl text-deep-forest mb-3">Clinically-Guided</h3>
              <p className="font-sans text-sm text-secondary-text font-light leading-relaxed">
                Every retreat features daily Guided Transformation Sessions with a licensed clinical practitioner. This isn&apos;t inspirational speaking &mdash; it&apos;s structured therapeutic work designed around your specific life challenge.
              </p>
            </div>
            <div className="bg-pure-white border-l-4 border-gold rounded-r-xl p-7">
              <h3 className="font-serif text-xl text-deep-forest mb-3">Destination-Driven</h3>
              <p className="font-sans text-sm text-secondary-text font-light leading-relaxed">
                Healing doesn&apos;t happen in a vacuum. The landscape, culture, and energy of a place matter. We partner with resorts that enhance the therapeutic process &mdash; not just provide a backdrop for it.
              </p>
            </div>
            <div className="bg-pure-white border-l-4 border-sage rounded-r-xl p-7">
              <h3 className="font-serif text-xl text-deep-forest mb-3">All-Inclusive</h3>
              <p className="font-sans text-sm text-secondary-text font-light leading-relaxed">
                One price. Everything included. No nickel-and-diming. Accommodations, meals, ceremonies, excursions, bodywork, yoga, and aftercare integration &mdash; all covered. Your only job is to arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Network */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Network"
            headline="World-Class Partners. Consistent Quality."
          />
          <div className="space-y-6 font-sans text-base text-body-text font-light leading-relaxed">
            <p>
              We don&apos;t operate resorts. We partner with them. Each destination in the NutriCove network is handpicked for its natural beauty, cultural depth, quality of accommodations, and willingness to support the therapeutic framework we bring.
            </p>
            <p>
              Currently live in <strong className="font-medium text-deep-forest">Thailand (Narai Healing Sanctuary, Koh Samui)</strong> and <strong className="font-medium text-deep-forest">Dominican Republic (Zaria Eco Retreat, Saman&aacute;)</strong>, with <strong className="font-medium text-deep-forest">Peru and Colombia</strong> planned for 2027.
            </p>
            <p>
              The four retreat themes &mdash; Release, Reset, Return, and Reclaim &mdash; rotate across all destinations on a published calendar. Same program, same therapeutic quality, different landscape. Choose the location that calls to you.
            </p>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Your Transformation Begins with a Single Decision"
        body="Spaces are intentionally limited. Release, Reset, Return, or Reclaim — the full 7-night all-inclusive program starts at $6,000 per person."
        primaryCta={{ label: "Book Your Retreat", href: "/book" }}
        secondaryCta={{ label: "Explore Destinations", href: "/#destinations" }}
      />

      <Footer />
    </>
  );
}
