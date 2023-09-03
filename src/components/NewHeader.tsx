import Link from "next/link";
import Image from "next/image";
import SelectLanguage from "../components/SelectLanguage";
import SelectTheme from "../components/SelectTheme";
import PurrnamaTypography from "../lib/svg/PurrnamaTypography";
import React from "react";

export default function NewHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-screen">
      <div className="absolute lg:relative w-0 -left-[280px] lg:w-[420px] !lg:left-0 lg:left-0 top-0 h-screen flex flex-col ml-0">
        <div className="top-0 relative w-auto overflow-auto h-screen backdrop-blur backdrop-filter flex flex-col">
          <div className="top-0 sticky z-10">
            <div className="hidden lg:flex lg:h-auto pt-8 flex-col gap-8">
              <Link href={"/"}>
                <div className="flex flex-row justify-center items-center space-x-2 -ml-2 dark:ml-0">
                  <Image
                    className="lg:self-center hidden dark:flex pb-2 lg:pb-0"
                    alt="purrnama logo"
                    src="/img/logo-light-v2.png"
                    width={40}
                    height={40}
                    placeholder="empty"
                    priority={true}
                  ></Image>
                  <Image
                    className="flex lg:self-center dark:hidden pb-2 lg:pb-0"
                    alt="purrnama logo"
                    src="/img/logo-dark-v2.png"
                    width={40}
                    height={40}
                    placeholder="empty"
                    priority={true}
                  ></Image>
                  <PurrnamaTypography
                    className="hidden lg:inline"
                    height={18}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen absolute lg:relative overflow-auto lg:ml-0">
        <div className="flex flex-col relative">
          <div className="lg:sticky top-0 z-10">
            <nav className="h-24 backdrop-blur backdrop-filter bg-opacity-75">
              <div className="px-5 max-w-7xl mx-auto flex gap-3 justify-between items-center h-full">
                <div className="hidden lg:flex grow items-center justify-end gap-3">
                  <SelectLanguage />
                  <SelectTheme />
                </div>
              </div>
            </nav>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
