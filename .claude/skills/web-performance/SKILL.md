---
name: web-performance
description: Buenas prácticas de web de alto rendimiento, SEO técnico, GEO/AEO (visibilidad en motores generativos), favicons, PWA manifest y previews sociales. Úsala cuando trabajes en velocidad de carga, Core Web Vitals, posicionamiento orgánico, datos estructurados, metadatos por página, iconos o tarjetas de vista previa (Open Graph / Twitter). Aplica a este repo (Vite + React 18 SPA + Tailwind, servido por Express/Caddy).
---

# Web de alto rendimiento — Sixteam.pro

Referencia canónica para rendimiento, SEO, GEO y assets de marca. Cada regla
lleva un umbral verificable. Si una recomendación no se puede medir, no entra aquí.

## 1. Core Web Vitals — los umbrales que importan

Google evalúa el **percentil 75 de usuarios reales** (campo, no laboratorio).
Se aprueba una métrica solo si el 75 % de las visitas cae en "bueno".

| Métrica | Bueno | Necesita mejora | Malo | Qué mide |
|---------|-------|-----------------|------|----------|
| **LCP** | ≤ 2.5 s | 2.5–4.0 s | > 4.0 s | Carga del elemento principal |
| **INP** | ≤ 200 ms | 200–500 ms | > 500 ms | Respuesta a la interacción |
| **CLS** | ≤ 0.1 | 0.1–0.25 | > 0.25 | Estabilidad visual |

Métricas de apoyo (no son ranking factor, pero diagnostican):
**TTFB** ≤ 800 ms · **FCP** ≤ 1.8 s.

**Alerta temprana:** dispara revisión al 80 % del umbral — LCP > 2.0 s,
INP > 160 ms, CLS > 0.08.

### Reglas por métrica

**LCP**
- El recurso LCP debe descubrirse en el HTML inicial. En una SPA, si el hero
  se pinta con JS, el LCP arranca tarde por diseño: precarga la imagen o el
  fondo del hero con `<link rel="preload" as="image">`.
- `fetchpriority="high"` en la imagen del hero; `loading="lazy"` en **todo**
  lo que esté bajo el pliegue — nunca en el LCP.
- Sin recursos que bloqueen el render por encima de lo imprescindible: CSS
  crítico inline, el resto diferido.
- Fuentes: `font-display: swap` + `preconnect` al origen de la fuente. Mejor
  aún, self-host de los pesos usados (evita un RTT a otro dominio).

**INP**
- Ninguna tarea larga > 50 ms en el hilo principal durante la interacción.
- Cede el hilo (`await scheduler.yield()` o `setTimeout` 0) en handlers pesados.
- Hidratación: cuanto menos JS ejecuta el arranque, mejor INP. Divide por ruta.
- Evita `useEffect` que escriban en el DOM en cada render (ver §2, patrón SEO).

**CLS**
- `width` y `height` (o `aspect-ratio`) explícitos en **toda** imagen, vídeo,
  iframe y embed.
- Reserva espacio para banners, promos flotantes y widgets de terceros.
- Nunca insertes contenido por encima de contenido ya visible.
- Fuentes con `size-adjust` o fallback métricamente compatible.

## 2. Presupuestos de bundle (Vite + React SPA)

| Recurso | Presupuesto (gzip) | Techo duro |
|---------|--------------------|------------|
| Entry chunk (`index-*.js`) | ≤ 60 kB | 90 kB |
| Vendor React | ≤ 55 kB | 60 kB |
| CSS total inicial | ≤ 30 kB | 45 kB |
| JS total de la ruta inicial | ≤ 150 kB | 200 kB |
| Chunk por ruta lazy | ≤ 20 kB | 40 kB |
| Imagen individual servida | ≤ 200 kB | 400 kB |
| Peso total de la primera vista | ≤ 1 MB | 1.5 MB |

