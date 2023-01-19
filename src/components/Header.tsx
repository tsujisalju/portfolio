import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";
import NavLink from "./NavLink";
import React from "react";
import MobileNav from "./MobileNav";

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
        "sticky md:container md:mx-auto md:rounded-lg top-0 md:top-2 z-10 md:mb-4 backdrop-blur-md transition transition-100 " +
        (!disableOnTop
          ? !onTop
            ? "bg-stone-100/60 dark:bg-stone-900/60"
            : "bg-transparent"
          : "bg-stone-100/60 dark:bg-stone-900/60")
      }
    >
      <div className="flex flex-row">
        <div className="flex flex-row flex-1 p-5 md:p-6 md:space-x-12">
          <Link href={"/"}>
            <div className="flex flex-row justify-start items-center space-x-4 -ml-4 dark:ml-0">
              <div className="md:self-center hidden dark:flex pb-2 md:pb-0">
                <Image
                  alt="smolpadok logo"
                  src="/img/logo-light.png"
                  width={40}
                  height={40}
                  placeholder="empty"
                ></Image>
              </div>
              <div className="flex md:self-center dark:hidden pb-2 md:pb-0">
                <Image
                  alt="smolpadok logo"
                  src="/img/logo-dark.png"
                  width={40}
                  height={40}
                  placeholder="empty"
                ></Image>
              </div>
              <h1 className="text-3xl font-display hidden md:inline">
                smolpadok
              </h1>
            </div>
          </Link>
          <nav className="hidden md:flex flex-row self-center space-x-8">
            <NavLink href="/">{intl.formatMessage({ id: "Home" })}</NavLink>
            <NavLink href="/work">{intl.formatMessage({ id: "Work" })}</NavLink>
            <NavLink href="#" disabled>
              {intl.formatMessage({ id: "Achernar" })}
            </NavLink>
            <NavLink href="/bio">
              {intl.formatMessage({ id: "Biography" })}
            </NavLink>
            <NavLink href="/uses">{intl.formatMessage({ id: "Uses" })}</NavLink>
          </nav>
        </div>
        <div className="hidden md:flex flex-row space-x-2 flex-1 justify-end items-center p-6 pb-8">
          <SelectLanguage />
          <SelectTheme />
          <MobileNav />
        </div>
        <div className="md:hidden flex flex-row flex-1 justify-end items-center p-6 pb-8">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
