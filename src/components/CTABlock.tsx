import Link from "next/link";

interface CTABlockProps {
  headline: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABlock({ headline, body, primaryCta, secondaryCta }: CTABlockProps) {
  return (
    <section className="bg-deep-forest py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(184,148,62,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/[0.03] via-transparent to-sage/[0.03]" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3 text-gold-light">
          Begin Your Journey
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-pure-white mb-6">
          {headline}
        </h2>
        {body && (
          <p className="font-sans text-base text-pure-white/45 font-light leading-relaxed mb-10 max-w-lg mx-auto">
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="rounded-full bg-terracotta px-10 py-4 text-sm font-semibold text-pure-white hover:bg-terracotta-hover transition-all shadow-[0_4px_28px_rgba(191,99,54,0.3)]"
            >
              {primaryCta.label} &rarr;
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-full border border-pure-white/15 px-10 py-4 text-sm font-medium text-pure-white/70 hover:bg-pure-white/[0.04] hover:border-pure-white/25 transition-all"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
