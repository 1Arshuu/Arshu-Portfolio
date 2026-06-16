/**
 * Global constants — colors, contact info, and shared config.
 * Colors mirror the CSS tokens in globals.css for use in inline styles
 * (canvas, SVG, framer-motion values) where Tailwind classes can't reach.
 */

export const COLORS = {
  void: "#080808",
  surface: "#0F0F0F",
  elevated: "#161616",
  gold: "#D4A843",
  goldLight: "#F0C866",
  goldGlow: "rgba(212, 168, 67, 0.12)",
  violet: "#7B61FF",
  violetGlow: "rgba(123, 97, 255, 0.10)",
  textPrimary: "#F2F2F2",
  textSecondary: "#9A9A9A",
  textDim: "#555555",
  borderGold: "rgba(212, 168, 67, 0.18)",
  borderSubtle: "rgba(255, 255, 255, 0.06)",
} as const;

export const CONTACT = {
  name: "Arshu Khan",
  email: "marketwitharshu@gmail.com",
  phoneDisplay: "+91 9911844271",
  whatsapp: "https://wa.me/919911844271",
  instagram: "https://instagram.com/marketwitharshu",
  instagramHandle: "@marketwitharshu",
  location: "India",
} as const;

/** Pre-filled WhatsApp messages for the CTAs. */
export const WA_MESSAGES = {
  general:
    "Hi Arshu! I saw your portfolio and I'm interested in working with you. Here's what I have in mind:",
  call: "Hi Arshu! I'd like to book a free discovery call to discuss my project. Which day/time works best for you?",
} as const;

/** Build a wa.me link with a URL-encoded pre-filled message. */
export function waLink(message: string = WA_MESSAGES.general) {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Navigation links — hashes drive the Lenis-aware smooth scroll. */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

/** Marquee phrase running between sections. */
export const MARQUEE_SERVICES =
  "APP DEVELOPMENT · DIGITAL MARKETING · META ADS · SEO · SAAS · BRANDING · ";
