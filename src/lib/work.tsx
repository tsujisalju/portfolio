import MinswapLogo from "../components/svg/MinswapLogo";
import PurritoGeneralLogo from "../components/svg/PurritoGeneralLogo";
import { ReactNode } from "react";
import SteelSwapLogo from "../components/svg/SteelSwapLogo";

export type Work = {
  logo?: ReactNode;
  tags?: WorkTag[];
  imgs?: WorkImage[];
};

export type WorkImage = {
  src: string;
  alt: string;
};

export type WorkTag = {
  en: string;
  ms: string;
  de: string;
};

export const works: Work[] = [
  {
    logo: (
      <PurritoGeneralLogo className="text-[#2F272E] dark:text-[#ffeddc] h-16" />
    ),
    tags: [
      {
        en: "Illustration",
        ms: "Illustrasi",
        de: "Abbildung",
      },
      { en: "Graphic Design", ms: "Pereka Grafik", de: "Grafische Gestaltung" },
      { en: "Branding", ms: "Penjenamaan", de: "Markenbildung" },
    ],
    imgs: [
      {
        src: "/img/purritogeneral/purrito-header-thumb.png",
        alt: "purrito header",
      },
      {
        src: "/img/purritogeneral/purrita-busy-at-work-thumb.png",
        alt: "purrita busy at work",
      },
      {
        src: "/img/purritogeneral/purrito-raining-coins-thumb.png",
        alt: "purrito raining coins",
      },
      {
        src: "/img/purritogeneral/purrito-storytime-thumb.png",
        alt: "purrito storytime",
      },
    ],
  },
  {
    logo: <SteelSwapLogo className="text-[#2F272E] dark:text-[#ffeddc] h-16" />,
    tags: [
      { en: "Graphic Design", ms: "Reka Grafik", de: "Grafische Gestaltung" },
      { en: "UI/UX Design", ms: "Reka UI/UX", de: "UI/UX Gestaltung" },
    ],
    imgs: [
      {
        src: "/img/steelswap/steelswap-ui-prototype-thumb.png",
        alt: "steelswap ui prototype",
      },
      {
        src: "/img/steelswap/steelswap-bg2-thumb.png",
        alt: "steelswap bg",
      },
      {
        src: "/img/steelswap/steelswap-graphics.png",
        alt: "steelswap graphics",
      },
      {
        src: "/img/steelswap/steelswap-bg-thumb.png",
        alt: "steelswap bg",
      },
    ],
  },
  {
    logo: (
      <div className="flex flex-row space-x-4 items-center">
        <MinswapLogo className="slate-950 dark:slate-50 w-[210px] h-16" />
        <p className="font-code">V1</p>
      </div>
    ),
    tags: [
      { en: "Graphic Design", ms: "Pereka Grafik", de: "Grafische Gestaltung" },
      {
        en: "Front-end",
        ms: "Front-end",
        de: "Front-end",
      },
      {
        en: "Merchandise",
        ms: "Barang Dagangan",
        de: "Handelswaren",
      },
    ],
    imgs: [
      {
        src: "/img/minswap/minswap-ui-thumb.png",
        alt: "minswap ui",
      },
      {
        src: "/img/minswap/minswap-graphics-thumb.png",
        alt: "minswap graphics",
      },
      {
        src: "/img/minswap/minswap-governance.gif",
        alt: "minswap governance",
      },
      {
        src: "/img/minswap/minswap-volume.jpeg",
        alt: "minswap volume",
      },
      {
        src: "/img/minswap/minswap-orcfax.png",
        alt: "minswap orcfax",
      },
    ],
  },
];
