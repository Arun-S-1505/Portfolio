import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  publicDir: "public", // Ensure public files are copied correctly
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
