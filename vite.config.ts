import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg?react",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
