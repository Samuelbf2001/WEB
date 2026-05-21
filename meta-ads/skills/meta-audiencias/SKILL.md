---
name: meta-audiencias
description: >
  Define y construye la estrategia de audiencias para Meta Ads. Crea la segmentación
  completa: audiencias frías (intereses, comportamientos, demografía), audiencias
  personalizadas (Custom Audiences) y audiencias similares (Lookalikes). Incluye
  recomendaciones específicas para Colombia y LATAM.
  Usar cuando el usuario pida: audiencias para Meta, cómo segmentar, a quién llegar,
  targeting, intereses, lookalike, Advantage+.
triggers:
  - /meta audiencias
---

# Meta Audiencias — Estrategia de Segmentación

Define la arquitectura de audiencias completa para la cuenta. En 2026, con Andromeda y GEM operando sobre señales de comportamiento, la estrategia de audiencias es la segunda palanca más importante después de los creativos.

## Los tres niveles de temperatura

```
FRÍAS — No conocen la marca
├── Intereses y comportamientos
├── Demografía específica
└── Lookalike de clientes

CÁLIDAS — Tuvieron alguna interacción
├── Seguidores de Instagram/Facebook
├── Visualizadores de video (25%, 50%, 75%)
├── Personas que interactuaron con anuncios
└── Visitantes web (> 30 días)

CALIENTES — Alta intención de compra
├── Visitantes web (< 30 días)
├── Add to cart / Initiate checkout
├── Leads no convertidos
└── Clientes actuales (para upsell)
```

## Audiencias Frías — Intereses y Comportamientos

### Metodología para identificar intereses

**Paso 1 — Perfil del cliente ideal**
Definir el avatar del cliente respondiendo:
- ¿Qué edad tiene? ¿Dónde vive?
- ¿Qué hace en su tiempo libre?
- ¿Qué marcas usa o admira?
- ¿Qué páginas sigue en redes sociales?
- ¿Qué problemas tiene que el producto/servicio resuelve?
- ¿Cuál es su nivel socioeconómico?

**Paso 2 — Capas de intereses (regla del AND)**
En lugar de poner muchos intereses en un solo ad set, crear ad sets separados por "capa" para identificar qué funciona mejor:

```
Ad Set A: Intereses DIRECTOS (la categoría del producto)
  Ej. para nutricionista: "Nutrición", "Dietética", "Pérdida de peso"

Ad Set B: Intereses de COMPETIDORES/MARCAS RELACIONADAS
  Ej: "MyFitnessPal", "Herbalife", "Naturalmente"

Ad Set C: Intereses de ESTILO DE VIDA ASOCIADO
  Ej: "Vida saludable", "Yoga", "CrossFit", "Gym"

Ad Set D: Intereses TRANSACCALES (compradores activos)
  Ej: "Compras online frecuentes", "Engaged shoppers"
```

### Intereses por vertical — Colombia/LATAM

**E-commerce fashion/belleza:**
```
Directos: Moda, Ropa, Calzado, Belleza, Maquillaje
Marcas: Zara, H&M, Arturo Calle, Studio F, Mac Cosmetics
Lifestyle: Blogueras de moda, Tendencias, Street style
Comportamiento: Compradores online frecuentes
```

**Servicios financieros/inversión:**
```
Directos: Finanzas personales, Inversión, Bolsa de valores
Marcas: Bancolombia, Davivienda, Nequi, Rappi Pay
Lifestyle: Emprendimiento, Negocios, Libertad financiera
Demografía: Profesionales 25-45 años, estratos 4-6
```

**Salud y bienestar:**
```
Directos: Salud, Medicina, Bienestar
Marcas: Colsanitas, Sura, Cruz Verde
Lifestyle: Fitness, Meditación, Comida saludable
Comportamiento: Padres de familia, profesionales
```

**Educación/cursos online:**
```
Directos: Educación, E-learning, Capacitación
Plataformas: Platzi, Coursera, Udemy, LinkedIn Learning
Lifestyle: Crecimiento personal, Emprendimiento
Comportamiento: Padres de familia, recién graduados
```

**B2B/Servicios empresariales:**
```
Cargo: CEO, Gerente, Director, Emprendedor
Industria: según el servicio
Empresa: tamaño según ICP
Comportamiento: Administradores de negocios, Tomadores de decisión
```

### Tamaños de audiencia recomendados

| Mercado | Tamaño mínimo | Tamaño óptimo |
|---------|--------------|---------------|
| Bogotá | 200.000 | 500K - 2M |
| Medellín | 100.000 | 300K - 1M |
| Colombia completa | 500.000 | 1M - 5M |
| LATAM | 1M | 3M - 15M |

**Regla:** Si el tamaño es < 200.000, la audiencia es demasiado restrictiva → ampliar o combinar con Advantage+.

## Audiencias Personalizadas (Custom Audiences)

### Prioridades de configuración

**Alta prioridad (configurar desde el día 1):**
```
1. Tráfico web — Todos los visitantes (180 días)
2. Tráfico web — Visitantes de página clave (30 días)
   Ej: página de precios, producto específico, contacto
3. Seguidores de Instagram (si tienen cuenta activa)
4. Lista de clientes (CSV: email + teléfono)
```

**Media prioridad (configurar en semana 2-3):**
```
5. Add to cart (ecomm) / Formulario iniciado (leads) — 30 días
6. Inicio de pago (ecomm) — 30 días
7. Visualizadores de video 75% — 90 días
8. Personas que interactuaron con anuncios — 30 días
```

**Baja prioridad / Avanzado:**
```
9. Compradores anteriores — para exclusión o upsell
10. Visitantes de blog/contenido — para MOFU
11. Usuarios de app — si aplica
```

