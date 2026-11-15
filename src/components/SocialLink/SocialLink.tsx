import type { Social } from "@/data/site";

import { BrandIcon } from "../BrandIcon/BrandIcon";
import styles from "./SocialLink.module.css";

export function SocialLink({ label, handle, href, icon }: Social) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <BrandIcon icon={icon} size={17} />
      </span>
      <span className={styles.label}>{label}</span>
      <a className={styles.handle} href={href} target="_blank" rel="me noreferrer">
        {handle}
      </a>
    </li>
  );
}
