"use client";

/**
 * Full-page film-grain texture.
 * Uses an animated SVG feTurbulence layer (cheaper & crisper than redrawing a
 * canvas every frame). Fixed, non-interactive, sits above everything.
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-soft-light"
      style={{ opacity: 0.04 }}
    >
      {/*
        Static grain. The noise is rendered once into the filter and painted as
        a single rect — no per-frame re-rasterization (an animated feTurbulence
        seed is extremely expensive and was the main source of jank).
      */}
      <svg className="h-full w-full">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
