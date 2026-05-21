---
name: meta-auditoria
description: >
  Realiza una auditoría completa de una cuenta de Meta Ads (Facebook/Instagram).
  Evalúa 50+ checks en estructura, tracking, audiencias, creativos, presupuesto
  y rendimiento. Genera un score de salud 0-100 con prioridades de acción.
  Usar cuando el usuario pida: revisar la cuenta, qué está mal, por qué no convierte,
  auditoría, análisis de cuenta, diagnóstico de campañas.
triggers:
  - /meta auditoria
---

# Meta Auditoría — Diagnóstico Completo de Cuenta

Analiza sistemáticamente una cuenta de Meta Ads e identifica problemas críticos, oportunidades de mejora y Quick Wins. Entrega un score de salud y un plan de acción priorizado.

## Datos necesarios para la auditoría

```
Compartir lo siguiente (screenshots o copiar/pegar datos):

DATOS MÍNIMOS:
□ Estructura de campañas activas (nombres, objetivos)
□ Métricas de los últimos 30 días:
  - Gasto total
  - Impresiones / Alcance / Frecuencia
  - Clics / CTR
  - Conversiones (compras/leads) / CPA/CPL
  - ROAS (si e-commerce)
□ Estado del Pixel: ¿activo? ¿EMQ score? ¿CAPI configurado?
□ Screenshot del Ads Manager con campañas principales

DATOS ADICIONALES (para auditoría profunda):
□ Desglose por campaña/ad set/anuncio
□ Demografía de resultados (edad, género, dispositivo)
□ Informe de ubicaciones (placements)
□ Top 5 creativos por inversión y resultados
□ Historial de cambios recientes
```

## Sistema de scoring — META-ADS HEALTH SCORE

### Pesos por área

| Área | Peso | Descripción |
|------|------|-------------|
| Tracking (Pixel + CAPI) | 30% | Base de datos para optimización |
| Creativos | 25% | Motor de performance en 2026 |
| Estructura de cuenta | 20% | Organización y consolidación |
| Audiencias y targeting | 15% | Eficiencia del alcance |
| Presupuesto y pujas | 10% | Eficiencia del gasto |

**Scoring:**
- 80-100: Cuenta saludable ✅
- 60-79: Necesita mejoras moderadas 🟡
- 40-59: Problemas significativos 🟠
- 0-39: Crítico, reconstruir 🔴

## Checklist de auditoría — 50 checks

### A. TRACKING — Pixel y CAPI (30 puntos)

**Instalación del Pixel (10 pts)**
```
□ [2pts] Pixel instalado en todas las páginas del sitio
□ [2pts] Evento PageView disparando correctamente
□ [2pts] Eventos estándar configurados (ViewContent, AddToCart, Purchase/Lead)
□ [2pts] Sin eventos duplicados o disparos múltiples
□ [2pts] Pixel en el dominio correcto verificado en Business Manager
```

**Conversions API — CAPI (10 pts)**
```
□ [3pts] CAPI configurado (vía servidor, GTM, o integración directa)
□ [3pts] Deduplicación correcta (event_id coincide entre Pixel y CAPI)
□ [2pts] Parámetros de cliente enviados (email hash, teléfono hash)
□ [2pts] EMQ Score ≥ 7.0 (ideal ≥ 8.0)
```

**Eventos de conversión (10 pts)**
```
□ [3pts] Evento de optimización principal configurado y disparando
□ [2pts] Suficientes conversiones para optimización (≥ 50 en 7 días)
□ [2pts] Ventana de conversión correcta (7d clic + 1d vista para ventas)
□ [2pts] Dominio verificado en Business Manager
□ [1pt]  Attribution comparación modelo Meta vs. GA4/analytics externo
```

### B. CREATIVOS (25 puntos)

**Diversidad y volumen (10 pts)**
```
□ [3pts] Mínimo 3 creativos activos por ad set relevante
□ [3pts] Mix de formatos (al menos video + imagen)
□ [2pts] Al menos 1 Reel/Story activo en la mezcla
□ [2pts] Creativos renovados en los últimos 30-45 días
```

**Calidad y performance (10 pts)**
```
□ [3pts] CTR promedio Feed ≥ 1.0% (ideal ≥ 1.5%)
□ [3pts] Hook rate de video ≥ 25% (visualizaciones 3s / impresiones)
□ [2pts] No hay creativos con frecuencia > 5 sin renovación
□ [2pts] Copy con hook claro en las primeras líneas
```

**Alertas de fatiga (5 pts)**
```
□ [2pts] Ningún creativo en fatiga (CTR caído > 30% semana a semana)
□ [2pts] CPM no subió > 40% en los últimos 14 días sin justificación
□ [1pt]  Al menos 1 test A/B activo (diferentes hooks o formatos)
```

### C. ESTRUCTURA DE CUENTA (20 puntos)

**Consolidación de campañas (8 pts)**
```
□ [4pts] No más de 5-7 campañas activas (para presupuesto < $1.000/mes)
□ [2pts] Nomenclatura consistente y descriptiva
□ [2pts] No hay campañas duplicadas o solapadas
```

**Fases de aprendizaje (7 pts)**
```
□ [3pts] Menos del 30% del gasto en ad sets en fase de aprendizaje
□ [2pts] Ad sets con Learning Limited identificados y en proceso de corrección
□ [2pts] Cambios estructurales hechos máx. 1 vez por semana por ad set
```

