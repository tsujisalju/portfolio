import "../styles/globals.css";
import {
  Gasoek_One,
  M_PLUS_1,
  M_PLUS_1_Code,
  Ovo,
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

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-ovo",
});

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

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

const gasoek_one = Gasoek_One({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  variable: "--font-gasoek-one",
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
            className={`${gasoek_one.variable} ${ovo.variable} ${syne.variable} ${sinistre.variable} ${mazius.variable}  ${m_plus.variable} ${m_plus_code.variable} ${source_serif.variable}`}
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
