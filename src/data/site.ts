import { siDiscord, siGithub, siSteam, siX } from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export const site = {
  name: "med",
  title: "med's site",
  description:
    "The personal site of med — a self-taught developer who loves free software, self-hosting, privacy, and making things.",
  url: "https://medrinnn.dev/",
  sourceUrl: "https://github.com/medthedev/website",
  githubUrl: "https://github.com/medthedev",
} as const;

/** Builds a document title, e.g. "About — med's site". */
export function pageTitle(page: string): string {
  return page === site.title ? page : `${page} — ${site.title}`;
}

export interface Social {
  label: string;
  handle: string;
  href: string;
  icon: SimpleIcon;
}

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "medthedev",
    href: "https://github.com/medthedev",
    icon: siGithub,
  },
  {
    label: "Twitter",
    handle: "@medrinnn",
    href: "https://x.com/medrinnn",
    icon: siX,
  },
  {
    label: "Discord",
    handle: "medrinnn",
    href: "https://discord.com/users/1280539117985333250",
    icon: siDiscord,
  },
  {
    label: "Steam",
    handle: "medrinnn",
    href: "https://steamcommunity.com/id/medrinnn/",
    icon: siSteam,
  },
];
