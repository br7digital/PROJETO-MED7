import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { resolve } from 'path'

export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'robust-rewrite-ortopedista',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const [path, query] = (req.url || '').split('?');
          if (path === '/ortopedista' || path === '/ortopedista/index.html') {
            const queryStr = query ? `?${query}` : '';
            res.writeHead(301, { Location: `/ortopedista/${queryStr}` });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ortopedista: resolve(__dirname, 'ortopedista/index.html'),
      },
    },
  },
})
