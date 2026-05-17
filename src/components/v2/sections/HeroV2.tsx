import { Link } from "react-router-dom";
import { ArrowRight, Play, Star } from "lucide-react";
import Container from "@/components/v2/Container";
import Section from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";

/* Fake avatar stack — initials of real clients */
const avatars = [
  { initials: "JR", bg: "bg-v2-accent-teal", text: "text-v2-ink-heading" },
  { initials: "MA", bg: "bg-v2-accent-blue", text: "text-white" },
  { initials: "DC", bg: "bg-[#d4a853]", text: "text-v2-ink-heading" },
];

export const HeroV2 = () => {
  return (
    <Section
      surface="default"
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24"
    >
      {/* Aurora orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(0,191,165,0.14) 0%, rgba(29,112,162,0.06) 50%, transparent 70%)",
          animation: "v2-aurora-1 14s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, rgba(29,112,162,0.12) 0%, rgba(0,191,165,0.04) 50%, transparent 70%)",
          animation: "v2-aurora-2 18s ease-in-out infinite",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #0a2342 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container size="default">
        <div className="mx-auto flex w-full max-w-[860px] flex-col items-center text-center">

          {/* ── Social proof pill + avatars ── */}
          <div
            className="v2-hero-entry flex items-center gap-3"
            style={{ animationDelay: "0ms" }}
          >
            {/* Avatar stack */}
            <div className="flex items-center -space-x-2">
              {avatars.map((a) => (
                <div
                  key={a.initials}
                  className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-poppins font-bold text-[11px] flex-shrink-0 ${a.bg} ${a.text}`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            {/* Stars + label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-v2-accent-teal/25 bg-v2-surface-teal-mist px-4 py-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-v2-accent-teal text-v2-accent-teal"
                    aria-hidden
                  />
                ))}
              </div>
              <span className="font-lato text-[11px] font-semibold uppercase tracking-[0.14em] text-v2-accent-teal-deep">
                30+ equipos operando en LATAM
              </span>
            </div>
          </div>

          {/* ── Headline ── */}
          <h1
            className="v2-hero-entry mt-8 font-poppins font-bold text-v2-ink-heading"
            style={{
              fontSize: "clamp(42px, 7.5vw, 76px)",
              lineHeight: "1.03",
              letterSpacing: "-0.03em",
              animationDelay: "120ms",
            }}
          >
            Ya no tienes que{" "}
            <br className="hidden sm:block" />
            operar{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                solo
              </em>
            </Underlined>
            .
          </h1>

          {/* ── Stacked promise lines ── */}
          <div
            className="v2-hero-entry mt-8 flex flex-col gap-1.5 items-center text-center"
            style={{ animationDelay: "240ms" }}
          >
            {[
              "Tu pipeline se opera sin que lo pidas.",
              "Los leads llegan al vendedor correcto en segundos.",
              "El reporte ejecutivo llega el lunes a las 9am.",
            ].map((line, i, arr) => (
              <p
                key={line}
                className={`font-lato leading-[1.55] ${
                  i === arr.length - 1
                    ? "text-[18px] md:text-[20px] text-v2-ink-heading font-semibold"
                    : "text-[17px] md:text-[19px] text-v2-ink-body"
                }`}
              >
                {i === arr.length - 1 ? (
                  <>
                    Tú&hellip;{" "}
                    <Underlined color="teal" variant="straight">
                      <span className="text-v2-accent-teal-deep">solo tienes que crecer.</span>
                    </Underlined>
                  </>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>

          {/* ── CTA row ── */}
          <div
            className="v2-hero-entry mt-10 flex flex-col sm:flex-row justify-center items-center gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg" className="group">
                Hacer mi auditoría gratis
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2 variant="outline" size="lg" className="group inline-flex items-center gap-2">
                <Play className="h-4 w-4 fill-current opacity-70" />
                30 min, en español
              </ButtonV2>
            </Link>
          </div>

          {/* ── Testimonial mini-card ── */}
          <div
            className="v2-hero-entry mt-8 w-full max-w-[560px]"
            style={{ animationDelay: "460ms" }}
          >
            <div className="bg-white border border-v2-border-subtle rounded-2xl px-6 py-5 text-left shadow-[0_4px_24px_rgba(10,35,66,0.06)]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-v2-surface-teal-mist flex items-center justify-center font-poppins font-bold text-[13px] text-v2-accent-teal-deep flex-shrink-0">
                  JR
                </div>
                <div>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6]">
                    <span className="font-serif italic text-v2-accent-teal text-[18px] leading-none mr-1">"</span>
                    El equipo de ops que siempre necesitamos pero nunca pudimos contratar.
                    <span className="font-serif italic text-v2-accent-teal text-[18px] leading-none ml-0.5">"</span>
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-v2-accent-teal text-v2-accent-teal" aria-hidden />
                      ))}
                    </div>
                    <span className="font-lato text-[12px] text-v2-ink-muted">
                      Juan Restrepo · CEO, MasterViajes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Trust strip ── */}
          <div
            className="v2-hero-entry mt-10 w-full"
            style={{ animationDelay: "540ms" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                "4+ años en LATAM",
                "30+ equipos operando",
                "600,000+ tareas automatizadas",
                "Sin contrato de permanencia",
              ].map((item, i) => (
                <span key={item} className="flex items-center gap-2 font-lato text-[12px] text-v2-ink-muted uppercase tracking-widest">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-v2-border-subtle" aria-hidden />}
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default HeroV2;
