interface SectionHeadingProps {
  label?: string;
  headline: string;
  subhead?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, headline, subhead, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className={`text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3 ${light ? "text-gold-light" : "text-terracotta"}`}>
          {label}
        </p>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-4 ${light ? "text-pure-white" : "text-deep-forest"}`}>
        {headline}
      </h2>
      <div className={`w-16 h-0.5 ${light ? "bg-gold/50" : "bg-terracotta/40"} ${centered ? "mx-auto" : ""} mb-4`} />
      {subhead && (
        <p className={`font-sans text-base sm:text-lg font-light max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-pure-white/55" : "text-secondary-text"}`}>
          {subhead}
        </p>
      )}
    </div>
  );
}
