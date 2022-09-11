import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";
import NavLink from "./NavLink";
import React from "react";

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
        "sticky container mx-auto rounded-lg top-2 z-10 bg-opacity-60 mb-4 dark:bg-opacity-60 backdrop-blur-md transition transition-100 " +
        (!disableOnTop
          ? !onTop
            ? "bg-stone-100 dark:bg-stone-900"
            : "bg-transparent"
          : "bg-stone-100 dark:bg-stone-900")
      }
    >
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 md:flex-row p-6 md:space-x-12">
          <Link href={"/"}>
            <a>
              <div className="flex flex-row justify-center md:justify-start items-center space-x-4 -ml-4 dark:ml-0">
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
                <h1 className="text-4xl font-display hidden md:inline">
                  smolpadok
                </h1>
              </div>
            </a>
          </Link>
          <nav className="flex flex-row self-center space-x-8">
            <NavLink href="/">{intl.formatMessage({ id: "Home" })}</NavLink>
            <NavLink href="/about">
              {intl.formatMessage({ id: "About" })}
            </NavLink>
          </nav>
        </div>
        <div className="hidden md:flex flex-row space-x-2 flex-1 justify-end items-center p-6 pb-8">
          <SelectLanguage />
          <SelectTheme />
        </div>
      </div>
    </header>
  );
}
