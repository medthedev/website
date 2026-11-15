import { NavLink } from "react-router";

import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./NavBar.module.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/tech", label: "Tech", end: false },
];

export function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
