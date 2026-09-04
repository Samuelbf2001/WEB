import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, Bot, Briefcase, Building2, CalendarDays, Check, ChevronDown, Code2,
  Database, Globe, Mail, Phone, Plug, Route, Search, Star, Users, Workflow,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import GhlCalendarEmbed from "@/components/GhlCalendarEmbed";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { gtm } from "@/lib/gtm";

/* ── Acciones de conversión de la landing (inglés, tráfico de cold email USA) ── */
const BOOKING_IFRAME_SRC = "https://web.sixteam.pro/widget/booking/9Fq9Yo6eGNv9cnc7YRc2";

/* ── Primitivas locales ──────────────────────────────────────────── */
const CheckItem: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <div className="flex items-start gap-2.5">
    <div className="w-4 h-4 rounded-full bg-v2-surface-teal-mist border border-v2-accent-teal/35 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-2.5 w-2.5 text-v2-accent-teal-deep" />
    </div>
    <span className="font-lato text-[14px] text-v2-ink-body leading-snug">{text}</span>
  </div>
);

const BookingButton: React.FC<{
  source: string;
  variant?: "primary" | "outline" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}> = ({ source, variant = "outline", size = "lg", className, children }) => (
  <ButtonV2 asChild variant={variant} size={size} className={className}>
    <a href="#book" onClick={() => gtm.ctaClick("booking_ops_us", source)}>
      {children}
    </a>
  </ButtonV2>
);

/* ── Tarjeta ancla del hero (planes desde $499, sin promo) ───────── */
const HeroAnchorCard = () => (
  <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-3 rounded-3xl opacity-70 blur-xl"
      style={{ background: "radial-gradient(circle, rgba(0,191,165,0.25) 0%, transparent 70%)" }}
    />
    <div className="relative rounded-2xl border border-[#1d70a2]/40 bg-gradient-to-br from-[#0a2342] to-[#123a63] p-5 sm:p-6 shadow-[0_20px_48px_rgba(10,35,66,0.35)] flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
      <div className="flex-1 min-w-0">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#00bfa5]/40 bg-[#00bfa5]/10 px-3 py-1 font-lato text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8ff5e6]">
          For HubSpot teams
        </div>

        <p className="mt-2.5 font-poppins font-bold text-[18px] leading-snug text-white">
          Plans start at <span className="text-[#00bfa5]">$499</span>{" "}
          <span className="font-lato text-[12px] font-normal text-white/60">USD/month</span>
        </p>

        <p className="mt-1.5 font-lato text-[12.5px] leading-[1.5] text-white/70">
          Month to month. 30-day money-back guarantee. Everything we build is documented in your
          portal.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 flex-shrink-0 w-full sm:w-auto">
        <ButtonV2 asChild size="sm" className="w-full sm:w-auto justify-center whitespace-nowrap">
          <a href="#pricing" onClick={() => gtm.ctaClick("pricing_anchor", "ops_us_hero_card")}>
            See what's included <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </ButtonV2>
      </div>
    </div>
  </div>
);

/* ── Nota del fundador + prueba social (reemplaza el video en la versión USA) ── */
const FounderProofCard = () => (
  <figure className="w-full max-w-[320px] mx-auto lg:mr-0">
    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-v2-border-medium shadow-[0_24px_64px_rgba(10,35,66,0.18)] rotate-[1.5deg] hover:rotate-0 transition-transform duration-300">
      <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#f4ecd8] to-[#e6d9b8]">
        <img
          src="/founders-slot.webp"
          alt="Sixteam founding team"
          decoding="async"
          className="absolute bottom-0 inset-x-0 h-[70%] w-full object-cover object-top"
        />
        <div className="relative mt-auto px-5 pb-5 pt-16 bg-gradient-to-t from-[#0a2342]/92 via-[#0a2342]/55 to-transparent">
          <p className="font-poppins font-semibold text-[15px] leading-snug text-white">
            “You already invested in HubSpot. The next step is making sure it works as hard as your
            team does.”
          </p>
          <p className="font-lato text-[12.5px] font-bold text-white mt-3">Ernesto Hernández</p>
          <p className="font-lato text-[11.5px] text-white/70">Co-Founder, Sixteam</p>
        </div>
      </div>
    </div>
    <figcaption className="font-lato text-[12px] text-v2-ink-muted text-center mt-4">
      The founding team you will be talking to.
    </figcaption>
  </figure>
);

/* ── Stack de herramientas (logos que ya usan) ───────────────────── */
const STACK_LOGOS = [
  { src: "/HubSpot-Logo-500x281.png", alt: "HubSpot", size: "h-9 md:h-10" },
  { src: "/make-logo.png", alt: "Make", size: "h-7 md:h-8" },
  { src: "/N8n-logo-new.svg.png", alt: "n8n", size: "h-7 md:h-8" },
  { src: "/zapier-logo-new.png", alt: "Zapier", size: "h-7 md:h-8" },
  { src: "/Mailchimp-logo.png", alt: "Mailchimp", size: "h-7 md:h-8" },
  { src: "/Whatsapp-Business-01-768x269.png", alt: "WhatsApp Business", size: "h-7 md:h-8" },
  { src: "/ads meta_PNG12.png", alt: "Meta Ads", size: "h-7 md:h-8" },
  { src: "/Google_Ads_logo.svg.png", alt: "Google Ads", size: "h-7 md:h-8" },
  { src: "/Logo_Google_Analytics.svg.png", alt: "Google Analytics", size: "h-7 md:h-8" },
] as const;

