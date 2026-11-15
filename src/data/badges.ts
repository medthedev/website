export interface BadgeDefinition {
  text: string;
  href: string;
  label: string;
  background: string;
  border: string;
  textColor: string;
}

export const badges: BadgeDefinition[] = [
  {
    text: "medrinnn",
    href: "https://medrinnn.dev",
    label: "medrinnn.dev",
    background: "#16171d",
    border: "#94a2ff",
    textColor: "#e9e9ee",
  },
  {
    text: "arch btw",
    href: "https://archlinux.org",
    label: "Arch Linux",
    background: "#1793d1",
    border: "#7ad7ff",
    textColor: "#ffffff",
  },
  {
    text: "foss",
    href: "https://www.gnu.org/philosophy/free-sw.html",
    label: "Free software",
    background: "#0e1a12",
    border: "#7ee787",
    textColor: "#b7f7c8",
  },
  {
    text: "codeberg",
    href: "https://codeberg.org/medrinnn",
    label: "medrinnn on Codeberg",
    background: "#1d2b4f",
    border: "#8ab4ff",
    textColor: "#e6eeff",
  },
];
