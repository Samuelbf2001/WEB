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

export const localeFromNavigator = (languages: readonly string[] = []): Locale | undefined => {
  const primary = languages.find(Boolean)?.toLowerCase();
  if (!primary) return undefined;
  return primary.startsWith("es") ? "es" : "en";
};
