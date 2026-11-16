import { siGithub } from "simple-icons";
import { Link, NavLink } from "react-router";

import { site } from "@/data/site";

import { BrandIcon } from "../BrandIcon/BrandIcon";
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
        <Link className={styles.brand} to="/" aria-label="medrinnn — home">
          medrinnn
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
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

        <div className={styles.actions}>
          <ThemeToggle />
          <a
            className={`button button--glass ${styles.github}`}
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <BrandIcon icon={siGithub} size={16} />
            <span className={styles.githubLabel}>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
