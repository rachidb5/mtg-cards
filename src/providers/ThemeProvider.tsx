"use client";

import React, { ReactNode, useMemo, FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "@/theme/light";
import { darkTheme } from "@/theme/dark";
import useTheme from "@/store/theme-store";

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const { Theme: mode } = useTheme() as { Theme: string };
  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};