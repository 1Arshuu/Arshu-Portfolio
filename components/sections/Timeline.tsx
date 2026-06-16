"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  // The central line "draws" itself as this block scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="relative w-full px-6 py-20 md:px-10 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label="05 — The Journey"
          serif="How I got"
          sans="here."
          size="text-5xl md:text-7xl"
        />

        <div ref={trackRef} className="relative mt-20">
          {/* Central rail (desktop centered, mobile left) */}
          <div
            className="absolute bottom-0 top-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ left: "7px", backgroundColor: "var(--border-subtle)" }}
          />
          {/* Animated gradient fill that draws downward */}
          <motion.div
            className="absolute top-0 w-px origin-top bg-gradient-to-b from-gold via-violet to-cyan md:left-1/2 md:-translate-x-1/2"
            style={{ left: "7px", height: "100%", scaleY: lineScale, boxShadow: "0 0 12px rgba(212,168,67,0.5)" }}
          />

          <div className="flex flex-col gap-12 md:gap-4">
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={`${item.year}-${i}`}
                  className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-2 md:gap-0"
                >
                  {/* Node dot */}
                  <span
                    className="absolute top-1.5 z-10 h-4 w-4 rounded-full border-2 bg-void md:left-1/2 md:-translate-x-1/2"
                    style={{
                      left: "-1px",
                      borderColor: isLeft ? "#D4A843" : "#7B61FF",
                      boxShadow: `0 0 14px ${isLeft ? "rgba(212,168,67,0.7)" : "rgba(123,97,255,0.7)"}`,
                    }}
                  />

                  {/* Content — alternating sides on desktop */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className={[
                      "col-start-2 pb-2 md:col-span-1 md:py-8",
                      isLeft
                        ? "md:col-start-1 md:pr-14 md:text-right"
                        : "md:col-start-2 md:pl-14 md:text-left",
                    ].join(" ")}
                  >
                    <span className="font-accent text-sm font-bold text-gold">
                      {item.year}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p
                      className={[
                        "mt-2 font-body text-sm leading-relaxed text-muted md:max-w-sm",
                        isLeft ? "md:ml-auto" : "md:mr-auto",
                      ].join(" ")}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
