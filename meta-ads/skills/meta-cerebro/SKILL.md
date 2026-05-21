---
name: meta-cerebro
description: >
  Gestiona el cerebro de información de clientes de Meta Ads para Sixteam.pro.
  Carga el contexto de un cliente específico al inicio de cualquier sesión de trabajo,
  permite actualizar el CEREBRO.md después de cada sesión, y crea nuevos cerebros
  para clientes nuevos. Es el skill de gestión de conocimiento del sistema Meta Ads.
  Activar cuando el usuario mencione: cargar cliente, trabajar cuenta de [cliente],
  actualizar cerebro, nuevo cliente, contexto de [nombre], /meta cerebro.
triggers:
  - /meta cerebro
  - /meta cliente
---

# Meta Cerebro — Gestión de Conocimiento de Clientes

Este skill orquesta la carga, lectura y actualización del cerebro de cada cliente.
Es el punto de entrada obligatorio cuando se va a trabajar una cuenta específica.

## Cuándo se activa este skill

1. **Al inicio de cualquier sesión con un cliente identificado**
   El skill principal `/meta` debe invocar este skill automáticamente si se menciona el nombre de un cliente.

2. **Al invocar explícitamente `/meta cerebro [nombre-cliente]`**

3. **Cuando el equipo pide actualizar el cerebro después de una sesión**

---

## FLUJO 1 — Cargar cerebro de cliente existente

### Trigger
El usuario menciona el nombre de un cliente, por ejemplo:
- `/meta auditoria tienda-moda-pereira`
- "vamos a trabajar la cuenta de [cliente]"
- "abre el cerebro de [cliente]"

### Proceso

**Paso 1 — Identificar el cliente**
```
Extraer el identificador del cliente del mensaje del usuario.
Normalizar: minúsculas, sin tildes, guiones en lugar de espacios.
Ej: "Tienda Moda Pereira" → "tienda-moda-pereira"
```

**Paso 2 — Localizar y leer el CEREBRO.md**
```
Ruta: meta-ads/clientes/[nombre-cliente]/CEREBRO.md

Si existe → leer el archivo completo
Si NO existe → activar FLUJO 3 (crear nuevo cliente)
```

**Paso 3 — Confirmar contexto cargado**
Mostrar al equipo un resumen de lo que se cargó:

```markdown
## Contexto cargado: [Nombre Cliente]

**Negocio:** [tipo] — [descripción breve]
**Presupuesto activo:** $[monto] USD/mes
**KPI principal:** [KPI] objetivo [valor]
**Estado técnico:** Pixel [estado] | EMQ [score] | CAPI [estado]
**Última sesión:** [fecha del log más reciente]
**Alertas activas:** [N alertas — listarlas]

Listo para trabajar. ¿Qué skill ejecutamos?
```

**Paso 4 — Proceder con el skill solicitado**
Pasar el contexto del CEREBRO al skill correspondiente sin pedir información
que ya está en el cerebro. Solo pedir datos adicionales que falten.

---

## FLUJO 2 — Actualizar cerebro después de una sesión

### Trigger
El usuario pide actualizar o el equipo termina una sesión de trabajo:
- "actualiza el cerebro de [cliente]"
- "guarda los cambios en el cerebro"
- `/meta cerebro actualizar [nombre-cliente]`

### Proceso

**Paso 1 — Registrar la sesión en SESION.md**
Agregar una nueva entrada al tope del archivo `SESION.md` del cliente con:
- Fecha de hoy
- Responsable (si se menciona)
- Skills usados en la sesión
- Resumen de cambios realizados
- Pendientes identificados

**Paso 2 — Identificar qué cambió en la sesión**
Revisar la conversación de la sesión y detectar:
- ¿Se modificó la estructura de campañas?
- ¿Hay nuevas métricas de performance?
- ¿Se tomaron nuevas decisiones o acuerdos?
- ¿Hay nuevos creativos activos o pausados?
- ¿Cambió el estado técnico (Pixel, CAPI, EMQ)?
- ¿Hay nuevas alertas o pendientes?

**Paso 3 — Proponer las actualizaciones al CEREBRO.md**
Mostrar al usuario exactamente qué campos se propone actualizar, con los nuevos valores. Pedir confirmación antes de escribir.

```markdown
## Actualizaciones propuestas para CEREBRO.md

### Sección: Historial de resultados
- Agregar fila: [YYYY-MM] | $[gasto] | [leads] | $[CPL] | — | [nota]

### Sección: Creativos activos
- Pausar: [VID_TESTIMONIAL_v1] — razón: CTR bajó a 0.4%
- Agregar: [REE_HOOK_NUEVO_v1] — lanzado hoy

### Sección: Próximas acciones
- Marcar como hecho: "Instalar CAPI"
- Agregar: "Preparar creativos diciembre" — fecha: 2026-12-01

¿Confirmas estas actualizaciones? (Sí / ajustar)
```

