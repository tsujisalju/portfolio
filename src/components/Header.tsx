import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";

export default function Header() {
  const intl = useIntl();
  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1 md:flex-row p-6 pb-8 md:space-x-12">
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
              <h1 className="text-4xl font-serif hidden md:inline">
                smolpadok
              </h1>
            </div>
          </a>
        </Link>
        <nav className="flex flex-row self-center space-x-8">
          <Link href={"/"}>
            <a className="transition duration-100 truncate font-sans text-lg text-stone-700 hover:text-stone-600 dark:text-stone-300 dark:hover:text-stone-400 ">
              {intl.formatMessage({ id: "Home" })}
            </a>
          </Link>
          {/*<Link href={""}>
            <a className="transition duration-100 truncate font-sans text-lg text-stone-400 dark:text-stone-600">
              {intl.formatMessage({ id: "Almanac" })}
            </a>
  </Link>*/}
          <Link href={"/about"}>
            <a className="transition duration-100 truncate font-sans text-lg text-stone-700 hover:text-stone-600 dark:text-stone-300 dark:hover:text-stone-400">
              {intl.formatMessage({ id: "About" })}
            </a>
          </Link>
        </nav>
      </div>
      <div className="hidden md:flex flex-row space-x-2 flex-1 justify-end items-center p-6 pb-8">
        <SelectLanguage />
        <SelectTheme />
      </div>
    </div>
  );
}
