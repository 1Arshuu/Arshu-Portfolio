"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small mono eyebrow, e.g. "03 — WHAT I DO". */
  label: string;
  /** First line — rendered in Instrument Serif italic. */
  serif: string;
  /** Second line — rendered in Syne Bold. */
  sans: string;
  /** Center everything (used by CTA). */
  centered?: boolean;
  className?: string;
  /** Heading size class for both lines. */
  size?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Shared editorial section heading: mono eyebrow + a two-line mixed-typography
 * title (serif italic over sans bold). Reveals on scroll into view.
 */
export default function SectionHeading({
  label,
  serif,
  sans,
  centered = false,
  className,
  size = "text-5xl md:text-6xl",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={cn(centered && "text-center", className)}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
        }}
        className={cn(
          "mb-6 flex items-center gap-3 font-accent text-[11px] uppercase tracking-[0.3em] text-gold",
          centered && "justify-center"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
        {label}
      </motion.p>
      <h2 className={cn("leading-[0.95] tracking-tight text-ink", size)}>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
          }}
          className="block font-display italic"
        >
          {serif}
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
          }}
          className="block font-heading font-extrabold text-gradient-gold"
        >
          {sans}
        </motion.span>
      </h2>
    </motion.div>
  );
}
