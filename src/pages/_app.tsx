import "../styles/globals.css";
import {
  DM_Serif_Display,
  Karla,
  M_PLUS_1,
  M_PLUS_1_Code,
  Source_Code_Pro,
  Source_Serif_4,
} from "next/font/google";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import EN_US_LOCALE_MODULE from "../lang/compiled/en-US.json";
import { IntlProvider } from "react-intl";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import nookies from "nookies";
import { useRouter } from "next/router";

const m_plus = M_PLUS_1({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-m-plus",
});

const m_plus_code = M_PLUS_1_Code({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-m-plus-code",
});

const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-karla",
});
const source_serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});
const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-dm-serif-display",
});
const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-code-pro",
});

const sinistre = localFont({
  src: "./fonts/Sinistre/Sinistre-Bold.otf",
  variable: "--font-sinistre",
});

const mazius = localFont({
  src: "./fonts/Mazius/MaziusDisplay-Bold.otf",
  variable: "--font-mazius",
});

const syne = localFont({
  src: "./fonts/Syne/Syne-Bold.otf",
  variable: "--font-syne",
});

type LocaleModule = Record<string, any>;

function MyApp({ Component, pageProps }: AppProps) {
  //set language
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const [localeModule, setLocaleModule] =
    React.useState<LocaleModule>(EN_US_LOCALE_MODULE);
  const currentLocale = locale ?? "en-US";

  React.useEffect(() => {
    void (async () => {
      nookies.set(undefined, "NEXT_LOCALE", currentLocale as string, {
        page: "/",
        httpOnly: false,
        maxAge: 3600 * 24,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
      });
      const dynamicLocaleModule = await import(
        `/src/lang/compiled/${currentLocale}.json`
      );
      setLocaleModule(dynamicLocaleModule["default"]);
    })();
  }, [currentLocale]);
  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={currentLocale}
      messages={localeModule}
    >
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ParallaxProvider>
          <main
            className={`${syne.variable} ${sinistre.variable} ${mazius.variable}  ${m_plus.variable} ${m_plus_code.variable} ${karla.variable} ${source_serif.variable} ${dm_serif_display.variable} ${source_code_pro.variable}`}
          >
            <AnimatePresence
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <SpeedInsights />
          </main>
        </ParallaxProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
