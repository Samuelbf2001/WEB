import { Link } from "react-router-dom";
import { ArrowRight, Plane, Home, Wrench, GraduationCap, Building2, ShoppingBag } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";

const industries = [
  {
    icon: Plane,
    name: "Agencias de viaje",
    desc: "Operamos pipelines de cotización, seguimientos post-venta y operación de WhatsApp Business.",
    href: "/industrias/agencias-de-viaje",
    live: true,
  },
  {
    icon: Home,
    name: "Inmobiliarias",
    desc: "Calificación de leads, agendamiento de visitas y handoff a brokers sin perder el hilo.",
    href: "/industrias/inmobiliarias",
    live: true,
  },
  {
    icon: Wrench,
    name: "Servicios B2B",
    desc: "Pipeline de proyectos, automatización de propuestas y reportes de revenue por línea de servicio.",
    href: "/industrias/servicios-generales",
    live: true,
  },
  {
    icon: GraduationCap,
    name: "Educación",
    desc: "Captación, nurturing por programa y operación de aplicaciones académicas.",
    href: "/v2/contacto",
    live: false,
  },
  {
    icon: Building2,
    name: "SaaS B2B",
    desc: "Funnel TOFU→PQL, scoring de actividad in-app y handoff a CSM cuando aplica.",
    href: "/v2/contacto",
    live: false,
  },
  {
    icon: ShoppingBag,
    name: "Retail / E-commerce",
    desc: "Recovery de carritos, NPS automatizado y atención multicanal con un solo equipo.",
    href: "/v2/contacto",
    live: false,
  },
];

const Industrias = () => (
  <LayoutV2>
    <Section surface="default" size="spacious">
      <Container size="narrow" className="text-center pt-8">
        <Eyebrow variant="teal">Verticales</Eyebrow>
        <h1
          className="font-poppins font-bold text-v2-ink-heading mt-4"
          style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
        >
          Sabemos cómo opera tu{" "}
          <Underlined color="teal" variant="scribble">
            <em className="font-serif italic font-normal text-v2-accent-teal-deep">industria</em>
          </Underlined>
          .
        </h1>
        <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7">
          No vendemos templates genéricos. Cada vertical tiene su propio motor — automatizaciones,
          flujos y modelos de datos pensados para ese negocio.
        </p>
      </Container>
    </Section>

    <Section surface="alt" size="default">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.name}
                to={ind.href}
                className="group bg-white border border-v2-border-subtle rounded-2xl p-7 hover:border-v2-accent-teal/40 hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center">
                    <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                  </div>
                  {ind.live ? (
                    <span className="bg-v2-surface-teal-mist text-v2-accent-teal-deep text-[10px] font-lato font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Página dedicada
                    </span>
                  ) : (
                    <span className="bg-v2-surface-sand-mist text-[#8a7a4f] text-[10px] font-lato font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Bajo demanda
                    </span>
                  )}
                </div>
                <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading mt-5">
                  {ind.name}
                </h3>
                <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">
                  {ind.desc}
                </p>
                <span className="mt-auto pt-6 inline-flex items-center gap-1.5 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep">
                  {ind.live ? "Ver vertical" : "Hablar con un experto"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>

    <Section surface="navy-dark" size="default">
      <Container size="narrow" className="text-center">
        <h2
          className="font-poppins font-bold text-white"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
        >
          ¿No ves tu industria?{" "}
          <em className="font-serif italic font-normal text-v2-accent-teal">Probablemente sí podemos</em>.
        </h2>
        <p className="font-lato text-[17px] text-white/70 mt-5 max-w-[520px] mx-auto">
          Trabajamos con cualquier vertical B2B que tenga proceso comercial. Cuéntanos el tuyo.
        </p>
        <div className="mt-9">
          <Link to="/v2/contacto">
            <ButtonV2 variant="primary" size="lg">
              Hablar con un experto
              <ArrowRight className="h-4 w-4" />
            </ButtonV2>
          </Link>
        </div>
      </Container>
    </Section>
  </LayoutV2>
);

export default Industrias;
