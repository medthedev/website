import type { ReactNode } from "react";

import styles from "./Page.module.css";

interface PageProps {
  children: ReactNode;
  /** Wider container for dense content such as the projects grid. */
  wide?: boolean;
  /** Wrap content in a glass card. */
  card?: boolean;
}

export function Page({ children, wide = false, card = false }: PageProps) {
  const className = [styles.page, wide && styles.wide, card && styles.card].filter(Boolean).join(" ");
  return <div className={className}>{children}</div>;
}
