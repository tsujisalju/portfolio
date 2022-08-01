import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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
          placeholder="empty"
        ></Image>
        <h1 className="text-4xl font-serif">smolpadok</h1>
      </header>
      <nav className="flex flex-row justify-center space-x-8 py-4">
        <Link href={"/"}>
          <a className="transition duration-200 font-sans text-lg text-stone-400 hover:text-stone-200">
            Home
          </a>
        </Link>
        <Link href={"/about"}>
          <a className="transition duration-200 font-sans text-lg text-stone-400 hover:text-stone-200">
            About
          </a>
        </Link>
      </nav>
      <main className="">{children}</main>

      <footer className=""></footer>
    </>
  );
}
