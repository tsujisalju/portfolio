import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

export function FadeIn({ children }: { children: ReactNode }) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition duration-400"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  );
}
