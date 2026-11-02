// Motion genérico da página, guiado por atributos (sem conhecimento de seção):
//  [data-reveal]        entra no scroll (fade + subida)
//  [data-count="494"]   conta de 0 até o valor quando aparece (prova numérica)
// Animações específicas de cada seção ficam no próprio módulo.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const motionEnabled = () => document.documentElement.classList.contains("motion");

let booted = false;

export function initMotion() {
  if (booted || !motionEnabled()) return;
  booted = true;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("motion-ready");

  ScrollTrigger.batch("[data-reveal]", {
    start: "top 90%",
    once: true,
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        overwrite: true,
        clearProps: "transform",
      }),
  });

  const fmt = new Intl.NumberFormat("pt-BR");
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const state = { v: 0 };
    el.textContent = "0";
    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: target,
          duration: 1.6,
          ease: "power3.out",
          onUpdate: () => (el.textContent = fmt.format(Math.round(state.v))),
        }),
    });
  });

  // Recalcula posições depois que fontes e imagens assentam.
  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

export { gsap, ScrollTrigger };
