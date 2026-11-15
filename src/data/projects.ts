export interface Project {
  name: string;
  owner: string;
  description: string;
  language: string;
  languageColor: string;
  href: string;
  stars?: number;
}

export const projects: Project[] = [
  {
    name: "muslimcli",
    owner: "medrinnn",
    description:
      "A Rust CLI for prayer times and other Muslim utilities — fetches daily timings, saves your config, and plays the adhan when it's time.",
    language: "Rust",
    languageColor: "#dea584",
    href: "https://codeberg.org/medrinnn/muslimcli",
    stars: 2,
  },
  {
    name: "salat",
    owner: "medrinnn",
    description:
      "A Python command-line prayer times tool. Fetches daily timings for your city and plays an adhan audio file when a prayer time is reached.",
    language: "Python",
    languageColor: "#3572a5",
    href: "https://github.com/medrinnn/salat",
  },
  {
    name: "website",
    owner: "medthedev",
    description:
      "The source for this site — a small, dependency-light React and TypeScript portfolio built with Vite and Bun.",
    language: "TypeScript",
    languageColor: "#3178c6",
    href: "https://github.com/medthedev/website",
  },
];
