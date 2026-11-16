import { site } from "@/data/site";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          read if you are smart
          <span aria-hidden="true"> · </span>
          <a href={site.sourceUrl} target="_blank" rel="noreferrer">
            source code
          </a>
        </p>
        <p className={styles.copy}>© {new Date().getFullYear()} med</p>
      </div>
    </footer>
  );
}
