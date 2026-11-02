# site-publica

Landing page de vendas do **PUBLICA**, o método de crescimento orgânico no Instagram do Vinicius Campana,
com a Máquina de Edição (roteiro, edição com IA e postagem automática) ensinada por Matheus Fonseca.

Preview: https://metodo-publica.pages.dev

## Rodar

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # saída estática em dist/
npm run check:copy   # garante zero travessão na copy
```

Requer Node 22.12+. Astro fixado em 7.3.x (o 7.4+ pede Node 22.23+).

## Antes de lançar

1. Preencher preço e link de checkout em `src/modules/offer/data/offer.ts`.
2. Definir o domínio e buildar com `SITE_URL=https://seu-dominio npm run build`.
3. Publicar termos de uso e política de privacidade se houver pixel ou analytics.

Detalhes de arquitetura, identidade e deploy em `CLAUDE.md`. SEO em `SEO-SPEC.md`.

Desenvolvida pela [Safe Group](https://safegroupia.com).
