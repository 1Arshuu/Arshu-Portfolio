"use client";

import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { TESTIMONIALS } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full px-6 py-20 md:px-10 md:py-32 lg:px-16 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label="06 — Client Words"
          serif="What they"
          sans="say."
          size="text-5xl md:text-7xl"
        />

        <div className="mt-20 grid grid-cols-1 gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const violet = i % 2 === 1;
            const glow = violet ? "rgba(123,97,255,0.16)" : "rgba(212,168,67,0.16)";
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              >
                <TiltCard
                  intensity={8}
                  glow={glow}
                  className="group glass glass-highlight h-full overflow-hidden rounded-3xl"
                >
                  <figure className="relative flex h-full flex-col p-9 md:p-10">
                    {/* Oversized quote mark */}
                    <span
                      className="pointer-events-none absolute right-7 top-3 select-none font-display text-[100px] italic leading-none"
                      style={{ opacity: 0.12, color: violet ? "#7B61FF" : "#D4A843" }}
                    >
                      &rdquo;
                    </span>

                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <RiStarFill key={s} size={15} className={violet ? "text-violet" : "text-gold"} />
                      ))}
                    </div>

                    <blockquote className="mt-6 flex-1 font-body text-[15px] italic leading-[1.85] text-ink">
                      {t.quote}
                    </blockquote>

                    <figcaption className="mt-8">
                      <div className="mb-6 h-px w-full bg-white/10" />
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-full font-heading text-sm font-bold text-void ${
                            violet ? "bg-violet" : "bg-gold"
                          }`}
                        >
                          {t.initials}
                        </span>
                        <div>
                          <p className="font-heading text-sm font-bold text-ink">{t.name}</p>
                          <p className="font-accent text-[11px] text-dim">{t.role}</p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
