# Frontend Design — Sixteam.pro

Antes de escribir código, define la dirección estética. Sixteam.pro tiene una identidad tech-corporativa dark: navy profundo, acentos teal/blue, tipografía Poppins/Lato, animaciones sutiles.

El argumento recibido describe qué diseñar: $ARGUMENTS

## Stack Obligatorio

- **React 18** + TypeScript
- **Tailwind CSS 3.4** (clases utilitarias, mobile-first)
- **shadcn/ui** para componentes base (Button, Card, Dialog, etc.)
- **Lucide React** para iconos
- **CSS variables** para tokens reutilizables

## Proceso de Diseño

### 1. Define la intención
Antes de codear, responde:
- ¿Cuál es el propósito de este componente/página?
- ¿Qué acción debe tomar el usuario?
- ¿Qué emoción debe transmitir? (confianza, urgencia, claridad, innovación)

### 2. Aplica la guía de marca
Colores Sixteam.pro:
- Navy: `#0a2342` | Blue: `#1d70a2` | Teal: `#00bfa5` | Gray: `#e0e0e0`
- Fuentes: Poppins (headings) + Lato (body)

### 3. Estructura mobile-first
```
className="text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### 4. Jerarquía visual
- Un solo H1 por página (hero)
- H2 para secciones principales
- H3 para subsecciones o cards
- Contraste mínimo AA (texto blanco sobre navy siempre cumple)

## Patrones de Layout

### Hero Section
```tsx
<section className="min-h-screen bg-gradient-to-br from-[#0a2342] via-[#0d2d4f] to-[#1d70a2] flex items-center justify-center relative overflow-hidden">
  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="font-poppins font-black text-white text-6xl lg:text-8xl mb-6">
      Título <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">Acento</span>
    </h1>
    <p className="font-lato text-[#e0e0e0] text-lg lg:text-xl max-w-2xl mx-auto mb-8">
      Descripción clara y concisa.
    </p>
    <Button className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg">
      CTA Principal
    </Button>
  </div>
</section>
```

### Grid de Cards
```tsx
<section className="py-20 bg-[#0a2342]">
  <div className="container mx-auto px-4">
    <h2 className="font-poppins font-bold text-white text-4xl lg:text-5xl text-center mb-12">
      Sección
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-[#0d2d4f] border border-[#1d70a2]/20 rounded-lg p-6 hover:border-[#00bfa5]/50 transition-all duration-300">
          {/* contenido */}
        </div>
      ))}
    </div>
  </div>
</section>
```

## Animaciones

Usa las animaciones ya definidas en `src/index.css`:
```css
transition-all duration-300   /* hover states */
animate-fade-in               /* entrada de elementos */
hover:scale-105               /* escala sutil en hover */
```

**Nunca**: autoplay de videos, animaciones infinitas llamativas, parallax agresivo.

## Componentes shadcn/ui más usados

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
```

## Accesibilidad (obligatorio)

- Alt text en todas las imágenes
- `aria-label` en botones sin texto visible
- `focus-visible:` en elementos interactivos
- Respetar `prefers-reduced-motion`

## Anti-patrones a evitar

- Layouts 100% centrados sin variación → aburrido
- Demasiados colores por sección → ruido visual
- Texto pequeño sobre gradientes → ilegible
- `!important` en Tailwind → indica diseño roto
- Componentes sin estado hover/focus → experiencia pobre
