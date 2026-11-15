import type { BadgeDefinition } from "@/data/badges";

import styles from "./Badge.module.css";

export function Badge({ text, href, label, background, border, textColor }: BadgeDefinition) {
  return (
    <a
      className={styles.badge}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      title={label}
    >
      <svg width="88" height="31" viewBox="0 0 88 31" aria-hidden="true" focusable="false">
        <rect width="88" height="31" rx="2" fill={background} />
        <rect x="1" y="1" width="86" height="29" rx="1.5" fill="none" stroke={border} strokeWidth="2" />
        <text
          x="44"
          y="20"
          textAnchor="middle"
          fill={textColor}
          fontFamily="'Courier New', monospace"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.5"
        >
          {text}
        </text>
      </svg>
    </a>
  );
}
