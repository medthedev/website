import { siGithub } from "simple-icons";
import { Link } from "react-router";

import { Badge } from "@/components/Badge/Badge";
import { BrandIcon } from "@/components/BrandIcon/BrandIcon";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CodeIcon,
  ServerIcon,
  ShieldIcon,
} from "@/components/icons/UiIcons";
import { Page } from "@/components/Page/Page";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { badges } from "@/data/badges";
import { site, socials } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

import styles from "./Home.module.css";

const highlights = [
  {
    icon: CodeIcon,
    title: "Free & open source",
    body: "I use free software wherever I can, and I try to give back by building in the open. It's how I learned most of what I know.",
    href: "/tech",
    cta: "See what I use",
  },
  {
    icon: ServerIcon,
    title: "Self-hosting",
    body: "I like running my own services — for privacy, for freedom, and for the simple joy of tinkering until it works.",
    href: "/tech",
    cta: "Browse my projects",
  },
  {
    icon: ShieldIcon,
    title: "Privacy",
    body: "I care about keeping my data mine, from the tools I choose to the way I build things for the web.",
    href: "/about",
    cta: "Read about me",
  },
] as const;

const discord = socials.find((social) => social.label === "Discord");

export function Home() {
  usePageMeta({ title: site.title, description: site.description });

  return (
    <Page wide>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>
          <span className={styles.statusDot} aria-hidden="true" />
          open source · self-hosted · arch btw
        </p>

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

        <div className={styles.showcase} aria-hidden="true">
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span className={styles.dots}>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.windowTitle}>med@arch — zsh</span>
              <span className={styles.windowSpacer} />
            </div>
            <div className={styles.windowBody}>
              <p className={styles.line}>
                <span className={styles.prompt}>➜</span>
                <span className={styles.command}>neofetch</span>
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>os</dt>
                  <dd>Arch Linux</dd>
                </div>
                <div>
                  <dt>stack</dt>
                  <dd>TypeScript · Python · C</dd>
                </div>
                <div>
                  <dt>focus</dt>
                  <dd>FOSS · self-hosting · privacy</dd>
                </div>
                <div>
                  <dt>learning</dt>
                  <dd>Go · Rust · C++</dd>
                </div>
              </dl>
              <p className={styles.line}>
                <span className={styles.prompt}>➜</span>
                <span className={styles.command}>whoami</span>
              </p>
              <p className={styles.output}>self-taught dev, always building something.</p>
              <p className={styles.line}>
                <span className={styles.prompt}>➜</span>
                <span className={styles.cursor} />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="about-heading">
        <header className={styles.sectionHead}>
          <p className={styles.kicker}>Discover</p>
          <h2 id="about-heading">What I&apos;m about</h2>
          <p>A few things that shape how I use computers and what I choose to build.</p>
        </header>

        <div className={styles.cards}>
          {highlights.map(({ icon: Icon, title, body, href, cta }, index) => (
            <article
              key={title}
              className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
            >
              <span className={styles.cardIcon}>
                <Icon width={20} height={20} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
              <Link className={styles.cardLink} to={href}>
                {cta}
                <ArrowUpRightIcon width={14} height={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="socials-heading">
        <header className={styles.sectionHead}>
          <p className={styles.kicker}>Community</p>
          <h2 id="socials-heading">Find me online</h2>
          <p>Say hi, follow along, or challenge me to a game of chess.</p>
        </header>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </ul>
      </section>

      <section className={styles.badgeSection} aria-label="Badges">
        <div className={styles.badges}>
          {badges.map((badge) => (
            <Badge key={badge.label} {...badge} />
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.ctaGlow} aria-hidden="true" />
        <h2 id="cta-heading">Let&apos;s build something.</h2>
        <p>
          I&apos;m always up for talking about code, Linux, self-hosting, or anything in
          between. The fastest way to reach me is Discord.
        </p>
        <div className={styles.actions}>
          {discord && (
            <a
              className="button button--glass"
              href={discord.href}
              target="_blank"
              rel="noreferrer"
            >
              <BrandIcon icon={discord.icon} size={16} />
              Say hi on Discord
            </a>
          )}
          <Link className="button button--primary" to="/about">
            More about me
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
      </section>
    </Page>
  );
}
