import { CheckCircle2 } from 'lucide-react';
import { SERVICES } from './data';

const BENTO_SPANS = [
  'md:col-span-2 lg:col-span-3',
  'md:col-span-1 lg:col-span-3',
  'md:col-span-1 lg:col-span-2',
  'md:col-span-2 lg:col-span-2',
  'md:col-span-1 lg:col-span-2',
  'md:col-span-2 lg:col-span-3',
  'md:col-span-1 lg:col-span-3',
  'md:col-span-1 lg:col-span-2',
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
              — Qué implementamos
            </p>
            <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
              Ocho líneas de servicio que cubren{' '}
              <span className="text-[#00bfa5]">ventas, servicio, marketing y operación</span>.
            </h2>
          </div>
          <p className="max-w-md font-lato text-sm leading-relaxed text-white/55 lg:text-right">
            Empezamos por donde duele más y crecemos según se van resolviendo los frentes. No es necesario contratar todo a la vez.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {SERVICES.map(({ title, copy, bullets, icon: Icon, price }, index) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-2xl border border-[#1d70a2]/25 bg-gradient-to-br from-[#0a2342] to-[#06121f] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00bfa5]/55 hover:from-[#0d2d52] hover:shadow-[0_25px_70px_-15px_rgba(0,191,165,0.35)] ${BENTO_SPANS[index] ?? ''}`}
            >
              {/* Corner glow — always visible, brightens on hover */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#1d70a2]/20 blur-3xl transition-all duration-500 group-hover:bg-[#00bfa5]/30" />
              {/* Bottom-left accent */}
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-[#00bfa5]/5 blur-2xl transition-all duration-500 group-hover:bg-[#00bfa5]/12" />

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00bfa5]/40 bg-[#00bfa5]/15 text-[#00bfa5] shadow-[0_0_16px_rgba(0,191,165,0.15)]">
                  <Icon size={21} />
                </div>

                <h3 className="font-poppins text-lg font-bold leading-snug text-white sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 font-lato text-sm leading-relaxed text-white/70">
                  {copy}
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#00bfa5]/25 bg-[#00bfa5]/10 px-3 py-1.5">
                  <span className="font-poppins text-xs font-bold text-[#00bfa5]">{price}</span>
                </div>

                <ul className="mt-auto grid gap-1.5 pt-5 transition-all duration-300">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-white/60 transition-colors duration-300 group-hover:text-white/85"
                    >
                      <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0 text-[#00bfa5]/80" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
