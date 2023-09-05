import {
  DM_Serif_Display,
  Karla,
  Source_Serif_4,
  Gruppo,
  Zeyada,
} from "next/font/google";

export const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-karla",
  display: "auto",
});
export const source_serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-pro",
});
export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-dm-serif-display",
});
export const gruppo = Gruppo({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-gruppo",
});
export const zeyada = Zeyada({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-zeyada",
});
