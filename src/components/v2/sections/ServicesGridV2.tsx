import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  MessageSquare,
  Megaphone,
  Bot,
  Wrench,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCard {
  title: string;
  href: string;
  icon: LucideIcon;
  desc: string;
  accent: string;
}

const services: ServiceCard[] = [
  {
    title: "CRM Ventas",
    href: "/v2/servicios/crm-ventas",
    icon: Briefcase,
    desc: "Pipeline operado, leads enrutados, dashboards vivos. El comercial deja de hacer admin.",
    accent: "teal",
  },
  {
    title: "CRM Atención",
    href: "/v2/servicios/crm-atencion",
    icon: MessageSquare,
    desc: "WhatsApp, email y chat en una sola bandeja. SLA medible, sin hilos perdidos.",
    accent: "blue",
  },
  {
    title: "CRM Marketing",
    href: "/v2/servicios/crm-marketing",
    icon: Megaphone,
    desc: "Campañas, nurturing y atribución conectados al CRM. Para que MKT y Sales hablen el mismo idioma.",
    accent: "sand",
  },
  {
    title: "Chatbot IA",
    href: "/v2/servicios/chatbot-ia",
    icon: Bot,
    desc: "Agentes que califican, agendan y resuelven. Operan con tu base de conocimiento, no con magia.",
    accent: "teal",
  },
  {
    title: "Soporte & Operaciones",
    href: "/v2/servicios/soporte-operaciones",
    icon: Wrench,
    desc: "El equipo que mantiene vivo el sistema. Mejoras, ajustes y nuevas automatizaciones cada semana.",
    accent: "blue",
  },
];

const accentStyles: Record<string, { icon: string; iconHover: string; number: string }> = {
  teal: {
    icon: "bg-v2-surface-teal-mist text-v2-accent-teal-deep",
    iconHover: "group-hover:bg-v2-accent-teal group-hover:text-white",
    number: "text-v2-accent-teal-deep/[0.06] group-hover:text-v2-accent-teal/[0.10]",
  },
  blue: {
    icon: "bg-v2-surface-navy-mist text-v2-accent-blue",
    iconHover: "group-hover:bg-v2-accent-blue group-hover:text-white",
    number: "text-v2-accent-blue/[0.06] group-hover:text-v2-accent-blue/[0.10]",
  },
  sand: {
    icon: "bg-v2-surface-sand-mist text-[#8a7a4f]",
    iconHover: "group-hover:bg-[#d4a853] group-hover:text-white",
    number: "text-[#d4a853]/[0.08] group-hover:text-[#d4a853]/[0.14]",
  },
};

const delays = ["v2-d1", "v2-d2", "v2-d3", "v2-d2", "v2-d3"];

export const ServicesGridV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="cream" size="default">
      <Container>
        <div ref={ref}>
          <div className="text-center max-w-[760px] mx-auto v2-reveal">
            <Eyebrow variant="navy">El sistema en partes</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Cinco{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                servicios
              </em>{" "}
              que se operan juntos.
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[640px] mx-auto mt-4 leading-[1.6]">
              Cada pieza se contrata por separado o como sistema completo. La que mejor te conviene
              depende de dónde está la fuga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isLast = i === services.length - 1;
              const accent = accentStyles[service.accent];
              const num = String(i + 1).padStart(2, "0");
              const delayClass = delays[i];

              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className={[
                    "v2-reveal",
                    delayClass,
                    "group relative bg-white border border-v2-border-subtle rounded-2xl p-7",
                    "hover:border-v2-accent-teal/30 hover:shadow-[0_16px_48px_rgba(0,191,165,0.10)] hover:-translate-y-1",
                    "transition-[transform,box-shadow,border-color,background-color] duration-300 flex flex-col overflow-hidden",
                    isLast ? "lg:col-span-2" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* Watermark number */}
                  <span
                    className={[
                      "pointer-events-none select-none absolute -right-2 -top-3",
                      "font-serif italic text-[88px] leading-none",
                      "transition-colors duration-300",
                      accent.number,
                    ].join(" ")}
                    aria-hidden
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div
                    className={[
                      "relative w-12 h-12 rounded-xl flex items-center justify-center",
                      "transition-colors duration-300",
                      accent.icon,
                      accent.iconHover,
                    ].join(" ")}
                  >
                    <Icon className="h-[22px] w-[22px] transition-colors duration-300" aria-hidden />
                  </div>

                  <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading mt-5 leading-[1.25]">
                    {service.title}
                  </h3>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2 flex-1">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep mt-6 group-hover:gap-2.5 transition-[gap] duration-200">
                    Ver servicio
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesGridV2;
