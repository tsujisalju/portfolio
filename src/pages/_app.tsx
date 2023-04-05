import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import React from "react";
import { IntlProvider } from "react-intl";
import "../styles/globals.css";
import nookies from "nookies";
import EN_US_LOCALE_MODULE from "../lang/compiled/en-US.json";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  DM_Serif_Display,
  Karla,
  Source_Serif_4,
  Gruppo,
  Zeyada,
} from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-karla",
});
const source_serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-pro",
});
const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-dm-serif-display",
});
const gruppo = Gruppo({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-gruppo",
});
const zeyada = Zeyada({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-zeyada",
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
            className={`${karla.variable} ${source_serif.variable} ${dm_serif_display.variable} ${gruppo.variable} ${zeyada.variable}`}
          >
            <Component {...pageProps} />
          </main>
        </ParallaxProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
