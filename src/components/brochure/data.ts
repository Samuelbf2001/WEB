import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  Brain,
  Building2,
  ChartBar,
  Compass,
  HeartHandshake,
  LayoutTemplate,
  Link2,
  MapPinned,
  Megaphone,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  TrendingDown,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

export type IconType = LucideIcon;

export const PAIN_POINTS: { title: string; copy: string; icon: IconType }[] = [
  {
    title: 'Vendes pero no escalas.',
    copy: 'Tu equipo crece, pero los procesos no. Cada nuevo asesor es una curva de aprendizaje desde cero, y la operación depende de las personas, no del sistema.',
    icon: TrendingDown,
  },
  {
    title: 'Pierdes leads sin saber dónde.',
    copy: 'WhatsApp, formularios, Meta, llamadas: la información se queda en silos y nadie reconstruye el journey. Los leads tibios desaparecen sin seguimiento.',
    icon: Search,
  },
  {
    title: 'Decides sin data confiable.',
    copy: 'Reportes hechos a mano, métricas distintas en cada herramienta, decisiones por intuición. Lo que no se mide bien, no se puede mejorar.',
    icon: Compass,
  },
];

export const JOURNEY: {
  step: string;
  title: string;
  copy: string;
  image: string;
  icon: IconType;
}[] = [
  {
    step: '01',
    title: 'Diagnóstico y contexto',
    copy: 'Aterrizamos objetivos, dolores, procesos actuales y prioridades antes de tocar tecnología. Mapeamos tu operación real, no la ideal.',
    image: '/brochure/brochure-journey-1.png',
    icon: MapPinned,
  },
  {
    step: '02',
    title: 'Diseño funcional',
    copy: 'Definimos datos, embudos, formularios, vistas y automatizaciones con lógica real para tu equipo. Cada flujo se valida antes de implementarse.',
    image: '/brochure/brochure-journey-2.png',
    icon: Workflow,
  },
  {
    step: '03',
    title: 'Automatización + IA',
    copy: 'Implementamos workflows, seguimiento, IA conversacional y paneles que aceleran la operación con visibilidad real para gerencia y operación.',
    image: '/brochure/brochure-journey-3.png',
    icon: Brain,
  },
  {
    step: '04',
    title: 'Capacitación y soporte continuo',
    copy: 'Entrenamos a tu equipo, dejamos guías de uso y acompañamos la adopción con ajustes, soporte y mejora continua mientras el negocio escala.',
    image: '/brochure/brochure-journey-4.png',
    icon: HeartHandshake,
  },
];

export const SERVICES: { title: string; copy: string; bullets: string[]; icon: IconType; price: string }[] = [
  {
    title: 'Implementaciones para ventas',
    copy: 'Diseñamos e implementamos soluciones para organizar procesos, datos, seguimiento y automatizaciones en las áreas comerciales.',
    bullets: ['Pipelines y etapas', 'Automatización de seguimiento', 'Asignación inteligente de leads'],
    icon: Target,
    price: 'Desde $2.880.000 COP',
  },
  {
    title: 'Implementaciones para servicio',
    copy: 'Estructuramos la operación de atención con tickets, SLA, automatizaciones y visibilidad de tiempos de respuesta.',
    bullets: ['Tickets y SLA', 'Automatizaciones de soporte', 'Reportería de cumplimiento'],
    icon: ShieldCheck,
    price: 'Desde $2.160.000 COP',
  },
  {
    title: 'Implementaciones para marketing',
    copy: 'Conectamos formularios, páginas, captación y reportería para activar campañas y darle continuidad al embudo.',
    bullets: ['Formularios y landing', 'Email marketing', 'Atribución y reporting'],
    icon: Rocket,
    price: 'Desde $2.160.000 COP',
  },
  {
    title: 'Automatización e IA',
    copy: 'Implementamos workflows, bots y asistentes conversacionales para responder más rápido y reducir tareas operativas.',
    bullets: ['Bots conversacionales', 'Workflows con IA', 'Filtrado automático de leads'],
    icon: Bot,
    price: 'Desde $500.000/mes · impl desde $1.500.000',
  },
  {
    title: 'Integraciones',
    copy: 'Unimos CRM, canales, formularios y herramientas externas para que la información fluya sin reprocesos.',
    bullets: ['APIs y webhooks', 'Conectores nativos', 'Sincronizaciones bidireccionales'],
    icon: Link2,
    price: 'Desde $2.000.000 COP',
  },
  {
    title: 'Pauta Meta y Google',
    copy: 'Activamos, optimizamos y conectamos campañas con la operación comercial para mejorar respuesta y aprendizaje.',
    bullets: ['Estructura de campañas', 'Conexión con CRM', 'Atribución multi-canal'],
    icon: Megaphone,
    price: 'Desde $500.000 COP + 10% inversión',
  },
  {
    title: 'Websites y landing pages',
    copy: 'Creamos activos digitales enfocados en conversión, posicionamiento y captura de oportunidades.',
    bullets: ['Diseño orientado a conversión', 'Performance y SEO', 'Conectados al CRM'],
    icon: LayoutTemplate,
    price: 'Desde $2.000.000 COP',
  },
  {
    title: 'Desarrollo a la medida',
    copy: 'Construimos soluciones personalizadas cuando el negocio requiere arquitectura más robusta de software.',
    bullets: ['Apps internas', 'Portales de cliente', 'Integraciones complejas'],
    icon: Wrench,
    price: 'Desde $5.000.000 COP',
  },
];

