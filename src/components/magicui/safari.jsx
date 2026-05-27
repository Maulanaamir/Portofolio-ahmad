import { cn } from "../../lib/utils";

export function Safari({
  url = "",
  imageSrc,
  videoSrc,
  width = 1203,
  height = 753,
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
      className={cn(
        "size-full overflow-hidden rounded-[32px] shadow-[0_2px_80px_rgba(0,0,0,0.15)]",
        className
      )}
      {...props}
    >
      {/* Window chrome */}
      <rect width={1203} height={753} rx="32" fill="#E8E8E8" className="dark:fill-[#1c1c1e]" />
      <rect x="1" y="1" width={1201} height={53} fill="#D5D5D5" className="dark:fill-[#2c2c2e]" />

      {/* Traffic lights */}
      <circle cx="26" cy="27" r="8" fill="#FF5F57" />
      <circle cx="50" cy="27" r="8" fill="#FEBC2E" />
      <circle cx="74" cy="27" r="8" fill="#28C840" />

      {/* Address bar */}
      <rect x="130" y="12" width="944" height="30" rx="8" fill="#FEFEFE" className="dark:fill-[#3a3a3c]" />
      {url && (
        <text
          x="601.5"
          y="31"
          textAnchor="middle"
          fill="#8e8e93"
          fontSize="12"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {url}
        </text>
      )}

      {/* Screen area */}
      <rect x="0" y="54" width={1203} height={699} fill="#F9F9F9" className="dark:fill-[#111113]" />

      {/* Screenshot / image */}
      {imageSrc && (
        <>
          <defs>
            <clipPath id="safariScreenClip">
              <rect x="0" y="54" width={1203} height={699} />
            </clipPath>
          </defs>
          <image
            href={imageSrc}
            x="0"
            y="54"
            width={1203}
            height={699}
            clipPath="url(#safariScreenClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </>
      )}

      {/* Bottom rounded corners */}
      <path
        d={`M0 ${753 - 32} Q0 ${753} 32 ${753} H${1203 - 32} Q${1203} ${753} ${1203} ${753 - 32} V${753} H0 Z`}
        fill="#E8E8E8"
        className="dark:fill-[#1c1c1e]"
      />
    </svg>
  );
}
