import { Users } from "lucide-react";

export const SIXTEAM_AGENTS = [
  { color: "#1d70a2", name: "Alfa", role: "Concierge" },
  { color: "#7b5ea7", name: "Bravo", role: "Diagnóstico IA" },
  { color: "#c2680a", name: "Charlie", role: "Automatizaciones" },
  { color: "#00bfa5", name: "Delta", role: "CRM & Pipeline" },
  { color: "#0d6659", name: "Echo", role: "WhatsApp 24/7" },
  { color: "#d4a853", name: "Foxtrot", role: "Reportes & Analítica" },
] as const;

const AgentRow: React.FC<{ color: string; name: string; role: string }> = ({ color, name, role }) => (
  <div className="flex items-center gap-2.5">
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {name[0]}
    </div>
    <span className="font-lato text-[13px] text-v2-ink-body">
      <strong className="text-v2-ink-heading">{name}</strong>{" "}
      <span className="text-v2-ink-muted">({role})</span>
    </span>
  </div>
);

interface AgentsBlockProps {
  teamDesc: string;
  className?: string;
}

/** Single source of truth for the "Especialistas + Agentes IA" pricing-card
 * block (6 agents: Alfa–Foxtrot). Shared across PricingV2 (home), Soluciones
 * and OpsLanding so the roster can't drift out of sync between pages again. */
export const AgentsBlock: React.FC<AgentsBlockProps> = ({ teamDesc, className }) => (
  <div className={`rounded-xl border border-v2-border-subtle bg-v2-surface p-3.5 ${className ?? ""}`}>
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-v2-surface-navy-mist border-v2-accent-blue/20 text-v2-accent-blue text-[12px] font-lato font-semibold">
      <Users className="h-3.5 w-3.5" />
      <span className="uppercase tracking-wide">Especialistas + Agentes IA</span>
    </div>
    <p className="font-lato text-[12px] text-v2-ink-muted mt-2 mb-3 leading-relaxed pl-1">
      {teamDesc}
    </p>
    <div className="flex flex-col gap-2 pl-1">
      {SIXTEAM_AGENTS.map((a) => (
        <AgentRow key={a.name} {...a} />
      ))}
    </div>
  </div>
);

export default AgentsBlock;
