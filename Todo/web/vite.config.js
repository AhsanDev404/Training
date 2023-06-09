import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      createProxyMiddleware('/api', {
        target: 'http://localhost:4000', // Replace with your API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the '/api' prefix
      }),
    ],
  },
})
