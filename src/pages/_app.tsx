// src/pages/_app.tsx
import { AppThemeProvider } from "@/providers/ThemeProvider";
import "../app/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
