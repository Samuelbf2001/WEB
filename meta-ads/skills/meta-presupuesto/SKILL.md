---
name: meta-presupuesto
description: >
  Calcula y distribuye el presupuesto de Meta Ads. Define la asignación por
  campaña y funnel, presupuesto mínimo viable por objetivo, proyecciones de ROAS
  y CPA, y reglas de escalamiento. Incluye calculadora de KPIs para Colombia y LATAM.
  Usar cuando el usuario pida: cuánto invertir, cómo distribuir el presupuesto,
  proyecciones, cuánto gastar, ROAS esperado, CPA estimado.
triggers:
  - /meta presupuesto
---

# Meta Presupuesto — Distribución y Proyecciones

Define cómo distribuir el presupuesto de forma inteligente y proyecta los resultados esperados. Todo basado en benchmarks reales de Colombia y LATAM 2025-2026.

## Datos necesarios

```
Para calcular el presupuesto necesito:

1. Presupuesto mensual total disponible (COP o USD)
2. Objetivo principal (ventas, leads, tráfico, reconocimiento)
3. Ticket promedio o valor del servicio (si aplica)
4. CPA o ROAS objetivo (si tienen referencia o historial)
5. ¿Cuenta nueva o con historial?
6. ¿Tienen datos de conversión históricos? (CPA/CPL actual)
7. Mercado: ¿solo Colombia o también otros países?
```

## Presupuestos mínimos viables por objetivo

### Regla del presupuesto de aprendizaje

Meta necesita mínimo **50 eventos de optimización en 7 días** por ad set para salir de la fase de aprendizaje. El presupuesto mínimo por ad set se calcula:

```
Presupuesto mínimo/día = CPA objetivo × 5 / 7

Ejemplos:
- CPA objetivo $50.000 COP → mínimo $35.700 COP/día (~$9 USD)
- CPA objetivo $100.000 COP → mínimo $71.400 COP/día (~$18 USD)
- CPA objetivo $200.000 COP → mínimo $142.800 COP/día (~$36 USD)
- CPA objetivo $50 USD → mínimo $36 USD/día
```

### Presupuestos mínimos por tipo de campaña

| Objetivo | Presupuesto mínimo/día | Presupuesto mínimo/mes |
|----------|----------------------|----------------------|
| Reconocimiento | $5-10 USD | $150-300 USD |
| Tráfico web | $5-15 USD | $150-450 USD |
| Generación de leads | $15-30 USD | $450-900 USD |
| Ventas/Conversiones | $20-50 USD | $600-1.500 USD |
| Mensajes WhatsApp | $10-20 USD | $300-600 USD |

**Nota LATAM:** Estos valores son más bajos que mercados anglosajones. En Colombia el CPM es 50-70% menor que en EE.UU.

## Distribución por funnel (regla 70/20/10)

### Distribución base

```
70% → Campañas de CONVERSIÓN (lo que genera resultados directos)
20% → Campañas de CONSIDERACIÓN (lead nurturing, retargeting cálido)
10% → Campañas de AWARENESS (construcción de audiencias futuras)
```

### Distribución avanzada por presupuesto

| Presupuesto/mes | TOFU (Awareness) | MOFU (Consideración) | BOFU (Conversión) |
|-----------------|-----------------|---------------------|-------------------|
| < $300 USD | 0% | 10% | 90% |
| $300-600 USD | 10% | 20% | 70% |
| $600-1.500 USD | 15% | 20% | 65% |
| $1.500-5.000 USD | 20% | 25% | 55% |
| > $5.000 USD | 25% | 25% | 50% |

**Lógica:** Con presupuesto bajo, concentrar todo en conversión directa. Con más presupuesto, construir el funnel completo.

## Calculadora de proyecciones — Colombia

### Para e-commerce

```
INPUTS:
- Presupuesto mensual: $____ USD
- Ticket promedio: $____ USD/COP
- ROAS objetivo: ____x

CÁLCULO:
Ventas proyectadas = Presupuesto × ROAS objetivo
CPA máximo = Ticket promedio ÷ ROAS objetivo
Conversiones estimadas = Presupuesto ÷ CPA máximo

RANGOS REALISTAS (Colombia, 2025-2026):
- CPM promedio: $1.5-3 USD (Fashion, Belleza, General)
- CTR promedio Feed: 1.2-2.5%
- Tasa de conversión landing: 1-3% (frío) / 3-8% (cálido)
- ROAS promedio: 2.5-5x (depende mucho del producto y del creativo)
```

**Ejemplo calculadora e-commerce:**
```
Presupuesto: $500 USD/mes
Ticket promedio: $80 USD
ROAS objetivo: 3x

→ Ventas proyectadas: $500 × 3 = $1.500 USD en ventas
→ CPA máximo: $80 ÷ 3 = $26.7 USD por compra
→ Conversiones estimadas: $500 ÷ $26.7 = ~18-19 compras/mes

Con CPM $2.5 USD → ~200.000 impresiones/mes
Con CTR 1.5% → ~3.000 clics al sitio
Con tasa conversión 0.7% → ~21 compras ✓ (alineado)
```

### Para generación de leads (servicios)

```
INPUTS:
- Presupuesto mensual: $____ USD
- CPL objetivo: $____ USD/COP
- Tasa de cierre: ____%
- Ticket del servicio: $____ USD/COP

CÁLCULO:
Leads estimados = Presupuesto ÷ CPL objetivo
Clientes cerrados = Leads × Tasa de cierre
Revenue generado = Clientes × Ticket
ROI = (Revenue - Presupuesto) ÷ Presupuesto × 100
```

