import {
  siArchlinux,
  siC,
  siCplusplus,
  siGit,
  siGo,
  siJavascript,
  siOpenjdk,
  siPython,
  siReact,
  siRust,
  siTypescript,
  siVite,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export interface TechItem {
  name: string;
  href: string;
  icon: SimpleIcon;
  /** Optional brand color override for logos that are black by default. */
  color?: string;
}

export interface TechGroup {
  name: string;
  items: TechItem[];
}

export const stack: TechGroup[] = [
  {
    name: "Languages",
    items: [
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org",
        icon: siTypescript,
      },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/docs/Web/JavaScript",
        icon: siJavascript,
      },
      {
        name: "Python",
        href: "https://www.python.org",
        icon: siPython,
      },
      {
        name: "C",
        href: "https://en.wikipedia.org/wiki/C_(programming_language)",
        icon: siC,
      },
    ],
  },
  {
    name: "Learning",
    items: [
      { name: "Go", href: "https://go.dev", icon: siGo },
      { name: "Rust", href: "https://www.rust-lang.org", icon: siRust, color: "dea584" },
      { name: "C++", href: "https://isocpp.org", icon: siCplusplus },
      { name: "Java", href: "https://openjdk.org", icon: siOpenjdk, color: "e76f00" },
    ],
  },
  {
    name: "Web",
    items: [
      { name: "React", href: "https://react.dev", icon: siReact },
      { name: "Vite", href: "https://vite.dev", icon: siVite },
    ],
  },
  {
    name: "Linux & tools",
    items: [
      { name: "Arch Linux", href: "https://archlinux.org", icon: siArchlinux },
      { name: "Git", href: "https://git-scm.com", icon: siGit },
    ],
  },
];
