# CLAUDE.md · site-publica (landing page de vendas do PUBLICA)

Vale junto com o CLAUDE.md global e o da pasta CIPHER. Em conflito, o mais específico ganha.

## O que é
Landing page de vendas clássica (sem VSL) do **PUBLICA / Método PUBLICA**, infoproduto de crescimento orgânico
no Instagram do **Vinicius Campana** (@viniciuscampana), com a **Máquina de Edição** (aulas do **Matheus Fonseca**,
@matheusfonseca.ia: roteiro, edição com IA e postagem automática, 12+ formatos, 6 tipos de edição).
Fonte de verdade dos fatos: `PUBLICA_2.0.pdf` (e-book do produto, na raiz, só local: está no .gitignore por ser o produto pago). Não inventar número, depoimento ou garantia.
Nunca citar o nome da ferramenta de edição usada na Máquina de Edição.

## Stack e comandos
Astro 7.3 (estático) + Tailwind v4 (plugin Vite) + GSAP/ScrollTrigger. Fontes self-hosted (Montserrat + Inter).
Astro está fixado em 7.3.x porque o 7.4+ exige Node >= 22.23 e a máquina tem 22.13.
```
npm install
npm run dev          # http://localhost:4321
npm run build        # gera dist/
npm run check:copy   # falha se houver travessão (U+2013/U+2014) em dist/ ou src/
```

## Onde editar o quê (modular-arch)
- Oferta, preço, checkout, itens inclusos: `src/modules/offer/data/offer.ts` (fonte única).
- Metadados, nav, crédito: `src/shared/config/site.ts`.
- Cada seção: `src/modules/<seção>/components/*.astro` + `data/*.ts` + `assets/*.webp`.
- Ordem das seções: `src/pages/index.astro`.
- Tokens da marca: `src/shared/styles/global.css` (`@theme`). Wordmark oficial: `src/shared/brand/Wordmark.astro`.
- Motion genérico por atributo (`data-reveal`, `data-count`): `src/shared/motion/motion.ts`.

## Identidade (fechada, do Drive "Sistema de marca publica")
`#0A0A0A` fundo, `#F4F2EE` texto/papel, `#FF3B1F` único destaque, cinzas `#2A2A2A #8A8A8A #B5B2AC #E6E3DE`.
Botões e chips em pílula, cartões 20 a 28px. Tema escuro travado; a oferta (`#oferta`) é o único bloco claro.
Texto de botão primário é `#0A0A0A` sobre `#FF3B1F` (contraste AA). Não usar tweakcn aqui.

## Regras
- Zero travessão em qualquer copy. Rodar `npm run check:copy` antes de publicar.
- Imagens novas: WebP dentro do `assets/` do módulo; hero eager + `fetchpriority="high"`, o resto lazy.
- Crédito no rodapé: "Desenvolvida pela Safe Group" (regra global vigente).
- SEO: seguir `SEO-SPEC.md` (skill `site-seo-release`). Fechamento em `tasks/site-release.md` e `.json`.
- Handoff entre IAs: `tasks/ai-handoff.md`.

## Deploy
Cloudflare Pages, conta Growth Hub (`dbcff9abde3df964100df4b1d3a41798`), projeto **metodo-publica** ->
https://metodo-publica.pages.dev (preview, sem domínio próprio ainda). Token DEPLOY do CLAUDE.md global.
`wrangler@latest` exige Node 22.23+, usar `npx wrangler@4.150.0`:
```
npm run build
npx wrangler@4.150.0 pages deploy dist --project-name=metodo-publica --branch=main --commit-dirty=true
```
Ao ganhar domínio: `SITE_URL=https://dominio npm run build` (canonical, sitemap, robots, llms e OG usam essa base).
Repositório: GitHub privado `scheibe-369/site-publica`.