**Paso 4 — Escribir las actualizaciones**
Una vez confirmado, actualizar los campos en CEREBRO.md y la fecha de última actualización en el encabezado.

---

## FLUJO 3 — Crear cerebro para cliente nuevo

### Trigger
- No existe carpeta del cliente
- `/meta cerebro nuevo [nombre-cliente]`
- "agrega el cliente [nombre]"

### Proceso

**Paso 1 — Recopilar información del intake**
Solicitar al equipo la información mínima para crear el cerebro:

```
Para crear el cerebro de este nuevo cliente necesito:

INFORMACIÓN BÁSICA (obligatoria):
1. Nombre comercial del cliente
2. Tipo de negocio (ecommerce / servicios / local / saas / educación / b2b)
3. Descripción breve del negocio (qué vende, a quién)
4. Presupuesto mensual de pauta acordado (USD o COP)
5. KPI principal acordado (leads/ventas/mensajes + objetivo numérico)
6. Account manager de Sixteam asignado

INFORMACIÓN TÉCNICA (si está disponible):
7. ID de la cuenta de anuncios (act_XXXXXXXXX)
8. Pixel instalado: Sí / No / En proceso
9. CAPI configurado: Sí / No
10. EMQ Score actual (si lo tienen)

CONTEXTO DEL CLIENTE (si se sabe):
11. Principales productos/servicios a pautar
12. Avatar del cliente ideal (edad, ciudad, perfil)
13. Competidores conocidos

Tip: Con los puntos 1-6 ya se puede crear el cerebro base.
Los demás se completan conforme se avanza con la cuenta.
```

**Paso 2 — Crear la estructura**
```bash
# Crear carpeta del cliente
mkdir -p meta-ads/clientes/[nombre-normalizado]

# Copiar plantillas
cp meta-ads/clientes/_plantilla/CEREBRO.md meta-ads/clientes/[nombre-normalizado]/CEREBRO.md
cp meta-ads/clientes/_plantilla/SESION.md meta-ads/clientes/[nombre-normalizado]/SESION.md
```

**Paso 3 — Pre-rellenar el CEREBRO.md**
Completar todos los campos que el equipo proporcionó en el intake.
Dejar marcados como `[PENDIENTE]` los campos que faltan.

**Paso 4 — Confirmar creación**
```markdown
## Cerebro creado: [Nombre Cliente]

Archivo: meta-ads/clientes/[nombre-normalizado]/CEREBRO.md

Campos completados: [N]/[total]
Campos pendientes: [lista de campos que faltan]

Próximos pasos recomendados:
1. Completar los campos marcados como [PENDIENTE]
2. Ejecutar /meta auditoria para el primer diagnóstico de la cuenta
3. Ejecutar /meta plan para definir la estrategia inicial
```

---

## FLUJO 4 — Listar todos los clientes activos

### Trigger
- `/meta cerebro listar`
- "qué clientes tenemos"
- "lista todos los clientes"

### Proceso
Listar las carpetas en `meta-ads/clientes/` (excluyendo `_plantilla`) y para cada una
mostrar un resumen de una línea desde el CEREBRO.md:

```markdown
## Clientes activos — Sixteam Meta Ads

| Cliente | Tipo | Presupuesto/mes | KPI principal | Última sesión | Alertas |
|---------|------|----------------|--------------|--------------|---------|
| [nombre] | [tipo] | $[USD] | [KPI] | [fecha] | [N] |
...

Total: [N] clientes activos
```

---

## Reglas irrompibles del sistema cerebro

- **Nunca trabajar una cuenta sin leer el CEREBRO primero.** Si el cerebro no existe, crear uno antes de cualquier análisis.
- **Nunca pedir información que ya está en el CEREBRO.** Si el cliente ya tiene datos de CTR, EMQ, presupuesto, etc., usarlos directamente.
- **Siempre proponer actualizaciones, no hacerlas silenciosamente.** El equipo confirma antes de escribir al CEREBRO.
- **El CEREBRO.md es la fuente de verdad.** Si hay contradicción entre lo que dice el equipo y lo que dice el CEREBRO, preguntar cuál es correcto.
- **El log en SESION.md es cronológico e inmutable.** Solo se agregan entradas al tope, nunca se editan las anteriores.

---

## Integración con el skill /meta principal

El skill `/meta` debe incluir esta lógica en su contexto inicial:

```
Si el usuario menciona un nombre de cliente o una cuenta específica al invocar 
cualquier subcomando de /meta, PRIMERO cargar el cerebro de ese cliente usando 
este flujo antes de ejecutar el subcomando.

Ejemplo:
- "/meta auditoria tienda-moda-pereira" → cargar CEREBRO → ejecutar auditoría con contexto
- "/meta reporte clinica-dental" → cargar CEREBRO → generar reporte con datos históricos del cerebro
- "/meta plan nuevo-cliente" → no hay CEREBRO → crear cerebro primero → luego el plan
```
