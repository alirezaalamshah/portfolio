// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // ✅ مسیر درست برای GitHub Pages
  plugins: [react()],
})
