import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import SelectLanguage from "./SelectLanguage";
import { useIntl } from "react-intl";
import { intlFormat } from "date-fns";
import SelectTheme from "./SelectTheme";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  const [onTop, setOnTop] = useState(true);
  const intl = useIntl();

  function HandleOnTop(value: boolean) {
    setOnTop(value);
  }

  useEffect(() => {
    window.onscroll = () => {
      HandleOnTop(window.scrollY === 0);
    };
  });

  return (
    <>
      <Head>
        <title>smolpadok | Developer & Designer</title>
        <meta name="description" content="smolpadok's portfolio" />
        <link rel="icon" href="/img/logo-favicon.png" />
      </Head>

      <header
        className={
          "sticky top-0 z-10 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md transition transition-100 " +
          (!onTop ? "bg-stone-100 dark:bg-stone-900" : "bg-transparent")
        }
      >
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
