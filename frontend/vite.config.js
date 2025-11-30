import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5313,
    proxy: {
      '/api': {
        target: 'https://indian-constitution-git-main-j-jeevachaithanyas-projects.vercel.app/',
        changeOrigin: true
      }
    }
  }
})