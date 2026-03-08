import Link from "next/link";

const exploreLinks = [
  { href: "/destinations/thailand", label: "Thailand" },
  { href: "/destinations/dominican-republic", label: "Dominican Republic" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book a Retreat" },
];

const partnerLinks = [
  { href: "/apply", label: "Apply as Practitioner" },
  { href: "/apply", label: "Resort Partnership" },
  { href: "#", label: "Become an Affiliate", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-pure-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-pure-white/50 hover:text-pure-white transition-colors font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold/80 text-[10px] font-sans font-bold tracking-[0.18em] uppercase mb-5">
              Partner With Us
            </h4>
            <ul className="space-y-2.5">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-pure-white/50 hover:text-pure-white transition-colors font-sans inline-flex items-center gap-1.5"
                    >
                      {link.label}
                      <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-pure-white/50 hover:text-pure-white transition-colors font-sans">
                      {link.label}
                    </Link>
                  )}
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
