// solo necesario por trabajar con TypeScript
/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // configurar el test con jsdom, pero hay mas
  test: {
    environment: "jsdom",
    globals: true
  },
});
