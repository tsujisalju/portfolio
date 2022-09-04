import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SUPPORTED_LOCALES, LOCALE_LABEL } from "../constants/locales";
import { useLocale } from "../hooks/useLocale";
import { useRouter } from "next/router";

function getShortName(locale: string): string {
  return locale.split("-")[0].toUpperCase() as string;
}

export default function SelectLanguage() {
  const { locale } = useLocale();
  const router = useRouter();

  async function HandleSelectLanguage(newLocale: string) {
    if (newLocale === locale) {
      return;
    }
    await router.replace(router.asPath, router.asPath, { locale: newLocale });
  }

  return (
    <Menu as="div" className={"relative w-20"}>
      <Menu.Button
        as="button"
<<<<<<< HEAD:src/components/SelectLanguage.tsx
        className="inline-flex w-full justify-center rounded-lg bg-stone-200 dark:bg-stone-800 px-2 py-1 text-lg font-sans hover:bg-opacity-50"
=======
        className="inline-flex w-full justify-center rounded-lg bg-stone-100 dark:bg-stone-800 px-2 py-1 text-lg font-sans hover:bg-opacity-50"
>>>>>>> 5ceaced0eb6e8b8acb1e92bfda323fc0d4c954b6:src/components/LanguageSelect.tsx
      >
        {getShortName(locale)}
      </Menu.Button>
      <Menu.Items
        className={
<<<<<<< HEAD:src/components/SelectLanguage.tsx
          "absolute right-0 mt-2 p-2 w-[200px] space-y-1 bg-stone-200 dark:bg-stone-800 rounded-lg text-left"
=======
          "absolute right-0 mt-2 p-2 w-[200px] space-y-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-left"
>>>>>>> 5ceaced0eb6e8b8acb1e92bfda323fc0d4c954b6:src/components/LanguageSelect.tsx
        }
      >
        {SUPPORTED_LOCALES.map((lang) => (
          <Menu.Item key={lang}>
            <div
<<<<<<< HEAD:src/components/SelectLanguage.tsx
              className="font-sans text-lg py-1 px-2 hover:bg-stone-300 hover:dark:bg-stone-700 rounded-md"
=======
              className="font-sans text-lg py-1 px-2 hover:bg-stone-200 hover:dark:bg-stone-700 rounded-md"
>>>>>>> 5ceaced0eb6e8b8acb1e92bfda323fc0d4c954b6:src/components/LanguageSelect.tsx
              onClick={() => HandleSelectLanguage(lang)}
            >
              {LOCALE_LABEL[lang]}
            </div>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
