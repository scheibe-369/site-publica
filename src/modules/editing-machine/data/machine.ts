// Máquina de Edição (briefing do cliente). Não citar o nome de nenhuma ferramenta de edição.
// Reproduções dos Reels do @matheusfonseca.ia coletadas do Instagram público em 2026-11-02.
import type { IconName } from "@shared/ui/icons";

export const machine = {
  kicker: "Edição com IA · Postagem automática",
  stats: [
    { value: "12+", label: "formatos de vídeo" },
    { value: "6", label: "tipos de edição" },
  ],
  benefits: [
    { icon: "pencil", title: "Roteiro com IA", body: "A ideia anotada no celular vira roteiro pronto para gravar: abertura, explicação, exemplo e fechamento." },
    { icon: "scissors", title: "Edição com IA", body: "Cortes, ritmo e texto na tela, do que todo Reel precisa para ser assistido até o fim." },
    { icon: "paperPlane", title: "Postagem automática", body: "O vídeo sai publicado no dia certo, mesmo na semana apertada." },
    { icon: "squaresFour", title: "Variedade sem recomeçar", body: "Mude o visual mantendo o mesmo assunto, com formatos diferentes para cada vídeo." },
  ] as { icon: IconName; title: string; body: string }[],
  reels: [
    { file: "reel-1", plays: "628 mil", url: "https://www.instagram.com/p/DcMEgZqx7ry/" },
    { file: "reel-2", plays: "530 mil", url: "https://www.instagram.com/p/DcmGrDfv_8o/" },
    { file: "reel-3", plays: "278 mil", url: "https://www.instagram.com/p/DbZKqEEPj83/" },
    { file: "reel-4", plays: "215 mil", url: "https://www.instagram.com/p/DesU4yLuYq7/" },
    { file: "reel-5", plays: "167 mil", url: "https://www.instagram.com/p/DfCN3-8PsV_/" },
    { file: "reel-6", plays: "88 mil", url: "https://www.instagram.com/p/Deu2NPCOSBj/" },
  ],
  teacher: { followers: "57 mil seguidores no Instagram" },
};
