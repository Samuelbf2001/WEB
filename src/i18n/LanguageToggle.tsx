import { Languages } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLocale } from "./LocaleContext";
import { toEnglishPath } from "./countries";

interface LanguageToggleProps {
  compact?: boolean;
  className?: string;
}

export const LanguageToggle = ({ compact = false, className = "" }: LanguageToggleProps) => {
  const { locale, setLocale } = useLocale();
  const { pathname, search, hash } = useLocation();
  const nextLocale = locale === "es" ? "en" : "es";
  const label = locale === "es" ? "English" : "Español";

  // useLocation ya devuelve la ruta sin el basename, así que pathname siempre
  // es la versión española. Se renderiza como <a> con href real para que el
  // otro idioma sea rastreable, aunque el click lo maneje setLocale.
  const targetPath = nextLocale === "en" ? toEnglishPath(pathname) : pathname;

  return (
    <a
      href={`${targetPath}${search}${hash}`}
      hrefLang={nextLocale}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        setLocale(nextLocale);
      }}
      aria-label={locale === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"}
      title={locale === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
      className={[
        "notranslate inline-flex items-center justify-center gap-1.5 rounded-full border border-v2-border-subtle bg-white/70 font-lato font-bold uppercase tracking-[0.14em] text-v2-ink-body transition-colors hover:border-v2-accent-teal/40 hover:text-v2-accent-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-accent-teal/40",
        compact ? "px-3 py-2 text-[11px]" : "px-3.5 py-2 text-[11px]",
        className,
      ].join(" ")}
    >
      <Languages className="h-3.5 w-3.5" />
      <span>{compact ? nextLocale.toUpperCase() : label}</span>
    </a>
  );
};

export default LanguageToggle;
