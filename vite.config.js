import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Hỗ trợ JSX cho Vite,
  base: "/portfolio/",
  resolve: {
    extensions: ['.js', '.jsx'], // Cho phép import không cần đuôi file
    alias: [{ find: "@", replacement: "/src" }],
  }
});