### Ventanas de tiempo para retargeting

| Tipo de visitante | Ventana recomendada | Creativos a usar |
|-------------------|--------------------|--------------------|
| Add to cart | 3-7 días | Urgencia, recordatorio |
| Visitante página producto | 14 días | Beneficios, prueba social |
| Visitante web general | 30 días | Contenido de valor |
| Interacción con perfil | 60 días | Reconocimiento de marca |
| Visualizó video 75% | 90 días | Oferta, conversión |

### Exclusiones importantes
```
SIEMPRE excluir de campañas de prospección:
□ Compradores recientes (últimos 30-60 días)
□ Leads ya convertidos (si aplica)
□ Visitantes recientes de alta intención (ya los trabajas en BOFU)

SIEMPRE excluir de retargeting de carrito:
□ Compradores de los últimos 14 días
```

## Audiencias Similares (Lookalike)

### Reglas de oro para Lookalikes

1. **Calidad del seed antes que nada**: Un Lookalike es tan bueno como la audiencia fuente. Prioridad:
   - Compradores > Leads calificados > Visitantes que convirtieron > Todos los visitantes

2. **Tamaño mínimo del seed**: 1.000 personas en el mismo país. Lo ideal: 2.000-5.000+.

3. **Porcentajes y cuándo usarlos**:

| % Lookalike | Similitud | Tamaño aprox (Colombia) | Uso recomendado |
|-------------|-----------|------------------------|-----------------|
| 1% | Muy alta | ~100.000-150.000 | Primer test, mejor calidad |
| 2% | Alta | ~200.000-300.000 | Escalar si 1% funciona |
| 3-5% | Media | ~300.000-500.000 | Ampliar alcance |
| 5-10% | Baja | ~500.000-1M+ | Solo para escala masiva |

4. **Colombia + LATAM simultáneo**: Si el cliente quiere alcanzar varios países, crear Lookalikes separados por país o usar el pool regional.

### Seeds recomendados por objetivo

```
Para VENTAS:
1er seed: Lista de compradores (CSV)
2do seed: Evento de compra (Pixel)
3er seed: Add to cart (si hay pocos compradores)

Para LEADS:
1er seed: CRM de leads calificados (CSV)
2do seed: Evento de lead (Pixel)
3er seed: Visitantes de página de thank you

Para ENGAGEMENT:
1er seed: Seguidores de Instagram
2do seed: Visualizadores de video 75%
```

## Advantage+ Audience (2026)

### Cuándo usar Advantage+ Audience

**Usar cuando:**
- El cliente tiene Pixel con al menos 500 eventos de conversión históricos
- Se quiere escalar más allá de las audiencias definidas manualmente
- Presupuesto > $30/día por ad set
- La cuenta tiene más de 3 meses de historial

**Configuración recomendada:**
```
Advantage+ Audience ACTIVADO
├── Audience controls (restricciones):
│   ├── Ubicación: Colombia (o países específicos)
│   ├── Edad mínima: según el producto (18+, 25+, etc.)
│   └── Idioma: Español (si aplica)
│
└── Audience suggestions (sugerencias de ayuda):
    ├── Subir custom audiences existentes como guía
    └── Agregar intereses clave como referencia
    (Meta puede ir más allá de estas sugerencias)
```

**No usar cuando:**
- Cuenta nueva sin historial de conversiones
- Producto muy nicho o regulado (servicios financieros, salud)
- Segmentación B2B por cargo (usar intereses específicos)

## Estrategia de Audiencias LATAM específica

### Diferencias clave vs. mercados anglosajones

| Factor | LATAM | EE.UU./Europa |
|--------|-------|---------------|
| Adopción WhatsApp | ≥ 80% usuarios | < 30% |
| Facebook vs Instagram | Más equilibrado | Instagram domina jóvenes |
| E-commerce trust | Menor, requiere más social proof | Mayor |
| Precios/Poder adquisitivo | Menor, más sensibilidad al precio | Mayor |
| Horarios de uso | 7-9am y 7-11pm | Más distribuido |

### Consideraciones por país

**Colombia:**
- Instagram muy popular en 18-35 años urbanos
- Facebook sigue fuerte en 35+ y mercados secundarios
- WhatsApp click-to-chat muy efectivo para leads
- Estratos 4-6 en ciudades principales = mayor poder adquisitivo

**México:**
- Mayor tamaño de mercado (3-4x Colombia)
- Instagram Reels con muy alto engagement
- Mercado sensible a precios, descuentos funcionan bien

**Argentina:**
- Economía cambiante: cuidar CPM en pesos
- Alta alfabetización digital, usuarios exigentes con creativos

**Chile:**
- CPC y CPM más alto que Colombia, pero mejor poder adquisitivo
- Mercado pequeño, audiencias se saturan rápido

## Output de este skill

Generar documento:

```markdown
# Estrategia de Audiencias — [Nombre Cliente]

## Audiencias Frías a crear
| Nombre (nomenclatura) | Descripción | Tamaño estimado | Prioridad |
|-----------------------|-------------|-----------------|-----------|

## Audiencias Personalizadas a configurar
| Nombre | Fuente | Ventana | Evento/Acción | Prioridad |
|--------|--------|---------|---------------|-----------|

## Lookalikes a crear
| Nombre | Seed | % | País | Tamaño est. |
|--------|------|---|------|------------|

## Exclusiones
[Lista de exclusiones por campaña]

## Configuración de Advantage+
[Cuándo activar y con qué parámetros]

## Próximos pasos
□ [Acción 1] — Responsable — Fecha
□ [Acción 2] — Responsable — Fecha
```
