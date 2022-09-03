import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import React from "react";
import { IntlProvider } from "react-intl";
import { useLocale } from "../src/useLocale";
import "../styles/globals.css";
import nookies from "nookies";
import EN_US_LOCALE_MODULE from "../lang/en-US.json";

type LocalModule = Record<string, any>;

function MyApp({ Component, pageProps }: AppProps) {
  //set language
  const { locale, defaultLocale } = useLocale();
  const [localeModule, setLocaleModule] =
    React.useState<LocalModule>(EN_US_LOCALE_MODULE);
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
      const dynamicLocaleModule = await import(`/lang/${currentLocale}.json`);
      setLocaleModule(dynamicLocaleModule["default"]);
    });
  }, [currentLocale]);
  console.log(currentLocale);
  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={currentLocale}
      messages={localeModule}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
