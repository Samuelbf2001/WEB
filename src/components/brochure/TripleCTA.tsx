import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { TRIPLE_CTAS } from './data';

interface Props {
  onAction: (href: string, external?: boolean) => void;
}

export default function TripleCTA({ onAction }: Props) {
  return (
    <section id="contacto" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <AnimatedBackground variant="soft" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Tu siguiente paso
          </p>
          <h2 className="font-poppins text-[clamp(1.85rem,4vw,2.85rem)] font-extrabold leading-tight text-white">
            Elegí por dónde empezamos.
          </h2>
          <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/65 sm:text-lg">
            No tenés que tener todo claro. En la primera conversación aterrizamos contigo qué pieza mueve más la aguja en tu negocio hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TRIPLE_CTAS.map(({ title, highlight, copy, cta, href, icon: Icon, external }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a2342]/70 via-white/[0.02] to-white/[0.01] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00bfa5]/40 hover:shadow-[0_25px_70px_-15px_rgba(0,191,165,0.3)] sm:p-7"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00bfa5]/0 blur-3xl transition-all duration-500 group-hover:bg-[#00bfa5]/15" />

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00bfa5]/30 bg-[#00bfa5]/12 text-[#00bfa5]">
                  <Icon size={22} />
                </div>

                <h3 className="font-poppins text-xl font-extrabold leading-tight text-white sm:text-2xl">
                  {title} <span className="block">{highlight}</span>
                </h3>

                <p className="mt-3 flex-1 font-lato text-sm leading-relaxed text-white/60 sm:text-[15px]">
                  {copy}
                </p>

                <button
                  onClick={() => onAction(href, external)}
                  className="glow-button mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] px-4 py-3 font-poppins text-sm font-bold text-white shadow-[0_8px_25px_rgba(0,191,165,0.22)] transition-transform duration-200 group-hover:-translate-y-0.5"
                >
                  {cta}
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
