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
  },
  build: {
    // Optimizaciones de build
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar dependencias grandes
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
          'carousel-vendor': ['embla-carousel-react']
        }
      }
    },
    // Reducir el tamaño del chunk
    chunkSizeWarningLimit: 600,
    // Usar esbuild en lugar de terser para mejor compatibilidad
    minify: 'esbuild',
    target: 'es2015',
  },
  // Optimizaciones de servidor de desarrollo
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Preload de módulos críticos
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
