import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#a1a1aa",
  colorTo = "#3f3f46",
  delay = 0,
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        className
      )}
      style={{
        "--size": size,
        "--duration": duration,
        "--anchor": anchor,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
    >
      <div className="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),conic-gradient(from_calc(var(--anchor)*1deg),var(--color-from)_0deg,var(--color-to)_calc(var(--size)*1deg),transparent_calc(var(--size)*1deg))] motion-safe:animate-border-beam" />
    </div>
  );
}
