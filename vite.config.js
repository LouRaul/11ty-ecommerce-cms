import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../_site',
    emptyOutDir: false
  },
  server: {
    port: 5000, // Different port for Vite
    strictPort: true, // Will fail if port is not available
    hmr: {
      protocol: 'ws'
    }
  }
});