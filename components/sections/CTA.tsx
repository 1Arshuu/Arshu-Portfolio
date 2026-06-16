"use client";

import { motion } from "framer-motion";
import { CONTACT, waLink, WA_MESSAGES } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-16"
    >
      {/* Subtle radial gold glow from center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, transparent 30%, rgba(212,168,67,0.04) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="font-display italic leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(48px, 9vw, 88px)" }}
        >
          {[
            { text: "Let's build", gold: false },
            { text: "something", gold: false },
            { text: "remarkable.", gold: true },
          ].map((line) => (
            <motion.span
              key={line.text}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className={line.gold ? "block text-gradient-neon neon-gold" : "block text-ink"}
            >
              {line.text}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-8 max-w-xl font-body text-lg leading-relaxed text-muted"
        >
          Whether it&apos;s an app, a website, or a complete growth strategy —
          I&apos;m ready when you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CHAT"
            className="rounded-full bg-gold px-12 py-5 font-accent text-sm font-bold uppercase tracking-wider text-void transition-all duration-300 hover:bg-gold-light"
            style={{ boxShadow: "0 0 40px rgba(212,168,67,0.5)" }}
          >
            WhatsApp Me Now →
          </a>
          <a
            href={waLink(WA_MESSAGES.call)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="BOOK"
            className="glass rounded-full px-12 py-5 font-accent text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:border-gold/40"
          >
            Book a Discovery Call →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 font-accent text-xs text-dim"
        >
          {CONTACT.email} &nbsp;·&nbsp; {CONTACT.phoneDisplay} &nbsp;·&nbsp;{" "}
          {CONTACT.instagramHandle}
        </motion.p>
      </div>
    </section>
  );
}
