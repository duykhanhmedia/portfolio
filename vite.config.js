import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // hoặc base: "/portfolio/" nếu deploy lên GitHub Pages
  plugins: [react()],
});