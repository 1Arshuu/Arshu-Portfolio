import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Variants } from "framer-motion";

/** Merge conditional class names, de-duplicating conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Smoothly scroll to a hash target, respecting Lenis if it's mounted. */
export function scrollToId(id: string) {
  const target = document.querySelector(id);
  if (!target) return;
  // window.lenis is attached by SmoothScroll provider.
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

/* ============================================================
   SHARED FRAMER-MOTION VARIANTS
   ============================================================ */

/** Default cinematic easing (ease-out cubic-ish). */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Fade up + 20px translate — the site-wide "content reveal". */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/** Container that staggers its children's reveals. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Per-word reveal used in staggered headings. */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Standard in-view trigger config (fire once at ~20% visibility). */
export const inViewOnce = { once: true, amount: 0.2 } as const;
