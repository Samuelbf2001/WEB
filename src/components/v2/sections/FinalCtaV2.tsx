import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const FinalCtaV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="navy-dark" size="spacious" className="overflow-hidden">
      {/* Brand gradient sweep — diagonal orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(29,112,162,0.25) 0%, rgba(0,191,165,0.12) 40%, transparent 70%)",
          animation: "v2-aurora-1 18s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 60%, rgba(0,191,165,0.18) 0%, transparent 65%)",
          animation: "v2-aurora-2 22s ease-in-out infinite",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container size="narrow" className="relative text-center">
        <div ref={ref}>
          <div className="v2-reveal">
            <Eyebrow variant="teal" className="text-v2-accent-teal">
              Empieza por aquí
            </Eyebrow>
          </div>
          <h2
            className="v2-reveal v2-d1 font-poppins font-bold text-white mt-5"
            style={{ fontSize: "clamp(36px, 6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.025em" }}
          >
            Tu CRM se merece{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal">algo mejor</em>
            </Underlined>{" "}
            que ser un cementerio.
          </h2>
          <p className="v2-reveal v2-d2 font-lato text-[18px] md:text-[20px] text-white/75 leading-[1.65] max-w-[640px] mx-auto mt-7">
            Empieza con el Radar gratis. 48 horas para saber dónde está la fuga de revenue. Sin venta,
            sin compromiso, sin propuesta de 30 páginas.
          </p>
          <div className="v2-reveal v2-d3 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">
                Hacer mi auditoría gratis
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2
                variant="outline"
                size="lg"
                className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
              >
                Agendar llamada de 30 min
              </ButtonV2>
            </Link>
          </div>
          <p className="v2-reveal v2-d4 font-serif italic text-[13px] text-white/40 mt-8">
            "Si después de 48h te queda solo el diagnóstico y nos dices que no, nos quedamos amigos."
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCtaV2;
