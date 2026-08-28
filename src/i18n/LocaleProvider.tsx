import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LocaleContext, type LocaleSource } from "./LocaleContext";
import {
  isSupportedLocale,
  localeFromPath,
  normalizeCountry,
  pathForLocale,
  type Locale,
} from "./countries";

const STORAGE_KEY = "sixteam.locale";
// El servidor lee esta cookie para no volver a auto-redirigir a quien ya eligió.
const LOCALE_COOKIE = "sixteam_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const getQueryLocale = () => {
  if (typeof window === "undefined") return undefined;
  const locale = new URLSearchParams(window.location.search).get("lang");
  return isSupportedLocale(locale) ? locale : undefined;
};

const getCountry = () => {
  if (typeof window === "undefined") return undefined;
  return normalizeCountry(window.__SIXTEAM_COUNTRY__);
};

// El idioma sale de la URL, no de la IP ni del navegador: /en es inglés y
// todo lo demás es español. Quien decide a qué árbol entra un visitante nuevo
// es el servidor, que redirige por IP antes de servir el HTML.
const resolveInitialLocale = (): { locale: Locale; country?: string; source: LocaleSource } => {
  if (typeof window === "undefined") return { locale: "es", source: "default" };

  const country = getCountry();

  // ?lang sigue funcionando para previsualizar sin servidor (vite dev).
  const queryLocale = getQueryLocale();
  if (queryLocale) return { locale: queryLocale, country, source: "query" };

  return { locale: localeFromPath(window.location.pathname), country, source: "path" };
};

const persistLocale = (locale: Locale) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // localStorage puede estar bloqueado en modo privado.
  }
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
};

const forgetLocale = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nada más que hacer.
  }
  document.cookie = `${LOCALE_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
};

const applyDocumentLocale = (locale: Locale) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale === "es" ? "es-CO" : "en";
  document.documentElement.dataset.locale = locale;

  let meta = document.querySelector('meta[name="content-language"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "content-language");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", locale);
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(resolveInitialLocale);

  useEffect(() => {
    applyDocumentLocale(state.locale);
  }, [state.locale]);

  useEffect(() => {
    const queryLocale = getQueryLocale();
    if (queryLocale) persistLocale(queryLocale);
  }, []);

  // Cambiar de idioma es cambiar de árbol de URLs, y el basename del router
  // se fija al cargar la página: por eso hace falta una navegación completa.
  const setLocale = useCallback((locale: Locale) => {
    persistLocale(locale);

    const { pathname, search, hash } = window.location;
    const target = pathForLocale(pathname, locale);
    if (target !== pathname) {
      window.location.assign(`${target}${search}${hash}`);
      return;
    }

    setState((current) => ({ ...current, locale, source: "manual" }));
  }, []);

  const clearManualLocale = useCallback(() => {
    forgetLocale();
    setState(resolveInitialLocale());
  }, []);

  const value = useMemo(
    () => ({
      locale: state.locale,
      country: state.country,
      source: state.source,
      setLocale,
      clearManualLocale,
    }),
    [clearManualLocale, setLocale, state.country, state.locale, state.source]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};
