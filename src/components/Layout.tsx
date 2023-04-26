import Head from "next/head";
import React, { ReactNode } from "react";
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
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>purrnama | Developer & Designer</title>
        <meta
          name="description"
          content="purrnama is a frontend developer and designer based in Malaysia."
        />
        <link rel="icon" href="/img/logo-favicon-v2.png" />
      </Head>

      <Header />

      <main className="flex-1">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
