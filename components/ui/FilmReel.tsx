/** Decorative film-reel SVG used as a floating 3D motif in the background. */
export default function FilmReel({
  className = "",
  color = "rgba(212,168,67,0.5)",
}: {
  className?: string;
  color?: string;
}) {
  // Eight holes evenly around the reel.
  const holes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    return { cx: 50 + Math.cos(a) * 30, cy: 50 + Math.sin(a) * 30 };
  });
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden>
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="11" stroke={color} strokeWidth="1.5" />
      {holes.map((h, i) => (
        <circle key={i} cx={h.cx} cy={h.cy} r="6.5" stroke={color} strokeWidth="1.2" />
      ))}
    </svg>
  );
}
