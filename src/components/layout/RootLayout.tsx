import { Outlet, ScrollRestoration } from "react-router";

import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import styles from "./RootLayout.module.css";

export function RootLayout() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
