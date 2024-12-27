import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    outDir: "dist", // Output directory (default is 'dist')
    emptyOutDir: true, // Ensures the 'dist' folder is cleared before each build
  },
});
