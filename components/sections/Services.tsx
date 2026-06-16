"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { SERVICES } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full px-6 py-20 md:px-10 md:py-32 lg:px-16 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label="03 — What I Do"
          serif="Services that"
          sans="move businesses."
          size="text-5xl md:text-7xl"
        />

        <div className="mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const delay = (col + row) * 0.06;
            const Icon = service.icon;
            // Alternate the accent glow between gold and violet for rhythm.
            const violet = (i + Math.floor(i / 3)) % 2 === 1;
            const glow = violet ? "rgba(123,97,255,0.18)" : "rgba(212,168,67,0.18)";
            const accent = violet ? "text-violet" : "text-gold";

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay, duration: 0.7, ease: EASE }}
              >
                <TiltCard
                  glow={glow}
                  className="group glass glass-highlight h-full overflow-hidden rounded-3xl"
                >
                  <div className="relative flex h-full flex-col p-9 md:p-10">
                    {/* number + animated corner accent */}
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-accent text-xs tracking-widest text-dim">
                        {service.num}
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          violet ? "bg-violet" : "bg-gold"
                        } animate-pulse-glow`}
                      />
                    </div>

                    {/* Icon in a glowing glass chip */}
                    <div
                      className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:scale-110"
                      style={{
                        boxShadow: violet
                          ? "0 0 30px rgba(123,97,255,0.0)"
                          : "0 0 30px rgba(212,168,67,0.0)",
                      }}
                    >
                      <Icon className={`${accent} transition-transform duration-500 group-hover:scale-110`} size={30} />
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-muted">
                      {service.description}
                    </p>

                    {/* Bottom hover line */}
                    <div className="mt-8 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-violet transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
