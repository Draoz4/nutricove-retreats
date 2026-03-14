"use client";

import { motion, type Variants } from "framer-motion";
import { Brain, MapPin, Package, Users, Globe, Heart, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import Leadership from "@/components/sections/Leadership";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", bounce: 0.3, duration: 1.2 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const pillars = [
  {
    icon: Brain,
    title: "Clinically-Guided",
    description:
      "Every retreat features daily Guided Transformation Sessions with a licensed clinical practitioner. This is structured therapeutic work designed around your specific life challenge.",
    accent: "border-terracotta",
    iconBg: "bg-terracotta/10",
    iconColor: "text-terracotta",
  },
  {
    icon: MapPin,
    title: "Destination-Driven",
    description:
      "Healing doesn\u2019t happen in a vacuum. The landscape, culture, and energy of a place matter. We partner with resorts that enhance the therapeutic process \u2014 not just provide a backdrop for it.",
    accent: "border-gold",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
  },
  {
    icon: Package,
    title: "All-Inclusive",
    description:
      "One price. Everything included. No nickel-and-diming. Accommodations, meals, ceremonies, excursions, bodywork, yoga, and aftercare integration \u2014 all covered. Your only job is to arrive.",
    accent: "border-sage",
    iconBg: "bg-sage/10",
    iconColor: "text-sage",
  },
];

const stats = [
  { icon: Users, value: "7", label: "Night Programs" },
  { icon: Heart, value: "4", label: "Healing Themes" },
  { icon: Globe, value: "2", label: "Global Destinations" },
  { icon: Shield, value: "100%", label: "Clinically-Guided" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-deep-forest py-28 md:py-36">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none isolate opacity-50"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(184,148,62,0.08)_0,rgba(184,148,62,0.02)_50%,transparent_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(184,148,62,0.06)_0,rgba(184,148,62,0.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        </div>
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(184,148,62,0.12)_0%,transparent_70%)]"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-4 text-gold-light"
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pure-white leading-[1.1]"
          >
            Built by Healers.
            <br />
            <span className="bg-gradient-to-r from-gold-light via-terracotta to-gold bg-clip-text text-transparent">
              Not by Marketers.
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 font-sans text-lg text-pure-white/55 font-light leading-relaxed max-w-xl mx-auto"
          >
            NutriCove Wellness Retreats exists because we believe transformation
            should be accessible, clinically-guided, and deeply personal.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-warm-white py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading label="The Mission" headline="Why We Built This" />
          <div className="space-y-6 font-sans text-base text-body-text font-light leading-relaxed">
            <p>
              The wellness retreat industry is fractured. On one end, you have
              luxury resorts offering spa menus with no therapeutic depth. On the
              other, you have underground ceremonies with no clinical oversight.
              The middle ground &mdash; where real healing happens with
              professional support &mdash; barely exists.
            </p>
            <p>
              NutriCove was born from a simple idea:{" "}
              <strong className="font-medium text-deep-forest">
                partner with world-class resorts and bring the clinical framework
                to them.
              </strong>{" "}
              Instead of building one retreat center and hoping people find it,
              we curate a network of destinations and run the same
              evidence-based, therapeutically-guided program at each one.
            </p>
            <p>
              Every retreat is anchored by daily Guided Transformation Sessions
              &mdash; led by a licensed clinical practitioner who tailors the
              therapeutic work to your specific life challenge. This is the key
              differentiator. This is why it works.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Three Pillars */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Philosophy"
            headline="Three Pillars of Transformation"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={cardVariants}
                  className={`group bg-pure-white border-l-4 ${pillar.accent} rounded-r-xl p-7 hover:shadow-lg hover:shadow-black/5 transition-shadow duration-300`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${pillar.iconBg} flex items-center justify-center mb-4`}
                  >
                    <IconComponent
                      className={`w-5 h-5 ${pillar.iconColor}`}
                    />
                  </div>
                  <h3 className="font-serif text-xl text-deep-forest mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-secondary-text font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <Leadership />

      {/* The Network */}
      <section className="bg-warm-white py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading
            label="The Network"
            headline="World-Class Partners. Consistent Quality."
          />
          <div className="space-y-6 font-sans text-base text-body-text font-light leading-relaxed">
            <p>
              We don&apos;t operate resorts. We partner with them. Each
              destination in the NutriCove network is handpicked for its natural
              beauty, cultural depth, quality of accommodations, and willingness
              to support the therapeutic framework we bring.
            </p>
            <p>
              Currently live in{" "}
              <strong className="font-medium text-deep-forest">
                Thailand (Narai Healing Sanctuary, Koh Samui)
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-deep-forest">
                Dominican Republic (Zaria Eco Retreat, Saman&aacute;)
              </strong>
              , with{" "}
              <strong className="font-medium text-deep-forest">
                Peru and Colombia
              </strong>{" "}
              planned for 2027.
            </p>
            <p>
              The four retreat themes &mdash; Release, Reset, Return, and
              Reclaim &mdash; rotate across all destinations on a published
              calendar. Same program, same therapeutic quality, different
              landscape. Choose the location that calls to you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-deep-forest py-20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(184,148,62,0.06)_0%,transparent_70%)]"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-5 h-5 text-gold-light" />
                  </div>
                  <p className="font-serif text-3xl md:text-4xl text-gold-light">
                    {stat.value}
                  </p>
                  <p className="text-xs font-sans uppercase tracking-[0.16em] text-pure-white/40 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <CTABlock
        headline="Your Transformation Begins with a Single Decision"
        body="Spaces are intentionally limited. Release, Reset, Return, or Reclaim \u2014 the full 7-night all-inclusive program starts at $6,000 per person."
        primaryCta={{ label: "Book Your Retreat", href: "/book" }}
        secondaryCta={{
          label: "Explore Destinations",
          href: "/#destinations",
        }}
      />

      <Footer />
    </>
  );
}
