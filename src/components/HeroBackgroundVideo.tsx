"use client";

import { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  /** Slug — looks for /videos/{slug}.webm, /videos/{slug}.mp4, /posters/{slug}.jpg */
  slug: string;
  /** Darkening overlay opacity (0-100). Default 60 for readable text. */
  overlayOpacity?: number;
  /** Tint color class for overlay, e.g. "bg-deep-forest". Default deep-forest. */
  overlayTint?: string;
  /** Blur the video slightly for better text readability. */
  blur?: boolean;
  className?: string;
}

export default function HeroBackgroundVideo({
  slug,
  overlayOpacity = 60,
  overlayTint = "bg-deep-forest",
  blur = false,
  className = "",
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    // Attempt autoplay; some browsers block until user gesture even when muted
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Swallow — poster will remain visible, looks intentional
      });
    }
  }, [prefersReducedMotion, isReady]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isReady ? "opacity-100" : "opacity-0"
        } ${blur ? "blur-[2px] scale-[1.02]" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={`/posters/${slug}.jpg`}
        onCanPlay={() => setIsReady(true)}
        onLoadedData={() => setIsReady(true)}
      >
        <source src={`/videos/${slug}.webm`} type="video/webm" />
        <source src={`/videos/${slug}.mp4`} type="video/mp4" />
      </video>

      {/* Poster as fallback while video is loading */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isReady ? "opacity-0" : "opacity-100"
        } ${blur ? "blur-[2px] scale-[1.02]" : ""}`}
        style={{ backgroundImage: `url(/posters/${slug}.jpg)` }}
      />

      {/* Darkening tint */}
      <div
        className={`absolute inset-0 ${overlayTint}`}
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* Subtle vignette for edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_50%,transparent_0%,rgba(27,42,33,0.35)_100%)]" />
    </div>
  );
}
