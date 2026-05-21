---
name: meta-estructura
description: >
  Construye la estructura completa de campañas de Meta Ads: campañas, ad sets y anuncios.
  Define jerarquía, nomenclatura, configuración de objetivos, presupuestos, segmentación
  y especificaciones técnicas de cada nivel. Output listo para implementar en Ads Manager.
  Usar cuando el usuario pida: armar campañas, estructura de campañas, cómo organizar
  la cuenta, naming convention, qué campañas crear.
triggers:
  - /meta estructura
---

# Meta Estructura — Armado de Campañas en Ads Manager

Construye la arquitectura completa de una cuenta de Meta Ads lista para implementar. El output es una hoja de ruta detallada que cualquier miembro del equipo puede seguir para configurar la cuenta.

## Información necesaria

```
Para armar la estructura necesito:

1. Objetivo de negocio principal (ventas, leads, tráfico, reconocimiento)
2. Presupuesto total mensual (COP o USD)
3. ¿Cuántos productos/servicios diferentes se van a pautar?
4. ¿Tienen catálogo de productos en Meta? (para e-commerce)
5. ¿Cuáles son las audiencias objetivo? (si ya las tienen identificadas)
6. ¿Hay eventos de conversión configurados en el Pixel?
7. ¿Qué formatos de creativos tienen disponibles? (video, imagen, carrusel)
```

## Jerarquía Meta Ads

```
CUENTA DE ANUNCIOS
│
├── CAMPAÑA (Campaign)
│   Define: Objetivo, Presupuesto a nivel campaña (CBO), Estrategia de puja
│
│   └── CONJUNTO DE ANUNCIOS (Ad Set)
│       Define: Audiencia, Presupuesto (ABO), Ubicaciones, Fechas, Optimización
│
│       └── ANUNCIO (Ad)
│           Define: Creativo, Copy, Titular, CTA, URL destino, UTM
```

## Convención de nomenclatura (Naming Convention)

### Campañas
```
[CLIENTE]_[OBJETIVO]_[FUNNEL]_[YYYYMM]

Ejemplos:
SIXTEAM_LEADS_BOFU_202601
TIENDA_VENTAS_TOFU_202601
CLINICA_MENSAJES_MOFU_202601
```

**Objetivos abreviados:**
- VEN = Ventas
- LEA = Leads
- TRA = Tráfico
- MEN = Mensajes (WhatsApp/Instagram)
- REC = Reconocimiento
- INT = Interacción
- APP = Instalaciones de app

**Funnel:**
- TOFU = Top of Funnel (Frío)
- MOFU = Middle of Funnel (Cálido)
- BOFU = Bottom of Funnel (Caliente/Retargeting)

### Conjuntos de anuncios (Ad Sets)
```
[AUDIENCIA]_[GEO]_[DISPOSITIVO]_[PRESUPUESTO/DÍA]

Ejemplos:
FRIA_INTERESES_BOG_ALL_$20
LOOKALIKE1%_COL_MOB_$15
RETARG_WEB30D_BOG_ALL_$10
LISTA_CLIENTES_COL_ALL_$5
```

**Audiencias abreviadas:**
- FRIA = Audiencia fría (intereses/comportamientos)
- LK1 = Lookalike 1%
- LK3 = Lookalike 3%
- LK5 = Lookalike 5%
- RETARG = Retargeting
- LISTA = Custom Audience (lista de clientes)
- ADVA = Advantage+ Audience

**Geo:**
- BOG = Bogotá
- MED = Medellín
- CAL = Cali
- COL = Colombia completa
- LAT = LATAM

### Anuncios (Ads)
```
[FORMATO]_[CONCEPTO]_[VERSIÓN]

Ejemplos:
VID_TESTIMONIAL_v1
IMG_OFERTA30_v2
CAR_PRODUCTOS_v1
REE_HOOK_DOLOR_v3
```

**Formatos:**
- VID = Video
- IMG = Imagen estática
- CAR = Carrusel
- REE = Reel
- STO = Story
- COL = Collection
- DIN = Dinámico (catálogo)

