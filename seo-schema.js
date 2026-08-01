/**
 * Datos estructurados (JSON-LD) por ruta.
 *
 * Los sirve `server.js` dentro del HTML. Antes el único schema del proyecto se
 * inyectaba con un `useEffect`, así que solo lo veían los navegadores con JS:
 * los crawlers de motores generativos, que priorizan un fetch barato sobre un
 * render completo, no veían ninguno.
 *
 * El marcado debe coincidir con lo que ve el usuario. Por eso las FAQ salen de
 * `content/faq-home.js`, el mismo módulo que renderiza el acordeón del home.
 */
import { homeFaqs } from './content/faq-home.js';
import { SITE_URL } from './seo-routes.js';

const AREA_SERVED = ['Colombia', 'México', 'Argentina', 'Chile', 'Perú'];

const ORGANIZATION_REF = {
  '@type': 'Organization',
  name: 'Sixteam.pro',
  url: SITE_URL,
};

// Datos pendientes de confirmar con el equipo antes de publicarlos:
//  - foundingDate: el repo se contradice (2017 en HomeAA.tsx, 2021 en llms.txt).
//  - dirección postal completa: solo consta la ciudad, Bogotá.
//  - perfiles sociales más allá de LinkedIn.
// Se omiten en vez de adivinarlos: un dato inventado en JSON-LD es peor que
// un campo ausente.
const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sixteam.pro',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-sixteam-512.png`,
  description:
    'Sixteam.pro implementa y opera CRM, automatizaciones e inteligencia artificial para empresas en Colombia y Latinoamérica. Combina procesos, tecnología y personas bajo la fórmula Process + Technology + People = Growth.',
  areaServed: AREA_SERVED,
  serviceType: [
    'Implementación de CRM',
    'Automatización de marketing',
    'Chatbots con IA',
    'RevOps',
    'GoHighLevel',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-300-418-8522',
    email: 'hola@sixteam.pro',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
    areaServed: ['CO', 'MX', 'AR', 'CL', 'PE'],
  },
  sameAs: ['https://www.linkedin.com/company/sixteam-pro'],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sixteam.pro',
  url: SITE_URL,
  inLanguage: 'es-CO',
  publisher: ORGANIZATION_REF,
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const service = (path, { serviceType, name, description }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType,
  name,
  description,
  provider: ORGANIZATION_REF,
  areaServed: AREA_SERVED,
  url: `${SITE_URL}${path}`,
});

const services = {
  '/servicios/crm-ventas': service('/servicios/crm-ventas', {
    serviceType: 'Implementación y operación de CRM de Ventas',
    name: 'CRM Ventas operado, no instalado',
    description:
      'Pipeline limpio, routing automático de leads al vendedor correcto y reporte ejecutivo cada lunes. Sixteam.pro opera el CRM de ventas de forma continua, no solo lo instala.',
  }),
  '/servicios/crm-atencion': service('/servicios/crm-atencion', {
    serviceType: 'Bandeja omnicanal de atención al cliente',
    name: 'Atención al cliente orquestada, no caótica',
    description:
      'WhatsApp, email y chat unificados en una sola bandeja operada con SLA medible.',
  }),
  '/servicios/crm-marketing': service('/servicios/crm-marketing', {
    serviceType: 'Automatización de marketing conectada al CRM',
    name: 'Marketing conectado al pipeline, no a un vacío',
    description:
      'Campañas, nurturing y atribución conectados al CRM real, sin islas de datos entre marketing y ventas.',
  }),
  '/servicios/chatbot-ia': service('/servicios/chatbot-ia', {
    serviceType: 'Agentes conversacionales con inteligencia artificial',
    name: 'Chatbot con IA que opera, no solo responde',
    description:
      'Agentes de IA que califican leads, agendan citas y resuelven consultas 24/7 conectados al CRM real de la empresa.',
  }),
  '/servicios/soporte-operaciones': service('/servicios/soporte-operaciones', {
    serviceType: 'RevOps externo y soporte continuo',
    name: 'Soporte y operaciones de tu CRM, mes a mes',
    description:
      'Sprints semanales de soporte, mejoras y automatizaciones sobre el stack ya montado. El sistema se mantiene vivo en vez de quedar abandonado tras la implementación.',
  }),
};

/** Etiquetas legibles para las migas de pan, por segmento de ruta. */
const BREADCRUMB_LABELS = {
  servicios: { name: 'Soluciones', path: '/soluciones' },
  industrias: { name: 'Industrias', path: '/industrias' },
  casos: { name: 'Casos de éxito', path: '/casos' },
  radar: { name: 'Radar', path: '/radar' },
};

const breadcrumbList = (pathname, title) => {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 2) return null;

  const items = [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
  ];

  const parent = BREADCRUMB_LABELS[segments[0]];
  if (parent) {
    items.push({
      '@type': 'ListItem',
      position: items.length + 1,
      name: parent.name,
      item: `${SITE_URL}${parent.path}`,
    });
  }

  items.push({
    '@type': 'ListItem',
    position: items.length + 1,
    name: title,
    item: `${SITE_URL}${pathname}`,
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

/**
 * Devuelve los bloques JSON-LD que corresponden a una ruta.
 * Organization y WebSite van en todas; el resto según la página.
 */
export const schemasForRoute = (pathname, meta) => {
  if (meta?.noindex) return [];

  const schemas = [organization, website];

  if (pathname === '/') {
    schemas.push(faqPage);
  }

  if (services[pathname]) {
    schemas.push(services[pathname]);
  }

  const crumbs = breadcrumbList(pathname, meta?.breadcrumb ?? meta?.title ?? '');
  if (crumbs) {
    schemas.push(crumbs);
  }

  return schemas;
};

/** Serializa los schemas a etiquetas `<script>` listas para inyectar. */
export const renderSchemaTags = (schemas) =>
  schemas
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema).replace(
          /</g,
          '\\u003c'
        )}</script>`
    )
    .join('\n');