**Organización por funnel (5 pts)**
```
□ [2pts] Campañas separadas por temperatura (TOFU/MOFU/BOFU)
□ [2pts] Retargeting activo y separado de prospección
□ [1pt]  Exclusiones de audiencias configuradas entre campañas
```

### D. AUDIENCIAS Y TARGETING (15 puntos)

**Audiencias frías (5 pts)**
```
□ [2pts] Tamaño de audiencia adecuado (no < 200.000 para Colombia)
□ [2pts] Intereses relevantes y específicos al avatar
□ [1pt]  Lookalike configurado con seed de calidad
```

**Audiencias personalizadas (7 pts)**
```
□ [2pts] Custom audiences de visitantes web activas y actualizadas
□ [2pts] Retargeting de alta intención activo (carrito, lead form, etc.)
□ [2pts] Lista de clientes subida y actualizada
□ [1pt]  Seguidores de Instagram/Facebook incluidos en warm audience
```

**Frecuencia y overlap (3 pts)**
```
□ [1pt]  Frecuencia de prospección < 3.0/semana
□ [1pt]  Frecuencia de retargeting < 8.0/semana
□ [1pt]  No hay overlap significativo entre ad sets (usar Audience Overlap tool)
```

### E. PRESUPUESTO Y PUJAS (10 puntos)

**Distribución de presupuesto (5 pts)**
```
□ [2pts] Al menos 40% del presupuesto en campañas de conversión directa
□ [2pts] CBO activado en campañas principales (vs. ABO manual)
□ [1pt]  Límite de gasto de la cuenta configurado
```

**Estrategia de puja (5 pts)**
```
□ [2pts] Estrategia de puja apropiada al objetivo (Menor costo vs. Cost cap)
□ [2pts] CPA/CPL actual dentro del rango objetivo del cliente
□ [1pt]  No hay ad sets con presupuesto tan bajo que no salen del aprendizaje
       (mínimo: CPA objetivo × 5 eventos = presupuesto/día mínimo)
```

## Issues críticos — Diagnóstico automático

Evaluar y reportar si se detectan estos problemas:

```
🚨 CRÍTICO (corregir esta semana):
- Pixel no instalado o sin eventos de conversión
- EMQ < 5.0 (señales de cliente muy débiles)
- CAPI no configurado en cuenta con > $500/mes
- CPA > 3x el objetivo sin tendencia de mejora
- Todas las campañas en Learning Limited
- Gasto activo en campañas sin conversiones en 14+ días
- Dominio no verificado

⚠️ IMPORTANTE (corregir este mes):
- Solo 1 creativo por ad set
- Sin retargeting activo
- Frecuencia > 4.0 en audiencias frías
- CPM subió > 50% sin explicación
- Ad sets con < $10/día (insuficiente para aprendizaje)
- Sin lookalike configurado
- Campañas de awareness sin presupuesto defensible

💡 OPORTUNIDAD (próximas 4-6 semanas):
- No hay test A/B de creativos activo
- Advantage+ Audience no probado
- Reels no incluidos en el mix de formatos
- WhatsApp como destino no explorado (para mercado LATAM)
- Segmentación de clientes actuales no activa
```

## Quick Wins — Acciones de alto impacto rápido

Identificar y priorizar:

```
QUICK WIN 1 (< 2 horas para implementar):
[Acción específica, impacto esperado]

QUICK WIN 2:
[Acción específica, impacto esperado]

QUICK WIN 3:
[Acción específica, impacto esperado]
```

Ejemplos de quick wins comunes:
- "Excluir compradores actuales de campañas de prospección → reduce CPA estimado 15-25%"
- "Activar CAPI con integración de GTM → mejora EMQ de 5.2 a ≥ 7.0 esperado"
- "Duplicar el ad set ganador con nuevo creativo → amplía alcance sin resetear aprendizaje"
- "Cambiar ubicaciones de manual a Automáticas → reduce CPM 10-20% típicamente"

## Output de la auditoría

```markdown
# Auditoría Meta Ads — [Nombre Cliente]
**Fecha:** [fecha]  **Período analizado:** [rango]
**Analista Sixteam:** [nombre]

---

## META-ADS HEALTH SCORE: [XX]/100 [emoji color]

| Área | Puntos obtenidos | Máximo |
|------|-----------------|--------|
| Tracking (Pixel + CAPI) | /30 | 30 |
| Creativos | /25 | 25 |
| Estructura | /20 | 20 |
| Audiencias | /15 | 15 |
| Presupuesto/Pujas | /10 | 10 |
| **TOTAL** | **/100** | **100** |

---

## Hallazgos críticos 🚨
[Lista de issues críticos encontrados]

## Hallazgos importantes ⚠️
[Lista de issues importantes]

## Oportunidades 💡
[Lista de oportunidades identificadas]

---

## Plan de acción priorizado

### Semana 1 — Acciones inmediatas
| Acción | Área | Impacto esperado | Responsable |
|--------|------|-----------------|-------------|

### Semana 2-3 — Optimizaciones
| Acción | Área | Impacto esperado | Responsable |

### Mes 2 — Mejoras estratégicas
[Lista de mejoras de mediano plazo]

---

## Métricas actuales vs. benchmark

| Métrica | Cuenta actual | Benchmark LATAM | Estado |
|---------|--------------|-----------------|--------|
| CTR | | 1.5-2.5% | |
| CPM | | $4.000-8.000 COP | |
| ROAS | | ≥ 3x | |
| EMQ Score | | ≥ 7.0 | |
| Frecuencia | | < 3.0/sem | |

---

*Auditoría realizada por Sixteam.pro*
```
