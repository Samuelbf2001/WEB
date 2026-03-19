FROM node:18-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar todas las dependencias (dev también para build)
RUN npm ci

# Copiar código fuente
COPY . .

# Build de la aplicación
RUN npm run build

# Limpiar dev dependencies después del build
RUN npm prune --production

# Exponer puerto
EXPOSE 8080

# Comando para iniciar
CMD ["node", "server.js"] 