import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import NavLink from "./NavLink";
import { useIntl } from "react-intl";
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";
import { useRouter } from "next/router";

export default function MobileNav() {
  const intl = useIntl();
  const router = useRouter();
  return (
    <Menu as="div" className={"lg:hidden relative"}>
      <Menu.Button
        as="button"
        className="h-8 flex flex-row w-full justify-center items-center transition transition-75 px-2 py-1 space-x-2 text-lg font-sans"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
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
        <Menu.Items
          className={
            "absolute flex flex-col flex-1 right-0 mt-2 p-4 w-[200px] space-y-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-left shadow-lg"
          }
        >
          <Menu.Item key={"home"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/")}
              >
                {intl.formatMessage({ id: "Home" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"about"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/about")}
              >
                {intl.formatMessage({ id: "About" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"work"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/work")}
              >
                {intl.formatMessage({ id: "Work" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"uses"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/uses")}
              >
                {intl.formatMessage({ id: "Uses" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"ffxiv"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/ffxiv")}
              >
                {intl.formatMessage({ id: "FFXIV" })}
              </div>
            )}
          </Menu.Item>
          <hr className="opacity-20" />
          <div className="flex flex-row space-x-2 flex-1">
            <SelectLanguage />
            <SelectTheme />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
