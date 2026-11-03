// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// URL pública atual (preview Cloudflare Pages). Trocar quando houver domínio próprio.
const SITE = process.env.SITE_URL ?? "https://metodo-publica.pages.dev";

export default defineConfig({
  site: SITE,
  trailingSlash: "ignore",
  build: { inlineStylesheets: "always", format: "file" },
  image: { responsiveStyles: false },
  vite: { plugins: [tailwindcss()] },
});
