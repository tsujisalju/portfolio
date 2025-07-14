import { useEffect, useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import PurrnamaLogo from "./svg/PurrnamaLogo";
import PurrnamaText from "./svg/PurrnamaText";
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";
import { useIntl } from "react-intl";

interface HeaderProp {
  disableOnTop?: boolean;
}

export default function Header(Props: HeaderProp) {
  const { disableOnTop = false } = Props;
  const [onTop, setOnTop] = useState(true);
  const intl = useIntl();

  function HandleOnTop(value: boolean) {
    setOnTop(value);
  }

  useEffect(() => {
    window.onscroll = () => {
      HandleOnTop(window.scrollY === 0);
    };
  });

  return (
    <header
      className={
        "sticky top-0 z-20 lg:mb-4 transition transition-100 lg:flex lg:flex-row lg:justify-center " +
        (!disableOnTop
          ? !onTop
            ? "bg-zinc-100/60 dark:bg-zinc-900/60 backdrop-blur-md"
            : "bg-transparent"
          : "bg-zinc-100/60 dark:bg-zinc-900/60")
      }
    >
      <div className="lg:container mx:auto flex flex-row">
        <div className="flex flex-row items-center flex-1 p-3 lg:p-6 gap-12">
          <Link href={"/"} aria-label="purrnama logo. return to home page">
            <div className="flex flex-row justify-start gap-4 items-center">
              <PurrnamaLogo className="h-6 w-auto" />
              <PurrnamaText className="h-4 w-auto" />
            </div>
          </Link>
        </div>
        <nav className="hidden lg:flex grow flex-row place-items-center justify-center gap-6">
          <NavLink href="/">{intl.formatMessage({ id: "Home" })}</NavLink>
          <NavLink href="/logs">{intl.formatMessage({ id: "Logs" })}</NavLink>
          <NavLink href="/artworks">
            {intl.formatMessage({ id: "Artworks" })}
          </NavLink>
          <NavLink href="/work">{intl.formatMessage({ id: "Work" })}</NavLink>
          <NavLink href="/uses">{intl.formatMessage({ id: "Uses" })}</NavLink>
        </nav>
        <div className="hidden lg:flex flex-row flex-1 gap-2 justify-end items-center p-4">
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
