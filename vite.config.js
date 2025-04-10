import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default defineConfig({
  base: '/', // ensures relative path works
  plugins: [react()],
});