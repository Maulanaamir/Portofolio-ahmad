import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
}) {
  const cardRef = useRef(null);
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" });

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const cx = ((e.clientX - left) / width) * 100 + "%";
      const cy = ((e.clientY - top) / height) * 100 + "%";
      setGradientCenter({ cx, cy });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800",
        "cursor-default",
        className
      )}
    >
      <div className="relative z-10 w-full">{children}</div>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at ${gradientCenter.cx} ${gradientCenter.cy}, ${gradientColor}, transparent 100%)`,
          opacity: gradientOpacity,
        }}
      />
    </div>
  );
}