Cómo medir: `npm run build` imprime tamaños raw y gzip por chunk. El presupuesto
se evalúa sobre **gzip**.

### Reglas de bundling
- Todas las rutas con `React.lazy()`. Una ruta = un chunk.
- Nada que solo use una ruta debe vivir en el entry chunk. Si aparece ahí,
  es que un módulo compartido lo importa de forma estática.
- `manualChunks` solo para dependencias realmente compartidas por ≥ 3 rutas.
  Agrupar de más obliga a descargar código que la ruta no usa.
- Iconos: importa por nombre (`import { Check } from 'lucide-react'`), nunca
  el paquete entero. Verifica que el tree-shaking funciona mirando el tamaño
  del chunk de iconos.
- Providers globales (QueryClient, Tooltip, Toaster, i18n) van en el entry —
  cada uno que añadas encarece **todas** las rutas. Justifica cada uno.
- CSS: Tailwind con `content` bien delimitado. Un CSS > 45 kB gzip en un sitio
  de marketing casi siempre significa clases muertas o `safelist` demasiado ancha.

## 3. Imágenes y media

- **Formato:** AVIF > WebP > PNG/JPG. Sirve PNG solo para logos con
  transparencia dura, y aun así compáralo contra WebP.
- **Tamaño:** ninguna imagen se sirve a más resolución de la que se muestra.
  Usa `srcset` + `sizes` para las que cambian con el viewport.
- **Un PNG de 1 MB en `public/` es un fallo**, aunque esté bajo el pliegue:
  entra en el deploy, en la caché y en el ancho de banda móvil.
- Vídeo: nunca `autoplay` sin `poster`. `preload="none"` salvo que sea el LCP.
  Un MP4 > 2 MB necesita justificación o carga bajo interacción.
- `decoding="async"` en imágenes no críticas.

## 4. Terceros — el mayor riesgo de INP

Cada script de terceros es JS ejecutándose en el hilo principal, fuera de tu control.

- **Regla:** ningún script de terceros bloquea el render. `async` o `defer`
  siempre; carga diferida tras interacción o `requestIdleCallback` cuando el
  script no afecta a la primera vista (chat, trackers de intención, widgets
  de calendario).
- `preconnect` **solo** a los 2–3 orígenes realmente críticos. De más, y
  compites por conexiones con tus propios recursos. Para el resto, `dns-prefetch`.
- Los tags de analítica y tracking (GTM, píxeles, trackers de visitantes) van
  después del contenido, nunca antes del `<title>` ni del CSS crítico.
- Audita periódicamente: un tag que ya no se usa sigue costando.

## 5. Caché y transporte

- Assets con hash en el nombre → `Cache-Control: public, max-age=31536000, immutable`.
- HTML → `no-cache` (o `max-age=0, must-revalidate`) para que el deploy se vea al instante.
- Compresión Brotli en texto (HTML/CSS/JS/SVG/JSON); gzip como fallback.
- HTTP/2 o superior. `Vary` solo con las cabeceras que realmente varían la
  respuesta — una lista larga fragmenta la caché de CDN y anula su beneficio.

## 6. SEO técnico

### Obligatorio en cada página indexable
- `<title>` único, 50–60 caracteres, con el término objetivo al principio.
- `<meta name="description">` única, 140–160 caracteres, con propuesta de valor
  y llamada implícita.
- `<link rel="canonical">` absoluta y autorreferencial.
- Un solo `<h1>`, que describa la página. Jerarquía H1 → H2 → H3 sin saltos.
- `lang` correcto en `<html>`; `hreflang` recíproco si hay más de un idioma,
  incluido `x-default`.

### En una SPA, ojo con esto
Los metadatos inyectados por `useEffect` **no existen** para los crawlers que
no ejecutan JS, ni para los scrapers de Open Graph (WhatsApp, LinkedIn, Slack,
X). Googlebot renderiza, pero en una segunda pasada y sin garantías de plazo.

