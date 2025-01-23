import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg'],
  base: '/arcintel-website/', // Replace with your actual repository name
})
