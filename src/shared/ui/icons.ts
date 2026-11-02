// Registro único de ícones (Phosphor, peso bold). Importados em build como SVG bruto.
import arrowRight from "@phosphor-icons/core/assets/bold/arrow-right-bold.svg?raw";
import arrowDown from "@phosphor-icons/core/assets/bold/arrow-down-bold.svg?raw";
import arrowUpRight from "@phosphor-icons/core/assets/bold/arrow-up-right-bold.svg?raw";
import check from "@phosphor-icons/core/assets/bold/check-bold.svg?raw";
import x from "@phosphor-icons/core/assets/bold/x-bold.svg?raw";
import shieldCheck from "@phosphor-icons/core/assets/bold/shield-check-bold.svg?raw";
import sparkle from "@phosphor-icons/core/assets/bold/sparkle-bold.svg?raw";
import magicWand from "@phosphor-icons/core/assets/bold/magic-wand-bold.svg?raw";
import filmSlate from "@phosphor-icons/core/assets/bold/film-slate-bold.svg?raw";
import scissors from "@phosphor-icons/core/assets/bold/scissors-bold.svg?raw";
import calendarCheck from "@phosphor-icons/core/assets/bold/calendar-check-bold.svg?raw";
import chartLineUp from "@phosphor-icons/core/assets/bold/chart-line-up-bold.svg?raw";
import userFocus from "@phosphor-icons/core/assets/bold/user-focus-bold.svg?raw";
import plus from "@phosphor-icons/core/assets/bold/plus-bold.svg?raw";
import instagram from "@phosphor-icons/core/assets/bold/instagram-logo-bold.svg?raw";
import bookOpen from "@phosphor-icons/core/assets/bold/book-open-bold.svg?raw";
import videoCamera from "@phosphor-icons/core/assets/bold/video-camera-bold.svg?raw";
import lightbulb from "@phosphor-icons/core/assets/bold/lightbulb-bold.svg?raw";
import listChecks from "@phosphor-icons/core/assets/bold/list-checks-bold.svg?raw";
import lock from "@phosphor-icons/core/assets/bold/lock-simple-bold.svg?raw";
import clock from "@phosphor-icons/core/assets/bold/clock-bold.svg?raw";
import sealCheck from "@phosphor-icons/core/assets/bold/seal-check-bold.svg?raw";
import idCard from "@phosphor-icons/core/assets/bold/identification-card-bold.svg?raw";
import imageSquare from "@phosphor-icons/core/assets/bold/image-square-bold.svg?raw";
import search from "@phosphor-icons/core/assets/bold/magnifying-glass-bold.svg?raw";
import textAlign from "@phosphor-icons/core/assets/bold/text-align-left-bold.svg?raw";
import pushPin from "@phosphor-icons/core/assets/bold/push-pin-bold.svg?raw";
import timer from "@phosphor-icons/core/assets/bold/timer-bold.svg?raw";
import briefcase from "@phosphor-icons/core/assets/bold/briefcase-bold.svg?raw";
import eye from "@phosphor-icons/core/assets/bold/eye-bold.svg?raw";
import trendUp from "@phosphor-icons/core/assets/bold/trend-up-bold.svg?raw";
import storefront from "@phosphor-icons/core/assets/bold/storefront-bold.svg?raw";
import phoneCamera from "@phosphor-icons/core/assets/bold/device-mobile-camera-bold.svg?raw";
import repeat from "@phosphor-icons/core/assets/bold/repeat-bold.svg?raw";
import checkCircle from "@phosphor-icons/core/assets/bold/check-circle-bold.svg?raw";
import xCircle from "@phosphor-icons/core/assets/bold/x-circle-bold.svg?raw";
import lightning from "@phosphor-icons/core/assets/bold/lightning-bold.svg?raw";
import gift from "@phosphor-icons/core/assets/bold/gift-bold.svg?raw";
import target from "@phosphor-icons/core/assets/bold/target-bold.svg?raw";
import pencil from "@phosphor-icons/core/assets/bold/pencil-simple-line-bold.svg?raw";
import paperPlane from "@phosphor-icons/core/assets/bold/paper-plane-tilt-bold.svg?raw";
import squaresFour from "@phosphor-icons/core/assets/bold/squares-four-bold.svg?raw";
import playFill from "@phosphor-icons/core/assets/fill/play-fill.svg?raw";

export const icons = {
  arrowRight, arrowDown, arrowUpRight, check, x, shieldCheck, sparkle, magicWand, filmSlate,
  scissors, calendarCheck, chartLineUp, userFocus, plus, instagram, bookOpen, videoCamera,
  lightbulb, listChecks, lock, clock, sealCheck, idCard, imageSquare, search, textAlign, pushPin,
  timer, briefcase, eye, trendUp, storefront, phoneCamera, repeat, checkCircle, xCircle,
  lightning, gift, target, pencil, paperPlane, squaresFour, playFill,
} as const;

export type IconName = keyof typeof icons;
