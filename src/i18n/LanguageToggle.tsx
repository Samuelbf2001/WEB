import { Languages } from "lucide-react";
import { useLocale } from "./LocaleContext";

interface LanguageToggleProps {
  compact?: boolean;
  className?: string;
}

export const LanguageToggle = ({ compact = false, className = "" }: LanguageToggleProps) => {
  const { locale, setLocale } = useLocale();
  const nextLocale = locale === "es" ? "en" : "es";
  const label = locale === "es" ? "English" : "Español";

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale)}
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
    </button>
  );
};

export default LanguageToggle;
