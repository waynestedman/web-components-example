const path = require('path')
import { defineConfig } from 'vite'
// import json from './src/tokens/tokens.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/card-component.js'),
      name: 'ComponentLib',
      fileName: (format) => `comp-lib.${format}.js`
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  server: {
    port: 8080
  }
})
