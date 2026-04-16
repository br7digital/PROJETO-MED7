import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ortopedista/',
  plugins: [react(), tailwindcss()],
  build: {
    // Builda direto na pasta dist/ da raiz do projeto,
    // assim a Vercel encontra tudo em um único outputDirectory
    outDir: '../dist/ortopedista',
    emptyOutDir: true,
  },
})
