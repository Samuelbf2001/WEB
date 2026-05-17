import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  MessageSquare,
  Megaphone,
  Bot,
  Wrench,
  Plane,
  Home,
  Cog,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Briefcase,
    title: "CRM Ventas",
    href: "/v2/servicios/crm-ventas",
    desc: "Pipeline operado, leads enrutados, dashboards vivos. Tu equipo comercial deja de hacer admin y vuelve a vender.",
    bullets: ["Routing automático de leads", "Dashboards semanales", "Limpieza de datos continua"],
    accent: "teal",
  },
  {
    icon: MessageSquare,
    title: "CRM Atención",
    href: "/v2/servicios/crm-atencion",
    desc: "WhatsApp, email y chat en una sola bandeja operada. SLA medible, sin hilos perdidos.",
    bullets: ["Bandeja unificada multicanal", "SLA automatizado", "Escalamiento sin fricción"],
    accent: "blue",
  },
  {
    icon: Megaphone,
    title: "CRM Marketing",
    href: "/v2/servicios/crm-marketing",
    desc: "Campañas, nurturing y atribución conectados al CRM. Para que MKT y Sales hablen el mismo idioma.",
    bullets: ["Secuencias de nurturing", "Atribución de revenue", "Segmentación dinámica"],
    accent: "sand",
  },
  {
    icon: Bot,
    title: "Chatbot IA",
    href: "/v2/servicios/chatbot-ia",
    desc: "Agentes que califican, agendan y resuelven. Operan con tu base de conocimiento, no con magia.",
    bullets: ["Calificación automática 24/7", "Agendamiento sin intervención", "Escalamiento inteligente"],
    accent: "teal",
  },
  {
    icon: Wrench,
    title: "Soporte & Operaciones",
    href: "/v2/servicios/soporte-operaciones",
    desc: "El equipo que mantiene vivo el sistema. Mejoras, ajustes y nuevas automatizaciones cada semana.",
    bullets: ["Sprint semanal continuo", "Mantenimiento del stack", "Nuevas automatizaciones on demand"],
    accent: "blue",
  },
];

const industries = [
  {
    icon: Plane,
    title: "Agencias de Viaje",
    href: "/industrias/agencias-de-viaje",
    desc: "Pipeline de cotización, seguimientos post-venta y operación de WhatsApp Business para equipos de turismo.",
  },
  {
    icon: Home,
    title: "Inmobiliarias",
    href: "/inmobiliarias",
    desc: "Calificación de leads, agendamiento de visitas y handoff a brokers sin perder el hilo.",
  },
  {
    icon: Cog,
    title: "Servicios B2B",
    href: "/industrias/servicios-generales",
    desc: "Pipeline de proyectos, automatización de propuestas y reportes de revenue por línea de servicio.",
  },
];

const accentIcon: Record<string, string> = {
  teal: "bg-v2-surface-teal-mist text-v2-accent-teal-deep group-hover:bg-v2-accent-teal group-hover:text-white",
  blue: "bg-v2-surface-navy-mist text-v2-accent-blue group-hover:bg-v2-accent-blue group-hover:text-white",
  sand: "bg-v2-surface-sand-mist text-[#8a7a4f] group-hover:bg-[#d4a853] group-hover:text-white",
};

const accentNum: Record<string, string> = {
  teal: "text-v2-accent-teal/[0.06] group-hover:text-v2-accent-teal/[0.10]",
  blue: "text-v2-accent-blue/[0.06] group-hover:text-v2-accent-blue/[0.10]",
  sand: "text-[#d4a853]/[0.08] group-hover:text-[#d4a853]/[0.14]",
};

