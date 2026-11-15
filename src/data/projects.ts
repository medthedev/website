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
    name: "website",
    owner: "medthedev",
    description:
      "The source for this site — a small, dependency-light React and TypeScript portfolio built with Vite and Bun.",
    language: "TypeScript",
    languageColor: "#3178c6",
    href: "https://github.com/medthedev/website",
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
];
