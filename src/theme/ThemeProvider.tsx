import { useEffect, useMemo, useState, type ReactNode } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { ThemeContext, type ResolvedTheme, type ThemePreference } from "./theme-context";

const STORAGE_KEY = "theme";
const DARK_MODE_QUERY = "(prefers-color-scheme: dark)";

const THEME_COLORS: Record<ResolvedTheme, string> = {
  light: "#f7f6f3",
  dark: "#14151a",
};

function readStoredPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // localStorage can be disabled; fall back to the system preference.
  }

  return "system";
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [preference, setPreference] = useState<ThemePreference>(readStoredPreference);
  const systemPrefersDark = useMediaQuery(DARK_MODE_QUERY);

  const resolved: ResolvedTheme =
    preference === "system" ? (systemPrefersDark ? "dark" : "light") : preference;

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.theme = resolved;
    root.dataset.themePreference = preference;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[resolved]);

    try {
      localStorage.setItem(STORAGE_KEY, preference);
    } catch {
      // Persisting the preference is best-effort.
    }
  }, [preference, resolved]);

  const value = useMemo(
    () => ({ preference, resolved, setPreference }),
    [preference, resolved],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
