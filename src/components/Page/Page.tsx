import type { ReactNode } from "react";

import styles from "./Page.module.css";

interface PageProps {
  children: ReactNode;
  /** Wider container for dense content such as the projects grid. */
  wide?: boolean;
}

export function Page({ children, wide = false }: PageProps) {
  const className = [styles.page, wide && styles.wide].filter(Boolean).join(" ");
  return <div className={className}>{children}</div>;
}
