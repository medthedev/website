import { Page } from "@/components/Page/Page";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { TechStack } from "@/components/TechStack/TechStack";
import { projects } from "@/data/projects";
import { pageTitle } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

import styles from "./Tech.module.css";

export function Tech() {
  usePageMeta({
    title: pageTitle("Tech"),
    description: "The tools med uses and the projects med builds.",
  });

  return (
    <Page wide>
      <article>
        <header className={styles.intro}>
          <h1>Tech</h1>
          <p>
            I&apos;m a big fan of free and open source software, and I try to use FOSS
            wherever I can. I love learning new things, so I&apos;ve tried a bunch of
            languages over the years — but my favorites to work with are TypeScript and
            Python.
          </p>
        </header>

        <section className={styles.section} aria-labelledby="stack-heading">
          <h2 id="stack-heading">Tech stack</h2>
          <TechStack />
        </section>

        <section className={styles.section} aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <div className={styles.projects}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </article>
    </Page>
  );
}
