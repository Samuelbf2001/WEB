# Plan de mejora web — rendimiento, SEO, GEO y previews

Auditoría y ejecución sobre `sixteam.pro` (Vite + React 18 SPA, servido por
Express). La referencia usada es `.claude/skills/web-performance/SKILL.md`,
creada en este mismo trabajo: umbrales de Core Web Vitals, presupuestos de
bundle, reglas de SEO en SPA, GEO/AEO, favicons y previews sociales.

---

## Resultados medidos

| Métrica | Antes | Después | Δ |
|---|---|---|---|
| Entry chunk (gzip) | 89.34 kB | **50.16 kB** | −44 % |
| Entry chunk (raw) | 265.92 kB | 152.37 kB | −43 % |
| CSS (gzip) | 29.41 kB | **25.30 kB** | −14 % |
| CSS (raw) | 197.01 kB | 170.77 kB | −13 % |
| `public/` | 22 MB | **8.3 MB** | −62 % |
| `dist/` | 24 MB | 10 MB | −58 % |
| Compresión en producción | ❌ ninguna | ✅ gzip/zstd | 157 kB → 51 kB por la red |
| Páginas con SEO propio | 15 de 46 | **46 de 46** | — |
| URLs en el sitemap | 21 (2 muertas) | **35** (0 muertas) | — |
| Páginas con datos estructurados | 1 (vía JS) | **35** (en el HTML) | — |
| Peso del favicon | 215 kB | **48 kB** (set completo) | −78 % |

El entry queda por debajo del presupuesto blando de la skill (60 kB gzip),
viniendo de estar a 0.7 kB del techo duro.

---

## Lo que estaba roto

### SEO — el problema no era el contenido, era la entrega
Las 26 páginas de la web V2 (la web pública actual, incluida la home) no
llamaban a `useSEO`. Servían el `<title>`, la description y el **canonical**
estáticos de `index.html`. En la práctica el sitio entero se autodeclaraba
como una sola página ante cualquier crawler: Google podía legítimamente
decidir no indexar ninguna por considerarlas duplicados de la home.

Y aunque las hubieran llamado no habría bastado: `useSEO` inyecta en un
`useEffect`, y ningún scraper de previews sociales ejecuta JavaScript.

### GEO — cero datos estructurados en el sitio real
Los únicos schemas del repo vivían en páginas V1 que el router ya no importa,
y se inyectaban con `useEffect`. Ninguna página que un usuario o un crawler
visita tenía un solo JSON-LD.

`llms.txt` describía un modelo de negocio que ya no existe (proyectos sueltos
de $1,500 USD a 4 semanas) y un email de contacto que el sitio vivo no usa.
Estaba desinformando activamente a cualquier LLM que lo leyera.

### Rendimiento
- El diccionario i18n es→en (97 kB de texto) se cargaba en el entry para
  **todo** visitante, aunque el locale por defecto es español.
- `@tanstack/react-query` envolvía toda la app sin un solo `useQuery`.
- `src/index.css` reimportaba Google Fonts con un `@import` render-blocking
  que anulaba la carga asíncrona ya montada en `index.html`.
- **No había compresión en ningún punto**: todos los tamaños "gzip" del
  proyecto se servían en crudo.
- `Cache-Control: immutable` a un año se aplicaba también a los ficheros de
  `public/`, que no llevan hash en el nombre.
- El favicon era el logo a resolución completa: 215 kB en cada carga.

---

## Lo que se hizo

**Arquitectura SEO/GEO.** `seo-routes.js` es la fuente única de verdad
(title, description, canonical, ogImage, noindex por ruta). De ahí beben tres
consumidores: `server.js` reescribe el HTML servido, `RouteSeo` cubre la
navegación en cliente, y `scripts/generate-sitemap.mjs` genera el sitemap.
Sitemap y router ya no pueden desincronizarse, y el `lastmod` sale del último
commit que tocó cada página, no de la fecha de deploy.

`seo-schema.js` genera el JSON-LD por ruta y lo sirve dentro del HTML:
`Organization` y `WebSite` en todas, `FAQPage` en el home, `Service` en las
cinco páginas de servicio y `BreadcrumbList` en las anidadas. La FAQ vive en
`content/faq-home.js`, que importan tanto el acordeón visible como el
generador de schema — el marcado no puede divergir del texto.

**Soft-404 corregido.** Antes cualquier URL inventada devolvía la home con
`200 OK`. Ahora responde `404` con `noindex`.

**Ruta crítica.** Con `build.manifest` activado, el servidor sabe qué chunk
corresponde a la ruta pedida y lo anuncia en el HTML. Antes el navegador no
descubría el chunk de la página hasta haber descargado, parseado y ejecutado
el entry: dos saltos en cascada antes de poder pintar.

**Assets.** Set completo de favicons (el `favicon.ico` anterior era un PNG
renombrado), `site.webmanifest`, y limpieza de 11.5 MB de imágenes que ningún
componente renderizaba.

