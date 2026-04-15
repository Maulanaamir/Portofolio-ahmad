import { cn } from "../../lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  style,
  ...props
}) {
  const duration = style?.["--duration"] || "35s";
  const gap = style?.["--gap"] || "0.75rem";

  const animName = vertical ? "marquee-vertical" : "marquee";

  return (
    <div
      {...props}
      className={cn("group flex overflow-hidden p-2", className)}
      style={{
        gap,
        flexDirection: vertical ? "column" : "row",
        ...style,
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
            style={{
              gap,
              flexDirection: vertical ? "column" : "row",
              animation: `${animName} ${duration} linear infinite`,
              animationDirection: reverse ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
