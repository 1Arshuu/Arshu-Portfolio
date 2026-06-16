"use client";

import FilmReel from "@/components/ui/FilmReel";

/**
 * Fixed, full-viewport cinematic backdrop sitting behind all content:
 *  - drifting aurora orbs (gold / violet / cyan neon glows)
 *  - a perspective grid "floor"
 *  - slowly rotating film reels (the 3D film motif)
 *  - a vignette to focus the center
 * Pointer-events none; purely decorative.
 */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-void" />

      {/* Aurora neon orbs */}
      <div
        className="animate-aurora absolute -left-[10%] top-[-5%] h-[55vh] w-[55vh] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(212,168,67,0.22), transparent 70%)" }}
      />
      <div
        className="animate-aurora absolute right-[-8%] top-[20%] h-[60vh] w-[60vh] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(123,97,255,0.20), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-aurora absolute left-[30%] bottom-[-10%] h-[50vh] w-[50vh] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(79,214,255,0.12), transparent 70%)",
          animationDelay: "-12s",
        }}
      />

      {/* Perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45vh]"
        style={{
          transform: "perspective(500px) rotateX(62deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      >
        <div className="grid-floor h-full w-full" />
      </div>

      {/* Floating film reels */}
      <FilmReel
        className="animate-spin-slow absolute right-[6%] top-[12%] h-40 w-40 opacity-[0.18]"
        color="rgba(212,168,67,0.6)"
      />
      <FilmReel
        className="animate-spin-slower absolute left-[4%] top-[55%] h-56 w-56 opacity-[0.12]"
        color="rgba(123,97,255,0.6)"
      />
      <FilmReel
        className="animate-spin-slow absolute right-[14%] bottom-[8%] h-28 w-28 opacity-[0.14]"
        color="rgba(79,214,255,0.6)"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, transparent 40%, rgba(6,5,7,0.85) 100%)",
        }}
      />
    </div>
  );
}