Orden de preferencia:
1. **Prerender / SSG por ruta** en el build → HTML real con metadatos reales.
2. Inyección en el servidor por ruta (el Express que ya sirve el SPA puede
   reescribir `<title>`, description, canonical y OG antes de responder).
3. `useEffect` como último recurso — sirve para la experiencia en navegación
   cliente, no para indexación ni para previews.

Nunca dejes que las páginas dependan del `<title>` estático de `index.html`:
títulos duplicados en todo el sitio son una de las señales negativas más
baratas de evitar y más caras de ignorar.

### Sitemap y robots
- El sitemap lista **solo** URLs 200, canónicas e indexables. Nada de
  redirecciones, `noindex` ni rutas muertas.
- Debe cuadrar con las rutas reales de la app. Una ruta pública sin entrada en
  el sitemap y una entrada del sitemap sin ruta son ambas errores.
- `lastmod` real (fecha del último cambio de contenido), no la fecha del deploy.
- `robots.txt` apunta al sitemap con URL absoluta.
- Páginas de campaña, gracias, brochures internos y duplicados → `noindex` y
  fuera del sitemap.

## 7. GEO / AEO — visibilidad en motores generativos

Los buscadores generativos (ChatGPT, Perplexity, Google AI Overviews, Claude)
no "rankean": **citan**. Se optimiza para ser citable, no para posicionar.

### Estructura de contenido que se cita
- Cada sección responde **una** pregunta y **empieza por la respuesta**;
  el contexto va después. Los modelos extraen los primeros 1–2 párrafos.
- Encabezados en forma de pregunta real ("¿Cuánto cuesta implementar un CRM?"),
  no eslóganes ("Precios que enamoran").
- Datos concretos: cifras, plazos, precios, nombres de herramientas. Lo
  genérico no se cita porque no aporta nada que el modelo no sepa ya.
- Listas y tablas por encima de párrafos largos: se extraen mejor.
- FAQs con pregunta y respuesta completas y autocontenidas (que se entiendan
  fuera de la página).

### Datos estructurados (Schema.org, JSON-LD)
El marcado mejora la descubribilidad, pero **por sí solo no basta**: sin
contenido citable, el schema no genera menciones.

Cobertura mínima para un sitio de servicios B2B:
- `Organization` — una vez, con `name`, `url`, `logo`, `sameAs` (perfiles
  sociales), `contactPoint`.
- `WebSite` — con `inLanguage`.
- `LocalBusiness` (o subtipo) si hay presencia física o mercado geográfico
  declarado: `areaServed`, `address`.
- `Service` en cada página de servicio: `provider`, `serviceType`, `areaServed`.
- `FAQPage` en cada página con FAQ visible. El marcado debe coincidir
  literalmente con lo que ve el usuario.
- `BreadcrumbList` en páginas internas.
- `Article` / `author` si hay contenido editorial.

El JSON-LD debe estar en el **HTML servido**. Inyectado por JS después del
render, muchos consumidores no lo ven.

### llms.txt
Fichero en la raíz que describe el sitio para consumidores LLM. Aún **no hay
evidencia estadística** de que su presencia aumente las citas: trátalo como
higiene barata, no como palanca. Si existe, mantenlo sincronizado con el sitio
real — un llms.txt desactualizado es peor que no tenerlo.

### robots.txt para crawlers de IA
Decisión de negocio explícita, no un descuido. Si quieres aparecer en
respuestas generativas, permite `GPTBot`, `OAI-SearchBot`, `PerplexityBot`,
`ClaudeBot`, `Google-Extended`, `CCBot`. Nota: `Google-Extended` controla el
uso en IA de Google, **no** la indexación normal.

### Cómo se mide
Por **citas**, no por posiciones: cuántas veces cada motor te nombra o enlaza
para tus prompts prioritarios, y cómo evoluciona en el tiempo. Complementa con
impresiones y conversiones asistidas.

