import { Link } from "react-router-dom";
import { ArrowRight, Compass, Hammer, Heart } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const principles = [
  {
    num: "01",
    icon: Compass,
    title: "Operamos, no consultamos",
    desc: "No te entregamos un PDF. Nos integramos a tu Slack, recibimos tareas y devolvemos trabajo hecho.",
    accent: "teal" as const,
  },
  {
    num: "02",
    icon: Hammer,
    title: "Pequeño, semanal, constante",
    desc: "RevOps no es un proyecto de 9 meses. Es un músculo. Cada semana ajustamos algo del sistema.",
    accent: "blue" as const,
  },
  {
    num: "03",
    icon: Heart,
    title: "Honestos hasta cuando duele",
    desc: "Si tu problema no es de RevOps, te lo decimos. Si necesitas una agencia, te recomendamos una.",
    accent: "sand" as const,
  },
];

const stats = [
  { value: "4+", label: "Años operando RevOps en LATAM" },
  { value: "30+", label: "Equipos de growth implementados" },
  { value: "600k+", label: "Tareas automatizadas" },
  { value: "0", label: "Clientes con contrato de permanencia" },
];

const accentConfig = {
  teal: {
    mist: "bg-v2-surface-teal-mist",
    icon: "text-v2-accent-teal-deep",
    watermark: "text-v2-accent-teal/[0.06]",
    bar: "bg-v2-accent-teal",
  },
  blue: {
    mist: "bg-v2-surface-navy-mist",
    icon: "text-v2-accent-blue",
    watermark: "text-v2-accent-blue/[0.06]",
    bar: "bg-v2-accent-blue",
  },
  sand: {
    mist: "bg-v2-surface-sand-mist",
    icon: "text-[#8a7a4f]",
    watermark: "text-[#d4a853]/[0.08]",
    bar: "bg-v2-accent-sand",
  },
};

