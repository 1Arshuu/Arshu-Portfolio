"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiArrowDownLine } from "react-icons/ri";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { CONTACT, waLink, WA_MESSAGES } from "@/lib/constants";
import { scrollToId } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Character-by-character typewriter used on the tagline line two. */
function Typewriter({ text, startDelay }: { text: string; startDelay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      id = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(id);
            return c;
          }
          return c + 1;
        });
      }, 45);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [text, startDelay]);

  return (
    <span className="font-display text-3xl italic text-gradient-gold sm:text-4xl">
      {text.slice(0, count)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="font-sans text-gold"
      >
        |
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full items-center overflow-hidden px-6 pt-28 pb-20 md:px-10 md:pt-32 md:pb-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT — copy column */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass mb-8 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full px-4 py-2"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan animate-pulse-glow" />
              <span className="font-accent text-[8.5px] uppercase tracking-[0.15em] text-muted sm:text-[10px] sm:tracking-[0.25em]">
                Digital Marketer × App Developer — India
              </span>
            </motion.div>

            {/* Name — clean, contained, no bleed */}
            <h1 className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.25, duration: 0.9, ease: EASE }}
                className="neon-gold font-display font-semibold italic leading-[0.9] tracking-tight text-gradient-gold"
                style={{ fontSize: "clamp(72px, 11vw, 150px)" }}
              >
                Arshu
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
                className="-mt-1 font-heading font-bold leading-[0.95] tracking-tight text-ink"
                style={{ fontSize: "clamp(48px, 7vw, 92px)" }}
              >
                Khan.
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 max-w-md"
            >
              <p className="font-body text-lg text-muted sm:text-xl">
                I handle the development &amp; marketing.
              </p>
              <Typewriter text="You handle the sales." startDelay={750} />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-accent text-xs font-semibold uppercase tracking-wider text-void transition-all duration-300 hover:bg-gold-light"
                style={{ boxShadow: "0 0 28px rgba(212,168,67,0.35)" }}
              >
                WhatsApp Me
                <RiArrowRightLine className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                type="button"
                onClick={() => scrollToId("#contact")}
                data-cursor="BOOK"
                className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-accent text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:border-gold/40"
              >
                Book a Discovery Call
              </button>
            </motion.div>

            {/* Inline contact (aligned, no overlap with fixed badge) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-1 font-accent text-[11px] tracking-wide text-dim"
            >
              <span>{CONTACT.email}</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span>{CONTACT.phoneDisplay}</span>
            </motion.div>
          </div>

          {/* RIGHT — photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: EASE }}
            className="hidden justify-self-center lg:block lg:justify-self-end"
          >
            <PhotoPlaceholder
              className="h-[520px] w-[400px]"
              caption="// Add photo here"
            />
          </motion.div>
        </div>
      </div>

      {/* Centered scroll cue (won't collide with FAB / badge) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex"
      >
        <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-dim">
          Scroll
        </span>
        <RiArrowDownLine className="animate-float-y text-gold" />
      </motion.div>
    </section>
  );
}
