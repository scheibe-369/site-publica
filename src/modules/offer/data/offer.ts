// FONTE ÚNICA da oferta. Preço confirmado pelo cliente em 2026-11-02 (R$ 69,90). Checkout ainda não informado.
// Para vender de verdade: preencher `checkoutUrl` com o link da plataforma de pagamento.
export const offer = {
  ctaLabel: "Quero o PUBLICA",
  anchor: "#oferta",
  checkoutUrl: "", // ex.: link da Hotmart/Kiwify. Vazio = botões levam para #oferta.
  priceConfirmed: true,
  price: {
    currency: "R$",
    whole: "69",
    cents: ",90",
    note: "pagamento único",
    installments: "ou parcelado no cartão",
  },
  guaranteeDays: 7,
  consumeTime: "cerca de 1\u00a0hora para ler e assistir",
  items: [
    {
      icon: "bookOpen",
      title: "E-book PUBLICA",
      body: "Guia prático de 42 páginas em 10 partes, do perfil à análise.",
    },
    {
      icon: "videoCamera",
      title: "Aula rápida em vídeo",
      body: "15 a 20 minutos gravados pelo Vinicius, direto ao ponto.",
    },
    {
      icon: "lightbulb",
      title: "Banco de 30 ideias de Reels",
      body: "Frase de abertura e exemplo prático para adaptar ao seu assunto.",
    },
    {
      icon: "listChecks",
      title: "Plano de ação de 7 dias",
      body: "Checklist dia a dia: perfil arrumado, três vídeos gravados e o primeiro publicado.",
    },
    {
      icon: "magicWand",
      title: "Máquina de Edição",
      body: "Aulas com Matheus Fonseca para roteirizar, editar e publicar com IA. Mais de 12\u00a0formatos e 6\u00a0tipos de edição.",
    },
  ],
  notIncluded: "Não inclui grupo de WhatsApp, suporte individual, análise de perfil nem encontros ao vivo.",
} as const;

/** Botões ao longo da página rolam até a oferta. O botão do cartão de oferta vai ao checkout (ou à própria âncora enquanto não houver link). */
export const checkoutHref: string = offer.checkoutUrl || offer.anchor;
