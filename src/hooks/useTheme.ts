import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

// Dark is the default. The visitor's choice is remembered in localStorage.
const read = (): Theme => {
  try {
    const s = localStorage.getItem("theme");
    if (s === "light" || s === "dark") return s;
  } catch {
    /* storage unavailable */
  }
  return "dark";
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);
  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