---

## Pendiente — decisiones que necesitan al equipo

Tres datos se omitieron del JSON-LD a propósito, porque un dato inventado en
datos estructurados es peor que un campo ausente:

1. **`foundingDate`** — el repo se contradice: 2017 en `HomeAA.tsx` (ruta
   viva), 2021 en `llms.txt`. Ambas páginas son accesibles a la vez, así que
   un LLM que cruce las dos fuentes puede citar cualquiera.
2. **Dirección postal** — solo consta la ciudad (Bogotá). Sin calle ni código
   postal no se puede publicar un `PostalAddress` completo.
3. **Perfiles sociales** — el único que aparece en el repo es un LinkedIn que
   solo vivía en código retirado. Se publicó porque lo escribió el propio
   equipo, pero **conviene verificar que sigue vigente**. Instagram, Facebook,
   X, YouTube y TikTok no aparecen en ningún fichero.

Además:

4. **Dos emails de contacto activos en producción.** El sitio V2 usa
   `hola@sixteam.pro`, pero `/home-aa`, `/plataforma` y `/brochure` —rutas
   vivas— usan `alpha@sixteam.pro`. No se tocó porque cambiar un email de
   contacto afecta al enrutamiento de leads: es una decisión de negocio.
5. **`ProfessionalService` / `LocalBusiness`.** Se omitió del schema: el
   propio `llms.txt` dice que todos los servicios se prestan de forma remota.
   Si hay oficina con atención al público, conviene añadirlo.
6. **Canibalización de keywords.** `/viajes`, `/industrias/viajes` e
   `/industrias/agencias-de-viaje` compiten por la misma intención; lo mismo
   `/inmobiliarias` con `/industrias/inmobiliarias`. Hay que decidir cuál es
   la versión canónica de largo plazo y redirigir o marcar `noindex` las
   demás cuando termine la pauta que las originó.
7. **Páginas huérfanas.** `/precios` y `/assessment` no tienen ni un solo
   enlace interno desde el Header, el Footer o la home. `/precios` es una
   página de conversión clave y hoy solo se alcanza escribiendo la URL.
   `/diagnostico` y el hub `/industrias` están en la misma situación.

---

## Pendiente — trabajo técnico

Por orden de impacto/esfuerzo:

1. **OG images por página.** Hoy todas comparten `og-image.jpg`, así que cada
   enlace compartido en WhatsApp se ve idéntico. Con 7 imágenes agrupadas por
   familia (home, soluciones, servicios, industrias, casos, precios,
   contacto) se cubre el 100 % de las páginas indexables. Mejor aún:
   generarlas en build desde una plantilla HTML, para que cualquier página
   nueva obtenga la suya automáticamente.
2. **CLS en el carrusel de logos.** Las imágenes usan `height: 48px;
   width: auto` sin dimensiones intrínsecas. Los logos de marca ya llevan
   `width`/`height`; falta reservar espacio en el marquee sin romper el
   diseño.
3. **1.959 clases Tailwind con valor arbitrario.** Es la mayor bolsa de CSS
   restante (~170 kB raw), pero migrarlas a tokens de `theme.extend` es
   trabajo de diseño sistemático, no un fix puntual.
4. **Self-host de fuentes.** 13 ficheros (Poppins ×6, Lato ×5, Instrument
   Serif ×2) desde Google Fonts. Self-hostearlas elimina 2 RTT externos.
5. **Vídeo `fundador-sixteam.mp4` (4.9 MB).** Verificar `poster` y
   `preload="none"`.
6. **Seis páginas V1 sin ruta** (`Index.tsx`, `Servicios.tsx`,
   `CasosExito.tsx`, `RadarSixteam.tsx`, `Nosotros.tsx`, `Contacto.tsx`,
   176 kB de fuente). No llegan al bundle, pero contienen precios y datos de
   contacto contradictorios con el sitio vivo, y confunden cualquier
   auditoría futura.
7. **Encabezados orientados a respuesta.** La FAQ del home es la mejor pieza
   del sitio para GEO —preguntas reales, respuesta primero, cifras
   concretas—, pero casi todas las demás secciones usan eslóganes como
   encabezado ("Datos limpios, siempre") en vez de preguntas que un LLM pueda
   enlazar a una consulta real.

### Contenido que hoy no existe y se busca

De 20 prompts que un decisor PYME escribiría en ChatGPT o Perplexity, el
sitio no responde cuatro: comparativa GoHighLevel vs HubSpot, qué es RevOps,
automatización con Make/n8n/Zapier, y medios de pago. Son cuatro piezas de
contenido con demanda verificable.

---

## Cómo verificar

```bash
npm run build          # tamaños por chunk, raw y gzip
npm run sitemap        # regenera public/sitemap.xml desde seo-routes.js
node server.js         # sirve dist/ con SEO, JSON-LD y compresión reales
```

El checklist completo está en `.claude/skills/web-performance/SKILL.md` §10.