export const PRODUCTS: {
  name: string;
  badge?: string;
  accent: string;
  ideal: string;
  includes: string[];
  moment: string;
  highlighted: boolean;
  price: string;
  impl: string;
}[] = [
  {
    name: 'Sixteam Inbox + IA',
    accent: '#1d70a2',
    ideal: 'Centraliza conversaciones y automatiza la primera atención sin iniciar todavía con un CRM completo.',
    includes: [
      'Bandeja omnicanal de conversaciones',
      'IA conversacional para preatención y filtro',
      'Handoff entre bot y asesor humano',
      'Seguimiento conversacional guiado',
    ],
    moment: 'Cuando conviene: primer paso para ordenar la atención y responder más rápido a leads o clientes.',
    highlighted: false,
    price: '$215 USD/mes',
    impl: '+ $360 USD impl · 2 usuarios',
  },
  {
    name: 'CRM Sixteam.pro Core',
    accent: '#00bfa5',
    badge: 'Más elegido',
    ideal: 'Implementación integral para ventas, servicio y marketing con estructura operativa, seguimiento y automatización base.',
    includes: [
      'Contactos, registros y datos personalizados',
      'Pipeline y etapas operativas',
      'Automatizaciones de seguimiento y asignación',
      'Listas, filtros y visibilidad del trabajo diario',
    ],
    moment: 'Cuando conviene: al pasar de operación manual a gestión con control, trazabilidad y roles definidos.',
    highlighted: true,
    price: '$288 USD/mes',
    impl: '+ $720 USD impl · 3 usuarios',
  },
  {
    name: 'CRM Sixteam.pro Growth',
    accent: '#7de8d8',
    ideal: 'Operación integral de captación, seguimiento, automatización y marketing en una misma plataforma.',
    includes: [
      'Todo lo del CRM Core',
      'Formularios, páginas y embudos',
      'Email marketing y reputación',
      'Automatización marketing-comercial',
    ],
    moment: 'Cuando conviene: al escalar crecimiento, nutrir demanda y conectar captación con ventas en un solo flujo.',
    highlighted: false,
    price: '$431 USD/mes',
    impl: '+ $1.152 USD impl · 5 usuarios',
  },
];

export const PLATFORM_CATEGORIES = [
  'Todas',
  'CRM',
  'Pauta',
  'IA & Bots',
  'Automatización',
  'Mensajería',
  'Marketing',
] as const;

export type PlatformCategory = (typeof PLATFORM_CATEGORIES)[number];

export const PLATFORMS: { name: string; src: string; categories: PlatformCategory[] }[] = [
  { name: 'HubSpot', src: '/HubSpot-Logo-500x281.png', categories: ['CRM'] },
  { name: 'Kommo', src: '/kommo01.png', categories: ['CRM'] },
  { name: 'GoHighLevel', src: '/highlevel-logo.png', categories: ['CRM', 'Marketing'] },
  { name: 'Google Ads', src: '/Google_Ads_logo.svg.png', categories: ['Pauta'] },
  { name: 'Meta Ads', src: '/ads meta_PNG12.png', categories: ['Pauta'] },
  { name: 'Google Gemini', src: '/Google_Gemini_logo.svg.png', categories: ['IA & Bots'] },
  { name: 'Atom Chat', src: '/logo-atom-chat.png', categories: ['IA & Bots', 'Mensajería'] },
  { name: 'ManyChat', src: '/MANYCHAT-LOGO-PNG.png', categories: ['IA & Bots', 'Mensajería'] },
  { name: 'n8n', src: '/N8n-logo-new.svg.png', categories: ['Automatización'] },
  { name: 'Make', src: '/make-logo.png', categories: ['Automatización'] },
  { name: 'Zapier', src: '/zapier-logo-new.png', categories: ['Automatización'] },
  { name: 'WhatsApp Business', src: '/Whatsapp-Business-01-768x269.png', categories: ['Mensajería'] },
  { name: 'Mailchimp', src: '/Mailchimp-logo.png', categories: ['Marketing'] },
  { name: 'Brevo', src: '/brevo.png', categories: ['Marketing'] },
  { name: 'Google Analytics', src: '/Logo_Google_Analytics.svg.png', categories: ['Marketing'] },
  { name: 'Claude', src: '/claude-logo.svg', categories: ['IA & Bots'] },
];

export const STATS: { value: string; label: string; sub: string }[] = [
  { value: '+50', label: 'Implementaciones', sub: 'entregadas en Latinoamérica' },
  { value: '15+', label: 'Plataformas', sub: 'que conectamos sin fricción' },
  { value: '30 días', label: 'En producción', sub: 'desde diagnóstico hasta primer flujo' },
  { value: '100%', label: 'Acompañamiento', sub: 'capacitación, soporte y mejora continua' },
];

