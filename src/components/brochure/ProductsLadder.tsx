import { ArrowRight, ChevronRight, Crown } from 'lucide-react';
import { PRODUCTS, TRIPLE_CTAS } from './data';

interface Props {
  onCta: () => void;
}

export default function ProductsLadder({ onCta }: Props) {
  const cta = TRIPLE_CTAS[1];
  return (
    <section id="productos" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Escalera comercial
          </p>
          <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
            Tres productos para avanzar desde{' '}
            <span className="italic font-light text-white/50">atender mejor</span>{' '}
            hasta crecer en serio.
          </h2>
          <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/60">
            Empezás por una necesidad puntual y crecés sin cambiar de lógica ni de acompañamiento. La inversión escala con el negocio, no antes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch">
          {PRODUCTS.map((p, index) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                p.highlighted
                  ? 'border-[#00bfa5]/45 bg-gradient-to-b from-[#00bfa5]/15 via-white/[0.03] to-white/[0.01] shadow-[0_30px_80px_-20px_rgba(0,191,165,0.4)] md:-translate-y-3'
                  : 'border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {p.highlighted && (
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-[#00bfa5]/20 via-transparent to-transparent opacity-60" />
              )}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#1d70a2]/10 blur-3xl transition-all duration-500 group-hover:bg-[#00bfa5]/15" />

              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      color: p.accent,
                      borderColor: `${p.accent}40`,
                      background: `${p.accent}10`,
                    }}
                  >
                    Producto {index + 1}
                  </span>
                  {p.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#00bfa5] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0a2342]">
                      <Crown size={11} /> {p.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-poppins text-xl font-extrabold leading-tight text-white sm:text-2xl">
                  {p.name}
                </h3>

                <div className="mt-3">
                  <span
                    className="font-poppins text-2xl font-black"
                    style={{ color: p.accent }}
                  >
                    {p.price}
                  </span>
                  <p className="mt-0.5 font-lato text-xs text-white/40">{p.impl}</p>
                </div>

                <p className="mt-3 font-lato text-sm leading-relaxed text-white/60">
                  {p.ideal}
                </p>

                <ul className="mt-5 grid gap-2.5 border-t border-white/10 pt-5">
                  {p.includes.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-white/72 leading-snug">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: p.accent }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-lato text-xs leading-relaxed text-white/45">{p.moment}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1d70a2]/12 via-white/[0.02] to-transparent p-6 text-center sm:flex-row sm:justify-between sm:text-left lg:p-8">
          <div className="max-w-xl">
            <h3 className="font-poppins text-lg font-bold leading-snug text-white sm:text-xl">
              ¿Tu prioridad es {cta.highlight}?
            </h3>
            <p className="mt-1 font-lato text-sm text-white/60">
              {cta.copy}
            </p>
          </div>
          <button
            onClick={onCta}
            className="glow-button group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] px-5 py-3 font-poppins text-sm font-bold text-white shadow-[0_10px_30px_rgba(0,191,165,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {cta.cta}
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
