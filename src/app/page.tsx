import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { homeFaqs } from "@/data/faqs";
import { pricingTiers } from "@/data/pricing";
import { retreatThemes } from "@/data/retreat-themes";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import Image from "next/image";

const journeySteps = [
  { num: "01", title: "Choose Your Theme", desc: "Heartbreak, burnout, grief, or identity — select the retreat designed for where you are right now." },
  { num: "02", title: "Pick Your Destination", desc: "Thailand, Dominican Republic, or upcoming locations in Peru and Colombia. Same quality, different landscape." },
  { num: "03", title: "We Handle Everything", desc: "Accommodations, meals, practitioners, ceremonies, excursions, transfers. Your only job is to arrive." },
  { num: "04", title: "Leave Renewed", desc: "Seven nights of guided therapeutic work, cultural immersion, and deep rest — plus aftercare to keep it going." },
];

const includedItems = [
  { icon: "🏠", title: "7 Nights Accommodation", desc: "Private or shared suites at a handpicked partner resort." },
  { icon: "🍽", title: "All Meals & Beverages", desc: "Locally-sourced, nourishing meals. All dietary needs accommodated." },
  { icon: "🧠", title: "Guided Transformation Sessions", desc: "Daily clinically-guided group work led by a licensed practitioner." },
  { icon: "🧘", title: "Daily Yoga & Meditation", desc: "Morning sunrise and evening sessions adapted to your retreat arc." },
  { icon: "💆", title: "Spa & Bodywork", desc: "Included massage or bodywork treatment at each destination." },
  { icon: "🔥", title: "Ceremonies & Rituals", desc: "Cacao ceremonies, bonfires, breathwork, and healing practices." },
  { icon: "🌿", title: "Curated Excursions", desc: "Temple visits, waterfall hikes, whale watching — unique to each location." },
  { icon: "🚐", title: "Airport Transfers", desc: "Round-trip transportation from the nearest international airport." },
  { icon: "📱", title: "Aftercare Integration", desc: "Post-retreat coaching, digital wellness toolkit, and alumni community." },
];

const themeColors: Record<string, { accent: string; text: string; bg: string; border: string }> = {
  terracotta: { accent: "bg-terracotta", text: "text-terracotta", bg: "bg-terracotta/5", border: "border-terracotta/20" },
  ocean: { accent: "bg-ocean", text: "text-ocean", bg: "bg-ocean/5", border: "border-ocean/20" },
  sage: { accent: "bg-sage", text: "text-sage", bg: "bg-sage/5", border: "border-sage/20" },
  gold: { accent: "bg-gold", text: "text-gold", bg: "bg-gold/5", border: "border-gold/20" },
};

