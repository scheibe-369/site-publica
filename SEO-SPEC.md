# Especificação SEO e lançamento

<!-- site-seo-release:spec:start -->

## Contexto confirmado

- Projeto, negócio e oferta: landing page de vendas do **PUBLICA** (Método PUBLICA), infoproduto de crescimento orgânico no Instagram criado por Vinicius Campana. Inclui e-book de 42 páginas, aula em vídeo de 15 a 20 min, banco de 30 ideias de Reels, plano de ação de 7 dias e a Máquina de Edição (aulas de Matheus Fonseca sobre roteiro, edição com IA e postagem automática).
- Público, região e idioma: empreendedores, lojistas, prestadores de serviço, profissionais liberais e criadores no Brasil. pt-BR.
- Objetivo e conversão principal: clique em "Quero o PUBLICA" e compra no checkout externo.
- Diferenciais e provas disponíveis: 494 mil seguidores orgânicos (@viniciuscampana, verificado via Apify em 2026-11-02), números do e-book (p.6 a p.8), estudos de caso do e-book (p.32 a p.36), marcas e TV Globo (p.8), Matheus Fonseca com 57 mil seguidores (verificado em 2026-11-02).
- Domínio final, ambiente e stack: preview `https://metodo-publica.pages.dev` (Cloudflare Pages, conta Growth Hub). Domínio próprio a confirmar. Astro 7 estático + Tailwind v4 + GSAP.
- Responsável pela entrega: Claude Code (sessão autônoma de 2026-11-02), revisão de Matheus Fonseca.
- Dados faltantes, hipóteses e impacto:
  - Preço (placeholder em `src/modules/offer/data/offer.ts`). Impacto: bloco de oferta e CTA final.
  - Link de checkout. Impacto: botão da oferta aponta para `#oferta` enquanto vazio.
  - Domínio definitivo. Impacto: canonical, sitemap, robots, llms e OG precisam ser regerados (variável `SITE_URL`).
  - Termos de uso, política de privacidade e contato. Impacto: rodapé sem esses links até existirem.
  - "+45 milhões em um único Reel" (e-book p.6) diverge do print da p.7 (13 milhões no mais visto da lista). Usado como está no material do autor, confirmar.

## Matriz de páginas

| Rota | Indexar? Motivo | Intenção | Termo principal e origem | Termos de apoio | Title | Description | H1 | Canonical | CTA | Pergunta principal | Imagem social | Idioma |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Sim, página de venda pública | Transacional / comercial | "crescer no Instagram sem anúncio" (hipótese a partir do briefing e do e-book, sem pesquisa de volume) | configurar conta do Instagram, Reels que alcançam, edição de vídeo com IA, Vinicius Campana | Método PUBLICA \| Cresça no Instagram sem anúncio | Configure sua conta do jeito certo e crie Reels que chegam a gente nova, sem anúncio. Guia de Vinicius Campana com a Máquina de Edição com IA. | Não basta postar. Você precisa ser visto. | `https://metodo-publica.pages.dev/` | Quero o PUBLICA | Como fazer meus vídeos chegarem a quem ainda não me segue? | `/og-image.jpg` 1200x630 | pt-BR |
| `/404` | Não (página de erro, fora do sitemap) | Recuperação | n/a | n/a | Página não encontrada \| PUBLICA | n/a | Essa página não existe | n/a | Voltar para o PUBLICA | n/a | n/a | pt-BR |

## Requisitos de construção

- Descoberta: `robots.txt`, `sitemap.xml` e `llms.txt` gerados por rotas Astro (`src/pages/*.ts`) a partir de `site` do `astro.config.mjs`. Sem exclusões além do 404.
- Conteúdo: dúvidas reais no FAQ (iniciante, nicho, tempo, garantia, o que não inclui). Provas com fonte no e-book. Sem depoimentos inventados. Schema: apenas `WebPage` com `author` (Person). Sem `Product`/`Offer` até existir preço real. Sem `FAQPage` (rich result restrito).
- Mídia: imagens do e-book (autor), do Drive de identidade e do Instagram público dos professores. WebP gerado com Pillow (q 84 a 90) e otimizado pelo `astro:assets` com `srcset`. Hero eager + `fetchpriority="high"`, demais `loading="lazy" decoding="async"`. Favicon ICO + PNG 48 + SVG + apple-touch-icon 180.
- Formulários: nenhum. Conversão via checkout externo.
- Conversão: sem pixel/analytics nesta versão (a confirmar). Nenhum dado pessoal coletado.
- Acessibilidade: contraste AA (texto do botão `#0A0A0A` sobre `#FF3B1F`), foco visível, skip link, `details/summary` no FAQ, hierarquia h1 > h2 > h3, `prefers-reduced-motion` desliga GSAP e marquee.
- Privacidade: sem cookies próprios. Política de privacidade a confirmar quando houver pixel.
- E-mail: não se aplica (sem formulário nem envio).
- Operação: `npm run build`, 404 real servido pelo Pages (`404.html`), HTTPS do Pages, mobile 375/768/1440, crédito "Desenvolvida pela Safe Group" no rodapé.

## Plano de aceite

| ID da verificação | Obrigatório? | Critério de aceite contextual | Método e ambiente | Dependência | Responsável |
| --- | --- | --- | --- | --- | --- |
| meta | Sim | Title e description únicos, coerentes com o H1 | Inspeção do HTML do build e da URL publicada | Build | Claude |
| canonical | Sim | Canonical absoluto apontando para a URL pública vigente | HTML publicado | Domínio | Claude |
| robots | Sim | `/robots.txt` 200 com sitemap absoluto | HTTP na URL publicada | Deploy | Claude |
| sitemap | Sim | XML válido só com `/` | Parser + HTTP | Deploy | Claude |
| llms | Sim | `/llms.txt` 200 com fatos e links reais | HTTP | Deploy | Claude |
| 404 | Sim | URL inexistente responde 404 com navegação | HTTP | Deploy | Claude |
| og | Sim | og:image 1200x630 acessível, og:url absoluta | HTTP + inspeção | Deploy | Claude |
| favicon | Sim | ICO/PNG acessíveis e referenciados | HTTP | Deploy | Claude |
| images | Sim | WebP, dimensões reservadas, lazy fora da dobra, hero eager | Inspeção do build | Build | Claude |
| a11y | Sim | Contraste AA, foco visível, alt contextual | Navegador | Build | Claude |
| copy | Sim | Zero travessão (U+2013/U+2014) no HTML | `npm run check:copy` | Build | Claude |
| credit | Sim | Rodapé com "Desenvolvida pela Safe Group" | Inspeção | Build | Claude |
| perf | Recomendado | LCP de laboratório < 2,5 s em mobile | Lighthouse/Playwright (laboratório) | Deploy | Claude |

## Histórico de decisões

| Data | Decisão | Evidência ou hipótese | Impacto e próximo teste |
| --- | --- | --- | --- |
| 2026-11-02 | Astro estático em vez de SPA | HTML completo servido, melhor para LCP e indexação | Conferir HTML servido |
| 2026-11-02 | Preview em `metodo-publica.pages.dev` | Regra global de preview sem domínio fixo | Regerar canonical ao trocar domínio |
| 2026-11-02 | Sem schema Product/Offer | Preço não confirmado | Adicionar quando houver preço e checkout |

## Pendências para implementação

Preço, checkout, domínio, páginas legais, confirmação do "+45 milhões". O fechamento completo fica em `tasks/site-release.md`.

<!-- site-seo-release:spec:end -->
