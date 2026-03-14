"use client";

import { motion } from "framer-motion";
import { Shield, Stethoscope, Leaf, FileCheck, UserCheck, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const safetyItems = [
  { icon: Heart, title: "Completely Optional", description: "Participation in any sacred plant ceremony is entirely voluntary. The full retreat experience is included regardless of your choice." },
  { icon: Stethoscope, title: "Medical Screening", description: "All guests complete a thorough medical and psychological screening before participation. Safety is non-negotiable." },
  { icon: Leaf, title: "Dietary Preparation", description: "Detailed preparation guidelines provided, including dietary adjustments in the days leading up to the ceremony." },
  { icon: UserCheck, title: "Experienced Practitioners", description: "All ceremonies are conducted by trained, experienced facilitators with years of practice in traditional ceremonial work." },
  { icon: Shield, title: "Licensed Medical On-Site", description: "A licensed clinical therapist is present throughout every ceremony. Emergency medical support is always available." },
  { icon: FileCheck, title: "Informed Consent", description: "Every participant signs a detailed informed consent and waiver after receiving comprehensive information about the experience." },
];

export default function PlantCeremonySafety() {
  return (
    <section className="bg-deep-forest py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(122,139,111,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Safety & Preparation"
          headline="Sacred Plant Ceremonies"
          subhead="Every ceremony is held to the highest standards of safety, preparation, and clinical oversight."
          dark
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-pure-white/[0.04] border border-pure-white/[0.06] hover:bg-pure-white/[0.07] transition-colors"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sage/20 text-sage mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-pure-white mb-2">{item.title}</h3>
              <p className="font-sans text-sm text-warm-sand/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
