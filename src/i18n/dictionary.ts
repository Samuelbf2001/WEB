import type { Locale } from "./countries";

/**
 * El diccionario es→en pesa ~97 kB de texto fuente. Cargarlo de forma estática
 * lo metía en el entry chunk (32.6 kB gzip) para todo visitante, aunque el
 * locale por defecto es español y la inmensa mayoría nunca lo usa.
 *
 * Ahora se carga bajo demanda, solo cuando el locale resuelto no es `es`.
 * Hasta que llega, `translateCopy` devuelve el texto original — el mismo
 * comportamiento que ya tenía para cualquier cadena sin traducción.
 */
const dictionaries: Record<Locale, Record<string, string>> = {
  es: {},
  en: {},
};

let loadPromise: Promise<void> | null = null;
let version = 0;
const listeners = new Set<() => void>();

const notify = () => {
  version += 1;
  listeners.forEach((listener) => listener());
};

export const loadEnglishDictionary = () => {
  if (!loadPromise) {
    loadPromise = Promise.all([
      import("./en.core"),
      import("./en.home"),
      import("./en.v2-priority"),
      import("./en.legacy-priority"),
      import("./en.promo"),
    ]).then(([core, home, v2Priority, legacyPriority, promo]) => {
      Object.assign(
        dictionaries.en,
        core.enCore,
        home.enHome,
        v2Priority.enV2Priority,
        legacyPriority.enLegacyPriority,
        promo.enPromo
      );
      notify();
    });
  }
  return loadPromise;
};

/**
 * Versión del diccionario, para `useSyncExternalStore`. Cambia cuando el
 * diccionario termina de cargarse, de modo que los consumidores (metadatos
 * SEO, traductor del DOM) vuelvan a evaluar su texto.
 */
export const subscribeToDictionary = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const getDictionaryVersion = () => version;

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
  notify();
};
