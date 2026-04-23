"use client";

import { useEffect, useState, useRef } from "react";
import NumberFlow from "@number-flow/react";

interface AnimatedStatProps {
  /** Numeric target value. If a string is passed, render as static */
  value: number | string;
  /** Label displayed below the number */
  label: string;
  /** Optional prefix (e.g. "$") */
  prefix?: string;
  /** Optional suffix (e.g. "%", "+") */
  suffix?: string;
  /** Starting delay before animation in ms (for stagger) */
  delay?: number;
}

export default function AnimatedStat({
  value,
  label,
  prefix = "",
  suffix = "",
  delay = 0,
}: AnimatedStatProps) {
  const [display, setDisplay] = useState(
    typeof value === "number" ? 0 : value
  );
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof value !== "number") return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(() => setDisplay(value), delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-3xl md:text-4xl text-gold-light flex items-center justify-center">
        {typeof value === "number" ? (
          <NumberFlow
            value={typeof display === "number" ? display : 0}
            prefix={prefix}
            suffix={suffix}
            format={{ useGrouping: false }}
            transformTiming={{ duration: 1400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            spinTiming={{ duration: 1400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
      <p className="text-xs font-sans uppercase tracking-[0.16em] text-pure-white/40 mt-1">
        {label}
      </p>
    </div>
  );
}
