interface LogoProps {
  className?: string;
  /** Use on dark backgrounds (header, footer). */
  inverse?: boolean;
  showWordmark?: boolean;
}

/**
 * SweetLivingRoom mark: an arched alcove with a small sofa inside,
 * plus a two-tone "Sweet" / "LivingRoom" wordmark. Pure SVG.
 */
export function Logo({ className, inverse = false, showWordmark = true }: LogoProps) {
  const ink = inverse ? "#FAF6F0" : "#2A2724";
  const terracotta = "#C2714F";
  const green = inverse ? "#7C9A80" : "#2F4739";
  const cream = "#FAF6F0";

  return (
    <svg
      viewBox={showWordmark ? "0 0 236 36" : "0 0 36 36"}
      className={className}
      role="img"
      aria-label="SweetLivingRoom"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arched alcove */}
      <path d="M3 33V16a15 15 0 0 1 30 0v17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" fill={green} />
      <path d="M8 33V16.5a10 10 0 0 1 20 0V33H8Z" fill={cream} />
      {/* Sofa */}
      <g fill={terracotta}>
        <rect x="10.5" y="23" width="15" height="5.5" rx="1.6" />
        <rect x="10.5" y="19.5" width="3.5" height="6" rx="1.6" />
        <rect x="22" y="19.5" width="3.5" height="6" rx="1.6" />
        <rect x="13.5" y="20.5" width="9" height="3.6" rx="1.4" opacity="0.75" />
      </g>
      {/* Brass pendant light */}
      <circle cx="18" cy="14" r="2.2" fill="#D2A24C" />
      <path d="M18 8.5v3.3" stroke="#D2A24C" strokeWidth="1.2" strokeLinecap="round" />
      {showWordmark && (
        <text x="44" y="25" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="20" letterSpacing="-0.01em">
          <tspan fill={ink}>Sweet</tspan>
          <tspan fill={terracotta}>LivingRoom</tspan>
        </text>
      )}
    </svg>
  );
}
