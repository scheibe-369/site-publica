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
- [x] Agentes em paralelo: pesquisa Instagram (Vinicius e Matheus), roteiro de copy
- [x] Scaffold Astro + Tailwind v4 + fontes + tokens da marca
- [x] Tratar assets: wordmark, favicon, logos de marcas, prints de prova, fotos, WebP
- [x] SEO-SPEC.md
- [x] Construir seções (hero, números, marcas, dor, mecanismo, pilares, produto, conteúdo, Máquina de Edição, casos, público, professores, oferta, garantia, FAQ, CTA final, rodapé, barra mobile)
- [x] Motion GSAP com reduced-motion
- [x] robots.txt, sitemap.xml, llms.txt, 404, OG image, favicon
- [x] QA em paralelo (visual 375/768/1440, copy/claims, SEO técnico) e correções
- [x] Repo GitHub privado + push (`scheibe-369/site-publica`)
- [x] Deploy Cloudflare Pages + validação HTTP (https://metodo-publica.pages.dev)
- [x] tasks/site-release.md/.json, ai-handoff.md, review final
- [ ] Aguardando cliente: preço, checkout, domínio, confirmação do "+45 milhões"

## Review
- Entregue em preview: 16 seções, identidade oficial, provas reais (prints do e-book, Instagram verificado via Apify).
- QA por 3 agentes achou e foi corrigido: transform residual do GSAP em 84 elementos, piscada do H1 em rede lenta,
  2 contrastes abaixo de AA, carrossel de Reels espremido no tablet, números sem prova, repetições de layout.
- Medido na URL real: mobile lento LCP 1,1 s, desktop 0,36 s, CLS 0. Lighthouse mobile 91/100/100/100 (build local).
- Release gate: NOT_READY só por checkout/preço, domínio e verificação final (dependem do cliente).
