import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Medic/",
  assetsInclude: ["**/*.wasm", "**/*.fs"],
  optimizeDeps: {
    include: ["@electric-sql/pglite"],
  },
});
