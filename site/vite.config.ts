import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' garante funcionamento tanto localmente quanto no GitHub Pages (subpath)
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    postcss: {
      plugins: [],
    },
  },
})
