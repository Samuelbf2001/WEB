# Sugerencias de mejora — Web Sixteam.pro

> Regla de trabajo: **el contenido no se toca**. Toda idea que implique cambiar, añadir o
> quitar texto visible (títulos, copy, precios, claims, CTAs, FAQs) se anota aquí y solo se
> aplica si el dueño la aprueba explícitamente. Las mejoras técnicas sin impacto en contenido
> las puede ejecutar el ciclo de mejora continua.
>
> Formato: cada entrada lleva fecha y estado `[pendiente]` / `[aprobada]` / `[descartada]`.

---

## 1. Contenido — requieren tu aprobación (no aplicadas)

- **2026-07-03 · Video del fundador** `[pendiente]` — Grabar y subir el video vertical a
  `public/videos/fundador-sixteam.mp4` (el slot de `/v2/ops` lo detecta solo). Sugerencia de
  guion (30–45 s, 3 actos): 1) espejo del dolor ("el dueño responde WhatsApp, cotiza de
  memoria…"), 2) qué hace Sixteam Ops (operamos, no implementamos y desaparecemos),
  3) invitación a escribir por WhatsApp. Sin promesas de cifras.
- **2026-07-03 · Titular alternativo para test en pauta** `[pendiente]` — Probar contra el
  actual un hero basado en el Ángulo 1: "Ya no tienes que operar solo. Tú solo tienes que
  crecer." (hoy ese ángulo está en el CTA final). Es un test A/B de copy: decidir tú.
- **2026-07-03 · Testimonio con métrica real** `[pendiente]` — Los testimonios actuales son
  cualitativos. Cuando exista una métrica real de un caso (p. ej. tiempo de respuesta o tasa
  de show de Mizar/MasterViajes), añadir UN testimonio o caso con número verificable. No usar
  la meta interna de "30–35% de cierre" como si fuera resultado.
- **2026-07-03 · FAQ sobre horas no usadas** `[pendiente]` — En `/v2/ops` falta responder
  "¿qué pasa con mis horas si no las uso este mes?". Requiere definición de política oficial
  (¿acumulan? ¿vencen?) antes de escribir la respuesta.
- **2026-07-03 · Garantía en Ops** `[pendiente]` — La garantía 30 días money-back hoy aplica a
  Esencial/Integral (PricingV2), no a Ops Core/Growth. Si decides extenderla a Ops, es un
  argumento fuerte para pauta fría; hasta entonces la landing no la menciona (correcto).
- **2026-07-03 · Nota de honestidad en CTA de Sofía** `[pendiente]` — El número de Sofía es de
  EE. UU. (+1 662 705 7434). Decidir si mostrar "(llamada internacional)" junto al botón o
  esperar al número colombiano. Mostrarla baja conversión pero evita fricción sorpresa.

## 2. Decisiones de negocio pendientes

- **2026-07-03 · Número colombiano para Sofía** `[pendiente]` — Conseguir número local CO en
  GHL y reemplazar la constante `SOFIA_PHONE` en `src/pages/v2/OpsLanding.tsx`. Además,
  verificar en GHL que el número actual acepte llamadas ENTRANTES (Sofía está configurada
  para outbound).
- **2026-07-03 · Conectar GitHub a claude.ai** `[pendiente]` — Necesario para crear la rutina
  cloud persistente de mejora continua (`/web-setup` o
  https://claude.ai/code/onboarding?magic=github-app-setup). El cron local muere con la sesión.
- **2026-07-03 · Evento de conversión en Meta** `[pendiente]` — La landing dispara
  `whatsapp_click` y `cta_click` (con `source` por sección) al dataLayer. Falta mapear ese
  evento como conversión en GTM → Meta Pixel/CAPI para optimizar la pauta por él.

## 3. Técnicas — el ciclo de mejora puede implementarlas (sin tocar contenido)

- **2026-07-03 · UTM passthrough al mensaje de WhatsApp** `[pendiente]` — Leer
  `utm_campaign`/`utm_content` de la URL en `/v2/ops` y anexarlos al `dataLayer` (no al texto
  visible del mensaje) para atribuir conversaciones por anuncio.
- **2026-07-03 · Precarga del poster del video** `[pendiente]` — Cuando exista el mp4, generar
  un poster estático (primer frame) y pasarlo al `<video poster>` para evitar flash oscuro.
- **2026-07-03 · `fetchpriority` en logo/hero** `[pendiente]` — Revisar LCP de `/v2/ops` en
  móvil; si el LCP es el H1 no hay acción, si es imagen, marcar `fetchpriority="high"`.
- **2026-07-03 · Lazy-load del bloque de testimonios** `[pendiente]` — `TestimonialsV2` entra
  en el bundle inicial de la landing; evaluar `React.lazy` por sección si el chunk crece.

---

*Archivo mantenido por el ciclo de mejora continua. Añadir nuevas entradas con fecha; no
borrar entradas — marcar `[descartada]` si se decide no hacerlas.*
