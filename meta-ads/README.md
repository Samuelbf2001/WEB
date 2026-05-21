# Sixteam Meta Ads — Skill para Claude Code

Skill especializado en Meta Ads (Facebook/Instagram) para el equipo de Sixteam.pro. Diseñado para gestionar campañas de clientes en Colombia y LATAM.

## Qué hace

Corre desde Claude Code y te permite:

- Construir **estrategias completas** de Meta Ads por tipo de negocio
- Armar la **estructura de campañas** lista para implementar en Ads Manager
- Definir **audiencias** (frías, cálidas, calientes, Lookalikes, Advantage+)
- Generar **briefs creativos y copy** en español para anuncios
- Hacer **auditorías de cuenta** con scoring 0-100
- Calcular **presupuesto y proyecciones** de ROAS/CPA
- Crear **reportes ejecutivos** para presentar a clientes

## Comandos

```bash
/meta                    # Menú principal + contexto del cliente
/meta plan [negocio]     # Estrategia completa de Meta Ads
/meta estructura         # Armado de campañas > ad sets > anuncios
/meta audiencias         # Research y estrategia de segmentación
/meta creativos          # Briefs creativos + copy en español
/meta auditoria          # Auditoría de cuenta con scoring
/meta presupuesto        # Distribución de presupuesto + proyecciones
/meta reporte            # Reporte ejecutivo para el cliente
```

## Instalación

### Opción 1 — Copiar a tu proyecto de Claude Code

```bash
cp -r meta-ads/.claude-plugin /ruta/tu-proyecto/.claude-plugin
cp -r meta-ads/meta /ruta/tu-proyecto/meta
cp -r meta-ads/skills /ruta/tu-proyecto/skills
```

### Opción 2 — Instalar en tu configuración global de Claude Code

```bash
cp -r meta-ads/meta ~/.claude/skills/meta
cp -r meta-ads/skills/* ~/.claude/skills/
```

### Opción 3 — Script de instalación

```bash
chmod +x install.sh && ./install.sh
```

## Uso rápido

```bash
# En tu terminal con Claude Code activo:
/meta plan ecommerce

# Claude te pedirá:
# - Descripción del negocio
# - Presupuesto disponible
# - Mercado objetivo
# Y generará la estrategia completa.
```

## Estructura del proyecto

```
meta-ads/
├── .claude-plugin/
│   └── plugin.json           # Configuración del plugin
├── meta/
│   └── SKILL.md              # Orquestador principal
├── skills/
│   ├── meta-plan/
│   │   └── SKILL.md          # Estrategia por tipo de negocio
│   ├── meta-estructura/
│   │   └── SKILL.md          # Armado de campañas en Ads Manager
│   ├── meta-audiencias/
│   │   └── SKILL.md          # Segmentación y audiencias
│   ├── meta-creativos/
│   │   └── SKILL.md          # Briefs y copy de anuncios
│   ├── meta-auditoria/
│   │   └── SKILL.md          # Auditoría de cuenta (50+ checks)
│   ├── meta-presupuesto/
│   │   └── SKILL.md          # Distribución y proyecciones
│   └── meta-reporte/
│       └── SKILL.md          # Reportes para clientes
├── install.sh
└── README.md
```

## Contexto de diseño

- **Mercado:** Colombia y LATAM
- **Idioma:** Todo en español
- **Stack Meta 2026:** Andromeda, GEM, Advantage+, CAPI
- **Enfoque:** Estrategia primero, táctica después
- **Benchmarks:** Basados en datos reales de Colombia 2025-2026

---

Desarrollado por [Sixteam.pro](https://sixteam.pro) — CRM, automatizaciones e IA para tu negocio.
