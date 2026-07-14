import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Mail, MessageCircle } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";

const BOOKING_WIDGET_SRC = "https://web.sixteam.pro/widget/booking/9Fq9Yo6eGNv9cnc7YRc2";
const BOOKING_WIDGET_ID = "9Fq9Yo6eGNv9cnc7YRc2_1783637690382";
const BOOKING_SCRIPT_SRC = "https://web.sixteam.pro/js/form_embed.js";

const BookingEmbed = () => {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${BOOKING_SCRIPT_SRC}"]`
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = BOOKING_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-v2-border-subtle bg-white shadow-[0_16px_48px_rgba(10,35,66,0.08)]">
      <iframe
        src={BOOKING_WIDGET_SRC}
        title="Agenda Sixteam.pro"
        id={BOOKING_WIDGET_ID}
        scrolling="no"
        className="block min-h-[720px] w-full bg-white"
        style={{ border: "none", overflow: "hidden" }}
      />
    </div>
  );
};

const channels = [
  {
    icon: Calendar,
    title: "Agenda 30 minutos",
    desc: "Reserva directamente el espacio que mejor te funcione. Conversación honesta, sin venta forzada.",
    cta: "Reservar slot",
    href: "#agenda",
    external: false,
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
    <Section surface="alt" size="default" className="pt-24 md:pt-28 lg:pt-32">
      <Container size="wide">
        <div className="mx-auto max-w-[880px] text-center">
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
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="group flex min-h-[280px] flex-col rounded-2xl border border-v2-border-subtle bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-v2-accent-teal/40 hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-v2-surface-teal-mist">
                  <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                </div>
                <h3 className="mt-5 font-poppins text-[20px] font-bold text-v2-ink-heading">
                  {c.title}
                </h3>
                <p className="mt-2 font-lato text-[14px] leading-[1.6] text-v2-ink-body">{c.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep">
                  {c.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
    <Section surface="default" size="default" id="agenda" className="scroll-mt-24">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow variant="teal">Agenda Sixteam.pro</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.12" }}
            >
              Elige tu horario y llegamos preparados.
            </h2>
            <p className="font-lato text-[16px] md:text-[17px] text-v2-ink-body leading-[1.65] mt-5">
              Usa esta agenda para reservar la llamada inicial. Si ya tienes contexto, escríbenos
              por WhatsApp o correo antes de la reunión y lo revisamos.
            </p>
          </div>

          <BookingEmbed />
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
          <Link to="/radar">
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
