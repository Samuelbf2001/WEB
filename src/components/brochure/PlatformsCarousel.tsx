import { PLATFORMS } from './data';

const SLIDER_LOGOS = [...PLATFORMS, ...PLATFORMS];

export default function PlatformsCarousel() {
  return (
    <section id="plataformas" className="relative overflow-hidden border-y border-white/5 bg-[#06121f] px-5 py-20 sm:px-8 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(29,112,162,0.18), transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,191,165,0.12), transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Stack que dominamos
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-3xl bg-gradient-to-r from-[#1d70a2]/10 to-[#00bfa5]/8 blur-3xl" />
            <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
              Operamos sobre las plataformas{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                que ya usás
              </span>
              , o las que te conviene adoptar.
            </h2>
          </div>
          <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/60">
            Más de{' '}
            <span className="font-semibold text-white">15 plataformas</span>{' '}
            entre CRM, pauta, IA, automatización y mensajería. Las conectamos entre sí y con tu operación comercial.
          </p>
        </div>

        {/* Auto-scrolling logos — sin marcos, a color */}
        <div className="logo-slider-wrapper py-4" style={{ mask: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="logo-slider-track" style={{ animationDuration: '55s', gap: '3.5rem' }}>
            {SLIDER_LOGOS.map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex-shrink-0">
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-[110px] object-contain opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
