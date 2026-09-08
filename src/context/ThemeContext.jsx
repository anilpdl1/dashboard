import { useEffect, useState } from "react";
import { ThemeContext } from "./themeStore";
const storageKey = "devspace-theme";

function getInitialTheme() {
  return localStorage.getItem(storageKey) || "system";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Keep the document class in sync so Tailwind and custom CSS can react to it.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const isDark =
        theme === "dark" || (theme === "system" && mediaQuery.matches);
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    };

    applyTheme();
    mediaQuery.addEventListener("change", applyTheme);
    localStorage.setItem(storageKey, theme);
    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
