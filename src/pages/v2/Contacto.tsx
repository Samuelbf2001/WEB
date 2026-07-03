import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Mail, MessageCircle } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";

const channels = [
  {
    icon: Calendar,
    title: "Agenda 30 minutos",
    desc: "El primer slot suele estar a 2-3 días. Conversación honesta, sin venta forzada.",
    cta: "Reservar slot",
    href: "https://calendly.com/sixteam/intro",
    external: true,
  },
  {
    icon: MessageCircle,
    title: "Chat por WhatsApp",
    desc: "El canal más rápido. Te respondemos en horas, en horario laboral Colombia.",
    cta: "Abrir WhatsApp",
    href: "https://wa.me/573004188522?text=Hola%2C+vengo+de+sixteam.pro+y+quiero+hablar+con+un+experto.",
    external: true,
  },
  {
    icon: Mail,
    title: "Por correo, sin prisa",
    desc: "Si prefieres escribir un brief largo, este es el canal. Respondemos el mismo día.",
    cta: "hola@sixteam.pro",
    href: "mailto:hola@sixteam.pro",
    external: true,
  },
];

const Contacto = () => (
  <LayoutV2>
    <Section surface="default" size="spacious">
      <Container size="narrow" className="text-center pt-8">
        <Eyebrow variant="teal">Hablemos</Eyebrow>
        <h1
          className="font-poppins font-bold text-v2-ink-heading mt-4"
          style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
        >
          Tres formas de{" "}
          <em className="font-serif italic font-normal">arrancar</em>
          .
        </h1>
        <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7">
          Sin formulario de 12 campos. Sin "cuéntanos tu presupuesto". Elige el canal que prefieras.
        </p>
      </Container>
    </Section>

    <Section surface="alt" size="default">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="group bg-white border border-v2-border-subtle rounded-2xl p-8 hover:border-v2-accent-teal/40 hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center">
                  <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                </div>
                <h3 className="font-poppins font-bold text-[20px] text-v2-ink-heading mt-5">
                  {c.title}
                </h3>
                <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">{c.desc}</p>
                <span className="mt-auto pt-6 inline-flex items-center gap-1.5 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep">
                  {c.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>

    <Section surface="default" size="default">
      <Container size="narrow" className="text-center">
        <Eyebrow variant="navy">¿No estás seguro?</Eyebrow>
        <h2
          className="font-poppins font-bold text-v2-ink-heading mt-3"
          style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
        >
          Empieza por el{" "}
          <em className="font-serif italic font-normal text-v2-accent-teal-deep">Radar gratis</em>.
        </h2>
        <p className="font-lato text-[17px] text-v2-ink-body leading-[1.65] mt-5 max-w-[520px] mx-auto">
          Un diagnóstico ejecutivo en 48 horas. Decides después si quieres conversar. Cero
          compromiso.
        </p>
        <div className="mt-8">
          <Link to="/v2/radar">
            <ButtonV2 variant="primary" size="lg">
              Pedir Radar gratis
              <ArrowRight className="h-4 w-4" />
            </ButtonV2>
          </Link>
        </div>
      </Container>
    </Section>
  </LayoutV2>
);

export default Contacto;
