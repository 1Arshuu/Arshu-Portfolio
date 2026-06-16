"use client";

import { useState } from "react";
import { MARQUEE_SERVICES } from "@/lib/constants";

interface MarqueeDividerProps {
  /** Base scroll direction. */
  direction?: "left" | "right";
  /** Override the ticker text (defaults to the services list). */
  text?: string;
  /** Loop duration in seconds — higher is slower. */
  durationSec?: number;
}

/**
 * Full-width horizontal ticker placed between sections.
 * Pure CSS keyframes (defined in globals.css) for GPU-smooth infinite scroll;
 * hovering reverses the direction.
 */
export default function MarqueeDivider({
  direction = "left",
  text = MARQUEE_SERVICES,
  durationSec = 30,
}: MarqueeDividerProps) {
  const [reversed, setReversed] = useState(false);

  // Resolve the active animation given base direction + hover reversal.
  const goingLeft = direction === "left" ? !reversed : reversed;
  const animationName = goingLeft ? "marquee-left" : "marquee-right";

  return (
    <div
      className="glass relative w-full overflow-hidden border-x-0 py-7"
      onMouseEnter={() => setReversed(true)}
      onMouseLeave={() => setReversed(false)}
      aria-hidden
    >
      <div
        className="flex w-max whitespace-nowrap will-change-transform"
        style={{ animation: `${animationName} ${durationSec}s linear infinite` }}
      >
        {/* Duplicated track so the -50% translate loops seamlessly. */}
        {[0, 1].map((dup) => (
          <span
            key={dup}
            className="font-accent text-xs uppercase tracking-[0.3em] text-gold/80"
          >
            {text.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}
