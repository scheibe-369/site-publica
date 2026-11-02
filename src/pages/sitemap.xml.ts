import type { APIRoute } from "astro";

// Inventário canônico: só a página de venda. O 404 fica fora.
const ROUTES = [{ path: "/", lastmod: "2026-11-02" }];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://metodo-publica.pages.dev");
  const urls = ROUTES.map(
    (r) => `  <url><loc>${new URL(r.path, base).href}</loc><lastmod>${r.lastmod}</lastmod></url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
