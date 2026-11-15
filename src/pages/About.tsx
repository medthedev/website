import { Page } from "@/components/Page/Page";
import { pageTitle } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

import styles from "./About.module.css";

export function About() {
  usePageMeta({
    title: pageTitle("About"),
    description: "A little about med — programming, tinkering, gaming, reading, chess, and sport.",
  });

  return (
    <Page card>
      <article className={styles.about}>
        <header className={styles.intro}>
          <h1>About me</h1>
          <p>
            Hi! I&apos;m Mohamed Reda, 16 (M), but you can also call me medrinnn — or med
            for short if you prefer!
          </p>
          <p>
            I&apos;m a developer who enjoys programming and building things for fun. I also
            like to self-host stuff for privacy and freedom. And yes, I use Arch, btw.
          </p>
        </header>

        <h2>Interests</h2>

        <section className={styles.interest}>
          <h3>Programming</h3>
          <p>
            Programming is one of my biggest interests. I enjoy working with different
            languages and frameworks and learning how things work under the hood. I&apos;m
            mainly interested in web dev, game dev (though I haven&apos;t done that in a
            while), and low-level stuff, and I&apos;m always trying to improve my skills.
          </p>
          <p>
            I started out around 2020–2022, but two things cost me years: switching
            languages too often, and tutorial hell. That changed in 2025 when I discovered
            The Odin Project, then CS50 — easily the best courses I&apos;ve ever taken, for
            web dev and computer science respectively. In 2024 I also discovered Linux,
            specifically Arch Linux and Hyprland, which turned out to be amazing for
            productivity.
          </p>
          <p>
            Right now I want to push open source forward. I&apos;m looking to learn Go, Rust,
            C++, and Java, and I&apos;m already decent with TypeScript, JavaScript, C, and
            Python. And, well, I&apos;m hoping for a great future for myself too.
          </p>
        </section>

        <section className={styles.interest}>
          <h3>Making &amp; Tinkering</h3>
          <p>
            Outside of programming, I enjoy making things with simple materials. I might
            get a 3D printer at some point to do more of it, or maybe even get into
            hardware — who knows?
          </p>
        </section>

        <section className={styles.interest}>
          <h3>Gaming</h3>
          <p>
            Gaming is one of my favorite hobbies. My big three are Team Fortress 2,
            Minecraft, and Counter-Strike. However, I play Blox Strike — why? Because
            it&apos;s just CS2 in Roblox, and it&apos;s what my laptop can run, since I
            don&apos;t have the money for a good PC build right now. Here&apos;s my{" "}
            <a href="https://steamcommunity.com/id/medrinnn/" target="_blank" rel="noreferrer">
              Steam account
            </a>
            . Please contact me on Discord before adding me on Steam — I won&apos;t accept
            scammers.
          </p>
        </section>

        <section className={styles.interest}>
          <h3>Reading</h3>
          <p>
            I only read non-fiction. I&apos;d rather read books that actually teach me
            something — about business, money, life, or productivity — than spend my time
            on made-up stories. Some examples: &ldquo;Rich Dad, Poor Dad&rdquo;,
            &ldquo;Think and Grow Rich&rdquo;, and &ldquo;The 7 Habits of Highly Effective
            People&rdquo;.
          </p>
        </section>

        <section className={styles.interest}>
          <h3>Chess</h3>
          <p>
            I like chess because of the planning and overthinking involved — skills I think
            I&apos;ll need a lot if I ever start a business. Besides that, it&apos;s just a
            fun mind game to play in your free time. I don&apos;t play it that much, but
            here&apos;s my{" "}
            <a href="https://www.chess.com/member/medrinnn" target="_blank" rel="noreferrer">
              Chess.com account
            </a>
            .
          </p>
        </section>

        <section className={styles.interest}>
          <h3>Sport</h3>
          <p>
            I do hybrid training, mainly calisthenics and bodybuilding, but I also like
            walking, running, and martial arts.
          </p>
        </section>
      </article>
    </Page>
  );
}
