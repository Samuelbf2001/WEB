import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const services = [
  { label: "CRM Ventas", to: "/v2/servicios/crm-ventas" },
  { label: "CRM Atención", to: "/v2/servicios/crm-atencion" },
  { label: "CRM Marketing", to: "/v2/servicios/crm-marketing" },
  { label: "Chatbot IA", to: "/v2/servicios/chatbot-ia" },
  { label: "Soporte & Operaciones", to: "/v2/servicios/soporte-operaciones" },
];

const company = [
  { label: "Cómo funciona", to: "/v2/como-funciona" },
  { label: "Soluciones", to: "/v2/soluciones" },
  { label: "Nosotros", to: "/v2/nosotros" },
  { label: "Casos de éxito", to: "/v2/casos" },
  { label: "Radar gratis", to: "/v2/radar" },
];

const legal = [
  { label: "Política de privacidad", to: "/politicas" },
  { label: "Términos & condiciones", to: "/terminos" },
];

export const FooterV2 = () => {
  return (
    <footer className="bg-v2-ink-heading text-v2-ink-inverse pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <Link to="/v2" className="inline-block">
              <span className="font-poppins font-bold text-[28px] tracking-tight text-white">
                Sixteam<span className="text-v2-accent-teal">.</span>pro
              </span>
            </Link>
            <p className="mt-5 font-serif italic text-[24px] leading-[1.3] text-white/85 max-w-md">
              El motor de Revenue invisible en tu empresa.
            </p>
            <p className="mt-6 font-lato text-[14px] text-white/55 max-w-md">
              Diseñamos, operamos y evolucionamos sistemas de Revenue Operations para empresas que ya pasaron de la idea al ingreso real.
            </p>
            <div className="mt-8 flex flex-col gap-2">
              <a
                href="mailto:hola@sixteam.pro"
                className="inline-flex items-center gap-2 font-lato text-[15px] text-white/85 hover:text-v2-accent-teal transition-colors group"
              >
                hola@sixteam.pro
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://wa.me/573004188522"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-lato text-[15px] text-white/85 hover:text-v2-accent-teal transition-colors group"
              >
                WhatsApp +57 300 418 8522
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-lato text-[12px] font-semibold uppercase tracking-[0.18em] text-v2-accent-teal mb-5">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="font-lato text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-lato text-[12px] font-semibold uppercase tracking-[0.18em] text-v2-accent-teal mb-5">
              Compañía
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="font-lato text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-lato text-[12px] font-semibold uppercase tracking-[0.18em] text-v2-accent-teal mb-5">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-lato text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-lato text-[13px] text-white/45">
            © {new Date().getFullYear()} Sixteam.pro · Colombia & Latam · Hecho con método.
          </p>
          <p className="font-lato text-[12px] uppercase tracking-[0.18em] text-white/35">
            Process + Technology + People = Growth
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterV2;
