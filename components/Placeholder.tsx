import type { CSSProperties } from "react";
import type { Tone } from "@/lib/types";

/**
 * Pastel image placeholder. Swap this component's internals to render a real
 * <Image> once photography is available — every image slot in the app uses it.
 */
export function Placeholder({
  tone,
  label,
  paw = true,
  className,
  style,
}: {
  tone?: Tone;
  label?: string;
  paw?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={"ph " + (tone ?? "") + " " + (className ?? "")}
      style={style}
      role="img"
      aria-label={label || "image"}
    >
      {paw && (
        <svg className="ph-paw" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
          <ellipse cx="20" cy="22" rx="6.5" ry="9" />
          <ellipse cx="44" cy="22" rx="6.5" ry="9" />
          <ellipse cx="10" cy="36" rx="5.5" ry="7.5" />
          <ellipse cx="54" cy="36" rx="5.5" ry="7.5" />
          <path d="M32 34c-8 0-14 6-14 13 0 5 4 8 9 8 2 0 3.5-1 5-1s3 1 5 1c5 0 9-3 9-8 0-7-6-13-14-13z" />
        </svg>
      )}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}
