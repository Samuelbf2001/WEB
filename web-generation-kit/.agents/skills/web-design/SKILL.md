---
name: web-design
description: Diseno e implementacion frontend para proyectos web genericos. Usar cuando Codex necesite crear, mejorar, redisenar, adaptar o verificar landing pages, dashboards, apps, componentes React, interfaces Tailwind, sistemas visuales, layouts responsive, estados UI, accesibilidad o polish visual para una empresa nueva sin heredar una marca previa.
---

# Web Design

Disenar interfaces production-ready para la marca del proyecto actual.

## Antes de editar

1. Leer `context/PROJECT.md` y `context/DESIGN.md` si existen.
2. Si faltan, inferir una direccion visual minima desde el pedido y documentar decisiones importantes.
3. Inspeccionar el stack real del repositorio antes de generar componentes.
4. Reutilizar patrones existentes antes de introducir librerias nuevas.

## Stack preferido

- React + TypeScript
- Tailwind CSS
- shadcn/ui para primitivas
- Lucide React para iconos
- CSS variables para tokens

Adaptar si el repositorio usa otro stack.

## Metodo

1. Definir intencion: usuario, tarea, conversion, emocion y contexto de uso.
2. Elegir tema y paleta por contexto, no por categoria.
3. Disenar mobile-first.
4. Implementar estados completos: default, hover, focus, active, disabled, loading, empty y error cuando aplique.
5. Verificar en navegador con desktop y mobile.

## Layout

- Usar un solo H1 por pagina.
- Crear jerarquia con escala, peso, contraste y ritmo.
- Evitar grids de cards identicas si una lista, timeline, tabla, comparador o layout editorial comunica mejor.
- No anidar cards dentro de cards.
- Mantener anchos de lectura entre 65 y 75 caracteres.
- Definir dimensiones estables para botones, toolbars, tiles, tabs, tablas y elementos que puedan cambiar de estado.

## Visual

- Usar una paleta con roles claros: fondo, superficie, texto, muted, borde, acento, exito, alerta y error.
- Limitar efectos decorativos. Gradientes, glass, sombras grandes y blur solo si refuerzan la experiencia.
- No usar fondos, imagenes o assets genericos cuando el usuario debe entender el producto real.
- Preferir iconos Lucide antes de SVG manual para acciones comunes.

## Accesibilidad

- Contraste AA minimo.
- `alt` en imagenes informativas.
- `aria-label` en botones icon-only.
- `focus-visible` claro.
- Respetar `prefers-reduced-motion`.
- No depender solo del color para estados.

## QA visual obligatorio

Antes de terminar en cambios frontend:

- Abrir la pagina con Browser/Playwright si hay servidor o HTML local.
- Revisar consola.
- Probar al menos un viewport desktop y uno mobile.
- Confirmar que no hay solapes, texto cortado ni desbordes horizontales.
- Ajustar hasta que la interfaz se vea completa y usable.

