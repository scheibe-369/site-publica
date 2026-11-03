// Mecanismo e pilares. Fonte: e-book PUBLICA 2.0, Parte 3 (p.9 a p.13), p.3, p.5, p.14, p.18, p.25, p.27, p.40.
import type { IconName } from "@shared/ui/icons";

export const adjustments: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "briefcase",
    title: "Conta profissional ativada",
    body: "É ela que libera as estatísticas: quem assiste e o que funciona. Sem isso, você posta no escuro.",
  },
  {
    icon: "idCard",
    title: "Tipo de conta certo: Criador ou Empresa",
    body: "Usa seu nome e sua imagem? Criador. Representa loja, clínica, restaurante ou marca? Empresa.",
  },
  {
    icon: "imageSquare",
    title: "Foto reconhecível mesmo pequena",
    body: "Ela aparece minúscula nos comentários e na busca. Se some quando encolhe, não está ajudando.",
  },
  {
    icon: "search",
    title: "Nome que aparece na busca",
    body: "O nome em negrito também entra na busca. “Marina Costa | Personal Trainer” é encontrado. “Marina C.” não.",
  },
  {
    icon: "textAlign",
    title: "Bio em 4 linhas, com próximo passo",
    body: "O que você faz, para quem, o que a pessoa ganha e o que fazer agora: agendar, comprar ou chamar no WhatsApp.",
  },
  {
    icon: "pushPin",
    title: "Três fixados e o teste dos 5 segundos",
    body: "Apresentação, conteúdo útil e prova no topo. Depois, alguém que não conhece você abre o perfil e diz o que você faz.",
  },
];

export const pillars: { icon: IconName; title: string; body: string }[] = [
  { icon: "userFocus", title: "Perfil", body: "Sua vitrine. É ali que a pessoa decide, em poucos segundos, se vai seguir você." },
  { icon: "target", title: "Conteúdo", body: "Conteúdo bom é o que interessa a quem você quer atrair. Não a todo mundo." },
  { icon: "filmSlate", title: "Reels", body: "Os primeiros segundos decidem se a pessoa fica ou passa para o próximo vídeo." },
  { icon: "calendarCheck", title: "Frequência", body: "Constância não é postar todo dia. É aparecer sempre, num ritmo que você mantém." },
  { icon: "chartLineUp", title: "Análise", body: "Cada vídeo mostra o que o público quer ver. Quem observa e ajusta, evolui." },
];
