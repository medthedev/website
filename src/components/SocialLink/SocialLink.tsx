import type { Social } from "@/data/site";

import { BrandIcon } from "../BrandIcon/BrandIcon";
import { ArrowUpRightIcon } from "../icons/UiIcons";
import styles from "./SocialLink.module.css";

export function SocialLink({ label, handle, href, icon }: Social) {
  return (
    <li className={styles.item}>
      <a className={styles.card} href={href} target="_blank" rel="me noreferrer">
        <span className={styles.icon}>
          <BrandIcon icon={icon} size={18} />
        </span>

        <span className={styles.text}>
          <span className={styles.label}>{label}</span>
          <span className={styles.handle}>{handle}</span>
        </span>

        <ArrowUpRightIcon className={styles.arrow} width={15} height={15} />
      </a>
    </li>
  );
}