const blogPreviewSlice = blogPosts.slice(0, 6);

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

      {/* 2. Your Journey — 4 Steps */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Your Journey"
            headline="Four Steps to Transformation"
            subhead="Every retreat is built around a specific life challenge — not a generic wellness menu. Here's how it works."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-14 bg-pure-white rounded-2xl overflow-hidden border border-brand-border shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
            {journeySteps.map((step, i) => (
              <div
                key={step.num}
                className={`p-8 text-center relative group hover:bg-warm-sand/30 transition-all duration-300 ${
                  i < journeySteps.length - 1 ? "lg:border-r border-brand-border/50" : ""
                } ${i < 2 ? "sm:border-b lg:border-b-0 border-brand-border/50" : ""}`}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-serif text-3xl font-semibold text-terracotta mb-2">{step.num}</div>
                <h4 className="font-sans text-[15px] font-semibold text-deep-forest mb-2">{step.title}</h4>
                <p className="font-sans text-[13px] text-secondary-text leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Destinations Preview */}
      <section className="bg-cream py-24" id="destinations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Destinations"
            headline="Where Healing Happens"
            subhead="Each location is chosen for its natural beauty, cultural depth, and capacity to hold transformative work."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
            {/* Thailand */}
            <Link href="/destinations/thailand" className="group rounded-3xl overflow-hidden bg-pure-white border border-brand-border shadow-[0_2px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
              <div className="relative h-72 bg-deep-forest overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/20 to-deep-forest/70 z-10" />
                <Image src="/images/thailand/pool-villa.jpg" alt="Narai Healing Sanctuary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-7 z-20">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase bg-pure-white/10 text-pure-white/90 backdrop-blur-sm border border-white/10 mb-2">Flagship</span>
                  <h3 className="font-serif text-4xl text-pure-white leading-tight">Narai Healing Sanctuary</h3>
                  <p className="text-sm text-pure-white/65 mt-1">Lipa Noi, Koh Samui &mdash; Thailand</p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm text-secondary-text leading-relaxed mb-5">
                  Beachfront on Koh Samui&apos;s western coast. Ancient Thai healing arts meet modern therapeutic practice &mdash; sunrise yoga, temple excursions, and evening beach rituals.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Beachfront", "Thai Healing Arts", "Full Spa", "55 Guests"].map((h) => (
                    <span key={h} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage/8 text-sage border border-sage/15">{h}</span>
                  ))}
                </div>
                <span className="inline-flex items-center text-sm font-medium text-terracotta group-hover:text-terracotta-hover transition-colors">
                  View Destination &rarr;
                </span>
              </div>
            </Link>

            {/* Dominican Republic */}
            <Link href="/destinations/dominican-republic" className="group rounded-3xl overflow-hidden bg-pure-white border border-brand-border shadow-[0_2px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/20 to-deep-forest/60 z-10" />
                <Image src="/images/zaria/hero-aerial-pool.jpg" alt="Zaria Eco Retreat" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-7 z-20">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase bg-pure-white/10 text-pure-white/90 backdrop-blur-sm border border-white/10 mb-2">Now Open</span>
                  <h3 className="font-serif text-4xl text-pure-white leading-tight">Zaria Eco Retreat</h3>
                  <p className="text-sm text-pure-white/65 mt-1">El Valle, Saman&aacute; &mdash; Dominican Republic</p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm text-secondary-text leading-relaxed mb-5">
                  Nestled in lush jungle hills, walking distance to pristine Caribbean beaches. Whale watching, waterfall hikes, horseback riding, and the Zaria Kitchen &amp; Lab.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Jungle & Beach", "Whale Watching", "Waterfall Tours", "Horseback Riding"].map((h) => (
                    <span key={h} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage/8 text-sage border border-sage/15">{h}</span>
                  ))}
                </div>
                <span className="inline-flex items-center text-sm font-medium text-terracotta group-hover:text-terracotta-hover transition-colors">
                  View Destination &rarr;
                </span>
              </div>
            </Link>

            {/* Coming Soon */}
            {[
              { name: "Peru", desc: "The ancestral home of plant medicine traditions. Our Peruvian location will honor indigenous healing lineages in their birthplace." },
              { name: "Colombia", desc: "Caribbean warmth meets Andean mysticism. One of the richest healing landscapes on Earth." },
            ].map((d) => (
              <div key={d.name} className="rounded-3xl overflow-hidden bg-pure-white border border-brand-border opacity-50">
                <div className="relative h-48 bg-gradient-to-br from-deep-forest/80 to-warm-charcoal/60 flex items-end p-7">
                  <div>
                    <h3 className="font-serif text-3xl text-pure-white">{d.name}</h3>
                    <p className="text-sm text-pure-white/50 mt-1">Location Coming Soon</p>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm text-secondary-text leading-relaxed mb-4">{d.desc}</p>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/15">Coming 2027</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Retreat Themes Preview */}
      <section className="bg-warm-white py-24" id="themes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Retreat Themes"
            headline="One Structure. Four Transformations."
            subhead="Every retreat runs the same 7-night framework. The difference is what you're working through — and who it's designed for."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {retreatThemes.map((theme) => {
              const colors = themeColors[theme.color];
              return (
                <div key={theme.slug} className={`bg-pure-white border rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ${colors.border}`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent}`} />
                  <div className="mb-4">
                    <h3 className="font-serif text-3xl text-deep-forest leading-tight">{theme.name}</h3>
                    <p className={`text-[11px] font-sans font-bold tracking-[0.14em] uppercase mt-1.5 ${colors.text}`}>{theme.subtitle}</p>
                  </div>
                  <div className={`text-[13px] font-medium text-deep-forest p-3 rounded-lg mb-4 ${colors.bg}`}>
                    For: <span className="font-normal text-secondary-text">{theme.forText}</span>
                  </div>
                  <p className="text-sm text-secondary-text leading-relaxed mb-4">{theme.description}</p>
                  <div className="pt-4 border-t border-brand-border/50">
                    <p className="text-xs text-muted-text italic">
                      Arc: {theme.arc.join(" → ")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center mt-9 text-sm text-secondary-text">
            All four themes rotate across destinations on a published calendar.<br />
            Can&apos;t make a date in Thailand? The same program runs in the Dominican Republic.
          </p>
        </div>
      </section>

      {/* 5. What's Included */}
      <section className="bg-deep-forest py-24 relative overflow-hidden" id="included">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/[0.03] via-transparent to-sage/[0.03]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="All-Inclusive"
            headline="Everything Is Handled"
            subhead="Your only job is to show up. Every retreat includes:"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {includedItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-pure-white/[0.04] border border-pure-white/[0.06] hover:bg-pure-white/[0.07] hover:border-pure-white/[0.1] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gold/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-pure-white mb-1">{item.title}</h5>
                  <p className="font-sans text-xs text-pure-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 sm:gap-16 py-12 mt-10 border-t border-pure-white/[0.06] border-b border-b-pure-white/[0.06] flex-wrap">
            {[
              { val: "7", label: "Night Programs" },
              { val: "4", label: "Therapeutic Themes" },
              { val: "2", label: "Destinations Live" },
              { val: "∞", label: "Aftercare Support" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-4xl font-semibold text-gold-light">{s.val}</div>
                <div className="text-[11px] text-pure-white/35 uppercase tracking-[0.1em] mt-1 font-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="bg-cream py-24" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Investment"
            headline="Transparent Pricing. Meaningful Savings."
            subhead="One price covers everything — no hidden fees, no surprise add-ons. We reward commitment with real discounts."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
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
              </div>
            ))}
          </div>
          <div className="text-center mt-9 p-7 bg-pure-white rounded-2xl border border-dashed border-brand-border max-w-2xl mx-auto">
            <p className="text-[13px] text-secondary-text mb-1"><strong className="text-deep-forest">Cancellation Policy:</strong> Full refund for documented medical emergencies. All other cancellations are non-refundable.</p>
            <p className="text-[13px] text-secondary-text mb-1"><strong className="text-deep-forest">Payment Deadline:</strong> Full balance must be received at least 15 days before arrival.</p>
            <p className="text-[13px] text-secondary-text"><strong className="text-deep-forest">Groups of 4+?</strong> Contact us for custom payment arrangements.</p>
          </div>
        </div>
      </section>

      {/* 7. Premium Add-Ons Teaser */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Premium Wellness"
            headline="IV Therapy & Peptide Services"
            subhead="Physician-supervised wellness upgrades available at all destinations. Administered in the comfort of your villa."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              { title: "IV Drip Infusions", desc: "NAD+, Myers' Cocktail, Hydration Reset, and more. 60-90 min sessions.", price: "From $150" },
              { title: "Peptide Injections", desc: "BPC-157, TB-500, GHK-Cu, and growth hormone support peptides.", price: "From $150" },
              { title: "IM Vitamin Shots", desc: "B12, Glutathione, Vitamin D3, Amino Blend, CoQ10. 5-10 min each.", price: "From $40" },
            ].map((addon) => (
              <div key={addon.title} className="bg-pure-white border border-brand-border rounded-2xl p-6 text-left hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <h4 className="font-sans text-sm font-semibold text-deep-forest mb-2">{addon.title}</h4>
                <p className="text-xs text-secondary-text leading-relaxed mb-3">{addon.desc}</p>
                <p className="text-xs font-semibold text-gold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Blog Preview */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Insights"
            headline="From the Journal"
            subhead="Perspectives on healing, transformation, and the science behind the retreat experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {blogPreviewSlice.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-pure-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-gold-light bg-gold/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gold/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg text-deep-forest leading-snug group-hover:text-terracotta transition-colors duration-300">
                    {post.title}
                  </h4>
                  <span className="inline-flex items-center text-xs font-medium text-terracotta mt-3">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors">
              View All Articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-warm-white py-24" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            headline="Before You Book"
          />
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* 10. Booking CTA */}
      <CTABlock
        headline="Ready to Transform?"
        body="Choose your theme, pick your destination, and secure your spot. Our team will walk you through a brief wellness intake to tailor your experience."
        primaryCta={{ label: "Start Your Booking", href: "/book" }}
        secondaryCta={{ label: "Questions? Talk to Our Team", href: "mailto:retreats@nutricove.com" }}
      />

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
