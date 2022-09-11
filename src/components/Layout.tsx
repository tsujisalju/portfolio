import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <title>smolpadok | Developer & Designer</title>
        <meta name="description" content="smolpadok's portfolio" />
        <link rel="icon" href="/img/logo-favicon.png" />
      </Head>

      <Header />

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
