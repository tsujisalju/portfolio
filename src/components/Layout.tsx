import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import LanguageSelect from "./LanguageSelect";
import { useIntl } from "react-intl";
import { intlFormat } from "date-fns";

export default function Layout({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>smolpadok | Developer & Designer</title>
        <meta name="description" content="smolpadok's portfolio" />
        <link rel="icon" href="/img/logo-favicon.png" />
      </Head>

      <header>
        <div className="flex flex-row">
          <div className="flex flex-col flex-1 md:flex-row p-6 pb-8 md:space-x-12">
            <Link href={"/"}>
              <a>
                <div className="flex flex-row justify-center md:justify-start items-center space-x-4">
                  <div className="md:self-center hidden dark:flex pb-2 md:pb-0">
                    <Image
                      alt="smolpadok logo"
                      src="/img/logo-light.png"
                      width={40}
                      height={40}
                      placeholder="empty"
                      layout="fixed"
                    ></Image>
                  </div>
                  <div className="flex md:self-center dark:hidden pb-2 md:pb-0">
                    <Image
                      alt="smolpadok logo"
                      src="/img/logo-dark.png"
                      width={40}
                      height={40}
                      placeholder="empty"
                      layout="fixed"
                    ></Image>
                  </div>
                  <h1 className="text-4xl font-serif hidden md:inline">
                    smolpadok
                  </h1>
                </div>
              </a>
            </Link>
            <nav className="flex flex-row self-center space-x-8">
              <Link href={"/"}>
                <a className="transition duration-200 font-sans text-lg text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 ">
                  {intl.formatMessage({ id: "Home" })}
                </a>
              </Link>
              <Link href={""}>
                <a className="transition duration-200 font-sans text-lg text-stone-400 dark:text-stone-600">
                  {intl.formatMessage({ id: "Almanac" })}
                </a>
              </Link>
              <Link href={"/about"}>
                <a className="transition duration-200 font-sans text-lg text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200">
                  {intl.formatMessage({ id: "About" })}
                </a>
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex flex-1 justify-end items-center p-6 pb-8">
            <LanguageSelect />
          </div>
        </div>
      </header>

      <main className="">{children}</main>

      <footer className=""></footer>
    </>
  );
}
