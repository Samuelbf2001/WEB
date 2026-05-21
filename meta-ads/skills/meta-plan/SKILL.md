---
name: meta-plan
description: >
  Genera una estrategia completa de Meta Ads (Facebook/Instagram) para un cliente.
  Define objetivos de negocio, funnel de conversión, mix de campañas, KPIs por etapa,
  cronograma de lanzamiento y proyecciones. Enfocado en Colombia y LATAM.
  Usar cuando el usuario pida: plan de pauta, estrategia de Meta Ads, cómo invertir en
  Facebook, qué campañas hacer, plan de medios digital.
triggers:
  - /meta plan
---

# Meta Plan — Estrategia Completa de Meta Ads

Genera un plan estratégico de Meta Ads personalizado para el cliente. El resultado es un documento de estrategia listo para presentar y ejecutar.

## Proceso de intake

Solicitar si no se ha provisto:

```
Para crear tu plan de Meta Ads necesito entender el negocio:

1. ¿Qué vende o qué servicio ofrece? (producto, precio, ticket promedio)
2. ¿Cuál es el objetivo principal? (ventas online, leads, visitas a tienda, app)
3. ¿Cuánto presupuesto mensual tienen para pauta? (COP o USD)
4. ¿Cuál es el mercado objetivo? (ciudad, edad, intereses, nivel socioeconómico)
5. ¿Tienen web/landing page activa? ¿Pixel instalado?
6. ¿Han pautado antes en Meta? ¿Tienen historial o datos de CPA/ROAS previos?
7. ¿Cuáles son los principales competidores?
```

## Framework de estrategia: FUNNEL LATAM

### Etapa 1 — DESCUBRIMIENTO (TOFU)
**Objetivo Meta**: Reconocimiento / Tráfico / Reproducciones de video
**Audiencia**: Fría — intereses, comportamientos, lookalikes 1-3%
**Presupuesto sugerido**: 20-30% del total
**KPIs**: CPM, Alcance, Frecuencia, Costo por visita

### Etapa 2 — CONSIDERACIÓN (MOFU)
**Objetivo Meta**: Tráfico / Interacción / Leads / Mensajes
**Audiencia**: Cálida — visitantes web, interacción con perfil, visualizadores de video
**Presupuesto sugerido**: 20-30% del total
**KPIs**: CTR, CPC, CPL, tasa de engagement

### Etapa 3 — CONVERSIÓN (BOFU)
**Objetivo Meta**: Ventas / Leads / Mensajes WhatsApp
**Audiencia**: Caliente — retargeting, add to cart, inició pago, lista de clientes
**Presupuesto sugerido**: 40-60% del total
**KPIs**: CPA, ROAS, Tasa de conversión, Costo por lead calificado

## Templates por tipo de negocio

### 🛒 E-commerce (tienda online)
```
FUNNEL RECOMENDADO:
├── Campaña 1: TOFU — Video/Carrusel de productos (20%)
│   └── Ad Set 1: Audiencia fría por intereses
│   └── Ad Set 2: Lookalike 1% de compradores
├── Campaña 2: BOFU — Ventas dinámica ASC (60%)
│   └── Ad Set: Advantage+ Shopping Campaign
├── Campaña 3: RETARGETING — Catálogo dinámico (20%)
│   └── Ad Set: Visitantes web últimos 30 días

KPIs objetivo LATAM:
- ROAS: ≥ 3x (conservador) / ≥ 5x (optimista)
- CPA: ≤ 15-20% del ticket promedio
- CTR (Feed): ≥ 1.5%
- CPM Colombia: $3.000 - $8.000 COP / $1-3 USD
```

### 🎯 Generación de Leads (servicios/B2B)
```
FUNNEL RECOMENDADO:
├── Campaña 1: AWARENESS — Contenido educativo (25%)
│   └── Ad Set: Audiencia fría por cargo, empresa, intereses
├── Campaña 2: LEADS — Formulario nativo o WhatsApp (55%)
│   └── Ad Set 1: Lookalike de clientes actuales
│   └── Ad Set 2: Retargeting visitas web
├── Campaña 3: NUTRICIÓN — Contenido de confianza (20%)
│   └── Ad Set: Leads anteriores no convertidos

KPIs objetivo LATAM:
- CPL: depende del ticket (máx. 5-10% del valor del servicio)
- Tasa de contacto: ≥ 40% de los leads
- Leads calificados/total: ≥ 30%
```

