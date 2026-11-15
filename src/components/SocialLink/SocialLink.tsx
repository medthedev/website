import type { Social } from "@/data/site";

import { BrandIcon } from "../BrandIcon/BrandIcon";
import { ArrowUpRightIcon } from "../icons/UiIcons";
import styles from "./SocialLink.module.css";

export function SocialLink({ label, handle, href, icon }: Social) {
  return (
    <a className={styles.link} href={href} target="_blank" rel="me noreferrer">
      <span className={styles.icon}>
        <BrandIcon icon={icon} size={16} />
      </span>
      <span className={styles.label}>{label}</span>
      <span className={styles.handle}>{handle}</span>
      <ArrowUpRightIcon width={14} height={14} className={styles.arrow} />
    </a>
  );
}
