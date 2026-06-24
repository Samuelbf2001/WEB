---
name: web-workflow
description: Flujo de trabajo para generar proyectos web con MCPs y herramientas de diseno. Usar cuando Codex necesite coordinar investigacion, mockups, generacion UI, componentes, implementacion y QA usando nanobanana, stitch, 21st-magic, Magic UI, shadcn, Browser o Playwright en un proyecto web nuevo.
---

# Web Workflow

Coordinar herramientas para pasar de idea a interfaz implementada.

## Orden recomendado

1. Contexto: leer `context/PROJECT.md` y `context/DESIGN.md`.
2. Exploracion visual: usar `nanobanana` para mockups si el resultado visual no esta claro.
3. Estructura UI: usar `stitch` para generar propuestas HTML/CSS cuando haga falta acelerar una pagina completa.
4. Componentes: usar `21st-magic`, `magicuidesign-mcp` o `shadcn` para componentes React/Tailwind.
5. Integracion: adaptar al stack real, rutas, componentes y tokens existentes.
6. Verificacion: usar Browser/Playwright y corregir.

## Cuándo usar cada MCP

- `nanobanana`: mockups, moodboards, referencias visuales, assets bitmap, imagenes hero o conceptos.
- `stitch`: estructura HTML/CSS de paginas completas o secciones complejas.
- `21st-magic`: componentes React/Tailwind premium cuando el usuario pida `/ui` o un componente concreto.
- `magicuidesign-mcp`: efectos y componentes visuales de Magic UI.
- `shadcn`: primitivas accesibles y comandos de instalacion.
- `playwright`: navegacion, screenshots, QA responsive y consola.

## Reglas

- No pegar output de un MCP sin adaptarlo a la marca y al codigo real.
- No introducir dependencias si el proyecto ya tiene un patron equivalente.
- Mantener prompts de herramientas con: empresa, objetivo, audiencia, stack, tono, paleta y restricciones.
- Para otra empresa, eliminar cualquier referencia a marcas anteriores.

## Prompt base para mockup

```text
Genera una referencia visual para [tipo de pagina/app] de [empresa].
Audiencia: [audiencia].
Objetivo: [conversion/tarea].
Estilo: [direccion visual].
Paleta: [colores o roles].
Debe incluir: [secciones].
Evitar: [anti-referencias].
Formato: mockup web responsive, alta calidad, usable, sin texto pequeno ilegible.
```

## Prompt base para UI

```text
Crea una interfaz [React/Tailwind o HTML/CSS] para [pagina/componente].
Marca: [nombre].
Audiencia y objetivo: [contexto].
Sistema visual: [tokens, tipografia, estilo].
Secciones/estados requeridos: [lista].
Restricciones: mobile-first, accesible, sin solapes, estados hover/focus.
```

