import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import ButtonV2 from "./ButtonV2";

const servicios = [
  { label: "CRM Ventas", to: "/v2/servicios/crm-ventas" },
  { label: "CRM Atención al Cliente", to: "/v2/servicios/crm-atencion" },
  { label: "CRM Marketing", to: "/v2/servicios/crm-marketing" },
  { label: "Chatbot IA", to: "/v2/servicios/chatbot-ia" },
  { label: "Soporte & Operaciones", to: "/v2/servicios/soporte-operaciones" },
];

const empresa = [
  { label: "Nosotros", to: "/v2/nosotros" },
  { label: "Equipo", to: "/v2/equipo" },
  { label: "Operación Continua", to: "/v2/operacion-continua" },
];

const navLinks = [
  { label: "Cómo funciona", to: "/v2/como-funciona" },
  { label: "Casos", to: "/v2/casos" },
  { label: "Industrias", to: "/v2/industrias" },
];

const mobileAll = [
  { label: "Cómo funciona", to: "/v2/como-funciona" },
  { label: "Casos", to: "/v2/casos" },
  { label: "Industrias", to: "/v2/industrias" },
  null, // separator
  { label: "CRM Ventas", to: "/v2/servicios/crm-ventas", sub: true },
  { label: "CRM Atención al Cliente", to: "/v2/servicios/crm-atencion", sub: true },
  { label: "CRM Marketing", to: "/v2/servicios/crm-marketing", sub: true },
  { label: "Chatbot IA", to: "/v2/servicios/chatbot-ia", sub: true },
  { label: "Soporte & Operaciones", to: "/v2/servicios/soporte-operaciones", sub: true },
  null,
  { label: "Nosotros", to: "/v2/nosotros", sub: true },
  { label: "Equipo", to: "/v2/equipo", sub: true },
  { label: "Operación Continua", to: "/v2/operacion-continua", sub: true },
  null,
  { label: "Diagnóstico Sixteam", to: "/v2/diagnostico" },
  { label: "Radar gratis", to: "/v2/radar" },
  { label: "Radar 360°", to: "/v2/radar-pro", accent: true },
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
  }, [location.pathname]);

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
            const active = location.pathname === item.to;
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
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-v2-surface/85 border-b border-v2-border-subtle"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 md:h-20 items-center justify-between">
        <Link to="/v2" className="group flex items-center gap-2 shrink-0">
          <span className="font-poppins font-bold text-[20px] md:text-[22px] tracking-tight text-v2-ink-heading">
            Sixteam<span className="text-v2-accent-teal">.</span>pro
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative font-lato text-[14px] font-medium text-v2-ink-body hover:text-v2-ink-heading transition-colors duration-200 group"
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1.5px] bg-v2-accent-teal rounded-full transition-[width] duration-300 ease-out",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}

          <Dropdown label="Servicios" items={servicios} basePaths={["/v2/servicios"]} />
          <Dropdown label="Empresa" items={empresa} basePaths={["/v2/nosotros", "/v2/equipo", "/v2/operacion-continua"]} />
        </nav>

        {/* Desktop right CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            to="/v2/diagnostico"
            className="font-lato text-[13px] font-medium text-v2-ink-body hover:text-v2-ink-heading transition-colors"
          >
            Diagnóstico
          </Link>
          <Link
            to="/v2/radar"
            className="font-lato text-[13px] font-medium text-v2-ink-body hover:text-v2-ink-heading transition-colors"
          >
            Radar gratis
          </Link>
          <Link
            to="/v2/radar-pro"
            className="font-lato text-[13px] font-medium text-v2-accent-teal-deep hover:text-v2-ink-heading transition-colors"
          >
            Radar 360°
          </Link>
          <Link to="/v2/contacto">
            <ButtonV2 variant="navy" size="sm" className="group">
              Agendar llamada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonV2>
          </Link>
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
        <div className="md:hidden border-t border-v2-border-subtle bg-v2-surface/95 backdrop-blur-md max-h-[80vh] overflow-y-auto">
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
              <Link to="/v2/contacto">
                <ButtonV2 variant="navy" size="md" className="w-full">
                  Agendar llamada
                  <ArrowRight className="h-4 w-4" />
                </ButtonV2>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default HeaderV2;