## 8. Favicons e iconos

Un favicon de 200 kB es un error de configuración: se descarga en **cada**
carga de página.

Set mínimo correcto:

| Fichero | Tamaño | Peso objetivo | Para qué |
|---------|--------|---------------|----------|
| `favicon.ico` | 32×32 (multi-res) | < 15 kB | Navegadores legacy, barra de direcciones |
| `favicon.svg` | vectorial | < 5 kB | Navegadores modernos, escala perfecta |
| `favicon-96x96.png` | 96×96 | < 10 kB | Fallback PNG |
| `apple-touch-icon.png` | 180×180 | < 20 kB | Pantalla de inicio iOS (fondo opaco, sin transparencia) |
| `web-app-manifest-192x192.png` | 192×192 | < 20 kB | Android / PWA |
| `web-app-manifest-512x512.png` | 512×512 | < 60 kB | Splash Android / PWA |

Declaración en `<head>`:
```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0a2342">
```

El SVG puede llevar `prefers-color-scheme` para adaptarse a tema claro/oscuro.

### site.webmanifest
`name`, `short_name` (≤ 12 caracteres), `icons` (192 y 512, más uno `maskable`),
`theme_color`, `background_color`, `display: standalone`, `start_url: /`, `lang`.

## 9. Previews sociales (Open Graph / Twitter)

Lo que decide si un enlace compartido se ve profesional o roto.

- `og:image` — **1200×630** (ratio 1.91:1), < 300 kB, JPG o PNG. WhatsApp y
  algunos clientes no renderizan SVG ni AVIF: sirve siempre un raster.
- URL **absoluta** con `https://`. Las relativas fallan en casi todos los scrapers.
- `og:image:width`, `og:image:height` y `og:image:alt` explícitos — evitan un
  fetch extra del scraper y mejoran accesibilidad.
- `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`.
- `twitter:card = summary_large_image` + `twitter:title/description/image`.
- **Una preview por página.** Una sola OG global significa que cada enlace
  compartido —servicio, caso de éxito, landing de campaña— se ve idéntico y
  genérico. Es la diferencia entre un enlace que se hace clic y uno que no.
- Los metadatos OG deben estar en el **HTML servido**: ningún scraper social
  ejecuta JavaScript. Si dependen de `useEffect`, no existen.

## 10. Checklist de verificación

Antes de dar por buena cualquier mejora:

```bash
npm run build          # tamaños por chunk, raw y gzip
```

- [ ] Entry chunk y CSS dentro del presupuesto de §2
- [ ] Ninguna imagen servida > 400 kB
- [ ] Cada ruta pública: `<title>`, description y canonical únicos **en el HTML servido**
- [ ] Sitemap == rutas reales, todas 200 e indexables
- [ ] JSON-LD válido y presente en el HTML servido
- [ ] Set completo de favicons, ninguno > 60 kB
- [ ] `og:image` absoluta, 1200×630, < 300 kB, específica por página
- [ ] Sin scripts de terceros bloqueando el render
- [ ] `width`/`height` en toda imagen y embed (CLS)

## Antipatrones

| Antipatrón | Por qué falla |
|------------|---------------|
| Metadatos solo vía `useEffect` | Invisibles para scrapers sociales y frágiles para crawlers |
| Un `og:image` global para todo el sitio | Todos los enlaces compartidos se ven iguales |
| Favicon = logo a resolución completa | Cientos de kB en cada carga |
| `preconnect` a 6 dominios | Compite con tus propios recursos críticos |
| `manualChunks` agresivo | Obliga a bajar código que la ruta no usa |
| Sitemap escrito a mano | Se desincroniza del router en el primer cambio de rutas |
| `lastmod` = fecha del deploy | Señal de frescura falsa; los crawlers la descuentan |
| Imágenes sin dimensiones | CLS garantizado |
| `loading="lazy"` en el hero | Retrasa el LCP justo donde más duele |
