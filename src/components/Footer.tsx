import Link from "next/link";

const footerLinks = [
  { href: "/destinations/thailand", label: "Thailand" },
  { href: "/destinations/dominican-republic", label: "Dominican Republic" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book a Retreat" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-pure-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-serif text-xl text-pure-white">NutriCove</span>
              <span className="text-[9px] font-sans font-bold tracking-[0.16em] uppercase text-gold-light/80 px-2.5 py-1 border border-gold/20 rounded-full">
                Retreats
              </span>
            </div>
            <p className="font-serif italic text-pure-white/40 text-sm mt-2">
              Healing has a destination.
            </p>
          </div>

          <div>
            <h4 className="text-gold/80 text-[10px] font-sans font-bold tracking-[0.18em] uppercase mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-pure-white/50 hover:text-pure-white transition-colors font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold/80 text-[10px] font-sans font-bold tracking-[0.18em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-pure-white/50 font-sans">
              <li>
                <a href="mailto:retreats@nutricove.com" className="hover:text-pure-white transition-colors">
                  retreats@nutricove.com
                </a>
              </li>
              <li className="text-pure-white/30">
                Thailand &middot; Dominican Republic &middot; Peru (2027) &middot; Colombia (2027)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pure-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-pure-white/25 font-sans">
            &copy; 2026 NutriCove Wellness Retreats. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-pure-white/25 font-sans">
            <Link href="/privacy" className="hover:text-pure-white/40 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pure-white/40 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
