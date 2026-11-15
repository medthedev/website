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
      <ArrowUpRightIcon width={15} height={15} className={styles.arrow} />

      <span className={styles.author}>
        <img
          src={`https://github.com/${owner}.png?size=64`}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <span>{owner}</span>
      </span>

      <h3 className={styles.name}>{name}</h3>
      <span className={styles.description}>{description}</span>

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
