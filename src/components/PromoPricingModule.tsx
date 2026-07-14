import { ArrowRight, BadgePercent, CheckCircle2, Clock3, Users2 } from "lucide-react";
import ButtonV2 from "@/components/v2/ButtonV2";
import Container from "@/components/v2/Container";
import { cn } from "@/lib/utils";

interface PromoPricingModuleProps {
  className?: string;
}

const totalSpots = 20;
const claimedSpots = 14;
const remainingSpots = totalSpots - claimedSpots;
const progress = Math.round((claimedSpots / totalSpots) * 100);

const highlights = [
  "Plan Esencial: CRM, automatizaciones e IA listos para operar.",
  "Implementación guiada por especialistas Sixteam.pro.",
  "Precio promo bloqueado mientras mantengas activo el plan.",
];

const PromoPricingModule = ({ className }: PromoPricingModuleProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#0a2342] py-14 text-white sm:py-16 lg:py-20",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(135deg, rgba(29,112,162,0.45), rgba(10,35,66,0.94) 48%, rgba(0,191,165,0.18))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00bfa5]/35 bg-[#00bfa5]/10 px-4 py-2 font-lato text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8ff5e6]">
              <BadgePercent className="h-4 w-4" aria-hidden />
              <span>Promoción de lanzamiento</span>
            </div>

            <h2 className="mt-5 font-poppins text-[32px] font-black leading-[1.05] tracking-normal text-white sm:text-[42px] lg:text-[52px]">
              Plan Esencial Sixteam Ops desde $200 USD/mes
            </h2>

            <p className="mt-5 max-w-2xl font-lato text-[17px] leading-[1.7] text-[#e0e0e0] sm:text-[18px]">
              Precio regular $300 USD/mes. Promoción por cupos limitados desde $200 USD/mes para los primeros 20 clientes. Los cupos ya se están copando.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00bfa5]" aria-hidden />
                  <p className="font-lato text-sm leading-6 text-[#e0e0e0]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonV2 asChild size="lg" className="w-full sm:w-auto">
                <a href="/contacto?promo=esencial-20#agenda">
                  Tomar la promoción
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </ButtonV2>
              <ButtonV2
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/30 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              >
                <a href="/contacto#agenda">Hablar con un experto</a>
              </ButtonV2>
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/[0.08] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur md:p-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-lato text-sm font-semibold uppercase tracking-[0.14em] text-[#8ff5e6]">
                  Plan promo
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-poppins text-[56px] font-black leading-none text-white sm:text-[68px]">
                    $200
                  </span>
                  <span className="pb-2 font-lato text-lg font-semibold text-[#e0e0e0]">USD/mes</span>
                </div>
              </div>

              <div className="text-right">
                <p className="font-lato text-xs uppercase tracking-[0.16em] text-[#e0e0e0]">Regular</p>
                <p className="font-poppins text-2xl font-bold text-white/60 line-through">$300</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-white/12 pt-6">
              <div className="flex items-center gap-3">
                <Users2 className="h-5 w-5 text-[#00bfa5]" aria-hidden />
                <div>
                  <p className="font-poppins text-base font-bold text-white">Primeros 20 clientes</p>
                  <p className="font-lato text-sm text-[#e0e0e0]">Los cupos ya se están ocupando.</p>
                </div>
              </div>

              <div>
                <div className="h-2 overflow-hidden rounded-full bg-white/12">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#1d70a2] to-[#00bfa5]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 font-lato text-sm">
                  <span className="font-semibold text-white">{`Van ${claimedSpots}`}</span>
                  <span className="text-[#8ff5e6]">{`Quedan ${remainingSpots} cupos`}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/12 pt-4">
                <Clock3 className="h-5 w-5 text-[#00bfa5]" aria-hidden />
                <p className="font-lato text-sm leading-6 text-[#e0e0e0]">
                  Precio promo bloqueado mientras mantengas activo el plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PromoPricingModule;
