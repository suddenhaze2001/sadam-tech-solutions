import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sadam-tech-solutions/',
  plugins: [react()],
  server: { host: true }
})
