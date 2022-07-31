import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>smolpadok</title>
        <meta name="description" content="smolpadok's portfolio" />
        <link rel="icon" href="/img/logo-favicon.png" />
      </Head>

      <header className="flex flex-row justify-center items-center p-4 space-x-4">
        <Image
          alt="smolpadok logo"
          src="/img/logo-white.png"
          width={50}
          height={50}
        ></Image>
        <h1 className="text-4xl font-serif">smolpadok</h1>
      </header>
      <hr></hr>
      <main className="">{children}</main>

      <footer className=""></footer>
    </>
  );
}
