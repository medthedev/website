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
    name: "muslimcli",
    owner: "medthedev",
    description:
      "A command line utility that has various islamic tools in the terminal to help you get closer to Allah.",
    language: "Rust",
    languageColor: "#DDA584",
    href: "https://github.com/medthedev/muslimcli",
  },
];
