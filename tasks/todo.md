# PUBLICA · Landing page de vendas

Plano aprovado por padrão (usuário ausente, autonomia total em 2026-11-02). Dúvidas viram perguntas no fim.

## Decisões
- Stack: Astro 5 (HTML estático, bom pra SEO e LCP) + Tailwind v4 (plugin Vite) + GSAP/ScrollTrigger. Fontes self-hosted (Montserrat + Inter, as mesmas do e-book).
- Arquitetura: `src/modules/<seção>/` (modular-arch). Primitivos em `src/shared/ui/`. Config única de oferta em `src/modules/offer/data/offer.ts`.
- Identidade: sistema de marca do Drive. `#0A0A0A`, `#F4F2EE`, `#FF3B1F`, cinzas `#2A2A2A #8A8A8A #E6E3DE`. Wordmark SVG oficial (pontinho vermelho no "i").
- Página dark (tema travado), um único bloco claro deliberado (a oferta).
- Fatos só do e-book PUBLICA 2.0 e do briefing. Sem depoimento inventado. Aviso de resultados no rodapé.
- Preço e checkout: placeholders em config, perguntar no fim.
- Deploy: Cloudflare Pages (conta Growth Hub, preview `.pages.dev`). Repo privado em `scheibe-369`.
- Crédito: "Desenvolvida pela Safe Group" (regra global vigente desde 2026-09-12).

## Etapas
- [x] Ler e-book (texto, imagens, fontes) e baixar identidade do Drive
- [x] Carregar skills: modular-arch, design-taste-frontend, site-seo-release
- [ ] Agentes em paralelo: pesquisa Instagram (Vinicius e Matheus), roteiro de copy
- [ ] Scaffold Astro + Tailwind v4 + fontes + tokens da marca
- [ ] Tratar assets: wordmark, favicon, logos de marcas, prints de prova, fotos, WebP
- [ ] SEO-SPEC.md
- [ ] Construir seções (hero, números, marcas, dor, mecanismo, produto, conteúdo, Máquina de Edição, casos, público, professores, oferta, garantia, FAQ, CTA final, rodapé)
- [ ] Motion GSAP com reduced-motion
- [ ] robots.txt, sitemap.xml, llms.txt, 404, OG image, favicon
- [ ] QA em paralelo (visual 375/768/1440, copy/claims, SEO técnico) e correções
- [ ] Repo GitHub privado + push
- [ ] Deploy Cloudflare Pages + validação HTTP 200
- [ ] tasks/site-release.md/.json, ai-handoff.md, review final

## Review
(preencher no fim)
