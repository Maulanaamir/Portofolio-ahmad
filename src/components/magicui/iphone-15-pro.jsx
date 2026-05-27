import { cn } from "../../lib/utils";

export function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  videoSrc,
  className,
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cn("pointer-events-none size-full", className)}
      {...props}
    >
      <defs>
        <clipPath id="iphoneScreenClip">
          {/* Rounded screen area */}
          <rect x="21" y="21" width="391" height="840" rx="44" />
        </clipPath>
      </defs>

      {/* Outer body */}
      <rect x="0" y="0" width="433" height="882" rx="56" fill="#3a3a3c" />

      {/* Titanium frame highlight */}
      <rect x="1" y="1" width="431" height="880" rx="55" fill="none" stroke="#5a5a5c" strokeWidth="1.5" />

      {/* Inner bezel */}
      <rect x="8" y="8" width="417" height="866" rx="50" fill="#1c1c1e" />

      {/* Screen background */}
      <rect x="21" y="21" width="391" height="840" rx="44" fill="#000000" />

      {/* Screenshot content */}
      {src && (
        <image
          href={src}
          x="21"
          y="21"
          width="391"
          height="840"
          clipPath="url(#iphoneScreenClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      )}

      {/* Dynamic Island */}
      <rect x="163" y="32" width="107" height="34" rx="17" fill="#000" />

      {/* Front camera subtle dot */}
      <circle cx="256" cy="49" r="5.5" fill="#111" />
      <circle cx="256" cy="49" r="3" fill="#1a1a2e" opacity="0.7" />

      {/* Side buttons – volume up */}
      <rect x="-2" y="180" width="4" height="52" rx="2" fill="#4a4a4c" />
      {/* Side buttons – volume down */}
      <rect x="-2" y="244" width="4" height="52" rx="2" fill="#4a4a4c" />
      {/* Side buttons – mute */}
      <rect x="-2" y="148" width="4" height="26" rx="2" fill="#4a4a4c" />
      {/* Power button */}
      <rect x="431" y="200" width="4" height="72" rx="2" fill="#4a4a4c" />

      {/* Bottom bar */}
      <rect x="165" y="852" width="103" height="5" rx="2.5" fill="#3a3a3c" />

      {/* Screen glare */}
      <rect
        x="21"
        y="21"
        width="391"
        height="840"
        rx="44"
        fill="url(#glare)"
        opacity="0.04"
      />
      <defs>
        <linearGradient id="glare" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
