import { useState } from "react";
import { ArrowRight, BadgePercent, X } from "lucide-react";
import ButtonV2 from "@/components/v2/ButtonV2";
import { PROMO_REMAINING_SPOTS } from "@/lib/promo";

/** Decorative floating promo card — meant to live inside a `relative` hero
 * section only (uses `absolute`, not `fixed`), so it scrolls away with the
 * hero instead of following the whole page. */
const PromoFloatingV2 = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    // Bottom-left, not bottom-right: the global WhatsApp button (WhatsAppButton.tsx)
    // is fixed bottom-right on every page and would collide with this on tall viewports.
    <div className="absolute bottom-4 left-4 z-20 hidden w-[300px] md:block lg:left-8 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="relative rounded-2xl border border-white/12 bg-[#0a2342] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
        <button
          onClick={() => setDismissed(true)}
          aria-label="Cerrar promoción"
          className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-[#0a2342] text-white/50 transition-colors hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#00bfa5]/35 bg-[#00bfa5]/10 px-2.5 py-1 font-lato text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8ff5e6]">
          <BadgePercent className="h-3 w-3" aria-hidden />
          Promoción de lanzamiento
        </div>

        <p className="mt-2.5 font-poppins text-[17px] font-bold leading-tight text-white">
          Plan Esencial desde <span className="text-[#00bfa5]">$199</span>{" "}
          <span className="font-normal text-[13px] text-white/45 line-through">$300</span>
          <span className="font-normal text-[13px] text-white/60"> USD/mes</span>
        </p>

        <p className="mt-1.5 font-lato text-[12.5px] leading-relaxed text-[#e0e0e0]/80">
          El equipo de tecnología e IA que siempre has necesitado para marketing, ventas y servicio, sin contratar personal adicional.
        </p>

        <p className="mt-2 font-lato text-[12.5px] leading-relaxed text-[#e0e0e0]/80">
          Cupos limitados para los primeros 20 clientes: quedan {PROMO_REMAINING_SPOTS}.
        </p>

        <div className="mt-3.5 flex flex-col items-center gap-2">
          <ButtonV2 asChild size="sm" className="w-full justify-center">
            <a href="/contacto?promo=esencial-20#agenda">
              Tomar la promoción
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </ButtonV2>
          <a
            href="#ops"
            className="font-lato text-[12px] font-semibold text-white/60 transition-colors hover:text-white"
          >
            Ver de qué se trata
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoFloatingV2;