/* ── Especialistas + agentes IA (versión inglesa, roles distintos a AgentsBlock ES) ── */
const US_AGENTS = [
  { color: "#1d70a2", name: "Alfa", role: "Concierge" },
  { color: "#7b5ea7", name: "Bravo", role: "AI diagnostics" },
  { color: "#c2680a", name: "Charlie", role: "Automations" },
  { color: "#00bfa5", name: "Delta", role: "CRM & Pipeline" },
  { color: "#0d6659", name: "Echo", role: "Messaging 24/7" },
  { color: "#d4a853", name: "Foxtrot", role: "Reporting & Analytics" },
] as const;

const AgentRowEn: React.FC<{ color: string; name: string; role: string }> = ({ color, name, role }) => (
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

const AgentsBlockEn: React.FC<{ teamDesc: string; className?: string }> = ({ teamDesc, className }) => (
  <div className={`rounded-xl border border-v2-border-subtle bg-v2-surface p-3.5 ${className ?? ""}`}>
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-v2-surface-navy-mist border-v2-accent-blue/20 text-v2-accent-blue text-[12px] font-lato font-semibold">
      <Users className="h-3.5 w-3.5" />
      <span className="uppercase tracking-wide">Specialists + AI agents</span>
    </div>
    <p className="font-lato text-[12px] text-v2-ink-muted mt-2 mb-3 leading-relaxed pl-1">
      {teamDesc}
    </p>
    <div className="flex flex-col gap-2 pl-1">
      {US_AGENTS.map((a) => (
        <AgentRowEn key={a.name} {...a} />
      ))}
    </div>
  </div>
);

/* ── FAQ (objection handling, tráfico B2B en inglés) ─────────────── */
const faqs = [
  {
    q: "How is this different from hiring a HubSpot agency?",
    a: "Agencies implement and leave. We stay and operate your portal month to month. If something breaks, we fix it. You are never left alone with the tool.",
  },
  {
    q: "Who does the work, AI or people?",
    a: "Both. AI agents handle the repetitive work 24/7. Human specialists put real hours into your account every month and direct what the AI executes. Machine speed, human judgment.",
  },
  {
    q: "Do you work inside our HubSpot portal?",
    a: "Yes. We work in your instance, with your data. Everything we build and change is documented, so the knowledge of your operation belongs to you, not to us.",
  },
  {
    q: "How fast will we see results?",
    a: "Operational changes such as faster lead response and structured follow-up show up in the first 2 to 4 weeks. Impact on business metrics usually takes 60 to 90 days.",
  },
  {
    q: "What does the contract look like?",
    a: "Month to month with 30 days notice. No fine print. Scope is defined before we start, and HubSpot Ops includes a 30-day money-back guarantee.",
  },
  {
    q: "We use other tools besides HubSpot. Is that a problem?",
    a: "That is normal, and it is part of the job. We connect and run the stack around HubSpot too: listing portals, e-signature, dialers, spreadsheets, Slack. One connected system, not one more silo.",
  },
];

const FaqItem: React.FC<{ q: string; a: string; open: boolean; onToggle: () => void; panelId: string }> = ({
  q, a, open, onToggle, panelId,
}) => (
  <div className="bg-white border border-v2-border-subtle rounded-2xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      aria-expanded={open}
      aria-controls={panelId}
    >
      <span className="font-poppins font-semibold text-[16px] text-v2-ink-heading">{q}</span>
      <ChevronDown
        className={`h-4 w-4 text-v2-accent-teal-deep flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
    <div
      id={panelId}
      role="region"
      aria-label={q}
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-6 font-lato text-[15px] text-v2-ink-body leading-[1.7]">{a}</p>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   Landing en inglés — Sixteam Ops para equipos de real estate en HubSpot
   Tráfico: cold email USA. Sin WhatsApp (B2B: llamada + email).
   ═══════════════════════════════════════════════════════════════════ */
const OpsUsa = () => {
  useSEO({
    title: "Make HubSpot Work for Your Real Estate Team | Sixteam.pro",
    description:
      "Expert HubSpot operations for real estate companies: specialists plus AI agents running your automations, integrations, and reporting. From $499 USD/month.",
    noindex: true,
  });

  const ref = useScrollReveal<HTMLDivElement>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Atribución de campaña: los UTM de la URL van al dataLayer
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v;
    });
    if (Object.keys(utm).length) gtm.push("ops_us_landing_utm", utm);
  }, []);

  useEffect(() => {
    if (window.location.hash !== "#book") return;

    window.setTimeout(() => {
      document.getElementById("book")?.scrollIntoView({ block: "start" });
    }, 0);
  }, []);

  return (
    <div lang="en" translate="no" className="notranslate min-h-screen bg-v2-surface text-v2-ink-body font-lato antialiased">

      {/* ── Barra superior mínima: logo + una sola acción ── */}
      <header className="sticky top-0 z-40 bg-v2-surface-alt/90 backdrop-blur border-b border-v2-border-subtle">
        <Container size="wide" className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-7 w-7 object-contain" />
            <span className="font-poppins font-bold text-[16px] text-v2-ink-heading">
              Sixteam<span className="text-v2-accent-teal-deep">.pro</span>
            </span>
            <span className="hidden sm:inline-block ml-2 pl-3 border-l border-v2-border-subtle font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-blue">
              Sixteam Ops · HubSpot teams
            </span>
          </div>
          <BookingButton source="ops_us_header" size="sm" variant="navy">
            <CalendarDays className="h-3.5 w-3.5" />
            Book a call
          </BookingButton>
        </Container>
      </header>

      <main>
        <div ref={ref}>

          {/* ── HERO ── */}
          <Section surface="alt" className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
              <div
                className="absolute -top-40 right-[-10%] w-[760px] h-[760px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,191,165,0.10) 0%, rgba(29,112,162,0.05) 42%, transparent 68%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "220px 220px",
                }}
              />
            </div>

            <Container size="wide" className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
              <Eyebrow variant="teal">For real estate teams running on HubSpot</Eyebrow>
              <h1
                className="font-poppins font-bold text-v2-ink-heading mt-5"
                style={{ fontSize: "clamp(30px, 4.8vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.025em" }}
              >
                You already have HubSpot. Now make it work for you.
              </h1>
              <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[600px] mx-auto lg:mx-0">
                Sixteam gives your real estate company an expert technology team: HubSpot
                specialists plus AI agents who run your automations, integrations, reporting, and
                follow-up. Starting at $499 USD/month.
              </p>
              <p className="font-lato text-[14px] text-v2-ink-muted leading-[1.6] mt-3 max-w-[600px] mx-auto lg:mx-0">
                The output of a full ops team, without adding anyone to payroll.
              </p>

              <div className="mt-9 flex flex-col items-center lg:items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <BookingButton source="ops_us_hero" variant="primary" className="w-full sm:w-auto">
                    <CalendarDays className="h-4 w-4" />
                    Book a 30-minute call
                  </BookingButton>
                  <ButtonV2 asChild variant="outline" className="w-full sm:w-auto">
                    <a href="#pricing" onClick={() => gtm.ctaClick("pricing_anchor", "ops_us_hero")}>
                      See plans
                    </a>
                  </ButtonV2>
                </div>
                <HeroAnchorCard />
              </div>
              </div>

              {/* Nota del fundador + prueba social */}
              <div className="flex flex-col items-center lg:items-end gap-6">
                <FounderProofCard />
                <div className="w-full max-w-[320px] mx-auto lg:mr-0 grid grid-cols-3 gap-2 rounded-2xl border border-v2-border-subtle bg-white/70 backdrop-blur-sm px-4 py-4">
                  {[
                    { icon: <Briefcase className="h-3.5 w-3.5" />, n: "50+", label: "Projects delivered" },
                    { icon: <Building2 className="h-3.5 w-3.5" />, n: "15+", label: "Industries served" },
                    { icon: <Star className="h-3.5 w-3.5" />, n: "98%", label: "Client satisfaction" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center gap-1.5 text-center">
                      <div className="w-7 h-7 rounded-lg bg-v2-surface-teal-mist border border-v2-accent-teal/25 flex items-center justify-center text-v2-accent-teal-deep flex-shrink-0">
                        {s.icon}
                      </div>
                      <div>
                        <p className="font-poppins font-black text-[17px] text-v2-ink-heading leading-none">{s.n}</p>
                        <p className="font-lato text-[9px] text-v2-ink-muted uppercase tracking-wider mt-1">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </Container>
          </Section>

          {/* ── STACK BAND: credibilidad inmediata después del hero ── */}
          <Section surface="white" size="compact">
            <Container size="wide">
              <div className="text-center v2-reveal">
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-blue">
                  The stack you already pay for
                </p>
                <h2 className="font-poppins font-bold text-[20px] md:text-[24px] text-v2-ink-heading mt-2">
                  We work inside your tools, not around them.
                </h2>
              </div>
              <div className="v2-reveal v2-d1 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mt-8">
                {STACK_LOGOS.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.size} w-auto object-contain opacity-55 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                  />
                ))}
              </div>
              <p className="v2-reveal v2-d2 text-center font-lato text-[12.5px] text-v2-ink-muted mt-7">
                Plus your listing portals, e-signature, and dialers. If it has an API, we connect it.
              </p>
            </Container>
          </Section>

          {/* ── PAIN MIRROR: ¿te suena? ── */}
          <Section surface="default" size="default">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
                <div className="v2-reveal lg:sticky lg:top-28">
                  <Eyebrow variant="teal">Sound familiar?</Eyebrow>
                  <h2
                    className="font-poppins font-bold text-v2-ink-heading mt-3"
                    style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                  >
                    You are paying for a powerful CRM. You are getting a contact list.
                  </h2>
                  <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-4">
                    HubSpot can run your entire sales operation. But that only happens when someone
                    owns the system: builds the automations, keeps the data clean, connects the
                    tools, and improves it every week. In most real estate teams, that someone is
                    nobody.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      t: "Leads sit untouched in HubSpot.",
                      d: "Inquiries from your website and listing portals land in the CRM, but follow-up still depends on whoever remembers. Leads contacted within 5 minutes are up to 21x more likely to qualify.",
                    },
                    {
                      t: "Automations were set up once, then abandoned.",
                      d: "A few workflows from the original onboarding still run. Nobody has reviewed, fixed, or extended them since. Around 80% of sales take 5 or more follow-ups. Most teams stop at one.",
                    },
                    {
                      t: "Reporting does not answer real questions.",
                      d: "You cannot tell which lead sources produce closings, which agents actually follow up, or where deals stall. So decisions get made on gut feeling.",
                    },
                    {
                      t: "You pay for features nobody uses.",
                      d: "Between 50 and 70% of CRM implementations never deliver the expected results. Not because of the software. Because nobody operates it.",
                    },
                  ].map((p, i) => (
                    <div
                      key={p.t}
                      className={`v2-reveal ${["", "v2-d1", "v2-d2", "v2-d3"][i]} bg-white border border-v2-border-subtle rounded-2xl p-6 flex gap-5`}
                    >
                      <span className="font-poppins font-bold text-[28px] leading-none text-v2-accent-teal-deep flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-poppins font-semibold text-[17px] text-v2-ink-heading leading-snug">
                          {p.t}
                        </h3>
                        <p className="font-lato text-[14px] text-v2-ink-muted leading-[1.65] mt-2">{p.d}</p>
                      </div>
                    </div>
                  ))}
                  <p className="v2-reveal v2-d4 font-lato text-[11px] text-v2-ink-muted mt-1 pl-1">
                    Sources: Lead Response Management Study, Marketing Donut, Gartner and Forrester
                    industry research.
                  </p>
                </div>
              </div>
            </Container>
          </Section>

          {/* ── IMPACT BAND: ancla oscura de trayectoria ── */}
          <Section surface="navy-dark" size="compact" className="overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 60% 40%, rgba(0,191,165,0.16) 0%, rgba(29,112,162,0.10) 45%, transparent 70%)",
              }}
            />
            <Container size="wide">
              <div className="relative">
                <p className="v2-reveal text-center font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-teal">
                  Track record
                </p>
                <div className="v2-reveal v2-d1 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 mt-8">
                  {[
                    { n: "50+", label: "Projects delivered" },
                    { n: "15+", label: "Industries served" },
                    { n: "98%", label: "Client satisfaction" },
                  ].map((s, i) => (
                    <div
                      key={s.label}
                      className={`text-center ${i > 0 ? "sm:border-l sm:border-white/10" : ""}`}
                    >
                      <p className="font-poppins font-black text-[44px] md:text-[54px] text-white leading-none">
                        {s.n}
                      </p>
                      <p className="font-lato text-[13px] text-white/60 uppercase tracking-wider mt-2">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="v2-reveal v2-d2 text-center font-lato text-[14px] text-white/70 mt-10 max-w-[620px] mx-auto">
                  Different industries, same problem: good tools nobody operates.
                </p>
              </div>
            </Container>
          </Section>

          {/* ── SOLUTION ── */}
          <Section surface="teal-mist" size="default">
            <Container>
              <div className="text-center max-w-[680px] mx-auto v2-reveal">
                <Eyebrow variant="teal">The solution</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                >
                  An expert technology team inside your HubSpot.
                </h2>
                <p className="font-lato text-[17px] text-v2-ink-body leading-[1.65] mt-5">
                  Specialists and AI agents operate your portal month to month, so the platform
                  finally supports sales, operations, and growth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    t: "HubSpot specialists on your account",
                    d: "Real hours every month from people who run HubSpot portals every day: workflows, pipelines, reporting, integrations.",
                  },
                  {
                    icon: <Bot className="h-5 w-5" />,
                    t: "AI agents working 24/7",
                    d: "Speed-to-lead responses, follow-up sequences, and data upkeep run around the clock, without fatigue.",
                  },
                  {
                    icon: <BarChart3 className="h-5 w-5" />,
                    t: "Reporting your leadership actually uses",
                    d: "Which sources produce closings, which agents follow up, where deals stall. Clear dashboards, not vanity numbers.",
                  },
                  {
                    icon: <Plug className="h-5 w-5" />,
                    t: "Your whole stack, connected",
                    d: "Listing portals, e-signature, dialers, spreadsheets, marketing tools. Connected to HubSpot so data flows without manual work.",
                  },
                ].map((f, i) => (
                  <div
                    key={f.t}
                    className={`v2-reveal ${["", "v2-d1", "v2-d2", "v2-d3"][i]} bg-white border border-v2-border-subtle rounded-2xl p-6`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist border border-v2-accent-teal/25 flex items-center justify-center text-v2-accent-teal-deep">
                      {f.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-[16px] text-v2-ink-heading mt-4">{f.t}</h3>
                    <p className="font-lato text-[13px] text-v2-ink-muted leading-[1.65] mt-2">{f.d}</p>
                  </div>
                ))}
              </div>

              {/* Lo que puedes pedirle a tu equipo */}
              <div className="mt-16 max-w-[880px] mx-auto text-center v2-reveal">
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-blue">
                  What you can ask your team for
                </p>
                <h3 className="font-poppins font-bold text-[22px] md:text-[26px] text-v2-ink-heading mt-2">
                  One team, every front of your HubSpot operation.
                </h3>
                <div className="flex flex-wrap justify-center gap-2.5 mt-7">
                  {[
                    { icon: <Workflow className="h-3.5 w-3.5" />, t: "Workflows and sequences" },
                    { icon: <Route className="h-3.5 w-3.5" />, t: "Lead routing and assignment" },
                    { icon: <Database className="h-3.5 w-3.5" />, t: "Pipelines and deal stages" },
                    { icon: <BarChart3 className="h-3.5 w-3.5" />, t: "Dashboards and reporting" },
                    { icon: <Database className="h-3.5 w-3.5" />, t: "Data cleanup and deduplication" },
                    { icon: <Plug className="h-3.5 w-3.5" />, t: "Integrations with your other tools" },
                    { icon: <Mail className="h-3.5 w-3.5" />, t: "Email and SMS follow-up" },
                    { icon: <Globe className="h-3.5 w-3.5" />, t: "Landing pages and forms" },
                    { icon: <Phone className="h-3.5 w-3.5" />, t: "AI chat and voice agents" },
                    { icon: <Code2 className="h-3.5 w-3.5" />, t: "Custom development" },
                  ].map((p) => (
                    <span
                      key={p.t}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-v2-border-subtle font-lato text-[13.5px] text-v2-ink-body"
                    >
                      <span className="text-v2-accent-teal-deep">{p.icon}</span>
                      {p.t}
                    </span>
                  ))}
                </div>
                <p className="font-lato text-[14px] text-v2-ink-muted mt-6">
                  You send the request through your channel. We prioritize it and execute it within
                  your monthly credits.
                </p>
              </div>
            </Container>
          </Section>

          {/* ── HOW IT WORKS ── */}
          <Section surface="default" size="default">
            <Container size="narrow">
              <div className="text-center v2-reveal">
                <Eyebrow variant="teal">How it works</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15" }}
                >
                  How the service runs, month after month.
                </h2>
              </div>

              <div className="flex flex-col gap-0 mt-12">
                {[
                  {
                    t: "We audit your portal and your process",
                    d: "In the first two weeks we map your HubSpot setup, lead sources, automations, data, and recurring problems. You see clearly what is broken, what is missing, and what to fix first.",
                  },
                  {
                    t: "We fix, automate, and connect",
                    d: "We rebuild workflows, set up lead routing and follow-up sequences, connect your other tools, clean your data, and configure AI agents. Every piece is documented.",
                  },
                  {
                    t: "We operate, measure, and improve",
                    d: "Your team sends requests, we prioritize and execute them, monitor for errors, and keep improving the system. It is not a one-time project. It is an operations team.",
                  },
                ].map((s, i) => (
                  <div
                    key={s.t}
                    className={`v2-reveal ${["", "v2-d1", "v2-d2"][i]} flex gap-6 py-7 ${i < 2 ? "border-b border-v2-border-subtle" : ""}`}
                  >
                    <span className="font-poppins font-black text-[34px] leading-none text-v2-accent-teal-deep w-14 flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading">{s.t}</h3>
                      <p className="font-lato text-[15px] text-v2-ink-body leading-[1.7] mt-1.5">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banda de contacto directo */}
              <div className="v2-reveal v2-d3 mt-12 rounded-2xl border border-v2-border-subtle bg-white p-7 md:p-8 text-center">
                <p className="font-poppins font-bold text-[19px] text-v2-ink-heading">
                  Prefer to talk first?
                </p>
                <p className="font-lato text-[14px] text-v2-ink-muted mt-1.5">
                  Book a short call and tell us how your operation runs today. We will tell you
                  honestly what we would fix first.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                  <BookingButton source="ops_us_mid" variant="primary" size="md" className="w-full sm:w-auto">
                    <CalendarDays className="h-4 w-4" />
                    Book a call
                  </BookingButton>
                  <ButtonV2
                    asChild
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <a
                      href="mailto:Ernesto@sixteam.pro"
                      onClick={() => gtm.ctaClick("email_ops_us", "ops_us_mid")}
                    >
                      <Mail className="h-4 w-4" />
                      Email us
                    </a>
                  </ButtonV2>
                </div>
              </div>
            </Container>
          </Section>

          {/* ── PROOF: la evidencia que hoy falta ── */}
          <Section surface="sand-mist" size="compact">
            <Container size="narrow">
              <div className="text-center v2-reveal">
                <Eyebrow variant="teal">Proof</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(26px, 3.4vw, 36px)", lineHeight: "1.15" }}
                >
                  The pattern repeats in every industry we operate.
                </h2>
              </div>

              <div className="v2-reveal v2-d1 mt-10 bg-white border border-v2-border-subtle rounded-2xl p-8 md:p-10">
                <span aria-hidden className="font-poppins font-black text-[56px] leading-none text-v2-accent-teal/25">
                  “
                </span>
                <p className="font-poppins font-semibold text-[19px] md:text-[22px] leading-[1.45] text-v2-ink-heading mt-2">
                  I thought I needed to hire a VP of Sales. It turned out I needed to actually operate
                  the CRM I already had. The ROI was immediate.
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-v2-border-subtle">
                  <div className="w-10 h-10 rounded-full bg-v2-surface-navy-mist border border-v2-accent-blue/25 flex items-center justify-center font-poppins font-bold text-[13px] text-v2-accent-blue">
                    MA
                  </div>
                  <div>
                    <p className="font-lato text-[14px] font-bold text-v2-ink-heading">María Acevedo</p>
                    <p className="font-lato text-[12.5px] text-v2-ink-muted">CEO · Student Travel Center</p>
                  </div>
                </div>
                <p className="font-lato text-[12px] text-v2-ink-muted mt-4">
                  Translated from Spanish. Student Travel Center operates in education travel, not real
                  estate. The operating problem was identical.
                </p>
              </div>
            </Container>
          </Section>

          {/* ── PRICING ── */}
          <Section id="pricing" surface="alt" size="default" className="scroll-mt-24">
            <Container>
              <div className="text-center max-w-[640px] mx-auto v2-reveal mb-12">
                <Eyebrow variant="teal">Pricing</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
                >
                  One line in your budget. A whole team on your HubSpot.
                </h2>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
                  Doing this in-house means three or four hires, plus recruiting, turnover, and
                  management. With Sixteam the price is clear before we start.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-[1080px] mx-auto items-start">
                {/* HubSpot Ops — destacado */}
                <div className="v2-reveal relative bg-white border-2 border-v2-accent-teal rounded-2xl overflow-hidden shadow-[0_0_0_4px_rgba(0,191,165,0.10),0_24px_64px_rgba(0,191,165,0.14)]">
                  <div className="absolute -top-0 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-b-xl bg-v2-accent-teal text-white font-lato font-bold text-[10px] uppercase tracking-widest shadow-[0_4px_12px_rgba(0,191,165,0.30)]">
                      Most popular
                    </span>
                  </div>
                  <div className="px-6 pt-10 pb-5 border-b border-v2-border-subtle">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">HubSpot Ops</h3>
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="font-poppins font-black text-[38px] text-v2-ink-heading leading-none">$499</span>
                      <span className="font-lato text-[14px] text-v2-ink-muted">USD /month</span>
                    </div>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-relaxed mt-3">
                      For real estate teams that want their HubSpot working at full capacity, run
                      by experts month to month.
                    </p>
                  </div>
                  <div className="px-6 py-5 flex flex-col gap-3.5">
                    <AgentsBlockEn teamDesc="Multi-channel AI agents (CRM, email, chat) plus a team of HubSpot specialists for integrations, advanced automations, and new builds." />
                    <div className="flex flex-col gap-2.5">
                      {[
                        "160 credits per month for requests to your team",
                        "VIP onboarding: 1:1 strategy call plus fast-track of your first automations",
                        "Works inside your HubSpot portal: your data stays yours",
                        "All-in-one marketing platform included if you need it (a $97/month value)",
                      ].map((t) => (
                        <CheckItem key={t} text={<strong className="text-v2-ink-heading font-semibold">{t}</strong>} />
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <BookingButton source="ops_us_plan_ops" variant="primary" size="md" className="w-full justify-center">
                      Start with HubSpot Ops <ArrowRight className="h-4 w-4" />
                    </BookingButton>
                    <p className="font-lato text-[11px] text-v2-ink-muted text-center mt-2.5">
                      30-day money-back guarantee · month to month, 30-day notice
                    </p>
                  </div>
                </div>

                {/* Scale */}
                <div className="v2-reveal v2-d1 bg-white border border-v2-border-medium rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                  <div className="px-6 pt-6 pb-5 border-b border-v2-border-subtle">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Scale</h3>
                    <div className="flex items-baseline gap-1.5 mt-2 flex-wrap">
                      <span className="font-poppins font-black text-[30px] text-v2-ink-heading leading-none">From $1,500</span>
                      <span className="font-lato text-[14px] text-v2-ink-muted">USD /month</span>
                    </div>
                    <p className="font-lato text-[11px] text-v2-ink-muted mt-1">Quoted to your requirements</p>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-relaxed mt-3">
                      For companies that want Sixteam as their permanent technology team, across
                      HubSpot and everything around it.
                    </p>
                  </div>
                  <div className="px-6 py-5 flex flex-col gap-3.5">
                    <AgentsBlockEn teamDesc="High-volume AI agents across all your systems, plus a dedicated PM, a full specialist team, and weekly strategy calls." />
                    <div className="flex flex-col gap-2.5">
                      {[
                        "From 400 credits per month, rollover on request",
                        "Dedicated project manager and weekly strategy calls",
                        "Custom development and advanced integrations",
                      ].map((t) => <CheckItem key={t} text={t} />)}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <BookingButton source="ops_us_plan_scale" variant="navy" size="md" className="w-full justify-center">
                      Talk about Scale <ArrowRight className="h-4 w-4" />
                    </BookingButton>
                  </div>
                </div>

                {/* HubSpot Audit — pago único */}
                <div className="v2-reveal v2-d2 bg-white border border-v2-border-subtle rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,35,66,0.06)] flex flex-col">
                  <div className="px-6 pt-6 pb-5 border-b border-v2-border-subtle">
                    <div className="w-9 h-9 rounded-lg bg-v2-surface-navy-mist border border-v2-accent-blue/25 flex items-center justify-center text-v2-accent-blue">
                      <Search className="h-4 w-4" />
                    </div>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading mt-4">HubSpot Audit</h3>
                    <p className="font-lato text-[13px] font-semibold text-v2-accent-blue mt-1">
                      $2,500 USD · one-time · 10 to 14 days
                    </p>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-relaxed mt-3">
                      A complete audit of your portal, automations, data, and process. You get a
                      prioritized roadmap you can execute with us or with your own team.
                    </p>
                  </div>
                  <div className="px-6 py-5 flex-1" />
                  <div className="px-6 pb-6">
                    <BookingButton source="ops_us_audit" variant="outline" size="md" className="w-full justify-center">
                      Ask about the Audit <ArrowRight className="h-4 w-4" />
                    </BookingButton>
                  </div>
                </div>
              </div>

              <p className="v2-reveal v2-d3 text-center font-lato text-[12px] text-v2-ink-muted mt-6">
                Each request uses credits based on its complexity. You always know what you are
                spending.
              </p>

              {/* Tabla comparativa: contratar en casa vs Sixteam */}
              <div className="v2-reveal v2-d3 mt-14 max-w-[720px] mx-auto">
                <h3 className="font-poppins font-bold text-[20px] text-v2-ink-heading text-center mb-6">
                  What it takes to do this in-house
                </h3>
                <div className="bg-white border border-v2-border-subtle rounded-2xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-v2-border-subtle">
                        <th className="font-poppins font-bold text-[13px] text-v2-ink-heading px-5 py-4"></th>
                        <th className="font-poppins font-bold text-[13px] text-v2-ink-heading px-5 py-4">Hiring in-house</th>
                        <th className="font-poppins font-bold text-[13px] text-v2-ink-heading px-5 py-4">Sixteam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: "People", inhouse: "3 to 4 hires: RevOps, admin, analyst", sixteam: "Your external team" },
                        { label: "Cost", inhouse: "Multiple salaries per month", sixteam: "From $499 per month" },
                        { label: "Turnover", inhouse: "Your problem", sixteam: "Our problem" },
                        { label: "Time to running", inhouse: "Months of recruiting and training", sixteam: "First fixes in 2 weeks" },
                      ].map((row, i, arr) => (
                        <tr key={row.label} className={i < arr.length - 1 ? "border-b border-v2-border-subtle" : ""}>
                          <td className="font-lato text-[13px] font-semibold text-v2-ink-heading px-5 py-4">{row.label}</td>
                          <td className="font-lato text-[13px] text-v2-ink-muted px-5 py-4">{row.inhouse}</td>
                          <td className="font-lato text-[13px] text-v2-ink-body px-5 py-4">{row.sixteam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="v2-reveal v2-d2 text-center font-lato text-[13px] text-v2-ink-muted mt-8">
                Not sure which one fits? Book the call and we will tell you honestly, even if the
                answer is the free option: doing nothing yet.
              </p>
            </Container>
          </Section>

          {/* ── FAQ ── */}
          <Section surface="default" size="compact">
            <Container size="narrow">
              <div className="text-center v2-reveal">
                <Eyebrow variant="teal">Frequently asked questions</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
                >
                  What teams ask us before starting.
                </h2>
              </div>
              <div className="flex flex-col gap-3 mt-10 v2-reveal v2-d1">
                {faqs.map((f, i) => (
                  <FaqItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    open={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                    panelId={`ops-us-faq-panel-${i}`}
                  />
                ))}
              </div>
            </Container>
          </Section>

          {/* ── FINAL CTA ── */}
          <Section surface="navy-dark" size="spacious" className="overflow-hidden pb-0 md:pb-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 60% 40%, rgba(0,191,165,0.16) 0%, rgba(29,112,162,0.10) 45%, transparent 70%)",
              }}
            />
            <Container size="narrow" className="relative text-center">
              <div className="v2-reveal">
                <Eyebrow variant="teal" className="text-v2-accent-teal">Sixteam Ops</Eyebrow>
              </div>
              <h2
                className="v2-reveal v2-d1 font-poppins font-bold text-white mt-5"
                style={{ fontSize: "clamp(34px, 6vw, 58px)", lineHeight: "1.08", letterSpacing: "-0.02em" }}
              >
                You already pay for the technology. Make it work harder for your business.
              </h2>
              <p className="v2-reveal v2-d2 font-lato text-[18px] md:text-[20px] text-white/75 leading-[1.65] max-w-[600px] mx-auto mt-7">
                Book a 30-minute call. Tell us how your operation runs today, and we will tell you
                what we would fix first and which plan makes sense. No aggressive pitch.
              </p>
              <div className="v2-reveal v2-d3 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <BookingButton
                  source="ops_us_final"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book a call
                </BookingButton>
                <ButtonV2
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto !text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
                >
                  <a
                    href="mailto:Ernesto@sixteam.pro"
                    onClick={() => gtm.ctaClick("email_ops_us", "ops_us_final")}
                  >
                    <Mail className="h-4 w-4" />
                    Email Ernesto
                  </a>
                </ButtonV2>
              </div>
              <p className="v2-reveal v2-d4 font-lato text-[13px] text-white/40 mt-6">
                Follow-up happens by email after the call. No sequences you did not ask for.
              </p>
            </Container>
          </Section>

          {/* ── BOOKING ── */}
          <Section id="book" surface="default" size="compact" className="scroll-mt-24">
            <Container size="wide">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-10 lg:gap-14 items-start">
                <div className="v2-reveal lg:sticky lg:top-28">
                  <Eyebrow variant="teal">Book a call</Eyebrow>
                  <h2
                    className="font-poppins font-bold text-v2-ink-heading mt-3"
                    style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                  >
                    Pick a time that works for you.
                  </h2>
                  <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-4">
                    A 30-minute working session with the founding team. We look at how your
                    HubSpot is set up today, where follow-up is breaking, and what we would fix
                    first. You leave with clarity, whether we end up working together or not.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 text-[14px] text-v2-ink-muted">
                    {[
                      "30 minutes, straight to the point",
                      "We can review your portal live if you want",
                      "Follow-up by email after the call",
                    ].map((item) => (
                      <CheckItem key={item} text={item} />
                    ))}
                  </div>
                  <p className="font-lato text-[13px] text-v2-ink-muted mt-6">
                    Prefer email? Write to{" "}
                    <a
                      href="mailto:Ernesto@sixteam.pro"
                      className="underline underline-offset-2 hover:text-v2-ink-heading transition-colors"
                    >
                      Ernesto@sixteam.pro
                    </a>
                  </p>
                </div>

                <GhlCalendarEmbed
                  src={BOOKING_IFRAME_SRC}
                  title="Sixteam Ops booking calendar"
                  className="v2-reveal v2-d1 bg-white"
                />
              </div>
            </Container>
          </Section>

        </div>
      </main>

      {/* ── Footer mínimo (legales requeridos + disclaimer de marca) ── */}
      <footer className="bg-v2-surface-alt border-t border-v2-border-subtle">
        <Container size="wide" className="py-8 pb-24 md:pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-6 w-6 object-contain" />
            <span className="font-lato text-[13px] text-v2-ink-muted">
              © {new Date().getFullYear()} Sixteam.pro. We operate your company's technology.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/politicas" className="font-lato text-[13px] text-v2-ink-muted hover:text-v2-ink-heading transition-colors underline underline-offset-2">
              Privacy policy
            </Link>
            <Link to="/terminos" className="font-lato text-[13px] text-v2-ink-muted hover:text-v2-ink-heading transition-colors underline underline-offset-2">
              Terms and conditions
            </Link>
          </div>
        </Container>
        <Container size="wide" className="pb-6">
          <p className="text-center font-lato text-[11px] text-v2-ink-muted">
            HubSpot is a registered trademark of HubSpot, Inc. Sixteam.pro is an independent
            services company and is not affiliated with or endorsed by HubSpot, Inc.
          </p>
        </Container>
      </footer>

      {/* ── Barra CTA fija — solo móvil ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-v2-border-subtle px-4 py-3">
        <BookingButton source="ops_us_sticky" size="md" variant="navy" className="w-full justify-center">
          <CalendarDays className="h-4 w-4" />
          Book a call
        </BookingButton>
      </div>

    </div>
  );
};

export default OpsUsa;