## Estructuras predefinidas por presupuesto

### 🔴 Presupuesto pequeño: < $300 USD/mes (~$10/día)
```
ESTRUCTURA MÍNIMA VIABLE:

Campaña 1: [CLIENTE]_VEN/LEA_BOFU_[MES] — CBO $10/día
│
├── Ad Set 1: ADVA_COL_ALL — Advantage+ Audience (recomendado)
│   │   Presupuesto: $6-7/día
│   │   Optimización: Compra / Lead / Mensaje
│   │
│   ├── Anuncio 1: VID_PROBLEMA_v1
│   ├── Anuncio 2: IMG_BENEFICIO_v1
│   └── Anuncio 3: REE_TESTIMONIAL_v1

NOTA: Con presupuesto bajo, ASC (Advantage+ Shopping) o 
un solo ad set amplio funciona mejor que múltiples ad sets.
```

### 🟡 Presupuesto medio: $300-$1.000 USD/mes (~$10-33/día)
```
ESTRUCTURA DOS CAMPAÑAS:

Campaña 1: [CLIENTE]_LEA/VEN_BOFU_[MES] — CBO $20/día (60%)
│
├── Ad Set 1: LK1_COL_ALL — Lookalike 1% compradores/leads
│   ├── Anuncio 1-3: Creativos de conversión directa
│
└── Ad Set 2: RETARG_WEB30D_COL_ALL — Retargeting web
    ├── Anuncio 1-3: Creativos con oferta/urgencia

Campaña 2: [CLIENTE]_TRA/INT_TOFU_[MES] — CBO $10/día (30%)
│
└── Ad Set 1: FRIA_INTERESES_COL_ALL — Audiencia fría
    ├── Anuncio 1-3: Creativos de awareness/valor

[Reserva 10% para testing de nuevos creativos]
```

### 🟢 Presupuesto completo: $1.000-$5.000 USD/mes (~$33-167/día)
```
ESTRUCTURA COMPLETA POR FUNNEL:

── TOFU (20-25% presupuesto) ──────────────────────────────

Campaña 1: [CLIENTE]_REC_TOFU_[MES] — CBO
├── Ad Set 1: FRIA_INTERESES_A — Segmento A
│   └── 3-5 creativos: Video/Reels educativos
└── Ad Set 2: FRIA_INTERESES_B — Segmento B  
    └── 3-5 creativos: Video/Reels de problema

── MOFU (20-25% presupuesto) ──────────────────────────────

Campaña 2: [CLIENTE]_TRA_MOFU_[MES] — CBO
├── Ad Set 1: VID75_COL — 75% video visto
│   └── 3 creativos: Contenido de consideración
└── Ad Set 2: INT_IG30D_COL — Interacción Instagram 30d
    └── 3 creativos: Social proof, casos de éxito

── BOFU (50-60% presupuesto) ──────────────────────────────

Campaña 3: [CLIENTE]_VEN/LEA_BOFU_FRIA_[MES] — CBO
├── Ad Set 1: LK1_COL — Lookalike 1% conversiones
│   └── 3-5 creativos: Beneficios directos + CTA
└── Ad Set 2: LK3_COL — Lookalike 3%
    └── 3-5 creativos: Variantes

Campaña 4: [CLIENTE]_VEN/LEA_BOFU_CALIENTE_[MES] — CBO
├── Ad Set 1: RETARG_WEB7D_COL — Visitantes 7 días
│   └── 3 creativos: Urgencia/Objeción
├── Ad Set 2: RETARG_WEB30D_COL — Visitantes 30 días
│   └── 3 creativos: Oferta/Beneficio
└── Ad Set 3: LISTA_CLIENTES_COL — Custom audience
    └── 3 creativos: Upsell/Cross-sell
```

## Configuración por nivel

### Configuración de Campaña