const Nosotros = () => {
  const statsRef = useScrollReveal<HTMLDivElement>();
  const principlesRef = useScrollReveal<HTMLDivElement>();
  const manifestoRef = useScrollReveal<HTMLDivElement>();
  const formulaRef = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* ── Hero ── */}
      <Section surface="default" size="spacious" className="overflow-hidden">
        {/* Aurora orb */}
        <div
          className="pointer-events-none absolute -top-24 -right-32 w-[520px] h-[520px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #00bfa5 0%, transparent 70%)",
            animation: "v2-aurora-1 14s ease-in-out infinite",
          }}
          aria-hidden
        />
        <Container size="narrow" className="relative text-center pt-8">
          <Eyebrow
            variant="teal"
            style={{
              opacity: 0,
              transform: "translateY(12px)",
              animation: "v2-hero-entry 0.5s ease forwards 0ms",
            }}
          >
            Quiénes somos
          </Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{
              fontSize: "clamp(40px, 7vw, 68px)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              opacity: 0,
              transform: "translateY(16px)",
              animation: "v2-hero-entry 0.55s ease forwards 80ms",
            }}
          >
            Un estudio que{" "}
            <em className="font-serif italic font-normal">opera</em>{" "}
            tu RevOps.
          </h1>
          <p
            className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7"
            style={{
              opacity: 0,
              transform: "translateY(16px)",
              animation: "v2-hero-entry 0.55s ease forwards 200ms",
            }}
          >
            Sixteam.pro nació porque vimos a demasiados founders pagando agencias para configurar
            herramientas que después nadie operaba. Decidimos hacer la otra mitad del trabajo: la que
            pasa todos los días.
          </p>
        </Container>
      </Section>

      {/* ── Stats strip ── */}
      <Section surface="navy-dark" size="compact">
        <div ref={statsRef}>
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`v2-reveal v2-d${i + 1} text-center md:text-left`}
                >
                  <div className="w-8 h-[3px] bg-v2-accent-teal mb-4 mx-auto md:mx-0" />
                  <div
                    className="font-poppins font-bold text-v2-accent-teal"
                    style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: "1" }}
                  >
                    {s.value}
                  </div>
                  <div className="font-lato text-[12px] uppercase tracking-widest text-white/60 mt-3 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </Section>

      {/* ── Principles ── */}
      <Section surface="default" size="default">
        <div ref={principlesRef}>
          <Container>
            <div className="text-center max-w-[680px] mx-auto mb-12">
              <Eyebrow variant="navy" className="v2-fade v2-d1">Cómo trabajamos</Eyebrow>
              <h2
                className="v2-reveal v2-d2 font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
              >
                Tres principios.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Cero negociables</em>.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {principles.map((p, i) => {
                const Icon = p.icon;
                const cfg = accentConfig[p.accent];
                return (
                  <div
                    key={p.title}
                    className={`v2-reveal v2-d${i + 2} relative bg-white border border-v2-border-subtle rounded-2xl p-7 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,191,165,0.09)] transition-[transform,box-shadow] duration-300`}
                  >
                    {/* watermark */}
                    <span
                      className={`pointer-events-none select-none absolute -right-2 -top-4 font-serif italic text-[88px] leading-none ${cfg.watermark}`}
                      aria-hidden
                    >
                      {p.num}
                    </span>
                    <div className={`w-11 h-11 rounded-xl ${cfg.mist} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${cfg.icon}`} />
                    </div>
                    <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading mt-5">
                      {p.title}
                    </h3>
                    <p className="font-lato text-[15px] text-v2-ink-body leading-[1.6] mt-3">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </Section>

      {/* ── Manifesto ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, #00bfa5 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div ref={manifestoRef}>
          <Container size="narrow" className="relative text-center">
            <Eyebrow variant="teal" className="v2-fade v2-d1">Nuestra promesa</Eyebrow>
            <blockquote
              className="v2-reveal v2-d2 font-serif italic font-normal text-white mt-6 leading-[1.3]"
              style={{ fontSize: "clamp(26px, 4.5vw, 42px)" }}
            >
              "Nos pagan por resultados, no por horas de pantalla."
            </blockquote>
            <div className="mt-8 space-y-4 max-w-[580px] mx-auto">
              <p className="v2-fade v2-d3 font-lato text-[17px] text-white/75 leading-[1.7]">
                Cada persona del equipo tiene su nombre en los workflows que opera. Si algo se rompe,
                sabemos de quién es y lo arreglamos sin que tengas que pedirlo.
              </p>
              <p className="v2-fade v2-d4 font-lato text-[17px] text-white/75 leading-[1.7]">
                No facturamos reuniones. No cobramos por ajustes menores. No desaparecemos entre
                sprints. Eso no es diferenciación, sino la base mínima para que el sistema funcione.
              </p>
            </div>
          </Container>
        </div>
      </Section>

      {/* ── Formula ── */}
      <Section surface="sand-mist" size="default" className="overflow-hidden">
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #00bfa5 0%, transparent 70%)",
            animation: "v2-aurora-2 18s ease-in-out infinite",
          }}
          aria-hidden
        />
        <div ref={formulaRef}>
          <Container size="narrow" className="relative">
            <div className="text-center mb-10">
              <Eyebrow variant="sand" className="v2-fade v2-d1">La fórmula</Eyebrow>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              {[
                { word: "Process", accent: false },
                { word: "+", accent: false, small: true },
                { word: "Technology", accent: true },
                { word: "+", accent: false, small: true },
                { word: "People", accent: false },
                { word: "=", accent: false, small: true },
                { word: "Growth.", accent: true, serif: true },
              ].map((item, i) => (
                <div
                  key={item.word}
                  className={`v2-reveal v2-d${Math.min(i + 1, 6)} font-poppins font-bold leading-none ${
                    item.small
                      ? "text-[28px] text-v2-ink-muted"
                      : item.serif
                      ? "font-serif italic font-normal text-v2-accent-teal-deep"
                      : item.accent
                      ? "text-v2-accent-teal-deep"
                      : "text-v2-ink-heading"
                  }`}
                  style={
                    item.small
                      ? { fontSize: "28px" }
                      : { fontSize: "clamp(36px, 6vw, 64px)" }
                  }
                >
                  {item.word}
                </div>
              ))}
            </div>
            <p className="v2-fade v2-d6 font-lato text-[17px] text-v2-ink-body leading-[1.65] mt-10 max-w-[520px] mx-auto text-center">
              Es la única fórmula que hemos visto funcionar consistentemente. Falla cualquiera de los
              tres factores y el sistema se cae.
            </p>
          </Container>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section surface="navy-dark" size="default">
        <Container size="narrow" className="text-center">
          <h2
            className="font-poppins font-bold text-white"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
          >
            ¿Hablamos por{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">30 minutos</em>?
          </h2>
          <p className="font-lato text-[17px] text-white/70 mt-5 max-w-[520px] mx-auto">
            Sin pitch. Sin venta. Te contamos cómo trabajamos y vemos si encajamos contigo.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contacto">
              <ButtonV2 variant="primary" size="lg">
                Agendar llamada
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/radar">
              <ButtonV2
                variant="outline"
                size="lg"
                className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
              >
                Pedir Radar gratis
              </ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>
    </LayoutV2>
  );
};

export default Nosotros;
