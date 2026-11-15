import { siBluesky, siChessdotcom, siCodeberg, siGithub, siSteam } from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export const site = {
  name: "med",
  title: "med's site",
  description:
    "The personal site of med — a self-taught developer who loves free software, self-hosting, privacy, and making things.",
  url: "https://medrinnn.dev/",
  sourceUrl: "https://github.com/medthedev/website",
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
    label: "Codeberg",
    handle: "medrinnn",
    href: "https://codeberg.org/medrinnn",
    icon: siCodeberg,
  },
  {
    label: "GitHub",
    handle: "medrinnn",
    href: "https://github.com/medrinnn",
    icon: siGithub,
  },
  {
    label: "Bluesky",
    handle: "@medrinnn.bsky.social",
    href: "https://bsky.app/profile/medrinnn.bsky.social",
    icon: siBluesky,
  },
  {
    label: "Steam",
    handle: "medrinnn",
    href: "https://steamcommunity.com/id/medrinnn/",
    icon: siSteam,
  },
  {
    label: "Chess.com",
    handle: "medrinnn",
    href: "https://www.chess.com/member/medrinnn",
    icon: siChessdotcom,
  },
];
