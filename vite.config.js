import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: [{ find: "@", replacement: "/src" }],
  }
});