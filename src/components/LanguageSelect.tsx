import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SUPPORTED_LOCALES, LOCALE_LABEL } from "../constants/locales";
import { useLocale } from "../hooks/useLocale";
import { useRouter } from "next/router";

interface language {
  id: number;
  name: string;
  unavailable: boolean;
}

const languages: language[] = [
  { id: 1, name: "ENG", unavailable: false },
  { id: 2, name: "DE", unavailable: false },
  { id: 3, name: "MY", unavailable: false },
];

function getShortName(locale: string): string {
  return locale.split("-")[0].toUpperCase() as string;
}

export default function LanguageSelect() {
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
        className="inline-flex w-full justify-center rounded-lg bg-stone-800 px-2 py-1 text-lg font-sans hover:bg-opacity-50"
      >
        {getShortName(locale)}
      </Menu.Button>
      <Menu.Items
        className={
          "absolute right-0 mt-2 p-2 w-[200px] space-y-1 bg-stone-800 rounded-lg text-left"
        }
      >
        {SUPPORTED_LOCALES.map((lang) => (
          <Menu.Item key={lang}>
            <div
              className="font-sans text-lg py-1 px-2 hover:bg-stone-700 rounded-md"
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
