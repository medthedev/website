import { BrandIcon } from "../BrandIcon/BrandIcon";
import { stack } from "@/data/stack";
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
                  title={item.name}
                >
                  <BrandIcon icon={item.icon} size={15} />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