const Soluciones = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* Hero */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(29,112,162,0.12) 0%, transparent 70%)",
            animation: "v2-aurora-2 16s ease-in-out infinite",
          }}
        />
        <Container size="narrow" className="text-center pt-8">
          <Eyebrow variant="teal">Soluciones</Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.025em" }}
          >
            Cinco servicios que se{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">operan</em>
            </Underlined>{" "}
            juntos.
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[600px] mx-auto">
            Cada pieza se contrata por separado o como sistema completo. La que mejor te conviene
            depende de dónde está la fuga de revenue.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">
                Diagnóstico gratis
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/v2/como-funciona">
              <ButtonV2 variant="outline" size="lg">
                Ver cómo funciona
              </ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Services grid */}
      <Section surface="cream" size="default">
        <Container>
          <div ref={ref1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isLast = i === services.length - 1;
              const num = String(i + 1).padStart(2, "0");
              return (
                <Link
                  key={s.title}
                  to={s.href}
                  className={[
                    "v2-reveal",
                    `v2-d${Math.min(i + 1, 5)}`,
                    "group relative bg-white border border-v2-border-subtle rounded-2xl p-7",
                    "hover:border-v2-accent-teal/30 hover:shadow-[0_16px_48px_rgba(0,191,165,0.10)] hover:-translate-y-1",
                    "transition-[transform,box-shadow,border-color] duration-300 flex flex-col overflow-hidden",
                    isLast ? "lg:col-span-2" : "",
                  ].filter(Boolean).join(" ")}
                >
                  {/* Watermark */}
                  <span
                    className={`pointer-events-none select-none absolute -right-2 -top-3 font-serif italic text-[88px] leading-none transition-colors duration-300 ${accentNum[s.accent]}`}
                    aria-hidden
                  >
                    {num}
                  </span>

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${accentIcon[s.accent]}`}>
                    <Icon className="h-[22px] w-[22px] transition-colors duration-300" />
                  </div>

                  <h3 className="font-poppins font-bold text-[20px] text-v2-ink-heading mt-5 leading-[1.2]">
                    {s.title}
                  </h3>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">{s.desc}</p>

                  <ul className="mt-5 flex flex-col gap-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-v2-accent-teal flex-shrink-0" />
                        <span className="font-lato text-[13px] text-v2-ink-muted">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-1.5 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep mt-6 group-hover:gap-2.5 transition-[gap] duration-200">
                    Ver servicio
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section surface="sand-mist" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="sand">Por industria</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Sabemos cómo opera{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">tu industria</em>.
              </h2>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.6] mt-4">
                No vendemos templates genéricos. Cada vertical tiene su propio motor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <Link
                    key={ind.title}
                    to={ind.href}
                    className={`v2-reveal v2-d${i + 1} group bg-white border border-v2-border-subtle rounded-2xl p-7 hover:border-v2-accent-teal/30 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 flex flex-col`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-v2-surface-teal-mist group-hover:bg-v2-accent-teal flex items-center justify-center transition-colors duration-300">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading mt-5">
                      {ind.title}
                    </h3>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2 flex-1">
                      {ind.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep mt-6 group-hover:gap-2.5 transition-[gap] duration-200">
                      Ver vertical
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.16) 0%, transparent 65%)",
            animation: "v2-aurora-1 18s ease-in-out infinite",
          }}
        />
        <Container size="narrow" className="text-center relative">
          <div ref={ref3}>
            <div className="v2-reveal">
              <h2
                className="font-poppins font-bold text-white"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                ¿No sabes por dónde empezar?{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal">El Radar te lo dice</em>.
              </h2>
              <p className="font-lato text-[17px] text-white/70 mt-5 max-w-[500px] mx-auto">
                Un diagnóstico ejecutivo en 48 horas. Decides después. Cero compromiso.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/v2/radar">
                  <ButtonV2 variant="primary" size="lg">
                    Pedir Radar gratis
                    <ArrowRight className="h-4 w-4" />
                  </ButtonV2>
                </Link>
                <Link to="/v2/contacto">
                  <ButtonV2
                    variant="outline"
                    size="lg"
                    className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
                  >
                    Hablar con un experto
                  </ButtonV2>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </LayoutV2>
  );
};

export default Soluciones;
