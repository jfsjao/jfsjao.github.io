import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo é jfsjao/jfsjao.github.io — uma página de usuário do GitHub Pages,
  // sempre publicada na raiz do domínio (https://jfsjao.github.io/), nunca
  // num subcaminho. Base fica em '/' tanto em dev quanto em produção.
  base: '/',
})
