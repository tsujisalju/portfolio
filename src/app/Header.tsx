"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../app/NavLink";
import React from "react";
import PurrnamaTypography from "../lib/svg/PurrnamaTypography";

interface HeaderProp {
  disableOnTop?: boolean;
}

export default function Header(Props: HeaderProp) {
  const { disableOnTop = false } = Props;
  const [onTop, setOnTop] = React.useState(true);

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
        "sticky lg:rounded-lg top-0 lg:top-2 lg:mx-2 z-10 lg:mb-4 backdrop-blur-md transition transition-100 " +
        (!disableOnTop
          ? !onTop
            ? "bg-stone-100/60 dark:bg-stone-900/60"
            : "bg-transparent"
          : "bg-stone-100/60 dark:bg-stone-900/60")
      }
    >
      <div className="flex flex-row">
        <div className="flex flex-row flex-auto p-3 lg:p-6 lg:space-x-12">
          <Link href={"/"}>
            <div className="flex flex-row justify-start items-center space-x-2 -ml-2 dark:ml-0">
              <Image
                className="lg:self-center hidden dark:flex pb-2 lg:pb-0"
                alt="purrnama logo"
                src="/img/logo-light-v2.png"
                width={50}
                height={50}
                placeholder="empty"
                priority={true}
              ></Image>
              <Image
                className="flex lg:self-center dark:hidden pb-2 lg:pb-0"
                alt="purrnama logo"
                src="/img/logo-dark-v2.png"
                width={50}
                height={50}
                placeholder="empty"
                priority={true}
              ></Image>
              <PurrnamaTypography className="hidden lg:inline h-[22px]" />
            </div>
          </Link>
          <nav className="hidden lg:flex flex-row self-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/uses">Uses</NavLink>
            <NavLink href="/ffxiv">FFXIV</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
