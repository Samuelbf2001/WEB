import { JOURNEY } from './data';

export default function JourneySteps() {
  return (
    <section id="metodologia" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 50%, rgba(29,112,162,0.18), transparent 50%), radial-gradient(ellipse at 85% 50%, rgba(0,191,165,0.12), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Cómo trabajamos
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-3xl bg-gradient-to-r from-[#1d70a2]/10 to-[#00bfa5]/8 blur-3xl" />
            <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
              La transformación no pasa por arte de magia. Pasa por método.
            </h2>
          </div>
          <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/60 sm:text-lg">
            Cuatro etapas que ejecutamos en cada proyecto, sin saltarnos ninguna. Es lo que asegura que la operación funcione el día 31, no solo el día del kickoff.
          </p>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[14px] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-[#1d70a2]/60 via-[#00bfa5]/40 to-transparent" />

            {JOURNEY.map(({ step, title, copy, icon: Icon }, index) => (
              <div key={step} className="group relative mb-5 last:mb-0">
                {/* Step indicator */}
                <div className="absolute -left-8 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1d70a2]/60 bg-[#030d1a] transition-all duration-300 group-hover:border-[#00bfa5] group-hover:bg-[#00bfa5]/10 group-hover:shadow-[0_0_14px_rgba(0,191,165,0.4)]">
                  <Icon size={13} className="text-[#00bfa5]" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 group-hover:border-[#00bfa5]/30 group-hover:bg-white/[0.04] group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_35px_-10px_rgba(0,191,165,0.2)]">
                  <span className="font-poppins text-3xl font-black leading-none bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                    {step}
                  </span>
                  <h3 className="mt-1 font-poppins text-base font-bold leading-snug text-white">{title}</h3>
                  <p className="mt-2 font-lato text-sm leading-relaxed text-white/60">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-8 h-px bg-gradient-to-r from-transparent via-[#1d70a2]/50 to-transparent" />
            {/* Animated glow on the line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[31px] h-[2px] bg-gradient-to-r from-transparent via-[#00bfa5]/25 to-transparent blur-sm" />

            <div className="grid grid-cols-4 gap-5">
              {JOURNEY.map(({ step, title, copy, icon: Icon }) => (
                <div key={step} className="group flex flex-col items-center">
                  {/* Step circle */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border-2 border-[#1d70a2]/45 bg-gradient-to-br from-[#0a2342] to-[#06121f] transition-all duration-300 group-hover:border-[#00bfa5] group-hover:shadow-[0_0_28px_rgba(0,191,165,0.35)] group-hover:scale-105">
                    <span className="font-poppins text-[10px] font-bold uppercase tracking-wider text-[#00bfa5]/60">
                      {step}
                    </span>
                    <Icon
                      size={20}
                      className="text-[#00bfa5] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Card */}
                  <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all duration-300 group-hover:border-[#00bfa5]/30 group-hover:bg-white/[0.04] group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_50px_-15px_rgba(0,191,165,0.2)]">
                    <h3 className="font-poppins text-base font-bold leading-snug text-white">{title}</h3>
                    <p className="mt-2.5 font-lato text-sm leading-relaxed text-white/60">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
