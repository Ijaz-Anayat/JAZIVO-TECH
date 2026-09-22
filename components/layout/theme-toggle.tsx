"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const nextLight = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", nextLight);
    localStorage.setItem("jazivo-theme", nextLight ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-ink"
    >
      <Sun size={16} strokeWidth={1.75} className="light:hidden" />
      <Moon size={16} strokeWidth={1.75} className="hidden light:block" />
    </button>
  );
}
