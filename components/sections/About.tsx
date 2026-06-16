"use client";

import { motion } from "framer-motion";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import CountUp from "@/components/ui/CountUp";
import { STATS } from "@/lib/data";
import { fadeUp, inViewOnce } from "@/lib/utils";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-20 md:px-10 md:py-32 lg:px-16 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section meta */}
        <div className="mb-14 flex items-center gap-4">
          <span className="font-accent text-xs text-gold">02</span>
          <span className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
          <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-dim">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* LEFT — photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
          >
            <div className="animate-float-y">
              <PhotoPlaceholder className="aspect-[4/5] w-full max-w-[420px]" />
            </div>
            <div className="glass mt-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse-glow" />
              <span className="font-accent text-[10px] uppercase tracking-wider text-muted">
                Based in India
              </span>
            </div>
          </motion.div>

          {/* RIGHT — text + stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
          >
            <h2 className="text-5xl leading-[1.02] tracking-tight text-ink md:text-[64px]">
              <span className="font-display italic">The mind</span>{" "}
              <span className="font-heading font-extrabold text-gradient-gold">
                behind the work.
              </span>
            </h2>

            <div className="mt-9 max-w-2xl space-y-6 font-body text-[17px] leading-[1.9] text-muted">
              <p>
                I&apos;m Arshu Khan — a self-made digital marketer and app
                developer from India. I didn&apos;t follow the traditional path.
              </p>
              <p>
                While others were collecting degrees, I was building businesses,
                launching brands, and running ad campaigns that actually convert.
              </p>
              <p>
                I&apos;ve founded two brands — Arshu Clothing (fashion D2C) and
                Kysta (cosmetics) — managed a company for a year, and shipped apps
                used by real businesses across India. I know what it takes to grow
                something from zero. Because I&apos;ve done it.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass glass-highlight relative overflow-hidden rounded-2xl p-7"
                >
                  <CountUp
                    to={stat.value}
                    suffix={stat.suffix}
                    className={`font-display text-6xl italic md:text-[76px] ${
                      i === 1 ? "text-gradient-neon" : "text-gradient-gold"
                    }`}
                  />
                  <p className="mt-3 font-accent text-[10px] uppercase leading-relaxed tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
