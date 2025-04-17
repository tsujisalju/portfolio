import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import PurrnamaTypography from "../lib/svg/PurrnamaTypography";
import React from "react";
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";
import { useIntl } from "react-intl";

interface HeaderProp {
  disableOnTop?: boolean;
}

export default function Header(Props: HeaderProp) {
  const { disableOnTop = false } = Props;
  const [onTop, setOnTop] = React.useState(true);
  const intl = useIntl();

  function HandleOnTop(value: boolean) {
    setOnTop(value);
  }

  React.useEffect(() => {
    window.onscroll = () => {
      HandleOnTop(window.scrollY === 0);
    };
  });

  return (
    <header
      className={
        "sticky top-0 z-20 lg:mb-4 transition transition-100 " +
        (!disableOnTop
          ? !onTop
            ? "bg-stone-100/60 dark:bg-stone-900/60 backdrop-blur-md"
            : "bg-transparent"
          : "bg-stone-100/60 dark:bg-stone-900/60")
      }
    >
      <div className="flex flex-row">
        <div className="flex flex-row flex-1 p-3 lg:p-6 lg:space-x-12">
          <Link href={"/"}>
            <div className="flex flex-row justify-start items-center space-x-2 -ml-2 dark:ml-0">
              <Image
                className="lg:self-center hidden dark:flex pb-2 lg:pb-0"
                alt="purrnama logo"
                src="/img/logo-light-v2.png"
                width={50}
                height={50}
                placeholder="empty"
                priority
              ></Image>
              <Image
                className="flex lg:self-center dark:hidden pb-2 lg:pb-0"
                alt="purrnama logo"
                src="/img/logo-dark-v2.png"
                width={50}
                height={50}
                placeholder="empty"
                priority
              ></Image>
              <PurrnamaTypography className="hidden lg:inline h-[22px]" />
            </div>
          </Link>
        </div>
        <nav className="hidden lg:flex grow flex-row place-items-center justify-center space-x-6">
          <NavLink href="/">{intl.formatMessage({ id: "Home" })}</NavLink>
          <NavLink href="/logs">{intl.formatMessage({ id: "Logs" })}</NavLink>
          <NavLink href="/artworks">
            {intl.formatMessage({ id: "Artworks" })}
          </NavLink>
          <NavLink href="/work">{intl.formatMessage({ id: "Work" })}</NavLink>
          <NavLink href="/uses">{intl.formatMessage({ id: "Uses" })}</NavLink>
        </nav>
        <div className="hidden lg:flex flex-row flex-1 space-x-2 justify-end items-center p-4">
          <SelectLanguage />
          <SelectTheme />
        </div>
        <div className="lg:hidden flex flex-row flex-1 justify-end items-center p-4">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
