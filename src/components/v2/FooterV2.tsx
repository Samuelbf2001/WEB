import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const soluciones = [
  { label: "Sixteam Assessment", to: "/v2/soluciones#assessment" },
  { label: "Sixteam Transform",  to: "/v2/soluciones#transform" },
  { label: "Ops Core",           to: "/v2/soluciones#ops" },
  { label: "Ops Growth",         to: "/v2/soluciones#ops" },
  { label: "Diagnóstico gratis", to: "/v2/radar" },
  { label: "Radar 360°",         to: "/v2/radar-pro" },
];

const servicios = [
  { label: "CRM Ventas",           to: "/v2/servicios/crm-ventas" },
  { label: "CRM Atención",         to: "/v2/servicios/crm-atencion" },
  { label: "CRM Marketing",        to: "/v2/servicios/crm-marketing" },
  { label: "Chatbot IA",           to: "/v2/servicios/chatbot-ia" },
  { label: "Soporte & Operaciones",to: "/v2/servicios/soporte-operaciones" },
];

const industrias = [
  { label: "Agencias de viaje",  to: "/industrias/agencias-de-viaje" },
  { label: "Inmobiliarias",      to: "/industrias/inmobiliarias" },
  { label: "Servicios B2B",      to: "/industrias/servicios-generales" },
  { label: "Educación",          to: "/v2/industrias/educacion" },
  { label: "SaaS B2B",           to: "/v2/industrias/saas-b2b" },
  { label: "Retail / E-commerce",to: "/v2/industrias/retail" },
];

const empresa = [
  { label: "Cómo funciona",  to: "/v2/como-funciona" },
  { label: "Nosotros",       to: "/v2/nosotros" },
  { label: "Nuestro equipo", to: "/v2/equipo" },
  { label: "Casos de éxito", to: "/v2/casos" },
  { label: "Agendar llamada",to: "/v2/contacto" },
  { label: "Política de privacidad", to: "/politicas" },
  { label: "Términos & condiciones", to: "/terminos" },
];

const FooterCol: React.FC<{ title: string; links: { label: string; to: string }[] }> = ({ title, links }) => (
  <div>
    <h4 className="font-lato text-[11px] font-bold uppercase tracking-[0.18em] text-v2-accent-teal mb-5">
      {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((l) => (
        <li key={l.to + l.label}>
          <Link to={l.to} className="font-lato text-[13px] text-white/65 hover:text-white transition-colors">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const FooterV2 = () => {
  return (
    <footer className="bg-v2-ink-heading text-v2-ink-inverse pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-3">
            <Link to="/v2" className="inline-block">
              <span className="font-poppins font-bold text-[26px] tracking-tight text-white">
                Sixteam<span className="text-v2-accent-teal">.</span>pro
              </span>
            </Link>
            <p className="mt-4 font-serif italic text-[20px] leading-[1.3] text-white/80 max-w-xs">
              El motor de Revenue invisible en tu empresa.
            </p>
            <p className="mt-4 font-lato text-[13px] text-white/50 max-w-xs leading-relaxed">
              CRM, automatizaciones e IA operados por humanos expertos. Colombia & Latinoamérica.
            </p>
            <div className="mt-7 flex flex-col gap-2">
              <a href="mailto:hola@sixteam.pro"
                className="inline-flex items-center gap-2 font-lato text-[13px] text-white/75 hover:text-v2-accent-teal transition-colors group">
                hola@sixteam.pro
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="https://wa.me/573004188522" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-lato text-[13px] text-white/75 hover:text-v2-accent-teal transition-colors group">
                WhatsApp +57 300 418 8522
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Soluciones */}
          <div className="md:col-span-2 md:col-start-5">
            <FooterCol title="Soluciones" links={soluciones} />
          </div>

          {/* Servicios */}
          <div className="md:col-span-2">
            <FooterCol title="Servicios" links={servicios} />
          </div>

          {/* Industrias */}
          <div className="md:col-span-2">
            <FooterCol title="Industrias" links={industrias} />
          </div>

          {/* Empresa */}
          <div className="md:col-span-2">
            <FooterCol title="Empresa" links={empresa} />
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-lato text-[12px] text-white/40">
            © {new Date().getFullYear()} Sixteam.pro · Colombia & Latam · Hecho con método.
          </p>
          <p className="font-lato text-[11px] uppercase tracking-[0.18em] text-white/30">
            Process + Technology + People = Growth
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterV2;
