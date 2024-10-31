import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dist/index.html')
      }
    }
  },
  server: {
    port: 5174,
    strictPort: false,
    hmr: {
      protocol: 'ws'
    }
  }
});