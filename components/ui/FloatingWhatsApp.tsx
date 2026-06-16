"use client";

import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";
import { waLink, WA_MESSAGES } from "@/lib/constants";

/**
 * Always-visible WhatsApp FAB (bottom-right). Gentle infinite pulse.
 */
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Arshu on WhatsApp"
      data-cursor="CHAT"
      className="fixed bottom-6 right-6 z-[9000] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 8px 30px rgba(37, 211, 102, 0.35)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [1, 1.05, 1], opacity: 1 }}
      transition={{
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        opacity: { delay: 1, duration: 0.4 },
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <RiWhatsappFill size={28} />
    </motion.a>
  );
}
