import type { ReactNode } from "react";

import styles from "./Page.module.css";

interface PageProps {
  children: ReactNode;
  /** Wider container for dense content such as the projects grid. */
  wide?: boolean;
}

export function Page({ children, wide = false }: PageProps) {
  return <div className={wide ? `${styles.page} ${styles.wide}` : styles.page}>{children}</div>;
}
