import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // entry: 'src/card-component.js',
      entry: 'index.html',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  server: {
    port: 8080
  }
})
