"use client";

import { RiInstagramLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";
import { CONTACT } from "@/lib/constants";

function Logo() {
  return (
    <span className="leading-none" aria-label="Arshu Khan">
      <span className="font-display text-2xl italic text-gold">A</span>
      <span className="font-heading text-2xl font-extrabold text-ink">K</span>
    </span>
  );
}

const SOCIALS = [
  { icon: RiInstagramLine, href: CONTACT.instagram, label: "Instagram" },
  { icon: RiWhatsappLine, href: CONTACT.whatsapp, label: "WhatsApp" },
  { icon: RiMailLine, href: `mailto:${CONTACT.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full px-6 py-14 md:px-10 lg:px-16">
      <div
        className="mx-auto max-w-[1400px] border-t pt-10"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        {/* Top row */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Logo />

          <p className="order-3 text-center font-body text-sm italic text-dim md:order-2">
            I handle the development &amp; marketing. You handle the sales.
          </p>

          <div className="order-2 flex items-center gap-5 md:order-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor="OPEN"
                className="text-muted transition-colors hover:text-gold"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-2 border-t pt-6 md:flex-row"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="font-accent text-[11px] text-dim">
            © 2025 Arshu Khan. All rights reserved.
          </p>
          <p className="font-accent text-[11px] text-dim">
            Designed &amp; developed by Arshu Khan
          </p>
        </div>
      </div>
    </footer>
  );
}
