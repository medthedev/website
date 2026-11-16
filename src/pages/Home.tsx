import { siGithub } from "simple-icons";
import { Link } from "react-router";

import { BrandIcon } from "@/components/BrandIcon/BrandIcon";
import { ArrowRightIcon } from "@/components/icons/UiIcons";
import { Page } from "@/components/Page/Page";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { site, socials } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

import styles from "./Home.module.css";

export function Home() {
  usePageMeta({ title: site.title, description: site.description });

  return (
    <Page wide>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>med</span>.
        </h1>

        <p className={styles.lead}>
          A self-taught software developer who&apos;s very passionate about free and open
          source software, self-hosting, privacy, and making things.
        </p>
        <p className={styles.sub}>
          I also love sport — I&apos;m trying hybrid training — and reading books,
          especially those that talk about making that sweet money.
        </p>

        <div className={styles.actions}>
          <Link className="button button--primary" to="/tech">
            See what I build
            <ArrowRightIcon width={16} height={16} />
          </Link>
          <a
            className="button button--glass"
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <BrandIcon icon={siGithub} size={16} />
            GitHub
          </a>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="socials-heading">
        <header className={styles.sectionHead}>
          <p className={styles.kicker}>Community</p>
          <h2 id="socials-heading">Find me online</h2>
        </header>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </ul>
      </section>
    </Page>
  );
}
