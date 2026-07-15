import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import ButtonV2 from "./ButtonV2";
import LanguageToggle from "@/i18n/LanguageToggle";

const soluciones = [
  { label: "Las tres soluciones", to: "/soluciones" },
  { label: "Assessment · $2,500", to: "/soluciones#assessment" },
  { label: "Transform · desde $1,500", to: "/soluciones#transform" },
  { label: "Ops Esencial · desde $199/mes", to: "/soluciones#ops" },
  { label: "Ops Integral · $499/mes", to: "/soluciones#ops" },
  { label: "Ops Total · desde $1,200/mes", to: "/soluciones#ops" },
];

const servicios = [
  { label: "CRM Ventas", to: "/servicios/crm-ventas" },
  { label: "CRM Atención al Cliente", to: "/servicios/crm-atencion" },
  { label: "CRM Marketing", to: "/servicios/crm-marketing" },
  { label: "Chatbot IA", to: "/servicios/chatbot-ia" },
  { label: "Soporte & Operaciones", to: "/servicios/soporte-operaciones" },
];

const industrias = [
  { label: "Agencias de viaje",   to: "/industrias/viajes" },
  { label: "Inmobiliarias",       to: "/industrias/inmobiliarias" },
  { label: "Servicios con cita",  to: "/industrias/servicios-con-cita" },
  { label: "Educación",           to: "/industrias/educacion" },
  { label: "SaaS B2B",            to: "/industrias/saas-b2b" },
  { label: "Retail / E-commerce", to: "/industrias/retail" },
];

const empresa = [
  { label: "Nosotros",          to: "/nosotros" },
  { label: "Equipo",            to: "/equipo" },
  { label: "Casos de éxito",    to: "/casos" },
  { label: "Operación Continua",to: "/operacion-continua" },
  { label: "Cómo funciona",     to: "/como-funciona" },
];

const navLinks = [
  { label: "Soluciones", to: "/soluciones" },
];

const mobileAll = [
  { label: "Soluciones", to: "/soluciones" },
  { label: "Cómo funciona", to: "/como-funciona" },
  { label: "Casos", to: "/casos" },
  null,
  // Soluciones sub
  { label: "Assessment · $2,500", to: "/soluciones#assessment", sub: true },
  { label: "Transform · desde $1,500", to: "/soluciones#transform", sub: true },
  { label: "Ops Esencial · desde $199/mes", to: "/soluciones#ops", sub: true },
  { label: "Ops Integral · $499/mes", to: "/soluciones#ops", sub: true },
  { label: "Ops Total · desde $1,200/mes", to: "/soluciones#ops", sub: true },
  null,
  // Servicios
  { label: "CRM Ventas", to: "/servicios/crm-ventas", sub: true },
  { label: "CRM Atención", to: "/servicios/crm-atencion", sub: true },
  { label: "CRM Marketing", to: "/servicios/crm-marketing", sub: true },
  { label: "Chatbot IA", to: "/servicios/chatbot-ia", sub: true },
  { label: "Soporte & Operaciones", to: "/servicios/soporte-operaciones", sub: true },
  null,
  // Industrias
  { label: "Agencias de viaje", to: "/industrias/viajes", sub: true },
  { label: "Inmobiliarias", to: "/industrias/inmobiliarias", sub: true },
  { label: "Servicios con cita", to: "/industrias/servicios-con-cita", sub: true },
  { label: "Educación", to: "/industrias/educacion", sub: true },
  { label: "SaaS B2B", to: "/industrias/saas-b2b", sub: true },
  { label: "Retail / E-commerce", to: "/industrias/retail", sub: true },
  null,
  // Empresa
  { label: "Nosotros", to: "/nosotros", sub: true },
  { label: "Equipo", to: "/equipo", sub: true },
  { label: "Operación Continua", to: "/operacion-continua", sub: true },
  null,
  { label: "Radar gratis", to: "/radar", accent: true },
];

function Dropdown({
  label,
  items,
  basePaths,
}: {
  label: string;
  items: { label: string; to: string }[];
  basePaths: string[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = basePaths.some((p) => location.pathname.startsWith(p));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 font-lato text-[14px] font-medium transition-colors duration-200",
          isActive ? "text-v2-ink-heading" : "text-v2-ink-body hover:text-v2-ink-heading"
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-[1.5px] bg-v2-accent-teal rounded-full transition-[width] duration-300 ease-out",
            isActive ? "w-full" : "w-0"
          )}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 min-w-[220px] rounded-xl border border-v2-border-subtle bg-v2-surface/95 backdrop-blur-md shadow-xl py-2 z-50">
          {items.map((item) => {
            const [itemPath, itemHash] = item.to.split("#");
            const active =
              location.pathname === itemPath &&
              (!itemHash || location.hash === `#${itemHash}`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "block px-4 py-2.5 font-lato text-[13px] transition-colors duration-150",
                  active
                    ? "text-v2-accent-teal bg-v2-accent-teal/5"
                    : "text-v2-ink-body hover:text-v2-ink-heading hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export const HeaderV2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!location.hash) return;

    const targetId = decodeURIComponent(location.hash.slice(1));
    const scrollTimer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-2xl transition-all duration-300",
        scrolled
          ? "bg-white/92 backdrop-blur-md border border-v2-border-subtle shadow-[0_8px_32px_rgba(10,35,66,0.10)]"
          : "bg-white/75 backdrop-blur-md border border-v2-border-subtle/50 shadow-[0_4px_20px_rgba(10,35,66,0.06)]"
      )}
    >
      <Container className="flex h-14 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 shrink-0">
          <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-8 w-8 object-contain" />
          <span className="notranslate font-poppins font-bold text-[20px] md:text-[22px] tracking-tight text-v2-ink-heading">
            Sixteam<span className="text-v2-accent-teal">.</span>pro
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          <Dropdown label="Soluciones" items={soluciones} basePaths={["/soluciones"]} />
          <Dropdown label="Servicios"  items={servicios}  basePaths={["/servicios"]} />
          <Dropdown label="Industrias" items={industrias} basePaths={["/industrias", "/industrias"]} />
          <Dropdown label="Empresa"    items={empresa}    basePaths={["/nosotros", "/equipo", "/operacion-continua", "/casos", "/como-funciona"]} />
        </nav>

        {/* Desktop right CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <LanguageToggle compact />
          <Link
            to="/radar"
            className="font-lato text-[13px] font-medium text-v2-accent-teal-deep hover:text-v2-ink-heading transition-colors"
          >
            Radar gratis
          </Link>
          <ButtonV2 asChild variant="navy" size="sm" className="group">
            <Link to="/contacto#agenda">
              Agendar llamada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ButtonV2>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-v2-ink-heading"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-v2-border-subtle/50 bg-white/95 backdrop-blur-md max-h-[80vh] overflow-y-auto rounded-b-2xl">
          <Container className="py-4 flex flex-col">
            {mobileAll.map((item, i) => {
              if (item === null) {
                return (
                  <div
                    key={`sep-${i}`}
                    className="my-1 border-t border-v2-border-subtle opacity-40"
                  />
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "font-lato py-2.5 border-b border-v2-border-subtle/40 transition-colors",
                    item.accent
                      ? "text-v2-accent-teal-deep text-[15px]"
                      : item.sub
                      ? "text-v2-ink-body text-[14px] pl-4"
                      : "text-v2-ink-heading text-[16px]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <LanguageToggle className="mb-3 w-full" />
              <ButtonV2 asChild variant="navy" size="md" className="w-full">
                <Link to="/contacto#agenda">
                  Agendar llamada
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ButtonV2>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default HeaderV2;
