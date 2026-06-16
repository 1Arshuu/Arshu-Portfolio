"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = HTMLMotionProps<"div"> & {
  /** Max tilt in degrees. */
  intensity?: number;
  /** Glow color used for the mouse-follow glare. */
  glow?: string;
  children: React.ReactNode;
};

/**
 * 3D tilt card: rotates toward the cursor with spring smoothing and renders a
 * radial glare that tracks the pointer. Falls flat on touch (no hover).
 */
export default function TiltCard({
  intensity = 10,
  glow = "rgba(212,168,67,0.18)",
  className,
  children,
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  const glare = useMotionTemplate`radial-gradient(380px circle at ${mx}% ${my}%, ${glow}, transparent 60%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * intensity * 2);
    rx.set(-(py - 0.5) * intensity * 2);
    mx.set(px * 100);
    my.set(py * 100);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
    mx.set(50);
    my.set(50);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      className={cn("perspective relative", className)}
      {...rest}
    >
      {/* Mouse-follow glare */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
      />
      {children}
    </motion.div>
  );
}
