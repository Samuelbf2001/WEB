#!/bin/bash
# sync-agentads.sh — Migra el proyecto meta-ads de WEB a AGENTADS
# Ejecutar desde cualquier directorio en tu máquina local

set -e

AGENTADS_URL="https://github.com/Samuelbf2001/AGENTADS.git"
WEB_URL="https://github.com/Samuelbf2001/WEB.git"
WEB_BRANCH="claude/meta-ads-project-FJaNV"
TMPDIR=$(mktemp -d)

echo "Sincronizando meta-ads -> AGENTADS"
echo "===================================="

# Clonar AGENTADS
echo "Clonando AGENTADS..."
git clone "$AGENTADS_URL" "$TMPDIR/AGENTADS"

# Clonar WEB (solo la rama con meta-ads)
echo "Clonando rama meta-ads de WEB..."
git clone --branch "$WEB_BRANCH" --single-branch "$WEB_URL" "$TMPDIR/WEB"

# Copiar contenido de meta-ads/ al root de AGENTADS
echo "Copiando archivos..."
cp -r "$TMPDIR/WEB/meta-ads/." "$TMPDIR/AGENTADS/"

# Commit y push
cd "$TMPDIR/AGENTADS"
git add .
git commit -m "feat: importar Sixteam Meta Ads skill completo

Skills: /meta plan, estructura, audiencias, creativos,
auditoria, presupuesto, reporte, cerebro.
Sistema de cerebro de clientes con plantillas y ejemplo.
Mercado: Colombia y LATAM."

echo "Pusheando a AGENTADS..."
git push origin main

# Limpiar
rm -rf "$TMPDIR"

echo ""
echo "Listo. El proyecto esta en https://github.com/Samuelbf2001/AGENTADS"
