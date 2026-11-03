# AI handoff · site-publica

## Estado atual
- Última tag: "HANDOFF-site-publica-20261102-205322-claude"
- Status: em andamento
- Resumo: landing do PUBLICA construída e publicada em https://metodo-publica.pages.dev (v1). Rodando QA (visual, copy, SEO) e aplicando correções.

## [HANDOFF · site-publica · 2026-11-02T20:53:22-03:00 · claude]
Status: em andamento
Objetivo: landing page de vendas clássica (sem VSL) do PUBLICA, publicada, com repo privado no GitHub.
Feito:
- E-book PUBLICA_2.0.pdf lido e usado como fonte de fatos; identidade baixada do Drive (paleta, wordmark SVG).
- Pesquisa Instagram via Apify (Vinicius 494.117, Matheus 57.157 seguidores; reels do Matheus com 88 mil a 628 mil reproduções).
- Astro 7.3 + Tailwind v4 + GSAP, 16 seções em `src/modules/*`. SEO-SPEC, robots, sitemap, llms, 404, OG, favicon.
- Repo privado `scheibe-369/site-publica` (main). Deploy Pages `metodo-publica` (conta Growth Hub).
Próximo passo:
- Aplicar achados dos 3 agentes de QA, rebuild, `npm run check:copy`, redeploy, validar HTTP.
- Fechar `tasks/site-release.md` e `.json`.
- Perguntas ao usuário: preço, checkout, domínio, "+45 milhões" (p.6 vs print p.7), crédito Safe Group vs Method Growth Hub, termos/privacidade, forma de acesso.
Arquivos tocados: projeto inteiro (novo).
Decisões/contexto:
- Astro fixado em 7.3.8 e wrangler 4.150.0 por causa do Node 22.13 da máquina.
- PDF do e-book fora do git (produto pago).
- Preço R$ 97 é placeholder em `src/modules/offer/data/offer.ts` (`priceConfirmed: false`). Checkout vazio = botões vão para `#oferta`.
- Estudos de caso são clientes atendidos pelo Vinicius (não compradores do guia); copy deixa isso claro.
Tag: "HANDOFF-site-publica-20261102-205322-claude"
