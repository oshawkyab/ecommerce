import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';
import path from 'path';



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, "./src/assets"),
      '@components': path.resolve(__dirname, "./src/components"),
      '@store': path.resolve(__dirname, "./src/store"),
      '@hooks': path.resolve(__dirname, "./src/store"),
      '@utils': path.resolve(__dirname, "./src/utils"),
      '@pages': path.resolve(__dirname, "./src/pages"),
      '@routes': path.resolve(__dirname, "./src/routes"),
      '@styles': path.resolve(__dirname, "./src/styles"),
    },
  },
})
