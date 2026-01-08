// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "ja"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  site: "https://alexisastrofolio.netlify.app",
  integrations: [sitemap()],
});
