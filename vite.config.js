import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '_site/index.html'
    }
  },
  publicDir: 'public',
  root: '_site'
});