**Ejemplo calculadora leads:**
```
Presupuesto: $600 USD/mes
CPL objetivo: $8 USD (lead calificado)
Tasa de cierre: 20%
Ticket: $150 USD (servicio mensual)

→ Leads estimados: $600 ÷ $8 = 75 leads/mes
→ Clientes nuevos: 75 × 20% = 15 clientes
→ Revenue mensual generado: 15 × $150 = $2.250 USD
→ ROI: ($2.250 - $600) ÷ $600 × 100 = 275% ROI

(Esto es ROI en el primer mes; en servicios recurrentes
el LTV hace que el ROI real sea mucho mayor)
```

### Para negocios locales (tráfico/mensajes)

```
Presupuesto: $200 USD/mes (~$6.7/día)
Objetivo: Mensajes WhatsApp

CPM estimado Bogotá: $1.5 USD
→ Impresiones/mes: ~133.000
→ Con CTR 1%: ~1.330 clics
→ Tasa mensaje desde clic: ~20-30%
→ Mensajes estimados: ~266-400 consultas/mes

Costo por mensaje: ~$0.50-0.75 USD (~$2.000-3.000 COP) ✓
```

## Benchmarks actualizados — Colombia y LATAM 2025-2026

### CPM por vertical (Colombia)

| Vertical | CPM bajo | CPM promedio | CPM alto |
|----------|---------|-------------|---------|
| General (amplio) | $1 USD | $2-3 USD | $5 USD |
| Fashion/Belleza | $1.5 USD | $3-4 USD | $7 USD |
| Tecnología | $2 USD | $3.5-5 USD | $8 USD |
| Finanzas | $3 USD | $5-7 USD | $12 USD |
| Salud | $2 USD | $4-6 USD | $10 USD |
| B2B/Servicios | $2.5 USD | $4-6 USD | $9 USD |
| Educación | $1.5 USD | $2.5-4 USD | $6 USD |

### CPA y CPL referencia (Colombia)

| Tipo de negocio | CPL/CPA bajo | CPL/CPA promedio | CPL/CPA alto |
|----------------|-------------|-----------------|-------------|
| E-commerce $50-100 ticket | $5 | $15-25 | $40 |
| E-commerce $100-300 ticket | $15 | $30-50 | $80 |
| Servicios B2C (lead) | $3 | $8-15 | $25 |
| Servicios B2B (lead) | $10 | $20-40 | $80 |
| Inmobiliario (lead) | $15 | $30-60 | $120 |
| Educación (lead) | $5 | $10-20 | $40 |
| Salud (lead) | $5 | $12-25 | $50 |

## Reglas de escalamiento

### Cuándo escalar (aumentar presupuesto)
```
✅ ROAS ≥ objetivo por 7 días consecutivos
✅ CPA ≤ objetivo por 7 días consecutivos
✅ Frecuencia < 3.0 (hay espacio en la audiencia)
✅ Ad set salió de Learning y está estable
✅ Los mejores creativos tienen CTR ≥ 1.5%
```

### Cómo escalar (sin romper el aprendizaje)
```
Método seguro: Aumentar máximo 20-30% del presupuesto cada 3-4 días

Ejemplo:
Día 1-7: $20/día → estable y rentable
Día 8: subir a $25/día (+25%)
Día 11: subir a $30/día (+20%) si sigue OK
Día 14: subir a $37/día (+23%) si sigue OK

❌ NO hacer: doblar presupuesto de un día para otro
❌ NO hacer: cambiar audiencia Y presupuesto el mismo día
❌ NO hacer: escalar si están en Learning Limited
```

### Método de duplicación (escala sin reset)
```
En lugar de aumentar el presupuesto del ad set ganador,
duplicar el ad set con el nuevo presupuesto más alto.
Ventaja: El original sigue corriendo, el duplicado empieza
con el historial del original como referencia para Meta.
```

### Cuándo reducir o pausar
```
🔴 PAUSAR si:
- CPA > 3x objetivo por 7+ días sin mejora
- CTR < 0.3% después de 5.000 impresiones
- 0 conversiones con > $50 gastados (para CPA objetivo < $30)
- Presupuesto agotado antes del fin del día consistentemente
  (indica que la audiencia está saturada o CPM subió mucho)

🟡 REDUCIR si:
- Frecuencia > 5.0 en prospección (saturación)
- CPM subió > 60% sin explicación
- ROAS cayó > 40% dos semanas consecutivas
```

## Output de este skill

```markdown
# Plan de Presupuesto Meta Ads — [Nombre Cliente]
**Presupuesto mensual total:** $[monto] USD / $[monto] COP
**Período:** [mes/año]

## Distribución de presupuesto

| Campaña | Objetivo | Presupuesto/día | Presupuesto/mes | % del total |
|---------|---------|----------------|----------------|------------|

**Total:** $[monto]/día | $[monto]/mes

## Proyecciones de resultados

| Métrica | Escenario conservador | Escenario realista | Escenario optimista |
|---------|---------------------|------------------|-------------------|
| Leads/Ventas | | | |
| CPA/CPL | | | |
| ROAS | | | |
| Revenue generado | | | |

## Presupuesto mínimo por ad set

| Ad Set | Presupuesto mínimo/día | Justificación |
|--------|----------------------|--------------|

## Reglas de escalamiento

Trigger para escalar: [condición específica]
Monto a escalar: [% o valor fijo]
Frecuencia de revisión: [diario/semanal]

## Señales de alerta

[Lista de métricas que triggearán ajuste de presupuesto]
```
