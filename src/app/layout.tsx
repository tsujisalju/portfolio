import React from "react";
import { Metadata } from "next";
import "../styles/globals.css";
import Link from "next/link";
import PurrnamaTypography from "../lib/svg/PurrnamaTypography";
import PurrnamaLogo from "../lib/svg/PurrnamaLogo";
import Provider from "../components/Provider";
import { cookies } from "next/headers";
import SelectTheme from "./SelectTheme";
import {
  karla,
  source_serif,
  dm_serif_display,
  gruppo,
  zeyada,
} from "../lib/fonts";

export const metadata: Metadata = {
  title: "purrnama | Freelance Developer and Designer",
  description:
    "purrnama is a software engineering student, freelance developer and designer based in Malaysia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preferDark = cookies().get("theme")?.value;
  return (
    <html className={preferDark} lang="en">
      <Provider>
        <body
          className={
            "bg-stone-50 dark:bg-stone-900 " +
            `${karla.variable} ${source_serif.variable} ${dm_serif_display.variable} ${gruppo.variable} ${zeyada.variable}`
          }
        >
          <div className="flex flex-row h-screen">
            <div className="relative w-[420px] left-0 top-0 h-screen flex flex-col">
              <div className="top-0 relative w-auto overflow-auto h-screen border-r border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 backdrop-blur backdrop-filter flex flex-col">
                <div className="sticky top-0 z-10 backdrop-blur-md">
                  <div className="flex h-auto py-6 px-10 flex-col gap-8">
                    <Link href={"/"} className="flex items-center gap-2">
                      <PurrnamaLogo className="inline" height={30} />
                      <PurrnamaTypography className="inline" height={18} />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col px-10 gap-4 text-stone-600 dark:text-stone-300">
                  <Link
                    className="font-sans text-md hover:text-stone-800 hover:dark:text-stone-100"
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className="font-sans text-md hover:text-stone-800 hover:dark:text-stone-100"
                    href={"/"}
                  >
                    Art
                  </Link>
                  <Link
                    className="font-sans text-md hover:text-stone-800 hover:dark:text-stone-100"
                    href={"/"}
                  >
                    Work
                  </Link>
                  <Link
                    className="font-sans text-md hover:text-stone-800 hover:dark:text-stone-100"
                    href={"/"}
                  >
                    Uses
                  </Link>
                  <hr className="border-stone-200 dark:border-stone-800"></hr>
                  <Link
                    className="font-sans text-md hover:text-stone-800 hover:dark:text-stone-100"
                    href={"/"}
                  >
                    FFXIV
                  </Link>
                  <Link
                    className="font-sans text-md hover:text-stone-800 hover:dark:text-stone-100"
                    href={"/"}
                  >
                    Zettelkasten
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full min-h-screen relative overflow-auto">
              <div className="flex flex-col relative">
                <div className="sticky top-0 z-10 border-b bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950">
                  <nav className="h-12">
                    <div className="px-5 max-w-7xl mx-auto flex gap-3 justify-between items-center h-full">
                      <div className="flex grow items-center justify-end gap-3">
                        <SelectTheme />
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="min-h-full">
                  {children}

                  <footer className="max-w-6xl mx-auto pb-16 w-full">
                    <div className="mt-16"></div>
                    <hr className="my-6 border-stone-200 dark:border-stone-800"></hr>
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex flex-row gap-3">
                        <p className="font-sans text-xs">© purrnama</p>
                        <p className="font-sans text-xs">-</p>
                        <p className="font-sans text-xs">Art</p>
                        <p className="font-sans text-xs">Work</p>
                        <p className="font-sans text-xs">Uses</p>
                        <p className="font-sans text-xs">FFXIV</p>
                        <p className="font-sans text-xs">Zettelkasten</p>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
