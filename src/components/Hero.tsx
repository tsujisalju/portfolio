import { Transition } from "@headlessui/react";
import { useIntl } from "react-intl";

export default function Hero() {
  const intl = useIntl();
  return (
    <Transition
      appear
      show={true}
      enter="transition duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="flex flex-1 flex-col h-[200px] p-8 space-y-4 items-center">
        <h1 className="font-serif text-4xl md:text-5xl">
          {intl.formatMessage({ id: "Greetings traveler." })}
        </h1>
        <p className="font-sans text-lg">
          {intl.formatMessage({
            id: "Each one is a story to tell. Discover one and find out what's in store!",
          })}
        </p>
      </div>
    </Transition>
  );
}
