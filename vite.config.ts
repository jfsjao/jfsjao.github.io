import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from https://<user>.github.io/portifolio-jf/,
  // so assets must resolve under that subpath in production. Local dev keeps '/'.
  base: process.env.GITHUB_PAGES ? '/portifolio-jf/' : '/',
})
