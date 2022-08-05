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
        <div className="hidden dark:block">
          <Image
            alt="smolpadok logo"
            src="/img/logo-light.png"
            width={50}
            height={50}
            placeholder="empty"
          ></Image>
        </div>
        <div className="block dark:hidden">
          <Image
            alt="smolpadok logo"
            src="/img/logo-dark.png"
            width={50}
            height={50}
            placeholder="empty"
          ></Image>
        </div>
        <h1 className="text-4xl font-serif hidden xs:inline dark:text-stone-200">
          smolpadok
        </h1>
      </header>
      <nav className="flex flex-row justify-center space-x-8 pb-4">
        <Link href={"/"}>
          <a className="transition duration-200 font-sans text-lg text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200">
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
