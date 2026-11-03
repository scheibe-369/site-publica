# AI handoff · site-publica

## Estado atual
- Última tag: "HANDOFF-site-publica-20261102-233223-claude"
- Status: bloqueado (aguardando link de checkout e domínio)
- Resumo: preço R$ 69,90 publicado, selo de garantia novo, crédito removido. Falta checkout e domínio.

## [HANDOFF · site-publica · 2026-11-02T23:32:23-03:00 · claude]
Status: bloqueado
Objetivo: aplicar a rodada 2 de ajustes do cliente na landing do PUBLICA.
Feito:
- Crédito "Desenvolvida pela Safe Group" removido (rodapé, config, README, SEO-SPEC); regra registrada no CLAUDE.md do projeto.
- Preço final R$ 69,90 em offer.ts (priceConfirmed true); schema Product/Offer gerado de offer.ts (src/modules/offer/data/schema.ts) e preço no llms.txt.
- Selo de garantia novo em SVG (GuaranteeSeal.astro): roseta serrilhada, anel de texto girando, fitas, efeito de carimbo; seção em duas colunas a partir de lg.
- Build, check:copy, screenshots 375/768/1024/1440, deploy e smoke HTTP na URL real.
Próximo passo:
- Com o link de checkout: preencher checkoutUrl em offer.ts, rebuild, deploy e testar o clique até a página de pagamento.
- Com o domínio: SITE_URL=https://dominio npm run build, deploy, anexar o domínio no Pages e testar.
Arquivos tocados: src/modules/offer/ (offer.ts, schema.ts, Guarantee.astro, GuaranteeSeal.astro), SiteFooter.astro, src/shared/config/site.ts, src/layouts/BaseLayout.astro, src/pages/index.astro, src/pages/llms.txt.ts, CLAUDE.md, README.md, SEO-SPEC.md, tasks/*.
Decisões/contexto:
- O usuário autorizou "pegar um selo da internet"; optei por desenhar em SVG porque os selos prontos costumam ter licença restrita (Freepik, Pngtree), vêm em inglês ou dourados e quebram a identidade (vermelho como único destaque).
- Um `astro preview` antigo deixado rodando no Windows travou o `astro build` (pasta dist presa). Matar o processo node pelo PID antes de buildar.
Tag: "HANDOFF-site-publica-20261102-233223-claude"

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
