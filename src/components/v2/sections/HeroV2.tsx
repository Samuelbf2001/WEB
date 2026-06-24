import { ChevronDown } from "lucide-react";
import Container from "@/components/v2/Container";
import Section from "@/components/v2/Section";
import Underlined from "@/components/v2/UnderlineSvg";
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
      {/* ── BACKGROUND LAYER 1: Gold aurora orbs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {/* Gold orb — top right */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,168,83,0.18) 0%, rgba(212,168,83,0.04) 45%, transparent 70%)",
            animation: "v2-aurora-1 14s ease-in-out infinite",
          }}
        />
        {/* Blue orb — bottom left */}
        <div
          className="absolute -bottom-20 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at 55% 55%, rgba(29,112,162,0.08) 0%, transparent 70%)",
            animation: "v2-aurora-2 18s ease-in-out infinite",
          }}
        />
        {/* Warm center glow */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 65%)",
            animation: "v2-aurora-1 22s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* ── BACKGROUND LAYER 2: Fine dot grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, #8a7a4f 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── BACKGROUND LAYER 3: Topographic contour lines ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.10]">
        <svg
          className="absolute -top-10 -right-10 w-[720px] h-[720px]"
          viewBox="0 0 720 720"
          fill="none"
          style={{ animation: "v2-topo-drift 40s linear infinite" }}
        >
          {[60,120,180,240,300,360,420,480,540,600,660].map((r, i) => (
            <ellipse
              key={r}
              cx="360" cy="360"
              rx={r * 0.95 + i * 2}
              ry={r * 0.72 + i * 3}
              stroke="#d4a853"
              strokeWidth="1"
              fill="none"
              opacity={0.6 - i * 0.04}
              transform={`rotate(${i * 8} 360 360)`}
            />
          ))}
        </svg>
        <svg
          className="absolute -bottom-20 -left-20 w-[560px] h-[560px]"
          viewBox="0 0 560 560"
          fill="none"
          style={{ animation: "v2-topo-drift 55s linear infinite reverse" }}
        >
          {[40,90,140,190,240,290,340,390,440].map((r, i) => (
            <ellipse
              key={r}
              cx="280" cy="280"
              rx={r}
              ry={r * 0.68 + i * 2}
              stroke="#b8a06a"
              strokeWidth="0.8"
              fill="none"
              opacity={0.5 - i * 0.04}
              transform={`rotate(${-i * 10} 280 280)`}
            />
          ))}
        </svg>
      </div>

      {/* ── BACKGROUND LAYER 4: Floating geometric accents ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top-right diamond */}
        <div
          className="absolute top-28 right-[11%] w-4 h-4 border-2 border-[#d4a853]/50 rotate-45"
          style={{ animation: "v2-float 8s ease-in-out infinite" }}
        />
        {/* Larger rotated square outline */}
        <div
          className="absolute top-44 right-[17%] w-9 h-9 border-2 border-[#d4a853]/25 rotate-12"
          style={{ animation: "v2-float 12s ease-in-out infinite 1s" }}
        />
        {/* Small gold fill dot */}
        <div
          className="absolute top-36 left-[7%] w-2.5 h-2.5 rounded-full bg-[#d4a853]/35"
          style={{ animation: "v2-float 10s ease-in-out infinite 2s" }}
        />
        {/* Medium gold dot */}
        <div
          className="absolute top-72 right-[8%] w-3 h-3 rounded-full bg-[#d4a853]/20"
          style={{ animation: "v2-float 11s ease-in-out infinite 0.8s" }}
        />
        {/* Dark cross */}
        <svg
          className="absolute top-64 left-[13%] w-7 h-7 opacity-15"
          style={{ animation: "v2-float 14s ease-in-out infinite 0.5s" }}
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="2" x2="12" y2="22" stroke="#8a7a4f" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="#8a7a4f" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        {/* Bottom-left circle outline */}
        <div
          className="absolute bottom-20 left-[5%] w-14 h-14 rounded-full border-2 border-[#d4a853]/25"
          style={{ animation: "v2-float 16s ease-in-out infinite 3s" }}
        />
        {/* Inner circle bottom-left */}
        <div
          className="absolute bottom-[5.5rem] left-[6.5%] w-7 h-7 rounded-full border border-[#d4a853]/15"
          style={{ animation: "v2-float 16s ease-in-out infinite 3s" }}
        />
        {/* Sand accent square */}
        <div
          className="absolute bottom-36 right-[21%] w-6 h-6 border-2 border-[#d4a853]/40 rotate-[20deg]"
          style={{ animation: "v2-float 9s ease-in-out infinite 1.5s" }}
        />
        {/* Tiny gold dot bottom-right */}
        <div
          className="absolute bottom-28 right-[14%] w-2 h-2 rounded-full bg-[#d4a853]/30"
          style={{ animation: "v2-float 7s ease-in-out infinite 2.2s" }}
        />
        {/* Dots row top-center */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 flex gap-3">
          {[0,1,2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#d4a853]/35"
              style={{ animation: `v2-float ${8 + i * 2}s ease-in-out infinite ${i * 0.6}s` }}
            />
          ))}
        </div>
        {/* Dashed horizontal accent line */}
        <svg
          className="absolute top-[45%] left-0 w-full opacity-[0.06]"
          viewBox="0 0 1200 4"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="2" x2="1200" y2="2" stroke="#d4a853" strokeWidth="1" strokeDasharray="6 14"/>
        </svg>
      </div>

      {/* ── BACKGROUND LAYER 5: Noise grain overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Slogan eyebrow pill */}
          <div
            className="v2-hero-entry mb-8 inline-flex items-center gap-3 bg-white border border-v2-border-subtle rounded-full px-5 py-2.5 shadow-[0_4px_24px_rgba(212,168,83,0.10)]"
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
            <Underlined color="sand" variant="scribble">
              <em className="font-serif italic font-normal text-[#8a7a4f]">dolores tecnológicos</em>
            </Underlined>
            <br />
            de tu negocio.
          </h1>

          {/* Subtitle */}
          <p
            className="v2-hero-entry font-serif italic text-[20px] md:text-[23px] text-[#8a7a4f] leading-[1.45] mt-6 max-w-2xl"
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
