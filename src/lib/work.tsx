import MinswapLogo from "../components/svg/MinswapLogo";
import PurritoGeneralLogo from "../components/svg/PurritoGeneralLogo";
import { ReactNode } from "react";
import SteelSwapLogo from "../components/svg/SteelSwapLogo";

export type Work = {
  logo?: ReactNode;
  tags?: WorkText[];
  desc?: WorkText;
  imgs?: WorkImage[];
};

export type WorkImage = {
  src: string;
  alt: string;
};

export type WorkText = {
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
    desc: {
      en: "A brand revamp for PurritoGeneral, Lead Growth at Minswap and Content Creator on X. Featuring a new mascot design and a slew of brand assets with a unique twist of cats, anime and military.",
      ms: "Rombakan jenama untuk PurritoGeneral, Ketua Penumbuhan di Minswap dan Pereka Konten di X. Menampilkan reka bentuk maskot baharu dan pelbagai aset jenama dengan sentuhan unik kucing, anime dan tentera.",
      de: "Ein Markenrelaunch für PurritoGeneral, Wachstumsführer bei Minswap und Content-Ersteller auf X. Mit einem neuen Maskottchen-Design und einer Reihe von Marken-Assets mit einem einzigartigen Twist aus Katzen, Anime und Militär.",
    },
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
    desc: {
      en: "SteelSwap is a DEX aggregator on the Cardano blockchain. Taking its foundation to new heights with various illustrations and interface designs with a rusty cyberpunk aesthetic.",
      ms: "SteelSwap ialah agregator DEX di blockchain Cardano. Membawa asasnya ke tahap baharu dengan pelbagai ilustrasi dan reka bentuk antara muka dengan estetika cyberpunk berkarat.",
      de: "SteelSwap ist ein DEX-Aggregator auf der Cardano-Blockchain. Mit verschiedenen Illustrationen und Interfacedesigns in einer rostigen Cyberpunk-Ästhetik hebt SteelSwap sein Fundament auf neue Höhen.",
    },
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
      <div className="flex flex-row gap-4 items-center">
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
    desc: {
      en: "Minswap is a decentralized exchange on the Cardano blockchain. I worked with a global team of agile individuals to provide promotional content, merchandise and interface designs.",
      ms: "Minswap adalah pusat pertukaran kripto terdesentralisasi di blockchain Cardano. Saya berkerja bersama-sama kumpulan individu global yang tangkas untuk membekalkan kandungan promosi, barangan merch dan rekaan antaramuka.",
      de: "Minswap ist eine dezentralisierte Börse auf der Cardano-Blockchain. Ich habe mit einem globalen Team von agilen Personen zusammengearbeitet, um Werbeinhalte, Waren und Schnittstellendesigns bereitzustellen.",
    },
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
