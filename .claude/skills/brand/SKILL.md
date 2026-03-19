---
name: brand
description: Guía de identidad visual de Sixteam.pro. Usar cuando se diseñen componentes, páginas o assets visuales para mantener consistencia de marca. Aplica automáticamente la paleta de colores, tipografía y estilo visual correcto.
---

# Sixteam.pro — Brand Guidelines

Aplica siempre estos estándares de marca al diseñar o revisar componentes visuales.

## Identidad de Marca

**Nombre**: Sixteam.pro
**Fórmula de marca**: `Process + Technology + People = Growth`
**Tagline**: "Transformamos tu negocio con CRM, automatizaciones e IA"
**Mercado**: Colombia y Latinoamérica
**Tono**: Profesional, tecnológico, directo, cercano en español

## Paleta de Colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Navy Blue | `#0a2342` | Fondo principal, backgrounds oscuros |
| Sixteam Blue | `#1d70a2` | Secundario, gradientes, bordes |
| Teal/Cyan | `#00bfa5` | Acento primario, CTAs, highlights |
| Light Gray | `#e0e0e0` | Texto secundario sobre fondos oscuros |
| White | `#ffffff` | Texto sobre navy, fondos claros |

**Gradientes estándar:**
- Navy → Blue: `from-[#0a2342] to-[#1d70a2]`
- Blue → Teal: `from-[#1d70a2] to-[#00bfa5]`
- Texto destacado: `bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent`

**En Tailwind CSS:**
```
bg-[#0a2342]   // navy background
text-[#00bfa5] // teal accent
border-[#1d70a2] // blue border
```

## Tipografía

| Rol | Fuente | Pesos | Tailwind |
|-----|--------|-------|---------|
| Headings (H1–H6) | **Poppins** | 600, 700, 800, 900 | `font-poppins font-bold` |
| Body / Párrafos | **Lato** | 300, 400, 500 | `font-lato` |
| Fallbacks | Arial / Georgia | — | — |

**Escalas de texto:**
- Hero H1: `text-6xl lg:text-8xl xl:text-9xl`
- Sección H2: `text-4xl lg:text-6xl`
- H3: `text-2xl lg:text-4xl`
- Body: `text-base lg:text-lg`

## Estilo Visual

- **Fondo dominante**: Navy oscuro (`#0a2342`) con texto blanco
- **Efectos**: Glassmorphism (`backdrop-blur`), gradientes radiales de fondo
- **Animaciones**: Sutiles — fade-in 0.6s, float, nodos de red pulsantes
- **Iconos**: Lucide React (línea limpia, profesional)
- **Border radius**: `rounded-lg` (8px) como estándar
- **Sombras**: `shadow-lg` o `shadow-xl` sobre fondos oscuros
- **Componentes**: shadcn/ui + Radix UI

## Lo que NO hacer

- No usar fondos blancos sin un propósito claro — la marca es dark-first
- No usar fonts genéricas como Inter o Roboto
- No usar colores fuera de la paleta sin justificación
- No diseñar solo para desktop — siempre mobile-first
- No usar más de 2 colores de acento por componente

## Ejemplo de componente correcto

```tsx
// Card de servicio — patrón correcto Sixteam.pro
<div className="bg-gradient-to-br from-[#0a2342] to-[#1d70a2] rounded-lg p-6 border border-[#1d70a2]/30 shadow-xl">
  <div className="text-[#00bfa5] mb-3">
    <Icon className="w-8 h-8" />
  </div>
  <h3 className="font-poppins font-bold text-white text-xl mb-2">Título</h3>
  <p className="font-lato text-[#e0e0e0] text-sm leading-relaxed">Descripción</p>
</div>
```
