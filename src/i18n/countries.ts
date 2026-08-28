export type Locale = "es" | "en";

export const SUPPORTED_LOCALES: Locale[] = ["es", "en"];

export const SPANISH_MARKET_COUNTRIES = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

export const isSupportedLocale = (value: string | null | undefined): value is Locale =>
  value === "es" || value === "en";

export const normalizeCountry = (country: string | null | undefined) => {
  const normalized = country?.trim().toUpperCase();
  return normalized && normalized !== "XX" && normalized !== "UNKNOWN" ? normalized : undefined;
};

export const localeFromCountry = (country: string | null | undefined): Locale | undefined => {
  const normalized = normalizeCountry(country);
  if (!normalized) return undefined;
  return SPANISH_MARKET_COUNTRIES.has(normalized) ? "es" : "en";
};

// El inglés vive bajo /en; el español se queda en la raíz. La URL es la que
// manda sobre el idioma, para que Google indexe cada árbol por separado.
// Estos helpers están duplicados en server.js (que es JS plano y no puede
// importar este módulo): si cambia el prefijo, hay que tocar los dos.
export const EN_PREFIX = "/en";

export const isEnglishPath = (pathname: string) =>
  pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`);

export const toSpanishPath = (pathname: string) =>
  isEnglishPath(pathname) ? pathname.slice(EN_PREFIX.length) || "/" : pathname;

export const toEnglishPath = (pathname: string) => {
  if (isEnglishPath(pathname)) return pathname;
  return pathname === "/" ? EN_PREFIX : `${EN_PREFIX}${pathname}`;
};

export const pathForLocale = (pathname: string, locale: Locale) =>
  locale === "en" ? toEnglishPath(pathname) : toSpanishPath(pathname);

export const localeFromPath = (pathname: string): Locale =>
  isEnglishPath(pathname) ? "en" : "es";

export const localeFromNavigator = (languages: readonly string[] = []): Locale | undefined => {
  const primary = languages.find(Boolean)?.toLowerCase();
  if (!primary) return undefined;
  return primary.startsWith("es") ? "es" : "en";
};
