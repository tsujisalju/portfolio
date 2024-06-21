import { Transition } from "@headlessui/react";
import { ReactNode, useEffect, useState } from "react";

export function FadeIn({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setIsShowing(true);
  }, []);
  return (
    <Transition
      as="div"
      className={className}
      show={isShowing}
      enter="transition duration-400"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  );
}
