import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensures clean imports using aliases if needed
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // Ensures the output directory is 'dist'
    rollupOptions: {
      // Helps debug and isolate unresolved import errors
      input: path.resolve(__dirname, "index.html"), // Entry point
    },
  },
});
