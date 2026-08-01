import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    // Optimizaciones de build
    rollupOptions: {
      output: {
        manualChunks: {
          // Solo dependencias que comparten muchas rutas. Agrupar de más
          // obliga a descargar código que la ruta no usa.
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
        }
      }
    },
    // Reducir el tamaño del chunk
    chunkSizeWarningLimit: 600,
    // Usar esbuild en lugar de terser para mejor compatibilidad
    minify: 'esbuild',
    // es2015 obligaba a transpilar sintaxis que todos los navegadores con
    // soporte de módulos ES entienden de forma nativa, y engordaba el bundle.
    target: 'es2020',
  },
  // Preload de módulos críticos
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
