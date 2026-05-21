# Clientes — Sixteam Meta Ads

Cada carpeta dentro de este directorio es el **cerebro** de un cliente de Meta Ads.

## Estructura

```
clientes/
├── README.md                    ← Este archivo
├── _plantilla/                  ← Plantilla base para clientes nuevos
│   ├── CEREBRO.md               ← Plantilla del cerebro principal
│   └── SESION.md                ← Plantilla de log de sesión
│
├── nombre-cliente-1/
│   ├── CEREBRO.md               ← Contexto completo del cliente
│   └── SESION.md                ← Log cronológico de sesiones
│
├── nombre-cliente-2/
│   ├── CEREBRO.md
│   └── SESION.md
│
└── ...
```

## Cómo crear un cliente nuevo

```bash
# 1. Copiar la plantilla
cp -r clientes/_plantilla clientes/nombre-del-cliente

# 2. Abrir CEREBRO.md y completar los campos
# 3. El SESION.md ya está listo para la primera sesión
```

## Convención de nombres de carpeta

Usar el nombre comercial del cliente en minúsculas, sin tildes, con guiones:

- `tienda-moda-pereira`
- `clinica-dental-bogota`
- `agencia-viajes-medellin`
- `ecommerce-tech-colombia`

## Cómo trabaja Claude con estos archivos

Al invocar `/meta` con el nombre de un cliente, Claude:
1. Lee `clientes/[nombre-cliente]/CEREBRO.md` automáticamente
2. Tiene todo el contexto para trabajar la cuenta sin preguntas básicas
3. Al terminar la sesión, actualiza los campos relevantes del CEREBRO

Ver `skills/meta-cerebro/SKILL.md` para el skill de gestión del cerebro.
