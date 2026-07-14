import type { Locale } from "./countries";
import { enCore } from "./en.core";
import { enHome } from "./en.home";
import { enLegacyPriority } from "./en.legacy-priority";
import { enPromo } from "./en.promo";
import { enV2Priority } from "./en.v2-priority";

const dictionaries: Record<Locale, Record<string, string>> = {
  es: {},
  en: {
    ...enCore,
    ...enHome,
    ...enV2Priority,
    ...enLegacyPriority,
    ...enPromo,
  },
};

const normalizeCopy = (value: string) => value.replace(/\s+/g, " ").trim();

const splitOuterWhitespace = (value: string) => {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  return { leading, trailing, core: normalizeCopy(value) };
};

export const translateCopy = (value: string, locale: Locale) => {
  if (locale === "es" || !value.trim()) return value;

  const { leading, trailing, core } = splitOuterWhitespace(value);
  const translated = dictionaries[locale][core];
  return translated ? `${leading}${translated}${trailing}` : value;
};

export const hasTranslation = (value: string, locale: Locale) => {
  if (locale === "es") return true;
  return Boolean(dictionaries[locale][normalizeCopy(value)]);
};

export const registerEnglishDictionary = (entries: Record<string, string>) => {
  Object.assign(dictionaries.en, entries);
};
