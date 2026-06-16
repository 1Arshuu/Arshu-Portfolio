"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { scrollToId } from "@/lib/utils";

/** Mixed-typography AK monogram, reused in the footer. */
function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`leading-none ${className}`} aria-label="Arshu Khan">
      <span className="font-display text-2xl italic text-gold">A</span>
      <span className="font-heading text-2xl font-extrabold text-ink">K</span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Backdrop blur + border once past 80px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scrolling while the mobile overlay is open. Body overflow alone isn't
  // enough — Lenis keeps handling touch/wheel and scrolls the page behind the
  // fixed overlay, which is what makes the menu "fluctuate". Stop Lenis too.
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } })
      .lenis;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    // Allow the overlay to start closing before scrolling.
    setTimeout(() => scrollToId(href), 50);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[8000] transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300"
        style={{
          // While the mobile overlay is open, drop the blur/bg so the navbar
          // blends into the opaque overlay instead of re-compositing its
          // backdrop-filter every frame as the overlay fades in (that recompute
          // is what made the top "fluctuate").
          backdropFilter: scrolled && !open ? "blur(22px)" : "none",
          backgroundColor: scrolled && !open ? "rgba(10,9,12,0.6)" : "transparent",
          borderBottom:
            scrolled && !open
              ? "1px solid var(--border-subtle)"
              : "1px solid transparent",
          boxShadow: scrolled && !open ? "0 10px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <button
            type="button"
            onClick={() => handleNav("#hero")}
            data-cursor="TOP"
            aria-label="Back to top"
          >
            <Logo />
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="group relative font-accent text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {link.label}
                {/* Underline drawing from center outward */}
                <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Availability dot */}
            <span className="ml-1 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              <span className="font-accent text-[10px] uppercase tracking-wider text-dim">
                Available
              </span>
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-ink"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-7 bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-ink"
            />
          </button>
        </nav>
      </motion.header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[7999] flex flex-col items-start justify-center gap-2 bg-void px-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="font-display text-6xl italic text-ink"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
