import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import ButtonV2 from "./ButtonV2";

const nav = [
  { label: "Servicios", to: "/v2/servicios" },
  { label: "Casos", to: "/v2/casos" },
  { label: "Industrias", to: "/v2/industrias" },
  { label: "Nosotros", to: "/v2/nosotros" },
];

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
        <Link to="/v2" className="group flex items-center gap-2">
          <span className="font-poppins font-bold text-[20px] md:text-[22px] tracking-tight text-v2-ink-heading">
            Sixteam<span className="text-v2-accent-teal">.</span>pro
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const isActive = location.pathname.startsWith(item.to);
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
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/v2/radar"
            className="font-lato text-[14px] font-medium text-v2-ink-body hover:text-v2-ink-heading transition-colors"
          >
            Radar gratis
          </Link>
          <Link to="/v2/contacto">
            <ButtonV2 variant="navy" size="sm" className="group">
              Agendar llamada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonV2>
          </Link>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-v2-ink-heading"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {menuOpen && (
        <div className="md:hidden border-t border-v2-border-subtle bg-v2-surface/95 backdrop-blur-md">
          <Container className="py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-lato text-[16px] py-3 text-v2-ink-heading border-b border-v2-border-subtle"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/v2/radar"
              className="font-lato text-[16px] py-3 text-v2-ink-heading border-b border-v2-border-subtle"
            >
              Radar gratis
            </Link>
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
