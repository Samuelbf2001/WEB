import { ArrowLeft, Building2, Globe, Mail, MessageSquare } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import LogoSlider from '@/components/LogoSlider';
import HeroBrochure from '@/components/brochure/HeroBrochure';
import PainPointsCards from '@/components/brochure/PainPointsCards';
import JourneySteps from '@/components/brochure/JourneySteps';
import ServicesGrid from '@/components/brochure/ServicesGrid';
import ProductsLadder from '@/components/brochure/ProductsLadder';
import PlatformsCarousel from '@/components/brochure/PlatformsCarousel';
import StatsSection from '@/components/brochure/StatsSection';
import MockupsGallery from '@/components/brochure/MockupsGallery';
import FAQAccordion from '@/components/brochure/FAQAccordion';
import NotOnlySection from '@/components/brochure/NotOnlySection';
import EcosystemTimeline from '@/components/brochure/EcosystemTimeline';
import TripleCTA from '@/components/brochure/TripleCTA';

const WA_LINK =
  'https://wa.me/573004188522?text=Hola%2C%20vi%20el%20portafolio%20de%20Sixteam.pro%20y%20quisiera%20agendar%20una%20asesor%C3%ADa.';

export default function BrochurePage() {
  useSEO({
    title: 'Portafolio Sixteam.pro — CRM, IA y Automatización para empresas en Latam',
    description:
      'Implementamos CRM, automatizaciones, IA conversacional, integraciones y activos digitales para que tu empresa centralice, venda y escale en orden. Conoce nuestro portafolio completo.',
    canonical: 'https://sixteam.pro/brochure',
    ogUrl: 'https://sixteam.pro/brochure',
    ogImage: 'https://sixteam.pro/brochure/brochure-hero.png',
    noindex: false,
  });

  const scrollTo = (selector: string) => {
    const id = selector.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openWA = () => window.open(WA_LINK, '_blank', 'noopener,noreferrer');

  const handleCtaAction = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (href.startsWith('#')) {
      scrollTo(href);
      return;
    }
    window.location.href = href;
  };

  return (
    <div className="min-h-screen bg-[#030d1a] font-lato text-white antialiased">

      {/* Top micro-nav — ir al sitio principal */}
      <div className="relative z-30 border-b border-white/5 bg-[#020a16] px-5 py-2.5 sm:px-8">
        <a
          href="https://sixteam.pro"
          className="inline-flex items-center gap-1.5 font-lato text-xs text-white/40 transition-colors duration-200 hover:text-white/70"
        >
          <ArrowLeft size={11} />
          sixteam.pro
        </a>
      </div>

      <main className="relative">

        {/* Hero — darkest navy base, network animation */}
        <HeroBrochure />

        {/* Logo slider — tono levemente elevado */}
        <div className="bg-[#06121f]">
          <LogoSlider title="Estas empresas ya han confiado en nuestro equipo" />
        </div>

        {/* Pain points — navy oscuro con textura de puntos */}
        <div
          className="bg-[#030d1a]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(29,112,162,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        >
          <PainPointsCards />
        </div>

        {/* Journey — gradiente diagonal azul-navy */}
        <div
          style={{
            background:
              'linear-gradient(155deg, #030d1a 0%, #071929 45%, #0a2040 70%, #030d1a 100%)',
          }}
        >
          <JourneySteps />
        </div>

        {/* Services — más oscuro, cards navy visibles */}
        <div className="bg-[#020a16]">
          <ServicesGrid />
        </div>

        {/* Products — navy con brillo teal sutil */}
        <div
          className="bg-[#06121f]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 80% 50%, rgba(0,191,165,0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 50%, rgba(29,112,162,0.08) 0%, transparent 55%)',
          }}
        >
          <ProductsLadder onCta={openWA} />
        </div>

        {/* Platforms — tiene su propio bg-[#06121f] con border-y */}
        <PlatformsCarousel />

        {/* Stats — SECCIÓN BLANCA (contraste máximo) */}
        <div
          style={{
            background: 'linear-gradient(135deg, #eef4fb 0%, #ffffff 40%, #f0f7f5 100%)',
          }}
        >
          <StatsSection />
        </div>

        {/* Mockups — navy puro con líneas horizontales sutiles */}
        <div
          className="bg-[#030d1a]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(29,112,162,0.04) 47px, rgba(29,112,162,0.04) 48px)',
          }}
        >
          <MockupsGallery />
        </div>

        {/* Not only — sección elevada con luz central */}
        <div
          className="bg-[#061525]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 0%, rgba(0,191,165,0.07) 0%, transparent 60%)',
          }}
        >
          <NotOnlySection />
        </div>

        {/* Ecosystem Timeline — journey del cliente con todos los servicios */}
        <div
          className="bg-[#030d1a]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(29,112,162,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        >
          <EcosystemTimeline />
        </div>

        {/* FAQ — oscuro con rejilla diagonal */}
        <div
          className="bg-[#030d1a]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, transparent, transparent 28px, rgba(29,112,162,0.03) 28px, rgba(29,112,162,0.03) 29px)',
          }}
        >
          <FAQAccordion />
        </div>

        {/* Triple CTA — gradiente navy→azul→navy */}
        <div
          style={{
            background:
              'linear-gradient(180deg, #030d1a 0%, #061e35 40%, #071929 60%, #030d1a 100%)',
          }}
        >
          <TripleCTA onAction={handleCtaAction} />
        </div>

        {/* Contact info */}
        <section className="relative bg-[#06121f] px-5 py-16 sm:px-8 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 50% 0%, rgba(29,112,162,0.1) 0%, transparent 55%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a2342]/80 via-white/[0.02] to-transparent p-7 backdrop-blur-md sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <a
                href="mailto:alpha@sixteam.pro"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:border-[#00bfa5]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#00bfa5]/25 bg-[#00bfa5]/10 text-[#00bfa5]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-poppins text-xs font-bold uppercase tracking-wider text-white/45">
                    Email
                  </div>
                  <div className="font-poppins text-base font-bold text-white">
                    alpha@sixteam.pro
                  </div>
                </div>
              </a>
              <a
                href="https://sixteam.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:border-[#00bfa5]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#00bfa5]/25 bg-[#00bfa5]/10 text-[#00bfa5]">
                  <Globe size={18} />
                </div>
                <div>
                  <div className="font-poppins text-xs font-bold uppercase tracking-wider text-white/45">
                    Sitio web
                  </div>
                  <div className="font-poppins text-base font-bold text-white">sixteam.pro</div>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/55">
                  <Building2 size={18} />
                </div>
                <div className="font-lato text-sm leading-snug text-white/60">
                  Sixteam Innovación y Estrategia Digital S.A.S.
                  <div className="mt-1 text-xs text-white/40">NIT 901.967.849-4</div>
                </div>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-[#00bfa5]/20 bg-[#00bfa5]/[0.04] p-4 transition-all duration-200 hover:border-[#00bfa5]/50 hover:bg-[#00bfa5]/[0.08]"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-[#00bfa5]/30 bg-[#00bfa5]/12 text-[#00bfa5]">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className="font-poppins text-xs font-bold uppercase tracking-wider text-white/45">
                    WhatsApp
                  </div>
                  <div className="font-lato text-sm leading-snug text-white/70 group-hover:text-white/90">
                    Escríbenos para solicitar una presentación o propuesta a la medida.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#020a16] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 text-xs text-white/35 sm:flex-row sm:items-center">
          <div>Sixteam.pro · Implementaciones de tecnología y transformación digital</div>
          <div>NIT 901.967.849-4 · Brochure comercial</div>
        </div>
      </footer>
    </div>
  );
}
