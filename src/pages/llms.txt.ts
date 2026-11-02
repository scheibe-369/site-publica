import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://metodo-publica.pages.dev");
  const u = (p: string) => new URL(p, base).href;
  const body = `# PUBLICA (Método PUBLICA)

> Guia prático de crescimento orgânico no Instagram criado por Vinicius Campana (@viniciuscampana, 494 mil seguidores). Ensina a configurar a conta do jeito certo e a produzir Reels que chegam a quem ainda não segue o perfil, sem anúncio. Inclui a Máquina de Edição, aulas de Matheus Fonseca (@matheusfonseca.ia) sobre roteiro, edição com IA e postagem automática. Conteúdo em português do Brasil.

## Informações principais

- [Página de venda](${u("/")}): o que é o PUBLICA, para quem é, o que inclui e a garantia.
- [O método](${u("/#metodo")}): a configuração do perfil e os cinco pilares (perfil, conteúdo, Reels, frequência e análise).
- [O que tem dentro](${u("/#conteudo")}): as 10 partes do e-book e os 2 bônus (30 ideias de Reels e plano de 7 dias).
- [Máquina de Edição](${u("/#maquina")}): roteirizar, editar e publicar com IA, com mais de 12 formatos e 6 tipos de edição.
- [Resultados](${u("/#resultados")}): estudos de caso registrados no material, sem garantia de resultado.
- [Oferta e garantia](${u("/#oferta")}): itens inclusos e garantia de 7 dias.
- [Perguntas frequentes](${u("/#duvidas")}): dúvidas sobre nicho, tempo, acesso e o que não está incluso.

## Observações

- O PUBLICA não inclui grupo de WhatsApp, suporte individual, análise de perfil nem encontros ao vivo.
- Não existe número garantido de seguidores nem viralização garantida.
`;
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
