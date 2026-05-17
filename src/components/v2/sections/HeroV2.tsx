import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/v2/Container";
import Section from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";

export const HeroV2 = () => {
  return (
    <Section
      surface="default"
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24"
    >
      {/* Aurora orbs — animated brand gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(0,191,165,0.14) 0%, rgba(29,112,162,0.06) 50%, transparent 70%)",
          animation: "v2-aurora-1 14s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle at 60% 60%, rgba(29,112,162,0.12) 0%, rgba(0,191,165,0.04) 50%, transparent 70%)",
          animation: "v2-aurora-2 18s ease-in-out infinite",
        }}
      />
      {/* Faint dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #0a2342 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container size="default">
        <div className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
          {/* Eyebrow pill — enters first */}
          <span
            className="v2-hero-entry inline-flex items-center gap-2 rounded-full border border-v2-accent-teal/25 bg-v2-surface-teal-mist px-4 py-2 font-lato text-[11px] font-semibold uppercase tracking-[0.16em] text-v2-accent-teal-deep"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="h-3 w-3" aria-hidden />
            4+ años operando RevOps en LATAM
          </span>

          {/* H1 */}
          <h1
            className="v2-hero-entry mt-7 font-poppins font-bold text-v2-ink-heading"
            style={{
              fontSize: "clamp(40px, 7vw, 72px)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
              animationDelay: "140ms",
            }}
          >
            El motor de Revenue{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                invisible
              </em>
            </Underlined>{" "}
            en tu empresa.
          </h1>

          {/* Subhead */}
          <p
            className="v2-hero-entry mx-auto mt-7 max-w-[640px] font-lato text-[18px] md:text-[20px] leading-[1.65] text-v2-ink-body"
            style={{ animationDelay: "270ms" }}
          >
            Alineamos Sales, Marketing y CS en un sistema operativo automatizado
            para que escales sin contratar más gente.
          </p>

          {/* Highlight label */}
          <p
            className="v2-hero-entry mt-5 font-lato text-[11px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep"
            style={{ animationDelay: "350ms" }}
          >
            +72h MES/REP · Ahorro promedio por ejecutivo
          </p>

          {/* CTA row */}
          <div
            className="v2-hero-entry mt-9 flex flex-col sm:flex-row justify-center items-center gap-3"
            style={{ animationDelay: "420ms" }}
          >
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg" className="group">
                Hacer mi auditoría
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2 variant="outline" size="lg">
                30 min, en español
              </ButtonV2>
            </Link>
          </div>

          {/* Stat strip */}
          <div
            className="v2-hero-entry mt-16 w-full"
            style={{ animationDelay: "560ms" }}
          >
            <div className="border-y border-v2-border-subtle py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                <div>
                  <p
                    className="font-poppins font-bold text-v2-ink-heading"
                    style={{ fontSize: "36px", lineHeight: "1" }}
                  >
                    600,000+
                  </p>
                  <p className="mt-2 font-lato text-[11px] uppercase tracking-widest text-v2-ink-muted">
                    Tareas automatizadas
                  </p>
                </div>

                <div className="md:border-l md:border-v2-border-subtle md:pl-8">
                  <p
                    className="font-poppins font-bold text-v2-ink-heading"
                    style={{ fontSize: "36px", lineHeight: "1" }}
                  >
                    15h/sem
                  </p>
                  <p className="mt-2 font-lato text-[11px] uppercase tracking-widest text-v2-ink-muted">
                    Ahorro promedio por rep
                  </p>
                </div>

                <div className="md:border-l md:border-v2-border-subtle md:pl-8">
                  <p className="font-serif italic text-[15px] text-v2-ink-body leading-[1.5]">
                    "El equipo de ops que siempre necesitamos pero nunca pudimos contratar."
                  </p>
                  <p className="mt-2 font-lato text-[11px] uppercase tracking-widest text-v2-ink-muted">
                    CEO, MasterViajes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroV2;
