import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

const exploreLinks = [
  { href: "/destinations/thailand", label: "Thailand" },
  { href: "/destinations/dominican-republic", label: "Dominican Republic" },
  { href: "/#themes", label: "Retreat Themes" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book a Retreat" },
];

const partnerLinks = [
  { href: "/apply", label: "Apply as Practitioner" },
  { href: "/apply", label: "Resort Partnership" },
  { href: "#", label: "Become an Affiliate" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/nutricove", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/nutricove", label: "Facebook" },
  { icon: Mail, href: "mailto:retreats@nutricove.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-pure-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold text-pure-white">NutriCove</span>
              <span className="block text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-gold-light">Retreats</span>
            </Link>
            <p className="font-sans text-sm text-warm-sand/60 leading-relaxed mb-6">
              Clinically-guided wellness retreats at world-class destinations. Healing has a destination.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pure-white/[0.06] flex items-center justify-center text-warm-sand/60 hover:bg-pure-white/10 hover:text-gold-light transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-gold-light mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-warm-sand/60 hover:text-pure-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-gold-light mb-6">Partner With Us</h4>
            <ul className="space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-warm-sand/60 hover:text-pure-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-gold-light mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:retreats@nutricove.com" className="font-sans text-sm text-warm-sand/60 hover:text-pure-white transition-colors">
                  retreats@nutricove.com
                </a>
              </li>
              <li className="font-sans text-sm text-warm-sand/60">
                Koh Samui, Thailand
              </li>
              <li className="font-sans text-sm text-warm-sand/60">
                Saman\u00e1, Dominican Republic
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pure-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-warm-sand/40">
            &copy; 2026 NutriCove Retreats. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-sans text-xs text-warm-sand/40 hover:text-warm-sand/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-sans text-xs text-warm-sand/40 hover:text-warm-sand/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
