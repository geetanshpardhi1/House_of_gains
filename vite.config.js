import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress", // or 'gzip'
      threshold: 1024 * 5, // Compress files larger than 5KB
    }),
  ],
  build: {
    minify: "esbuild", // Use esbuild for faster minification
    rollupOptions: {
      treeshake: true, // Remove unused code
    },
  },
  css: {
    minify: true,
  },
});
