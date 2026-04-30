import { PAIN_POINTS } from './data';

export default function PainPointsCards() {
  return (
    <section className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Si te suena alguno de estos
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-3xl bg-gradient-to-r from-[#1d70a2]/10 to-[#00bfa5]/8 blur-3xl" />
            <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
              Tu negocio crece, pero tu operación{' '}
              <span className="text-white/40 font-light italic">— se queda atrás.</span>
            </h2>
          </div>
          <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/60 sm:text-lg">
            La mayoría de empresas que llegan a Sixteam.pro se reconocen en al menos uno de estos tres dolores. La buena noticia: <span className="text-[#00bfa5] font-semibold">tienen solución estructural</span>, no parche.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PAIN_POINTS.map(({ title, copy, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00bfa5]/40 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-10px_rgba(0,191,165,0.25)] sm:p-7"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00bfa5]/0 blur-3xl transition-all duration-500 group-hover:bg-[#00bfa5]/15" />

              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-300 transition-colors duration-300 group-hover:border-[#00bfa5]/30 group-hover:bg-[#00bfa5]/10 group-hover:text-[#00bfa5]">
                  <Icon size={20} />
                </div>

                <h3 className="font-poppins text-lg font-bold leading-snug text-white sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 font-lato text-sm leading-relaxed text-white/55 sm:text-[15px]">
                  {copy}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#00bfa5] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Sixteam.pro lo resuelve</span>
                  <span aria-hidden>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
