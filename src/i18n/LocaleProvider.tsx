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
  localeFromCountry,
  localeFromNavigator,
  normalizeCountry,
  type Locale,
} from "./countries";

const STORAGE_KEY = "sixteam.locale";

const getQueryLocale = () => {
  if (typeof window === "undefined") return undefined;
  const locale = new URLSearchParams(window.location.search).get("lang");
  return isSupportedLocale(locale) ? locale : undefined;
};

const getStoredLocale = () => {
  if (typeof window === "undefined") return undefined;
  try {
    const locale = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLocale(locale) ? locale : undefined;
  } catch {
    return undefined;
  }
};

const getInjectedLocale = () => {
  if (typeof window === "undefined") return undefined;
  return isSupportedLocale(window.__SIXTEAM_LOCALE__) ? window.__SIXTEAM_LOCALE__ : undefined;
};

const getBrowserLocale = () => {
  if (typeof navigator === "undefined") return undefined;
  return localeFromNavigator(navigator.languages?.length ? navigator.languages : [navigator.language]);
};

const resolveInitialLocale = (): { locale: Locale; country?: string; source: LocaleSource } => {
  const queryLocale = getQueryLocale();
  if (queryLocale) return { locale: queryLocale, country: normalizeCountry(window.__SIXTEAM_COUNTRY__), source: "query" };

  const storedLocale = getStoredLocale();
  if (storedLocale) return { locale: storedLocale, country: normalizeCountry(window.__SIXTEAM_COUNTRY__), source: "manual" };

  const injectedLocale = getInjectedLocale();
  if (injectedLocale) return { locale: injectedLocale, country: normalizeCountry(window.__SIXTEAM_COUNTRY__), source: "ip" };

  const countryLocale = localeFromCountry(typeof window !== "undefined" ? window.__SIXTEAM_COUNTRY__ : undefined);
  if (countryLocale) return { locale: countryLocale, country: normalizeCountry(window.__SIXTEAM_COUNTRY__), source: "ip" };

  const browserLocale = getBrowserLocale();
  if (browserLocale) return { locale: browserLocale, source: "browser" };

  return { locale: "es", source: "default" };
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
    if (!queryLocale) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, queryLocale);
    } catch {
      // localStorage can be unavailable in privacy-restricted browsers.
    }
  }, []);

  const setLocale = useCallback((locale: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Keep the in-memory preference even if persistence is blocked.
    }
    setState((current) => ({ ...current, locale, source: "manual" }));
  }, []);

  const clearManualLocale = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing else to do.
    }
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
