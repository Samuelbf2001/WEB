import { createContext, useContext } from "react";
import type { Locale } from "./countries";

export type LocaleSource = "query" | "manual" | "ip" | "browser" | "default";

export interface LocaleContextValue {
  locale: Locale;
  country?: string;
  source: LocaleSource;
  setLocale: (locale: Locale) => void;
  clearManualLocale: () => void;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
};
