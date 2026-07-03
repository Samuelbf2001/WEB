import { ChevronDown } from "lucide-react";
import Container from "@/components/v2/Container";
import Section from "@/components/v2/Section";
import LogoSliderV2 from "@/components/v2/sections/LogoSliderV2";

export const HeroV2 = () => {
  const scrollToNext = () => {
    document.getElementById("hero-next")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Section
      surface="alt"
      className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24"
    >
      {/* ── Single restrained background: one warm wash + faint grain ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-40 right-[-10%] w-[760px] h-[760px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0.03) 42%, transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "220px 220px",
          }}
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Slogan eyebrow pill */}
          <div
            className="v2-hero-entry mb-8 inline-flex items-center gap-3 bg-white border border-v2-border-subtle rounded-full px-5 py-2.5 shadow-[0_2px_12px_rgba(10,35,66,0.05)]"
            style={{ animationDelay: "0ms" }}
          >
            <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-5 w-5 object-contain flex-shrink-0" />
            <span className="w-px h-4 bg-v2-border-subtle flex-shrink-0" aria-hidden />
            <p className="font-lato text-[11px] md:text-[12px] tracking-wide whitespace-nowrap">
              <span className="text-v2-ink-heading font-semibold">Procesos</span>
              {" "}<span className="text-[#d4a853] font-bold">+</span>{" "}
              <span className="text-v2-ink-heading font-semibold">Tecnología</span>
              {" "}<span className="text-[#d4a853] font-bold">+</span>{" "}
              <span className="text-v2-ink-heading font-semibold">Personas</span>
              {" "}<span className="text-[#d4a853] font-bold">=</span>{" "}
              <span className="text-v2-ink-heading font-semibold">Crecimiento</span>
            </p>
          </div>

          {/* Headline */}
          <h1
            className="v2-hero-entry font-poppins font-bold text-v2-ink-heading"
            style={{
              fontSize: "clamp(28px, 5vw, 68px)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              animationDelay: "100ms",
            }}
          >
            La solución a los{" "}
            <em className="font-serif italic font-normal">dolores tecnológicos</em>
            <br />
            de tu negocio.
          </h1>

          {/* Subtitle */}
          <p
            className="v2-hero-entry font-serif italic text-[20px] md:text-[23px] text-[#0a2342]/65 leading-[1.45] mt-6 max-w-2xl"
            style={{ animationDelay: "220ms" }}
          >
            Somos el equipo de tecnología con Inteligencia Artificial que tu empresa todavía no tiene.
          </p>

          {/* Scroll hint */}
          <button
            onClick={scrollToNext}
            className="v2-hero-entry group mt-10 flex items-center gap-2 font-lato text-[13px] text-v2-ink-muted hover:text-[#8a7a4f] transition-colors duration-200 cursor-pointer"
            style={{ animationDelay: "340ms" }}
          >
            Ver cómo funciona
            <ChevronDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
              style={{ animation: "v2-float 2.4s ease-in-out infinite" }}
            />
          </button>

        </div>
      </Container>
    </Section>

    {/* ── Logo slider ── */}
    <LogoSliderV2 />

    </>
  );
};

export default HeroV2;
