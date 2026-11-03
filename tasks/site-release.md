# Fechamento de lançamento · site-publica

- Projeto: landing page de vendas do PUBLICA (Vinicius Campana + Máquina de Edição de Matheus Fonseca)
- Data: 2026-11-02 21:17 (-03:00)
- Ambiente: preview, https://metodo-publica.pages.dev (Cloudflare Pages, conta Growth Hub)
- Escopo: `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/og-image.jpg`, `/nao-existe`, build local `dist/`
- Validador: `release_gate.py` executado, relatório válido

## Decisão: NOT_READY (para lançamento público)

Pronto no escopo de preview: 20 verificações aprovadas, 6 não aplicáveis com motivo, 0 falhas.
O que impede o lançamento são 3 pendências que dependem de dados do cliente, não de código.

## Pendências, em ordem de dependência

| ID | Severidade | Local | Ação | Responsável sugerido | Como retestar |
| --- | --- | --- | --- | --- | --- |
| checkout | critical | `src/modules/offer/data/offer.ts` | Informar preço real e link do checkout; preencher `price` e `checkoutUrl` | Cliente informa, Claude aplica | Clicar no botão do cartão de oferta e chegar à página de pagamento |
| social | medium | `astro.config.mjs` (`SITE_URL`) | Definir domínio, rebuild com `SITE_URL=https://dominio` | Cliente define domínio | Depurador de compartilhamento da Meta e WhatsApp |
| production-verification | high | URL final | Deploy no domínio final e smoke HTTP/navegador | Claude | curl nas rotas + navegação real até o checkout |

Ações externas: domínio (e DNS, se for subdomínio da Growth Hub ou da CIPHER), plataforma de checkout, eventual pixel (exige política de privacidade).

## Evidências principais

| ID | Status | Evidência |
| --- | --- | --- |
| context | pass | SEO-SPEC.md com briefing, stack, ambiente e faltas |
| page-intent | pass | `/` transacional, termo hipotético do briefing, CTA único |
| titles | pass | Title de 48 caracteres no HTML publicado |
| descriptions | pass | Description própria, sem promessa de resultado |
| headings-content | pass | 1 H1, 16 H2, fatos conferidos contra o e-book e o Instagram |
| canonical-indexing | pass | 200 HTTPS, canonical absoluto, HTTP 301 para HTTPS |
| robots | pass | 200, Allow + Sitemap absoluto |
| sitemap | pass | XML válido só com `/` |
| llms | pass | 200, links para âncoras reais |
| social | pending | OG 1200x630 ok, mas no domínio de preview |
| favicon | pass | ICO, PNG 48, SVG, apple-touch 180 |
| images | pass | WebP + srcset, alt, dimensões, hero eager, resto lazy |
| performance | pass | Mobile lento: LCP 1,1 s, CLS 0. Desktop: LCP 0,36 s. Lighthouse mobile 91/100/100/100 |
| navigation-mobile | pass | 1440/768/375 sem overflow, sem erro, animações sem resíduo |
| accessibility | pass | Contraste AA em todos os pares, foco visível, skip link, reduced motion |
| forms-ui / forms-delivery | na | Sem formulário |
| conversion-tracking | na | Sem analytics/pixel nesta versão |
| privacy | pass | Nenhum dado pessoal coletado |
| cookies | pass | 0 Set-Cookie |
| not-found | pass | 404 real com noindex |
| email-spf / dkim / dmarc | na | Página não envia e-mail |
| security | pass | 0 tokens no repo e no build; PDF pago fora do git |
| credit | pass | "Desenvolvida pela Safe Group" no rodapé (confirmar vs. CLAUDE.md da CIPHER) |
| build | pass | Astro build ok, `check:copy` ok |
| production-verification | pending | Só preview verificado |
| checkout | pending | Preço placeholder e checkout vazio |

## Limitações

- Sem dados de campo de Core Web Vitals (página nova).
- Medições de laboratório com Playwright e Lighthouse simulado; não representam todos os dispositivos.
- "+45 milhões em um único Reel" (e-book p.6) foi retirado por divergir do print da p.7; volta se o Vinicius confirmar com print.
- Nada foi verificado em domínio final, porque ele ainda não existe.
