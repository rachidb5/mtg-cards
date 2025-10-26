import { Theme, Palette, PaletteOptions, ThemeOptions } from "@mui/material/styles";

// Extensão customizada da paleta
export interface CustomPalette {
  surface: string;
  text: {
    primary: string;
    secondary: string;
  };
}

// Extensão do tema completo
export interface AppTheme extends Theme {
  palette: Palette & CustomPalette;
}

// Opções permitidas para criar um tema (parcial)
export interface AppThemeOptions
  extends Omit<ThemeOptions, "palette" | "typography" | "spacing"> {
  palette?: PaletteOptions & Partial<CustomPalette>;
  typography?: ThemeOptions["typography"];
  spacing?: number | ((factor: number) => string | number);
}
