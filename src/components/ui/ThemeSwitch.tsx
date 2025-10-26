"use client";

import { Switch } from "@mui/material";
import useTheme from "@/store/theme-store";

export function ThemeSwitch() {
  const { Theme, toggleTheme } = useTheme() as { Theme: string; toggleTheme: () => void };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <Switch
      checked={Theme === "dark"}
      onChange={handleThemeToggle}
      inputProps={{ "aria-label": "Alternar tema" }}
    />
  );
}