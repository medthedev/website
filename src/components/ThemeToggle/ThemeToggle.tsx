import { useTheme } from "@/theme/useTheme";

import { MonitorIcon, MoonIcon, SunIcon } from "../icons/UiIcons";
import styles from "./ThemeToggle.module.css";

const OPTIONS = [
  { value: "light", label: "Light theme", Icon: SunIcon },
  { value: "system", label: "Follow system theme", Icon: MonitorIcon },
  { value: "dark", label: "Dark theme", Icon: MoonIcon },
] as const;

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div className={styles.toggle} role="radiogroup" aria-label="Color theme">
      {OPTIONS.map(({ value, label, Icon }) => (
        <label key={value} className={styles.option} title={label}>
          <input
            className={styles.input}
            type="radio"
            name="theme"
            value={value}
            checked={preference === value}
            onChange={() => setPreference(value)}
            aria-label={label}
          />
          <Icon width={15} height={15} />
        </label>
      ))}
    </div>
  );
}
