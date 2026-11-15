import type { CSSProperties } from "react";

import { stack } from "@/data/stack";

import { BrandIcon } from "../BrandIcon/BrandIcon";
import styles from "./TechStack.module.css";

export function TechStack() {
  return (
    <div className={styles.stack}>
      {stack.map((group) => (
        <section key={group.name} className={styles.group}>
          <h3>{group.name}</h3>
          <ul className={styles.items}>
            {group.items.map((item) => (
              <li key={item.name}>
                <a
                  className={styles.item}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  style={
                    {
                      "--brand": `#${item.color ?? item.icon.hex}`,
                    } as CSSProperties
                  }
                >
                  <BrandIcon icon={item.icon} size={32} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
