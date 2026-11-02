# Lições · site-publica

- **Conferir `engines.node` antes de instalar versões recentes.** Astro 7.4+ e wrangler latest exigem Node 22.23+;
  a máquina tem 22.13. Fixar Astro 7.3.x e usar `npx wrangler@4.150.0`. Regra: `npm view <pkg>@<versão> engines.node`
  antes de adotar a última versão de framework ou CLI.
- **Playwright MCP pode estar preso a outra sessão** ("Browser is already in use"). Plano B que funciona: instalar
  `playwright` no scratchpad e rodar script próprio (os browsers já estão em `%LOCALAPPDATA%\ms-playwright`).
- **Não repetir a mesma prova visual em duas seções.** O print do perfil apareceria no hero e no mecanismo; trocar
  um deles por outra prova real (painel de insights) deixa a página mais rica.
- **Imagem candidata a LCP não anima opacidade.** Só escala/transform, senão o LCP espera a animação.
