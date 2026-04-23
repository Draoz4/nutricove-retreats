"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";

export interface PolaroidMarker {
  id: string;
  location: [number, number];
  image: string;
  caption: string;
  rotate: number;
  href?: string;
  status?: "active" | "soon";
}

interface GlobePolaroidsProps {
  markers: PolaroidMarker[];
  className?: string;
  speed?: number;
  dark?: number;
  markerColor?: [number, number, number];
  baseColor?: [number, number, number];
  glowColor?: [number, number, number];
  mapBrightness?: number;
  diffuse?: number;
}

export function GlobePolaroids({
  markers,
  className = "",
  speed = 0.003,
  dark = 1,
  markerColor = [0.72, 0.58, 0.24], // gold
  baseColor = [0.11, 0.17, 0.13], // deep-forest
  glowColor = [0.97, 0.94, 0.89], // cream
  mapBrightness = 6,
  diffuse = 1.2,
}: GlobePolaroidsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId: number;
    let phi = 0;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark,
        diffuse,
        mapSamples: 16000,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markerElevation: 0,
        markers: markers.map((m) => ({ location: m.location, size: 0.04 })),
        opacity: 0.9,
        onRender: () => {},
      });

      function animate() {
        if (!isPausedRef.current) phi += speed;
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1";
      });
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width && entries[0].contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            // @ts-expect-error CSS Anchor Positioning (new spec, Chrome 125+)
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            marginBottom: 10,
            background: "#FFFBF5",
            padding: "8px 8px 28px",
            boxShadow: "0 6px 20px rgba(27,42,33,0.18), 0 1px 3px rgba(0,0,0,0.08)",
            transform: `rotate(${m.rotate}deg)`,
            pointerEvents: "none" as const,
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 6px))`,
            transition: "opacity 0.4s, filter 0.4s",
            zIndex: 5,
          }}
        >
          <img
            src={m.image}
            alt={m.caption}
            style={{
              display: "block",
              width: 76,
              height: 76,
              objectFit: "cover",
              filter: m.status === "soon" ? "grayscale(0.4)" : "none",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: 7,
              left: 0,
              right: 0,
              textAlign: "center",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "0.65rem",
              color: "#1B2A21",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {m.caption}
          </span>
          {m.status === "soon" && (
            <span
              style={{
                position: "absolute",
                top: 4,
                right: 4,
                background: "#B8943E",
                color: "#FFFBF5",
                fontSize: "0.45rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "1px 4px",
                borderRadius: "2px",
              }}
            >
              Soon
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