| Parámetro | Recomendación |
|-----------|--------------|
| Objetivo | Seleccionar según funnel (ver tabla abajo) |
| Presupuesto | CBO (a nivel campaña) — mejor distribución automática |
| Estrategia de puja | Menor costo (default) — cambiar a Cost cap solo con datos históricos |
| Límite de gasto | Configurar siempre para evitar sobregasto |
| Fecha fin | Solo si hay promoción con fecha límite |

**Tabla de objetivos de campaña:**
| Objetivo de negocio | Objetivo Meta recomendado |
|--------------------|-----------------------------|
| Ventas web | Ventas (Conversiones) |
| Leads / Formularios | Leads |
| Mensajes WhatsApp | Mensajes |
| Tráfico web | Tráfico (optimización: clics en enlace o visitas a landing) |
| Descargas de app | Instalaciones de app |
| Reconocimiento | Reconocimiento (Alcance máximo) |
| Visualizaciones video | Reproducciones de video (ThruPlay) |

### Configuración de Ad Set

| Parámetro | Configuración |
|-----------|--------------|
| Presupuesto | ABO solo si se quiere control manual; CBO es mejor opción |
| Audiencia | Ver `/meta audiencias` para configuración detallada |
| Ubicaciones | **Automáticas (Advantage+)** por defecto. Solo manual para casos específicos |
| Optimización | Según objetivo: compra, lead, clic en enlace, etc. |
| Ventana de conversión | Ventas: 7d clic + 1d vista. Leads: 1d clic |
| Programación | Siempre activo por defecto; programar solo si hay datos de horarios |
| Límite de frecuencia | Prospección: máx. 2-3/semana. Retargeting: máx. 6-8/semana |

### Configuración de Anuncio

| Parámetro | Detalle |
|-----------|---------|
| Formato | Video (priorizar Reels), Imagen, Carrusel |
| Texto principal | 125 chars visibles; copy completo 500-600 chars max |
| Titular | 40 chars max (lo que se ve en Feed) |
| Descripción | 30 chars (solo en Feed y algunas ubicaciones) |
| CTA | Según objetivo: "Comprar", "Más información", "Enviar mensaje", "Registrarse" |
| URL destino | Siempre con UTM configurado |
| URL de píxel | Verificar que el evento dispara correctamente |

## Especificaciones técnicas de creativos

| Formato | Dimensión | Duración | Peso máx | Recomendación |
|---------|-----------|----------|-----------|--------------|
| Imagen Feed | 1080x1080px o 1080x1350px | — | 30 MB | JPG/PNG |
| Imagen Stories | 1080x1920px | — | 30 MB | JPG/PNG |
| Video Feed | 1080x1080px o 4:5 | 15-60s | 4 GB | MP4 |
| Video Stories/Reels | 1080x1920px | 15-60s | 4 GB | MP4 |
| Carrusel | 1080x1080px c/tarjeta | — | 30 MB c/u | 2-10 tarjetas |
| Collection | 1200x628px portada | — | 30 MB | + catálogo |

## Output de este skill

Generar un documento con:

```markdown
# Estructura de Campañas — [Nombre Cliente]
**Fecha de implementación:** [fecha]
**Presupuesto total:** [monto]

## Vista general de la cuenta

[Diagrama en texto de la jerarquía completa]

## Detalle por campaña

### Campaña 1: [Nombre con nomenclatura]
- Objetivo: 
- Presupuesto diario:
- Estrategia de puja:

#### Ad Set 1.1: [Nombre]
- Audiencia: [descripción]
- Presupuesto: 
- Optimización:
- Ubicaciones:

##### Anuncio 1.1.1: [Nombre]
- Formato:
- Copy:
- Titular:
- CTA:
- URL:

## Checklist pre-lanzamiento
□ Pixel verificado y disparando
□ Eventos de conversión configurados
□ Audiencias personalizadas creadas
□ Creativos subidos y en revisión
□ UTMs configurados en todos los anuncios
□ Límite de gasto de cuenta configurado
□ Método de pago verificado
```
