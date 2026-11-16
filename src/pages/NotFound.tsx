import { Link } from "react-router";

import { Page } from "@/components/Page/Page";
import { pageTitle } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

import styles from "./NotFound.module.css";

export function NotFound() {
  usePageMeta({
    title: pageTitle("404"),
    description: "This page does not exist.",
  });

  return (
    <Page>
      <div className={styles.wrapper}>
        <p className={styles.code}>404</p>
        <h1>This page wandered off.</h1>
        <p className={styles.text}>
          The link may be broken, or the page may have moved somewhere else.
        </p>
        <Link className="button button--glass" to="/">
          Take me home
        </Link>
      </div>
    </Page>
  );
}
