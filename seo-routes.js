/**
 * Fuente única de verdad para los metadatos SEO por ruta.
 *
 * La consumen:
 *  - `server.js`, que inyecta title/description/canonical/OG en el HTML que
 *    sirve. Es lo único que ven los crawlers y los scrapers sociales, porque
 *    ninguno de ellos ejecuta el JavaScript de la SPA.
 *  - `scripts/generate-sitemap.mjs`, que genera `public/sitemap.xml` a partir
 *    de este mismo mapa para que sitemap y router no puedan desincronizarse.
 *
 * Campos por ruta:
 *  - title, description : obligatorios.
 *  - canonical          : absoluta y autorreferencial salvo que la ruta sea
 *                         una variante de campaña que deba consolidar en otra.
 *  - ogImage            : absoluta. Por defecto DEFAULT_OG_IMAGE.
 *  - noindex            : excluye de buscadores y del sitemap.
 *  - sitemap            : false para dejarla fuera del sitemap sin marcarla
 *                         noindex (variantes de campaña que sí se comparten).
 *  - changefreq, priority : señales del sitemap.
 *  - source             : fichero de la página; da el <lastmod> real a partir
 *                         de la fecha del último commit que lo tocó.
 */

export const SITE_URL = 'https://sixteam.pro';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const seoRoutes = {
  // ── Web pública V2 ──────────────────────────────────────────────────────
  '/': {
    title: 'Sixteam.pro: CRM, Automatizaciones e IA para Empresas',
    description:
      'CRM, automatizaciones e IA operados por expertos humanos. Impulsamos tu crecimiento en Colombia y Latinoamérica con procesos, tecnología y personas.',
    canonical: `${SITE_URL}/`,
    changefreq: 'weekly',
    priority: '1.0',
    source: 'src/pages/IndexV2.tsx',
  },
  '/soluciones': {
    title: 'Soluciones Sixteam.pro: Assessment, Transform y Ops Mensual',
    description:
      'Descubre las tres soluciones de Sixteam.pro: diagnóstico con IA, implementación de CRM y operación mensual con RevOps. El camino completo al crecimiento.',
    canonical: `${SITE_URL}/soluciones`,
    changefreq: 'weekly',
    priority: '0.9',
    source: 'src/pages/v2/Soluciones.tsx',
  },
  '/servicios/crm-ventas': {
    title: 'CRM de Ventas Operado, no solo Instalado | Sixteam.pro',
    description:
      'Pipeline limpio y leads asignados al vendedor correcto. Operamos tu CRM de ventas en GoHighLevel con reportes semanales. Colombia y Latinoamérica.',
    canonical: `${SITE_URL}/servicios/crm-ventas`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/servicios/CrmVentasV2.tsx',
  },
  '/servicios/crm-atencion': {
    title: 'CRM de Atención al Cliente 24/7 en WhatsApp | Sixteam',
    description:
      'WhatsApp, email y chat en una sola bandeja con SLA medible. Automatizamos y operamos tu atención al cliente con CRM e IA. Colombia y Latinoamérica.',
    canonical: `${SITE_URL}/servicios/crm-atencion`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/servicios/CrmAtencionV2.tsx',
  },
  '/servicios/crm-marketing': {
    title: 'CRM de Marketing Conectado al Pipeline | Sixteam.pro',
    description:
      'Campañas, nurturing y atribución conectados a tu CRM real, no a un vacío. Automatizaciones de marketing que sí impactan ventas. Colombia y LatAm.',
    canonical: `${SITE_URL}/servicios/crm-marketing`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/servicios/CrmMarketingV2.tsx',
  },
  '/servicios/chatbot-ia': {
    title: 'Chatbot con IA que Opera, no solo Responde | Sixteam.pro',
    description:
      'Agentes de IA que califican, agendan y resuelven 24/7 conectados a tu CRM real. Automatización conversacional para empresas en Colombia y LatAm.',
    canonical: `${SITE_URL}/servicios/chatbot-ia`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/servicios/ChatbotIAV2.tsx',
  },
  '/servicios/soporte-operaciones': {
    title: 'Soporte y Operaciones de tu CRM, Mes a Mes | Sixteam',
    description:
      'El equipo que mantiene vivo tu sistema: sprints semanales de soporte, mejoras y automatizaciones sin pedir permiso. CRM operado, no abandonado.',
    canonical: `${SITE_URL}/servicios/soporte-operaciones`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/servicios/SoporteOperacionesV2.tsx',
  },
  '/radar': {
    title: 'Diagnóstico Gratis Sixteam: Radar de tu CRM | Sixteam.pro',
    description:
      'Diagnosticamos tu operación comercial y te entregamos el sistema montado, no solo un informe. Radar gratuito con recomendaciones priorizadas.',
    canonical: `${SITE_URL}/radar`,
    changefreq: 'monthly',
    priority: '0.9',
    source: 'src/pages/v2/Radar.tsx',
  },
  '/radar-pro': {
    title: 'Radar 360°: Auditoría Tecnológica Completa | Sixteam.pro',
    description:
      'Radiografía completa de tu operación: email, WhatsApp, IA, automatizaciones, web y pauta. Plan de acción priorizado, no solo una auditoría de CRM.',
    canonical: `${SITE_URL}/radar-pro`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/RadarPro.tsx',
  },
  '/contacto': {
    title: 'Contacto Sixteam.pro: Agenda tu Llamada Gratis Hoy',
    description:
      'Tres formas de arrancar con Sixteam: WhatsApp, agenda directa o formulario simple. Sin cuestionarios largos. Hablemos de tu CRM, IA y automatización.',
    canonical: `${SITE_URL}/contacto`,
    changefreq: 'monthly',
    priority: '0.9',
    source: 'src/pages/v2/Contacto.tsx',
  },
  '/casos': {
    title: 'Casos de Éxito Reales: CRM e IA en Acción | Sixteam.pro',
    description:
      'Empresas reales, números reales: así cambiaron su CRM de cementerio a motor de ventas con la operación de Sixteam.pro en Colombia y Latinoamérica.',
    canonical: `${SITE_URL}/casos`,
    changefreq: 'monthly',
    priority: '0.9',
    source: 'src/pages/v2/Casos.tsx',
  },
  '/nosotros': {
    title: 'Nosotros: un Estudio que Opera tu RevOps | Sixteam',
    description:
      'Somos el equipo de tecnología e IA que opera tu negocio, no solo lo instala. Conoce la fórmula Procesos + Tecnología + Personas de Sixteam.pro.',
    canonical: `${SITE_URL}/nosotros`,
    changefreq: 'monthly',
    priority: '0.9',
    source: 'src/pages/v2/Nosotros.tsx',
  },
  '/como-funciona': {
    title: 'Cómo Funciona Sixteam.pro: tu CRM y tu IA en Acción',
    description:
      'No tienes que aprender un sistema nuevo: pides por Slack, WhatsApp o Loom y decidimos si lo resuelve IA o un humano. Así operamos tu tecnología.',
    canonical: `${SITE_URL}/como-funciona`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/ComoFunciona.tsx',
  },
  '/operacion-continua': {
    title: 'Operación Continua: tu RevOps Mes a Mes | Sixteam.pro',
    description:
      'No es un proyecto con fecha de entrega: es tu equipo externo de RevOps operando ventas, marketing y servicio al cliente mientras tú creces, mes a mes.',
    canonical: `${SITE_URL}/operacion-continua`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/OperacionContinua.tsx',
  },
  '/diagnostico': {
    title: 'Diagnóstico Sixteam: Dónde Pierdes Dinero | Sixteam.pro',
    description:
      'Sabe exactamente dónde tu negocio deja dinero sobre la mesa. Diagnóstico de operación comercial con hallazgos accionables en pocos días, sin compromiso.',
    canonical: `${SITE_URL}/diagnostico`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/DiagnosticoSixteam.tsx',
  },
  '/equipo': {
    title: 'Nuestro Equipo: Humanos + Agentes IA | Sixteam.pro',
    description:
      'No contratas personas, activas un equipo: expertos humanos senior y agentes de IA operando tu CRM y automatizaciones. Conoce a Sixteam.pro hoy.',
    canonical: `${SITE_URL}/equipo`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/v2/Equipo.tsx',
  },
  '/precios': {
    title: 'Precios Sixteam.pro: Planes de CRM e IA desde $199',
    description:
      'Un equipo de tecnología completo por menos que una sola contratación. Humanos senior y agentes IA operando tu CRM, sin contratos de permanencia.',
    canonical: `${SITE_URL}/precios`,
    changefreq: 'weekly',
    priority: '0.9',
    source: 'src/pages/v2/Precios.tsx',
  },
  '/assessment': {
    title: 'Sixteam Assessment: tu Estrategia de IA en 10 Días',
    description:
      'Mapa operativo vivo, palancas de IA priorizadas y roadmap ejecutable. Agentes de IA entrevistan al 100% de tu equipo. Lanza tu transformación bien.',
    canonical: `${SITE_URL}/assessment`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/Assessment.tsx',
  },
  '/industrias': {
    title: 'Industrias: CRM por Sector para tu Negocio | Sixteam.pro',
    description:
      'No vendemos plantillas genéricas: cada industria tiene su propio motor de automatizaciones, flujos y datos. Descubre la solución para tu sector.',
    canonical: `${SITE_URL}/industrias`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/v2/Industrias.tsx',
  },
  '/industrias/educacion': {
    title: 'CRM para Instituciones Educativas en LatAm | Sixteam.pro',
    description:
      'Más admisiones, menos caos: automatiza seguimiento de prospectos, matrículas y comunicación con padres. CRM e IA para educación en Colombia y LatAm.',
    canonical: `${SITE_URL}/industrias/educacion`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/v2/industrias/Educacion.tsx',
  },
  '/industrias/saas-b2b': {
    title: 'CRM para SaaS B2B: Menos Churn, Más Expansión | Sixteam',
    description:
      'Menos churn, más expansión: CRM y automatizaciones para SaaS B2B que conectan ventas, onboarding y éxito del cliente. Colombia y Latinoamérica.',
    canonical: `${SITE_URL}/industrias/saas-b2b`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/v2/industrias/SaasB2B.tsx',
  },
  '/industrias/retail': {
    title: 'CRM para Retail y E-commerce en Latinoamérica | Sixteam',
    description:
      'Más revenue, menos soporte manual: CRM e IA que automatizan ventas, atención y postventa para retail y e-commerce en Colombia y Latinoamérica.',
    canonical: `${SITE_URL}/industrias/retail`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/v2/industrias/Retail.tsx',
  },
  '/industrias/viajes': {
    title: 'CRM para Agencias de Viajes en Latinoamérica | Sixteam.pro',
    description:
      'Tu agencia opera como agencia de viajes, no como bandeja de correo. CRM, IA y automatizaciones para cotizar y cerrar reservas más rápido en LatAm.',
    canonical: `${SITE_URL}/industrias/viajes`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/v2/industrias/Viajes.tsx',
  },
  '/industrias/servicios-con-cita': {
    title: 'CRM para Negocios con Cita Previa en LatAm | Sixteam.pro',
    description:
      'Salud, legal, estético o contable: donde la cita es el producto. Agenda, recordatorios y seguimiento automatizado con CRM e IA de Sixteam.pro.',
    canonical: `${SITE_URL}/industrias/servicios-con-cita`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/v2/industrias/ServiciosConCita.tsx',
  },
  '/industrias/inmobiliarias': {
    title: 'Inmobiliarias: CRM que Convierte Leads en Ventas | Sixteam',
    description:
      'Inmobiliaria que convierte leads en ventas, no en una lista en Excel. Pipeline, integración con portales y recordatorios automáticos de visita.',
    canonical: `${SITE_URL}/industrias/inmobiliarias`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/v2/industrias/Inmobiliarias.tsx',
  },

  // ── Landings V1 que siguen publicadas ───────────────────────────────────
  '/plataforma': {
    title: 'Plataforma CRM: Sixteam.pro | Promo desde $199 USD/mes',
    description:
      'Planes Ops todo-en-uno con promo desde $199 USD/mes. CRM, agentes IA, automatizaciones y operación mensual para empresas de servicios en Colombia.',
    canonical: `${SITE_URL}/plataforma`,
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/Plataforma.tsx',
  },
  '/radar/diagnostico-gratis': {
    title: 'Diagnóstico Gratuito | Radar Sixteam | Resultados en 48 Horas',
    description:
      'Diagnóstico gratuito de tu operación comercial. En 48 horas recibes mapa de oportunidades, recomendaciones priorizadas y benchmark competitivo. Sin compromiso.',
    canonical: `${SITE_URL}/radar/diagnostico-gratis`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/radar/DiagnosticoGratis.tsx',
  },
  '/radar/antes-de-invertir': {
    title: '¿Vale la Pena Invertir en CRM? | Radar Sixteam',
    description:
      'El 60% de las implementaciones de CRM fallan sin diagnóstico previo. Antes de comprar, diagnostica. Ahorra hasta un 40% en tu implementación.',
    canonical: `${SITE_URL}/radar/antes-de-invertir`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/radar/AntesDeInvertir.tsx',
  },
  '/radar/oportunidades-perdidas': {
    title: 'Oportunidades de Venta Perdidas | Radar Sixteam',
    description:
      '¿Cuánto dinero estás perdiendo sin saberlo? Auditamos fugas en tu pipeline, leads sin seguimiento y clientes que no regresan. Diagnóstico gratuito.',
    canonical: `${SITE_URL}/radar/oportunidades-perdidas`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/radar/OportunidadesPerdidas.tsx',
  },
  '/industrias/agencias-de-viaje': {
    title: 'CRM para Agencias de Viaje | Sixteam.pro',
    description:
      'CRM, IA y automatizaciones para agencias de viaje en Latam. Responde en 2 minutos, seguimiento automático y convierte más cotizaciones en reservas.',
    canonical: `${SITE_URL}/industrias/agencias-de-viaje`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/industrias/AgenciasDeViaje.tsx',
  },
  '/industrias/servicios-generales': {
    title: 'CRM para Empresas de Servicios | Sixteam.pro',
    description:
      'Pipeline de propuestas, renovaciones automáticas y secuencias de cobro para consultoras y servicios profesionales. Crece un 40% sin contratar más personal.',
    canonical: `${SITE_URL}/industrias/servicios-generales`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/industrias/ServiciosGenerales.tsx',
  },
  '/casos/master-viajes': {
    title: 'Caso de Éxito: Master Viajes | Sixteam.pro',
    description:
      'Cómo Master Viajes organizó su operación comercial, centralizó sus canales de venta y le dio a la gerencia visibilidad total del negocio con Sixteam.pro.',
    canonical: `${SITE_URL}/casos/master-viajes`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/casos/MasterViajes.tsx',
  },
  '/casos/student-travel-center': {
    title: 'Caso de Éxito: Student Travel Center | Sixteam.pro',
    description:
      'Cómo Student Travel Center pasó de operar disperso a tener a Sixteam como partner estratégico integrado en su día a día: CRM, IA, pauta y crecimiento.',
    canonical: `${SITE_URL}/casos/student-travel-center`,
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/casos/StudentTravelCenter.tsx',
  },

  // ── Legales ─────────────────────────────────────────────────────────────
  '/politicas': {
    title: 'Política de Privacidad | Sixteam.pro',
    description:
      'Política de privacidad y tratamiento de datos personales de Sixteam.pro S.A.S. Bogotá, Colombia. Actualizada marzo 2026.',
    canonical: `${SITE_URL}/politicas`,
    changefreq: 'yearly',
    priority: '0.3',
    source: 'src/pages/PoliticasPrivacidad.tsx',
  },
  '/terminos': {
    title: 'Términos y Condiciones | Sixteam.pro',
    description:
      'Términos y condiciones de uso de los servicios de Sixteam.pro S.A.S. Bogotá, Colombia. Vigentes desde marzo 2026.',
    canonical: `${SITE_URL}/terminos`,
    changefreq: 'yearly',
    priority: '0.3',
    source: 'src/pages/TerminosCondiciones.tsx',
  },

  // ── Campaña y variantes: fuera del sitemap, con canonical consolidado ───
  // Se comparten por WhatsApp y pauta, así que necesitan preview correcta
  // aunque no deban competir en buscadores con la página canónica.
  '/viajes': {
    title: 'CRM para Agencias de Viaje: Diagnóstico Gratuito | Sixteam.pro',
    description:
      'Descubre cuántas reservas está perdiendo tu agencia. Diagnóstico gratuito personalizado: bot IA, seguimiento automático y pipeline de reservas en 2 semanas.',
    canonical: `${SITE_URL}/industrias/agencias-de-viaje`,
    sitemap: false,
    source: 'src/pages/industrias/AgenciasDeViajeAds.tsx',
  },
  '/inmobiliarias': {
    title: 'CRM para Inmobiliarias | Sixteam.pro | Duplica tus Cierres',
    description:
      'CRM para inmobiliarias con pipeline de venta y arriendo, integración Metrocuadrado y Fincaraíz, recordatorios de visita automáticos. Colombia y Latinoamérica.',
    canonical: `${SITE_URL}/inmobiliarias`,
    sitemap: false,
    source: 'src/pages/industrias/InmobiliariasV2.tsx',
  },
  '/home-aa': {
    title: 'Sixteam | Tu Equipo de Tecnología & IA, Operando 24/7',
    description:
      'Implementación y operación continua de la tecnología e IA de tu negocio: CRM, WhatsApp, automatizaciones, agentes IA, pauta. Promo desde $199 USD/mes.',
    canonical: `${SITE_URL}/`,
    sitemap: false,
    source: 'src/pages/HomeAA.tsx',
  },
  '/brochure': {
    title: 'Portafolio Sixteam.pro: CRM, IA y Automatización para Latam',
    description:
      'Implementamos CRM, automatizaciones, IA conversacional, integraciones y activos digitales para que tu empresa centralice, venda y escale en orden.',
    canonical: `${SITE_URL}/brochure`,
    sitemap: false,
    source: 'src/pages/Brochure.tsx',
  },

  // ── Landings de pauta: noindex ──────────────────────────────────────────
  '/ops': {
    title: 'Sixteam Ops: Tu equipo de tecnología e IA, mes a mes | Sixteam.pro',
    description:
      'Humanos expertos + agentes de IA operan tu CRM, WhatsApp, automatizaciones y métricas. Sin contratar personal adicional. Promo desde $199 USD/mes.',
    canonical: `${SITE_URL}/ops`,
    noindex: true,
    source: 'src/pages/v2/OpsLanding.tsx',
  },
  '/lp/assessment': {
    title: 'Sixteam Assessment: Lanza tu transformación con IA',
    description:
      'En 10-14 días: mapa operativo vivo, palancas de IA priorizadas y roadmap ejecutable. Agentes IA entrevistan al 100% de tu equipo. $2,500 USD, pago único.',
    canonical: `${SITE_URL}/lp/assessment`,
    noindex: true,
    source: 'src/pages/v2/AssessmentLanding.tsx',
  },

  // ── Confidencial: deck de inversionistas, nunca indexable ───────────────
  '/pitch': {
    title: 'Pitch Confidencial Sixteam.pro para Inversionistas',
    description:
      'Presentación confidencial de Sixteam.pro para inversionistas: problema, solución, tracción y equipo. Acceso por invitación.',
    canonical: `${SITE_URL}/pitch`,
    noindex: true,
    source: 'src/pages/v2/Pitch.tsx',
  },
};

/** Metadatos de una URL inexistente. Se sirve con status 404 y noindex. */
export const notFoundSeo = {
  title: 'Página no encontrada | Sixteam.pro',
  description:
    'La página que buscas no existe o cambió de dirección. Vuelve al inicio para explorar nuestras soluciones de CRM, automatizaciones e IA.',
  noindex: true,
};

/** Rutas que sirven un 301/302 en cliente. No deben entrar al sitemap. */
export const redirectRoutes = {
  '/servicios': '/soluciones',
  '/casos-exito': '/casos',
};

/** Normaliza la barra final para que `/precios/` y `/precios` sean la misma ruta. */
export const normalizePath = (pathname) => {
  const clean = (pathname || '/').split('?')[0].split('#')[0];
  const trimmed = clean.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

/** Devuelve la entrada SEO de una ruta, o undefined si la ruta no existe. */
export const resolveSeo = (pathname) => seoRoutes[normalizePath(pathname)];

/** Rutas que sí deben aparecer en el sitemap. */
export const sitemapRoutes = () =>
  Object.entries(seoRoutes).filter(
    ([, meta]) => meta.noindex !== true && meta.sitemap !== false
  );
