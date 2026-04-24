import { type CSSProperties } from 'react';
import { useSEO } from '@/hooks/useSEO';
import {
  ArrowRight,
  Bot,
  Building2,
  ChevronRight,
  Globe,
  LayoutTemplate,
  Link2,
  Mail,
  Megaphone,
  MessageSquare,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

const SERVICES = [
  ['Implementaciones para ventas', 'Diseñamos e implementamos soluciones para organizar procesos, datos, seguimiento y automatizaciones en las areas clave del negocio comercial.', Target],
  ['Implementaciones para servicio', 'Estructuramos la operación de atención con tickets, SLA, automatizaciones y visibilidad de tiempos de respuesta para equipos de soporte.', ShieldCheck],
  ['Implementaciones para marketing', 'Conectamos formularios, páginas, captación y reportería para activar campañas y dar continuidad al proceso de generación de demanda.', Rocket],
  ['Automatización e IA', 'Implementamos workflows, bots y asistentes conversacionales para responder más rápido, filtrar leads y reducir tareas operativas repetitivas.', Bot],
  ['Integraciones', 'Unimos CRM, canales, formularios y herramientas externas para que la información fluya sin reprocesos entre ventas, marketing y operación.', Link2],
  ['Manejo de pauta publicitaria Meta y Google', 'Activamos, optimizamos y conectamos campañas publicitarias con la operación comercial para mejorar respuesta, seguimiento y aprendizaje del canal.', Megaphone],
  ['Websites y landing pages', 'Creamos activos digitales enfocados en conversión, posicionamiento y captura de oportunidades, conectados con el ecosistema comercial.', LayoutTemplate],
  ['Desarrollo a la medida', 'Construimos soluciones personalizadas cuando el negocio requiere una arquitectura más robusta que combine software, integraciones y automatización.', Wrench],
] as const;

const PRODUCTS = [
  {
    name: 'Sixteam Inbox + IA',
    accent: '#1d70a2',
    ideal: 'Ideal para equipos que necesitan centralizar conversaciones y automatizar la primera atención sin iniciar todavía con un CRM completo.',
    includes: ['Bandeja omnicanal para conversaciones', 'IA conversacional para preatención y filtro', 'Handoff entre bot y asesor humano', 'Seguimiento conversacional guiado'],
    moment: 'Cuando conviene: primer paso para ordenar la atención y responder más rápido a leads o clientes.',
  },
  {
    name: 'CRM Sixteam.pro Core',
    accent: '#00bfa5',
    ideal: 'Ideal para empresas que ya necesitan implementaciones para ventas, servicio y marketing con estructura operativa, seguimiento del proceso y automatización base.',
    includes: ['Contactos, registros y datos personalizados', 'Pipeline y etapas operativas', 'Automatizaciones de seguimiento y asignación', 'Listas, filtros y visibilidad del trabajo diario'],
    moment: 'Cuando conviene: al pasar de una operación manual a una gestión con control, trazabilidad y roles definidos.',
  },
  {
    name: 'CRM Sixteam.pro Growth',
    accent: '#7de8d8',
    ideal: 'Ideal para organizaciones que quieren una operación integral de captación, seguimiento, automatización y marketing en una misma plataforma.',
    includes: ['Todo lo del CRM Core', 'Formularios, páginas y embudos', 'Email marketing y reputación', 'Automatización entre marketing y comercial'],
    moment: 'Cuando conviene: al escalar crecimiento, nutrir demanda y conectar captación con ventas dentro de un solo flujo.',
  },
] as const;

const METHOD = [
  ['01', 'Diagnóstico y contexto', 'Aterrizamos objetivos, puntos de dolor, procesos actuales y prioridades del negocio antes de configurar tecnología.'],
  ['02', 'Diseño funcional', 'Definimos datos, embudos, formularios, vistas, automatizaciones y estructura operativa con lógica real para el equipo.'],
  ['03', 'Automatización y reportería', 'Implementamos workflows, seguimiento, IA y paneles que ayuden a operar con más velocidad y mejor visibilidad.'],
  ['04', 'Capacitación y adopción', 'Entrenamos al equipo clave, dejamos guías de uso y acompañamos el aterrizaje de la solución en el día a día.'],
  ['05', 'Soporte y mejora continua', 'Ajustamos, afinamos y expandimos la operación conforme crecen el negocio, los canales y la complejidad del proceso.'],
] as const;

const DIFFERENTIALS = [
  ['Consultoría + ejecución', 'No solo configuramos herramientas: convertimos objetivos comerciales en procesos implementados y utilizables por el equipo.', Settings2],
  ['IA conversacional con propósito', 'Diseñamos bots y asistentes para informar, perfilar, transferir y acompañar conversaciones sin perder calidad de atención.', MessageSquare],
  ['Integración del ecosistema', 'Conectamos marketing, ventas, servicio y activos digitales para reducir fricción y mejorar la trazabilidad del dato.', Workflow],
  ['Acompañamiento operativo', 'Capacitamos, damos soporte y proponemos mejoras para que la adopción no se quede en la implementación inicial.', Users],
] as const;

const HERO_CHIPS = [
  'Implementaciones para ventas, servicio, marketing y operacion',
  'Automatización e IA aplicada al negocio',
  'Implementación, entrenamiento y soporte',
];

export default function BrochurePage() {
  useSEO({
    title: "Portafolio de Servicios — Sixteam.pro | CRM, IA y Automatización",
    description: "Conoce el portafolio completo de Sixteam.pro: implementaciones CRM, automatizaciones, chatbots IA, integraciones y RevOps para empresas en Colombia y Latam.",
    canonical: "https://sixteam.pro/brochure",
    ogUrl: "https://sixteam.pro/brochure",
    noindex: true,
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#030d1a', color: '#fff', fontFamily: 'Lato, sans-serif' }}>
      <div style={ambientGlowStyle} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero-grid" style={heroGridStyle}>
          <div>
            <div style={eyebrowPillStyle}>Implementaciones de tecnología y transformación digital</div>
            <h1 style={heroTitleStyle}>
              Convertimos procesos en
              <span style={gradientLineStyle}>operaciones digitales escalables</span>
            </h1>
            <p style={heroCopyStyle}>
              En Sixteam.pro diseñamos e implementamos CRM, automatizaciones, IA conversacional, integraciones y activos digitales para que ventas, servicio, marketing y operacion trabajen con mas velocidad, control y visibilidad.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 28 }}>
              <a href="mailto:alpha@sixteam.pro" style={primaryCtaStyle}>Solicitar una conversación <ArrowRight size={16} /></a>
              <button onClick={() => scrollToSection('servicios')} style={secondaryCtaStyle}>Explorar soluciones <ChevronRight size={16} /></button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {HERO_CHIPS.map((item) => <span key={item} style={chipStyle}>{item}</span>)}
            </div>
          </div>

          <div style={heroPanelOuterStyle}>
            <div style={heroPanelInnerStyle}>
              {[
                ['Que hacemos', 'Disenamos soluciones para ventas, servicio, marketing y operacion.'],
                ['Como lo hacemos', 'Consultoria, configuracion, automatizacion, reporteria, entrenamiento, soporte y acompanamiento para operar.'],
                ['Que logramos', 'Escalar con mas orden, mas control y mejor trazabilidad de clientes.'],
              ].map(([title, copy]) => (
                <div key={title} style={miniCardStyle}>
                  <div style={miniCardEyebrowStyle}>{title}</div>
                  <div style={miniCardCopyStyle}>{copy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...sectionWrapStyle, paddingTop: '1rem' }}>
          <div className="summary-grid" style={summaryGridStyle}>
            <div>
              <div style={eyebrowStyle}>Qué hace Sixteam</div>
              <h2 style={sectionTitleStyle}>Tecnología aplicada a procesos reales del negocio</h2>
            </div>
            <p style={summaryTextStyle}>Acompañamos empresas que necesitan ordenar su operacion, automatizar tareas y mejorar la experiencia de atencion con una implementacion aterrizada a su contexto.</p>
            <p style={summaryTextStyle}>Nuestra propuesta combina visión consultiva, configuración tecnológica y soporte para que la transformación digital no se quede en el discurso, sino que se traduzca en un sistema operable.</p>
          </div>
        </section>

        <section id="servicios" style={sectionWrapStyle}>
          <SectionHeader eyebrow="Líneas de servicio" title="Portafolio para ventas, servicio, marketing y operación digital" copy="Estas son las líneas principales con las que ayudamos a estructurar, automatizar y escalar la operación de nuestros clientes." />
          <div style={gridCardsStyle}>
            {SERVICES.map(([title, copy, Icon]) => (
              <article key={title} style={cardStyle}>
                <div style={iconWrapStyle}><Icon size={18} color="#00bfa5" /></div>
                <h3 style={cardTitleStyle}>{title}</h3>
                <p style={cardCopyStyle}>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="productos" style={sectionWrapStyle}>
          <SectionHeader eyebrow="Escalera comercial" title="Tres productos para avanzar desde atencion inicial hasta crecimiento integral" copy="La oferta esta pensada para que el cliente pueda empezar por una necesidad puntual y crecer hacia implementaciones para ventas, servicio y marketing sin cambiar de logica ni de acompanamiento." />
          <div style={gridCardsStyle}>
            {PRODUCTS.map((item, index) => (
              <article key={item.name} style={{ ...cardStyle, background: index === 1 ? 'linear-gradient(180deg, rgba(0,191,165,.1), rgba(255,255,255,.03))' : 'linear-gradient(180deg, rgba(29,112,162,.08), rgba(255,255,255,.03))', borderColor: index === 1 ? 'rgba(0,191,165,.3)' : 'rgba(29,112,162,.2)' }}>
                <div style={{ ...productTagStyle, color: item.accent }}>Producto {index + 1}</div>
                <h3 style={cardTitleStyle}>{item.name}</h3>
                <p style={cardCopyStyle}>{item.ideal}</p>
                <div style={{ display: 'grid', gap: 10, margin: '1rem 0 1.1rem' }}>
                  {item.includes.map((feature) => (
                    <div key={feature} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: item.accent, marginTop: 8, flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255,255,255,.73)', lineHeight: 1.65 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <p style={{ ...cardCopyStyle, color: 'rgba(255,255,255,.56)' }}>{item.moment}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="metodologia" style={sectionWrapStyle}>
          <SectionHeader eyebrow="Metodología" title="Acompañamiento de punta a punta, desde el diagnóstico hasta la mejora continua" copy="Trabajamos con una metodología simple de entender y sólida de ejecutar, para que cada proyecto tenga dirección, adopción y sostenibilidad." />
          <div style={gridCardsStyle}>
            {METHOD.map(([step, title, copy]) => (
              <article key={step} style={cardStyle}>
                <div style={stepStyle}>{step}</div>
                <h3 style={cardTitleStyle}>{title}</h3>
                <p style={cardCopyStyle}>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="diferenciales" style={sectionWrapStyle}>
          <SectionHeader eyebrow="Capacidades y diferenciales" title="Una propuesta diseñada para crecer con el nivel de madurez de cada cliente" copy="Nuestro valor está en unir criterio comercial, conocimiento funcional y capacidad técnica dentro de una misma implementación." />
          <div style={gridCardsStyle}>
            {DIFFERENTIALS.map(([title, copy, Icon]) => (
              <article key={title} style={{ ...cardStyle, background: 'rgba(255,255,255,.03)' }}>
                <div style={iconWrapStyle}><Icon size={18} color="#00bfa5" /></div>
                <h3 style={cardTitleStyle}>{title}</h3>
                <p style={cardCopyStyle}>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={sectionWrapStyle}>
          <div
            style={{
              borderRadius: 28,
              padding: '1.8rem',
              background: 'linear-gradient(135deg, rgba(10,35,66,.96), rgba(29,112,162,.18))',
              border: '1px solid rgba(0,191,165,.18)',
              boxShadow: '0 14px 50px rgba(0,0,0,.16)',
            }}
          >
            <div style={eyebrowStyle}>Filosofia de trabajo</div>
            <h2 style={{ ...sectionTitleStyle, maxWidth: 760 }}>Queremos ser un partner de RevOps que ayude a tu empresa a lograr sus metas</h2>
            <p style={{ ...sectionCopyStyle, maxWidth: 900 }}>
              Nuestra filosofia es acompanar a cada cliente como un partner de largo plazo, entregando soluciones que conecten personas, procesos, tecnologia y operacion para lograr metas de crecimiento con mas claridad, mejor ejecucion y mas control.
            </p>
          </div>
        </section>

        <section id="contacto" style={{ ...sectionWrapStyle, paddingBottom: '5rem' }}>
          <div className="cta-grid" style={ctaGridStyle}>
            <div>
              <div style={eyebrowStyle}>Hablemos</div>
              <h2 style={sectionTitleStyle}>Si quieres ordenar tu operación digital, podemos construir el siguiente paso contigo</h2>
              <p style={sectionCopyStyle}>Ya sea que necesites empezar con atención conversacional, estructurar tu CRM o escalar hacia una operación integral, podemos ayudarte a definir el camino y ejecutarlo.</p>
            </div>
            <div style={contactCardStyle}>
              <a href="mailto:alpha@sixteam.pro" style={contactLinkStyle}><Mail size={16} />alpha@sixteam.pro</a>
              <a href="https://sixteam.pro" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}><Globe size={16} />sixteam.pro</a>
              <div style={contactMutedStyle}><Building2 size={16} />Sixteam Innovación y Estrategia Digital S.A.S.</div>
              <div style={contactMutedStyle}><MessageSquare size={16} />Escríbenos para solicitar una presentación o propuesta a la medida.</div>
            </div>
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <div style={{ ...footerInnerStyle }}>
          <div>Sixteam.pro · Implementaciones de tecnología y transformación digital</div>
          <div>NIT 901.967.849-4 · Brochure comercial</div>
        </div>
      </footer>
      <style>{`
        @media (max-width: 900px) {
          .hero-grid, .summary-grid, .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div style={sectionHeaderWrapStyle}>
      <div style={eyebrowStyle}>{eyebrow}</div>
      <h2 style={sectionTitleStyle}>{title}</h2>
      <p style={sectionCopyStyle}>{copy}</p>
    </div>
  );
}

const ambientGlowStyle: CSSProperties = { position: 'fixed', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at top right, rgba(29,112,162,.16), transparent 30%), radial-gradient(circle at 20% 20%, rgba(0,191,165,.1), transparent 28%)' };
const heroGridStyle: CSSProperties = { maxWidth: 1180, margin: '0 auto', padding: '5.5rem 1.25rem 2rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(280px, .85fr)', gap: '2rem', alignItems: 'center' };
const eyebrowPillStyle: CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.55rem 0.9rem', borderRadius: 999, background: 'rgba(29,112,162,.16)', border: '1px solid rgba(29,112,162,.24)', color: '#00bfa5', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20 };
const heroTitleStyle: CSSProperties = { margin: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 900, lineHeight: 1.08, fontSize: 'clamp(2.25rem, 5.1vw, 4.85rem)' };
const gradientLineStyle: CSSProperties = { display: 'block', background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };
const heroCopyStyle: CSSProperties = { color: 'rgba(255,255,255,.63)', fontSize: 'clamp(1rem, 1.9vw, 1.2rem)', maxWidth: 720, lineHeight: 1.75, margin: '1.25rem 0 1.8rem' };
const primaryCtaStyle: CSSProperties = { textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 14, padding: '0.95rem 1.3rem', background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, boxShadow: '0 12px 38px rgba(0,191,165,.2)' };
const secondaryCtaStyle: CSSProperties = { cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 14, padding: '0.95rem 1.3rem', background: 'rgba(255,255,255,.03)', color: '#fff', border: '1px solid rgba(29,112,162,.24)', fontFamily: 'Poppins, sans-serif', fontWeight: 700 };
const chipStyle: CSSProperties = { borderRadius: 999, padding: '0.55rem 0.95rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', color: 'rgba(255,255,255,.7)', fontSize: 13 };
const heroPanelOuterStyle: CSSProperties = { borderRadius: 28, background: 'linear-gradient(180deg, rgba(10,35,66,.96), rgba(7,24,38,.96))', border: '1px solid rgba(29,112,162,.24)', padding: '1.2rem', boxShadow: '0 18px 60px rgba(0,0,0,.28)' };
const heroPanelInnerStyle: CSSProperties = { borderRadius: 22, background: 'radial-gradient(circle at top, rgba(29,112,162,.22), transparent 45%), rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', padding: '1.2rem', display: 'grid', gap: 12 };
const miniCardStyle: CSSProperties = { borderRadius: 18, padding: '1rem 1rem 1rem 1.05rem', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(29,112,162,.2)' };
const miniCardEyebrowStyle: CSSProperties = { fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#00bfa5', marginBottom: 8 };
const miniCardCopyStyle: CSSProperties = { color: 'rgba(255,255,255,.72)', lineHeight: 1.6 };
const sectionWrapStyle: CSSProperties = { maxWidth: 1180, margin: '0 auto', padding: '4rem 1.25rem 0' };
const sectionHeaderWrapStyle: CSSProperties = { maxWidth: 780, marginBottom: '1.75rem' };
const eyebrowStyle: CSSProperties = { color: '#00bfa5', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em' };
const sectionTitleStyle: CSSProperties = { margin: '0.4rem 0 0.8rem', fontFamily: 'Poppins, sans-serif', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' };
const sectionCopyStyle: CSSProperties = { margin: 0, color: 'rgba(255,255,255,.62)', fontSize: 17, lineHeight: 1.8 };
const summaryGridStyle: CSSProperties = { borderRadius: 28, padding: '1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(29,112,162,.14)', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 };
const summaryTextStyle: CSSProperties = { margin: 0, color: 'rgba(255,255,255,.62)', lineHeight: 1.8, fontSize: 16 };
const gridCardsStyle: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 };
const cardStyle: CSSProperties = { borderRadius: 24, padding: '1.35rem', background: 'linear-gradient(180deg, rgba(10,35,66,.98), rgba(255,255,255,.03))', border: '1px solid rgba(29,112,162,.2)', boxShadow: '0 10px 40px rgba(0,0,0,.14)' };
const iconWrapStyle: CSSProperties = { width: 42, height: 42, borderRadius: 14, background: 'rgba(0,191,165,.1)', border: '1px solid rgba(0,191,165,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 };
const cardTitleStyle: CSSProperties = { margin: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, lineHeight: 1.2 };
const cardCopyStyle: CSSProperties = { margin: '0.85rem 0 0', color: 'rgba(255,255,255,.62)', lineHeight: 1.75, fontSize: 16 };
const productTagStyle: CSSProperties = { display: 'inline-flex', padding: '0.45rem 0.75rem', borderRadius: 999, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 };
const stepStyle: CSSProperties = { fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 28, background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 14 };
const ctaGridStyle: CSSProperties = { borderRadius: 30, padding: '2rem', background: 'linear-gradient(135deg, rgba(10,35,66,.96), rgba(29,112,162,.22))', border: '1px solid rgba(0,191,165,.18)', boxShadow: '0 18px 70px rgba(0,0,0,.18)', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, .8fr)', gap: '1.5rem', alignItems: 'center' };
const contactCardStyle: CSSProperties = { borderRadius: 24, padding: '1.4rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', display: 'grid', gap: 12 };
const contactLinkStyle: CSSProperties = { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff', padding: '0.9rem 1rem', borderRadius: 14, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', fontWeight: 700 };
const contactMutedStyle: CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,.63)', padding: '0.85rem 1rem', borderRadius: 14, background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)', lineHeight: 1.6 };
const footerStyle: CSSProperties = { borderTop: '1px solid rgba(29,112,162,.14)', padding: '1.5rem 1.25rem 2rem', color: 'rgba(255,255,255,.34)' };
const footerInnerStyle: CSSProperties = { maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' };
