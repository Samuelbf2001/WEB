import { useEffect, useState } from "react";
import { CheckCircle, Clock, Zap, MessageCircle, BarChart3, Mail, RefreshCw } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import Underlined from "@/components/v2/UnderlineSvg";

/* ── Live feed events ─────────────────────────────────────────── */
const events = [
  { icon: MessageCircle, color: "#00bfa5", label: "WhatsApp",      text: "Respuesta enviada a María G., calificación BANT completada",         time: "hace 1 min" },
  { icon: CheckCircle,   color: "#1d70a2", label: "Pipeline CRM",  text: "Deal «Software Corp» movido a Propuesta: $8,400 USD",                  time: "hace 3 min" },
  { icon: Mail,          color: "#00bfa5", label: "Email",          text: "Secuencia nurturing enviada a 312 contactos · apertura 41%",            time: "hace 7 min" },
  { icon: Zap,           color: "#7b5ea7", label: "Automatización", text: "3 duplicados eliminados del CRM · datos normalizados",                  time: "hace 12 min" },
  { icon: BarChart3,     color: "#0d6659", label: "Reporte",        text: "Reporte ejecutivo generado y enviado al equipo a las 9:00am",           time: "hace 18 min" },
  { icon: RefreshCw,     color: "#1d70a2", label: "Workflow",       text: "Lead reactivado tras 14 días sin respuesta, secuencia iniciada",       time: "hace 24 min" },
  { icon: MessageCircle, color: "#00bfa5", label: "WhatsApp",       text: "Agendamiento confirmado con Juan P., slot 3pm del viernes",            time: "hace 31 min" },
  { icon: CheckCircle,   color: "#1d70a2", label: "Pipeline CRM",  text: "5 tareas de seguimiento creadas automáticamente, vencen mañana",       time: "hace 38 min" },
  { icon: Mail,          color: "#00bfa5", label: "Email",          text: "A/B test resuelto: variante B sube 22% · activada como ganadora",      time: "hace 45 min" },
  { icon: Zap,           color: "#7b5ea7", label: "Automatización", text: "Integración HubSpot ↔ WhatsApp sincronizada, 0 errores",               time: "hace 52 min" },
];

/* ── Status modules ───────────────────────────────────────────── */
const modules = [
  { label: "Pipeline CRM",       status: "Activo",    pct: 94, color: "#00bfa5" },
  { label: "Secuencias email",   status: "Corriendo", pct: 78, color: "#1d70a2" },
  { label: "Agente WhatsApp",    status: "En línea",  pct: 100, color: "#00bfa5" },
  { label: "Automatizaciones",   status: "Sin errores",pct: 100, color: "#0d6659" },
  { label: "Reporte ejecutivo",  status: "Listo",     pct: 100, color: "#7b5ea7" },
];

/* ── Animated counter ─────────────────────────────────────────── */
const useCounter = (target: number, duration = 2000) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const step = target / (duration / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [target, duration]);
  return val;
};

/* ── Live feed item ─────────────────────────────────────────────*/
const FeedItem: React.FC<{ item: typeof events[0]; visible: boolean }> = ({ item, visible }) => {
  const Icon = item.icon;
  return (
    <div
      className={`flex items-start gap-3 py-2.5 border-b border-white/[0.06] last:border-0 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: `${item.color}25`, border: `1px solid ${item.color}50` }}
      >
        <Icon className="h-3 w-3" style={{ color: item.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-lato text-[10px] font-bold uppercase tracking-widest" style={{ color: item.color }}>
            {item.label}
          </span>
          <span className="font-lato text-[10px] text-white/30">{item.time}</span>
        </div>
        <p className="font-lato text-[12px] text-white/70 leading-snug truncate">{item.text}</p>
      </div>
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: item.color }} />
    </div>
  );
};

/* ════════════════════════════════════════════════════════════════ */

export const LiveDashboardV2 = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [rotating, setRotating] = useState(0);
  const tasks = useCounter(698_432);
  const clients = useCounter(1_025);

  /* Rotate live feed every 3s */
  useEffect(() => {
    const t = setInterval(() => {
      setRotating((r) => (r + 1) % events.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  /* Show all items after mount */
  useEffect(() => {
    const t = setTimeout(() => setVisibleCount(events.length), 400);
    return () => clearTimeout(t);
  }, []);

  const displayed = [
    events[rotating % events.length],
    events[(rotating + 1) % events.length],
    events[(rotating + 2) % events.length],
    events[(rotating + 3) % events.length],
    events[(rotating + 4) % events.length],
  ];

  return (
    <Section surface="alt" size="default" className="overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <Eyebrow variant="teal">Operación en tiempo real</Eyebrow>
          <h2
            className="font-poppins font-bold text-v2-ink-heading mt-3"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
          >
            Mientras lees esto,{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">tu equipo opera</em>
            </Underlined>
            .
          </h2>
          <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
            No es un demo. Es lo que pasa en las cuentas activas de Sixteam ahora mismo: agentes IA
            y expertos humanos ejecutando sin parar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">

          {/* LEFT — Live activity feed */}
          <div className="bg-v2-ink-heading rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_64px_rgba(10,35,66,0.25)]">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-lato text-[11px] text-white/40 ml-2">Sixteam · Actividad en vivo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00bfa5] animate-pulse" />
                <span className="font-lato text-[10px] font-semibold text-[#00bfa5] uppercase tracking-widest">En línea</span>
              </div>
            </div>

            {/* Feed */}
            <div className="px-5 py-4">
              {displayed.map((ev, i) => (
                <FeedItem key={`${rotating}-${i}`} item={ev} visible={true} />
              ))}
            </div>

            {/* Footer bar */}
            <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
              <span className="font-lato text-[11px] text-white/30">Actualizado automáticamente</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-white/30" />
                <span className="font-lato text-[11px] text-white/30">Ahora</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Stats + modules */}
          <div className="flex flex-col gap-4">

            {/* Counters */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: tasks.toLocaleString("en-US"), label: "Tareas completadas", suffix: "+" },
                { value: clients.toLocaleString("en-US"), label: "Empresas servidas", suffix: "+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-v2-border-subtle rounded-2xl p-5 text-center shadow-[0_4px_16px_rgba(10,35,66,0.05)]">
                  <div className="font-poppins font-black text-[32px] text-v2-ink-heading leading-none">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="font-lato text-[12px] text-v2-ink-muted mt-1.5 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Status modules */}
            <div className="bg-v2-ink-heading rounded-2xl border border-white/10 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
                <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-white/40">Estado del sistema</p>
              </div>
              <div className="px-5 py-2">
                {modules.map((m) => (
                  <div key={m.label} className="py-2.5 border-b border-white/[0.06] last:border-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-lato text-[12px] text-white/70">{m.label}</span>
                      <span className="font-lato text-[10px] font-semibold" style={{ color: m.color }}>
                        {m.status}
                      </span>
                    </div>
                    <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${m.pct}%`, backgroundColor: m.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee pill */}
            <div className="bg-white border border-v2-border-subtle rounded-2xl p-4 flex items-center gap-3 shadow-[0_4px_16px_rgba(10,35,66,0.05)]">
              <div className="w-9 h-9 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-v2-accent-teal-deep" />
              </div>
              <div>
                <p className="font-poppins font-bold text-[13px] text-v2-ink-heading">Garantía 30 días</p>
                <p className="font-lato text-[12px] text-v2-ink-muted mt-0.5">Si no ves resultados, te devolvemos el dinero.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LiveDashboardV2;
