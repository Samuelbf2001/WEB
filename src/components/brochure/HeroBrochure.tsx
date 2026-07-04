import { Sparkles } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function HeroBrochure() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <AnimatedBackground variant="network" />

      {/* Desktop background image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: 'url(/brochure/brochure-hero.png)',
          backgroundSize: '52% auto',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.07,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background: 'linear-gradient(to right, #030d1a 42%, rgba(3,13,26,0.75) 72%, rgba(3,13,26,0.45) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 lg:max-w-4xl lg:pb-24 lg:pt-28 xl:max-w-5xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00bfa5]/30 bg-[#00bfa5]/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5]">
          <Sparkles size={13} />
          Portafolio Sixteam.pro
        </div>

        <h1 className="font-poppins font-black leading-[1.02] tracking-tight text-white">
          <span className="block text-[clamp(2.25rem,6vw,4.5rem)]">
            Convertimos tu negocio en una
          </span>
          <span className="block text-[clamp(2.25rem,6vw,4.5rem)]">
            operación digital
          </span>
          <span className="block text-[clamp(2.25rem,6vw,4.5rem)]">
            que centraliza, vende y escala.
          </span>
        </h1>

        <p className="mt-7 max-w-xl font-lato text-base leading-relaxed text-white/70 sm:text-lg">
          Diseñamos e implementamos soluciones de{' '}
          <span className="font-semibold text-white">CRM, automatizaciones y agentes de IA</span>{' '}
          para ventas, operación, servicio y marketing — para que tu empresa deje de operar en silos y empiece a crecer con{' '}
          <span className="font-semibold text-[#00bfa5]">orden, control y visibilidad real</span>.
        </p>

        {/* Slogan formula */}
        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-lato text-sm">
          <span className="font-semibold text-[#1d70a2]">Procesos</span>
          <span className="text-white/30">+</span>
          <span className="font-semibold text-white/55">Humanos</span>
          <span className="text-white/30">+</span>
          <span className="font-semibold text-[#1d70a2]">Tecnología</span>
          <span className="font-bold text-[#00bfa5]">=</span>
          <span className="font-bold text-[#00bfa5]">Crecimiento</span>
        </div>

        {/* Stats — 3 tarjetas centradas en móvil */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          {[
            { value: '+50', label: 'Implementaciones' },
            { value: '15+', label: 'Plataformas' },
            { value: '30 días', label: 'A producción' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex min-w-[90px] flex-col items-center rounded-2xl border border-white/10 bg-[#0a2342]/80 px-5 py-3 text-center backdrop-blur-md"
            >
              <div className="font-poppins text-lg font-extrabold text-[#00bfa5]">{value}</div>
              <div className="mt-0.5 text-[11px] text-white/50">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
