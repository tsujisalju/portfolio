import { ReactNode, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export function FadeIn({ children }: { children: ReactNode }) {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setIsShowing(true);
  }, []);
  return (
    <Transition
      show={isShowing}
      enter="transition duration-400"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  );
}
