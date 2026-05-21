#!/bin/bash
# Sixteam Meta Ads — Script de instalación
# Instala el skill en el proyecto actual o globalmente

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${1:-local}"

echo "🚀 Sixteam Meta Ads Skill — Instalador"
echo "======================================="

if [ "$TARGET" = "global" ]; then
  INSTALL_DIR="$HOME/.claude/skills"
  echo "Instalando globalmente en: $INSTALL_DIR"
else
  INSTALL_DIR="$(pwd)"
  echo "Instalando en proyecto actual: $INSTALL_DIR"
fi

# Crear directorios destino
mkdir -p "$INSTALL_DIR/meta"
mkdir -p "$INSTALL_DIR/skills"

# Copiar skill principal
cp "$SCRIPT_DIR/meta/SKILL.md" "$INSTALL_DIR/meta/SKILL.md"
echo "✅ Skill principal copiado"

# Copiar sub-skills
for skill_dir in "$SCRIPT_DIR/skills"/*/; do
  skill_name=$(basename "$skill_dir")
  mkdir -p "$INSTALL_DIR/skills/$skill_name"
  cp "$skill_dir/SKILL.md" "$INSTALL_DIR/skills/$skill_name/SKILL.md"
  echo "✅ $skill_name copiado"
done

# Copiar plugin.json si es instalación local
if [ "$TARGET" != "global" ]; then
  mkdir -p "$INSTALL_DIR/.claude-plugin"
  cp "$SCRIPT_DIR/.claude-plugin/plugin.json" "$INSTALL_DIR/.claude-plugin/plugin.json"
  echo "✅ plugin.json copiado"
fi

echo ""
echo "✅ Instalación completada."
echo ""
echo "Comandos disponibles:"
echo "  /meta              → Menú principal"
echo "  /meta plan         → Estrategia completa"
echo "  /meta estructura   → Estructura de campañas"
echo "  /meta audiencias   → Estrategia de audiencias"
echo "  /meta creativos    → Briefs y copy"
echo "  /meta auditoria    → Auditoría de cuenta"
echo "  /meta presupuesto  → Presupuesto y proyecciones"
echo "  /meta reporte      → Reporte para cliente"
