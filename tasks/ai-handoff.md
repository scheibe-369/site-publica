# AI handoff · site-publica

## Estado atual
- Última tag: "HANDOFF-site-publica-20261102-211745-claude"
- Status: bloqueado (aguardando dados do cliente)
- Resumo: landing do PUBLICA publicada em preview (https://metodo-publica.pages.dev), QA completo aplicado. Falta preço, checkout e domínio.

## [HANDOFF · site-publica · 2026-11-02T21:17:45-03:00 · claude]
Status: bloqueado
Objetivo: landing page de vendas clássica (sem VSL) do PUBLICA, publicada, com repo privado no GitHub.
Feito:
- Rodada de QA com 3 agentes (visual, copy/fatos, SEO técnico) e todas as correções aplicadas (ver commit 7f015eb).
- Deploy validado na URL real: rotas 200, 404 real, OG, favicon, 0 cookies, LCP mobile lento 1,1 s, CLS 0.
- `tasks/site-release.json/.md` com release gate (NOT_READY só por checkout, domínio e verificação final).
Próximo passo:
- Com o preço e o checkout: editar `src/modules/offer/data/offer.ts` (`price`, `checkoutUrl`, `priceConfirmed: true`), considerar schema Product/Offer.
- Com o domínio: `SITE_URL=https://dominio npm run build`, deploy (`npx wrangler@4.150.0 pages deploy dist --project-name=metodo-publica --branch=main --commit-dirty=true`), anexar domínio no Pages e testar.
- Se o Vinicius confirmar "+45 milhões em um único Reel" com print, voltar o número em `src/modules/proof/data/proof.ts`.
Arquivos tocados: projeto inteiro.
Decisões/contexto:
- Astro fixado em 7.3.8 e wrangler 4.150.0 por causa do Node 22.13 da máquina.
- PDF do e-book fora do git (produto pago).
- "desde a pandemia" e "vídeos feitos inteiramente com IA" vêm do briefing do usuário (mantidos).
- Crédito "Desenvolvida pela Safe Group" (regra global), apesar do CLAUDE.md da CIPHER citar Method Growth Hub.
Tag: "HANDOFF-site-publica-20261102-211745-claude"

## [HANDOFF · site-publica · 2026-11-02T20:53:22-03:00 · claude]
Status: em andamento
Objetivo: landing page de vendas clássica (sem VSL) do PUBLICA, publicada, com repo privado no GitHub.
Feito: v1 construída e publicada; repo `scheibe-369/site-publica`; Pages `metodo-publica`.
Próximo passo: aplicar QA, redeploy, fechar site-release.
Tag: "HANDOFF-site-publica-20261102-205322-claude"
