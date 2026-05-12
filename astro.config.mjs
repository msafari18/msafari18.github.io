import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://msafari18.github.io",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
