import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  /** Tailwind aspect / sizing classes applied to the frame. */
  className?: string;
  /** Override the helper caption. */
  caption?: string;
}

/**
 * Reusable glass frame standing in for a real photo of Arshu.
 * Glassmorphic panel, AK monogram, neon corner ticks, mono caption.
 * Swap for a <next/image> when the real asset exists.
 */
export default function PhotoPlaceholder({
  className,
  caption = "// Replace with photo of Arshu Khan",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "glass glass-highlight relative flex items-center justify-center overflow-hidden rounded-3xl",
        className
      )}
    >
      {/* Neon corner ticks */}
      <span className="absolute left-4 top-4 h-6 w-6 rounded-tl-lg border-l border-t border-gold/50" />
      <span className="absolute right-4 top-4 h-6 w-6 rounded-tr-lg border-r border-t border-violet/50" />
      <span className="absolute bottom-4 left-4 h-6 w-6 rounded-bl-lg border-b border-l border-violet/50" />
      <span className="absolute bottom-4 right-4 h-6 w-6 rounded-br-lg border-b border-r border-gold/50" />

      {/* Monogram */}
      <span className="select-none font-display text-[72px] italic leading-none text-gradient-gold">
        AK
      </span>

      {/* Caption */}
      <span className="absolute bottom-5 left-0 right-0 text-center font-accent text-[10px] tracking-wide text-dim">
        {caption}
      </span>
    </div>
  );
}
