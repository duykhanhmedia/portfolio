import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // hoặc base: "/portfolio/" nếu deploy lên GitHub Pages
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});