### 🏪 Negocio Local (restaurante, clínica, tienda física)
```
FUNNEL RECOMENDADO:
├── Campaña 1: RECONOCIMIENTO LOCAL — Alcance (30%)
│   └── Ad Set: Radio 5-10km del establecimiento
├── Campaña 2: TRÁFICO / MENSAJES (50%)
│   └── Ad Set: Interesados en la categoría del negocio
│   └── Ad Set: Retargeting visitas
├── Campaña 3: EVENTOS / PROMOCIONES (20%)
│   └── Ad Set: Base de clientes + lookalike

KPIs objetivo:
- Costo por mensaje: $500-2.000 COP
- Alcance semanal: 3-5x el mercado objetivo estimado
- Frecuencia: 2-4 por semana
```

### 📱 SaaS / Aplicación
```
FUNNEL RECOMENDADO:
├── Campaña 1: APP INSTALLS — Advantage+ App (40%)
│   └── Ad Set: Audiencia amplia + Advantage+
├── Campaña 2: LEADS / TRIAL — Formulario (35%)
│   └── Ad Set: Cargo/industria objetivo
│   └── Ad Set: Lookalike de usuarios activos
├── Campaña 3: RETENCIÓN (25%)
│   └── Ad Set: Usuarios inactivos (Custom audience app)
```

### 🎓 Educación / Cursos
```
FUNNEL RECOMENDADO:
├── Campaña 1: VIDEO EDUCATIVO — Reproducciones (20%)
│   └── Ad Set: Audiencia interesada en el tema
├── Campaña 2: LEADS PARA WEBINAR/INFO (45%)
│   └── Ad Set: Lookalike de estudiantes
│   └── Ad Set: Retargeting visualizadores
├── Campaña 3: CONVERSIÓN DIRECTA (35%)
│   └── Ad Set: Caliente — leads no convertidos, visitantes página de venta
```

## Cronograma de lanzamiento (4 semanas)

```
SEMANA 1 — Preparación
□ Verificar Pixel + CAPI instalados y disparando correctamente
□ Configurar eventos de conversión prioritarios
□ Crear/revisar audiencias personalizadas
□ Preparar mínimo 3 creativos por ad set
□ Configurar UTMs para tracking externo
□ Revisar/configurar método de pago y límites

SEMANA 2 — Lanzamiento conservador
□ Lanzar campaña BOFU primero (mayor ROAS inmediato)
□ Presupuesto inicial: 50% del presupuesto objetivo
□ Monitoreo diario: primeras 48-72 horas críticas
□ No hacer cambios durante primera semana (fase de aprendizaje)

SEMANA 3 — Optimización temprana
□ Analizar primeros datos: CPM, CTR, CPA inicial
□ Pausar creativos con CTR < 0.5% (Feed)
□ Ajustar audiencias si hay problemas de alcance
□ Lanzar campaña TOFU si presupuesto lo permite

SEMANA 4 — Escala o pivote
□ Evaluar performance vs. KPIs objetivos
□ Duplicar ad sets ganadores con presupuesto incrementado
□ Introducir nuevas creatividades basadas en datos
□ Presentar primer reporte al cliente con proyecciones
```

## Output del plan

Generar documento con esta estructura:

```markdown
# Plan Meta Ads — [Nombre Cliente]
**Fecha:** [fecha]  **Vigencia:** [mes/trimestre]

## Resumen ejecutivo
[2-3 párrafos: negocio, objetivo, approach]

## Estructura de campañas
[Tabla con campañas, objetivos, audiencias, presupuesto]

## KPIs objetivo
| Métrica | Conservador | Realista | Optimista |
|---------|------------|---------|----------|
| ROAS    |            |         |          |
| CPA     |            |         |          |
| CPL     |            |         |          |

## Distribución de presupuesto
[Tabla por campaña y % del total]

## Creativos necesarios
[Lista de formatos y cantidad mínima]

## Cronograma
[Semana 1-4 con acciones específicas]

## Próximos pasos
[Lista de acciones inmediatas con responsable]
```

## Benchmarks de referencia — Colombia 2025-2026

| Métrica | E-commerce | Servicios | Local |
|---------|-----------|-----------|-------|
| CPM (COP) | $4.000-9.000 | $3.000-7.000 | $2.500-5.000 |
| CTR Feed | 1.5-3% | 1-2.5% | 1-2% |
| CTR Stories/Reels | 0.5-1.5% | 0.5-1.2% | 0.5-1% |
| CPA típico | 10-20% ticket | Variable | $15.000-50.000 |
| ROAS objetivo | 3-6x | N/A | N/A |
