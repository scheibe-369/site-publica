import { offer } from "./offer";

/** Dados estruturados do produto (schema.org Product + Offer), gerados da fonte única `offer.ts`. */
export function productSchema(pageUrl: string, imageUrl: string) {
  const cents = offer.price.cents.replace(/\D/g, "") || "00";
  return {
    "@type": "Product",
    name: "PUBLICA",
    description:
      "Guia prático de crescimento orgânico no Instagram de Vinicius Campana: e-book, aula em vídeo, banco de 30 ideias de Reels, plano de ação de 7 dias e Máquina de Edição com IA.",
    image: imageUrl,
    brand: { "@type": "Brand", name: "PUBLICA" },
    offers: {
      "@type": "Offer",
      price: `${offer.price.whole}.${cents}`,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: offer.checkoutUrl || new URL(offer.anchor, pageUrl).href,
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BR",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: offer.guaranteeDays,
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };
}
