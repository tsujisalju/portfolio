import { LOCALE_LABEL, SUPPORTED_LOCALES } from "../constants/locales";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import GeoDiv from "../components/GeoDiv";
import { useRouter } from "next/router";

function getShortName(locale: string): string {
  return locale.split("-")[0].toUpperCase() as string;
}

export default function SelectLanguage() {
  const router = useRouter();
  const locale = router.locale as string;

  async function HandleSelectLanguage(newLocale: string) {
    if (newLocale === locale) {
      return;
    }
    await router.replace(router.asPath, router.asPath, { locale: newLocale });
  }

  return (
    <Menu as="div" className={"relative"}>
      <Menu.Button as="button" aria-label="Select language">
        <GeoDiv
          className="h-8 flex flex-row w-full justify-center items-center transition transition-75 bg-stone-50 dark:bg-stone-800 px-3 py-2 space-x-2 font-sans hover:bg-opacity-50 dark:hover:bg-opacity-50 shadow-md hover:shadow-lg"
          border
        >
          <p>{getShortName(locale)}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black/50 dark:text-white/50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </GeoDiv>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform -translate-y-1 opacity-0"
        enterTo="transform translate-0 opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform translate-0 opacity-100"
        leaveTo="transform -translate-y-1 opacity-0"
      >
        <Menu.Items className={"absolute right-0 mt-2"}>
          <GeoDiv
            className="w-max bg-stone-100 dark:bg-stone-800 text-left shadow-lg"
            border
          >
            {SUPPORTED_LOCALES.map((lang) => (
              <Menu.Item key={lang}>
                {({ active }) => (
                  <div
                    className={
                      "font-sans transition transition-75 p-2 pl-3 pr-4 text-left" +
                      (active && " bg-stone-200 dark:bg-stone-700")
                    }
                    onClick={() => HandleSelectLanguage(lang)}
                  >
                    {LOCALE_LABEL[lang]}
                  </div>
                )}
              </Menu.Item>
            ))}
          </GeoDiv>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
