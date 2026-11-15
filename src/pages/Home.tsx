import { Badge } from "@/components/Badge/Badge";
import { Page } from "@/components/Page/Page";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { badges } from "@/data/badges";
import { site, socials } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

import styles from "./Home.module.css";

export function Home() {
  usePageMeta({ title: site.title, description: site.description });

  return (
    <Page card>
      <section className={styles.hero}>
        <h1>
          Hi, I&apos;m <span>med!</span>
        </h1>
        <p>
          I&apos;m a self-taught software developer who&apos;s very passionate about free
          and open source software, self-hosting, privacy, and making things.
        </p>
        <p>
          I also love sport — I&apos;m trying hybrid training — and reading books,
          especially those that talk about making that sweet money.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="socials-heading">
        <h2 id="socials-heading">Find me online</h2>
        <ul className={styles.socials}>
          {socials.map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-label="Badges">
        <div className={styles.badges}>
          {badges.map((badge) => (
            <Badge key={badge.label} {...badge} />
          ))}
        </div>
      </section>
    </Page>
  );
}
