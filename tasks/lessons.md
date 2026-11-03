# Lições · site-publica

- **Conferir `engines.node` antes de instalar versões recentes.** Astro 7.4+ e wrangler latest exigem Node 22.23+;
  a máquina tem 22.13. Fixar Astro 7.3.x e usar `npx wrangler@4.150.0`. Regra: `npm view <pkg>@<versão> engines.node`
  antes de adotar a última versão de framework ou CLI.
- **Playwright MCP pode estar preso a outra sessão** ("Browser is already in use"). Plano B que funciona: instalar
  `playwright` no scratchpad e rodar script próprio (os browsers já estão em `%LOCALAPPDATA%\ms-playwright`).
- **Não repetir a mesma prova visual em duas seções.** O print do perfil apareceria no hero e no mecanismo; trocar
  um deles por outra prova real (painel de insights) deixa a página mais rica.
- **Imagem candidata a LCP não anima opacidade.** Só escala/transform, senão o LCP espera a animação.
- **Crédito de rodapé não é automático em parceria de cliente.** O usuário pediu para tirar "Desenvolvida pela Safe Group"
  desta landing (2026-11-02). Regra: em projeto da pasta CIPHER/VINICIUS PARCERIA, não colocar crédito de desenvolvimento
  sem pedido explícito; na dúvida, perguntar no fim junto das outras pendências, em vez de aplicar a regra global sozinho.
- **Encerrar servidores de preview de verdade.** No Windows, parar a tarefa do shell não mata o `node` filho; um
  `astro preview` esquecido prende `dist/` e o `astro build` seguinte fica parado sem erro. Matar pelo PID
  (`Get-CimInstance Win32_Process` filtrando a linha de comando) ao terminar a verificação.
- **Screenshot de elemento com `[data-reveal]` pode sair vazio.** O `locator.screenshot` salta direto para o elemento e
  captura antes do ScrollTrigger revelar. Para QA visual, rolar com `mouse.wheel`, esperar ~2 s e tirar print da viewport.
