import { defineConfig } from "astro/config";

const baseUrl = "/dp-noel-2024";

// https://astro.build/config
export default defineConfig({
  base: baseUrl,
  outDir: "." + baseUrl,
  publicDir: "./public",

  // Exemple : Exiger une barre oblique finale pendant le développement
  trailingSlash: "always",
});
