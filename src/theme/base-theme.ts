import { AppThemeOptions } from "./types";

export const baseTheme: AppThemeOptions = {
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    body1: { fontSize: "1rem", fontWeight: 400 },
  },
  spacing: (factor: number) => `${8 * factor}px`,
};
