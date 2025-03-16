import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Ensure correct asset paths on Netlify
  publicDir: "public", // Ensure public files are copied correctly
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
