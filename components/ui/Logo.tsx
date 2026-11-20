interface LogoProps {
  className?: string;
  /** Use on dark backgrounds (header, footer). */
  inverse?: boolean;
  showWordmark?: boolean;
}

/**
 * SweetLivingRoom mark: the rounded S monogram with a sofa, pendant lamp and
 * plant, next to a two-tone wordmark. The mark itself is a raster asset
 * (/logo-mark.png) drawn inside the SVG so every call site keeps the same
 * viewBox-based sizing it had before.
 */
export function Logo({ className, inverse = false, showWordmark = true }: LogoProps) {
  const ink = inverse ? "#FAF6F0" : "#2A2724";
  const terracotta = inverse ? "#E8914F" : "#C2714F";

  return (
    <svg
      viewBox={showWordmark ? "0 0 236 36" : "0 0 36 36"}
      className={className}
      role="img"
      aria-label="SweetLivingRoom"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href="/logo-mark.png" x="0" y="0" width="36" height="36" preserveAspectRatio="xMidYMid meet" />
      {showWordmark && (
        <text x="44" y="25" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="20" letterSpacing="-0.01em">
          <tspan fill={ink}>Sweet</tspan>
          <tspan fill={terracotta}>LivingRoom</tspan>
        </text>
      )}
    </svg>
  );
}
