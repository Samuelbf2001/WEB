/**
 * Preguntas frecuentes del home.
 *
 * Vive aquí y no dentro del componente porque `seo-schema.js` genera con ellas
 * el bloque FAQPage que sirve el servidor. El marcado tiene que coincidir
 * literalmente con lo que ve el usuario, y con una sola copia no puede
 * desincronizarse.
 */
export const homeFaqs = [
  {
    q: "¿Cómo arranca trabajar con Sixteam?",
    a: "Por el Diagnóstico Sixteam. Son 2 semanas, $2,500 USD único. Mapeamos cómo opera hoy tu parte comercial, marketing y servicio; te entregamos el roadmap priorizado; y dejamos la plataforma base montada. Después decides si quieres que la operemos mes a mes, pero no es obligatorio. ~50% de los clientes continúan en Ops.",
  },
  {
    q: "¿Cuánto cuesta operar con ustedes mes a mes?",
    a: "Después del Diagnóstico, los planes de Ops son Esencial (regular $300 USD/mes, promo desde $199 USD/mes por 20 cupos), Integral ($499 USD/mes) y Total (desde $1,200 USD/mes, a cotizar según requerimientos). Integral tiene precio público y Total se define por alcance. Facturamos mensual y puedes ajustar el plan con 30 días de aviso.",
  },
  {
    q: "¿En qué se diferencian de una agencia de marketing o CRM?",
    a: "La agencia implementa y se va. Nosotros implementamos Y nos quedamos operando lo que montamos. Si algo se rompe, lo arreglamos. Si tu equipo cambia, entrenamos al nuevo. Operamos las 3 áreas (comercial, marketing y servicio) en un solo contrato. Esa es toda la diferencia, y es la única que importa.",
  },
  {
    q: "¿Trabajan con cualquier CRM o solo con HubSpot/GoHighLevel?",
    a: "Operamos sobre lo que ya tienes: HubSpot, Pipedrive, Salesforce, GoHighLevel, GHL, o un stack custom con Make/n8n. Si tu setup actual sirve, lo operamos; si no, en el Diagnóstico te decimos qué cambiar y por qué. No vendemos licencias.",
  },
  {
    q: "¿Para qué tipo de empresa funciona Sixteam?",
    a: "Empresas que facturan entre $300K y $8M USD/año, con equipo de 5 a 30 personas, en uno de tres verticales donde ya tenemos playbooks: (1) agencias de viaje y turismo, (2) servicios profesionales con cita (salud, legal, estético, contable) y (3) inmobiliarias y constructoras. Si tu negocio no encaja, el Diagnóstico lo evalúa; si no calza, no lo tomamos.",
  },
  {
    q: "¿Quién opera mi cuenta, ustedes o un junior?",
    a: "Samuel y Ernesto, todo el tiempo. No hay rotación de cuenta ni handoff a juniors. Más 6 agentes IA especializados (Alfa, Bravo, Charlie, Delta, Echo, Foxtrot) que ejecutan lo cotidiano 24/7. El criterio senior es responsabilidad personal, no un escalado interno.",
  },
  {
    q: "¿Y si después de un mes no me gusta?",
    a: "Garantía de 30 días money-back en el primer mes de Ops. Y si después de los 30 días quieres cancelar, te puedes ir cuando quieras sin penalidad. El Diagnóstico no es reembolsable porque te quedas con el mapa y la plataforma (entregables tangibles), pero no hay ninguna obligación de continuar.",
  },
];