export const MOCKUPS: { src: string; title: string; copy: string }[] = [
  {
    src: '/brochure/brochure-mockup-1.png',
    title: 'Pipeline comercial trazable',
    copy: 'Cada lead tiene historia, etapa, dueño y próximo paso. Sin spreadsheets paralelos.',
  },
  {
    src: '/brochure/brochure-mockup-2.png',
    title: 'Inbox omnicanal',
    copy: 'WhatsApp, email, Instagram y formularios en una sola bandeja, con contexto del cliente.',
  },
  {
    src: '/brochure/brochure-mockup-3.png',
    title: 'Reportería que se lee sola',
    copy: 'KPIs, embudos y tendencias listas para gerencia, sin tener que armar reportes a mano.',
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: '¿Qué tan rápido empiezo a ver resultados?',
    a: 'Con la metodología Sixteam, una implementación base entra a producción en 30 días promedio. Los primeros impactos (respuesta más rápida, leads centralizados, visibilidad del pipeline) se sienten desde la semana dos. El crecimiento sostenido se construye en los siguientes 60-90 días con los ajustes de la operación real.',
  },
  {
    q: '¿Tengo que cambiar mis herramientas actuales?',
    a: 'No necesariamente. Trabajamos sobre HubSpot, Kommo, GoHighLevel, n8n, Make, Zapier, Meta y Google Ads. Si ya tienes algo, evaluamos qué se queda, qué se conecta y qué se reemplaza. La meta es ordenar la operación, no imponer un stack.',
  },
  {
    q: '¿Qué pasa si mi equipo no es técnico?',
    a: 'Diseñamos los flujos para que sean operables por cualquier asesor. Damos capacitación práctica, dejamos guías cortas y un canal de soporte. La adopción es parte de la implementación, no un extra.',
  },
  {
    q: '¿Manejan integraciones complejas con sistemas propios?',
    a: 'Sí. Cuando el negocio requiere algo a la medida (ERP, app interna, API externa), sumamos desarrollo. Conectamos vía APIs, webhooks o conectores nativos según la fricción más baja.',
  },
  {
    q: '¿Qué incluye el acompañamiento post-implementación?',
    a: 'Capacitación a tu equipo, soporte para resolver dudas operativas, ajustes a flujos según lo que surja en la operación real, y revisiones periódicas para proponer mejoras. No te entregamos un sistema y desaparecemos.',
  },
  {
    q: '¿Cómo cobran: proyecto fijo, mensualidad o híbrido?',
    a: 'Depende del alcance. Implementaciones puntuales se cotizan como proyecto fijo. Acompañamientos de RevOps son mensualidades. Para clientes en crecimiento integral usamos un híbrido (proyecto + soporte continuo). En la primera conversación cuadramos el modelo que más le sirve a tu negocio.',
  },
];

const WA_BROCHURE =
  'https://wa.me/573004188522?text=Hola%2C%20vi%20el%20portafolio%20de%20Sixteam.pro%20y%20quisiera%20agendar%20una%20asesor%C3%ADa.';

export const TRIPLE_CTAS: {
  title: string;
  highlight: string;
  copy: string;
  cta: string;
  href: string;
  icon: IconType;
  external?: boolean;
}[] = [
  {
    title: 'Centraliza',
    highlight: 'tu operatividad digital',
    copy: 'Conversaciones, contactos, ventas y marketing en una sola plataforma con visibilidad para todos los equipos.',
    cta: 'Quiero centralizar',
    href: WA_BROCHURE,
    icon: Building2,
    external: true,
  },
  {
    title: 'Hace crecer',
    highlight: 'tu proceso comercial',
    copy: 'Pipelines con seguimiento real, automatizaciones que no dejan caer leads y reportería confiable para decisiones.',
    cta: 'Quiero crecer ventas',
    href: WA_BROCHURE,
    icon: ChartBar,
    external: true,
  },
  {
    title: 'Opera y construye',
    highlight: 'tu marketing sobre las plataformas',
    copy: 'HubSpot, Meta, Google, n8n, Make: las dominamos y las conectamos con tu operación comercial.',
    cta: 'Hablemos de plataformas',
    href: WA_BROCHURE,
    icon: Rocket,
    external: true,
  },
];


export const ARG_BULLETS: { title: string; copy: string; icon: IconType }[] = [
  {
    title: 'Consultoría + ejecución',
    copy: 'No solo configuramos herramientas: convertimos objetivos comerciales en procesos implementados y utilizables.',
    icon: Settings2,
  },
  {
    title: 'Integración del ecosistema',
    copy: 'Marketing, ventas, servicio y activos digitales conectados para reducir fricción y mejorar trazabilidad.',
    icon: Workflow,
  },
  {
    title: 'Acompañamiento real',
    copy: 'Capacitamos, damos soporte y proponemos mejoras para que la adopción no se quede en el día 1.',
    icon: Users,
  },
];
