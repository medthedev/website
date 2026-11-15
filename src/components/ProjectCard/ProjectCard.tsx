import type { Project } from "@/data/projects";

import { ArrowUpRightIcon, StarIcon } from "../icons/UiIcons";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { owner, name, description, language, languageColor, href, stars } = project;

  return (
    <a className={styles.card} href={href} target="_blank" rel="noreferrer">
      <span className={styles.header}>
        <span className={styles.owner}>{owner}</span>
        <span className={styles.slash} aria-hidden="true">
          /
        </span>
        <span className={styles.name}>{name}</span>
        <ArrowUpRightIcon width={15} height={15} className={styles.arrow} />
      </span>

      <p className={styles.description}>{description}</p>

      <span className={styles.meta}>
        <span className={styles.metaItem}>
          <span
            className={styles.languageDot}
            style={{ backgroundColor: languageColor }}
            aria-hidden="true"
          />
          {language}
        </span>

        {stars !== undefined && (
          <span className={styles.metaItem}>
            <StarIcon width={13} height={13} />
            {stars}
            <span className="sr-only"> stars</span>
          </span>
        )}
      </span>
    </a>
  );
}
