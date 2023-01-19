import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function NavLink({
  children,
  href,
  disabled,
}: {
  children: ReactNode;
  href: string;
  disabled?: boolean;
}) {
  const router = useRouter();
  return (
    (<Link
      href={href}
      className={
        "relative transition duration-100 truncate font-sans text-lg " +
        (disabled
          ? "text-stone-400 dark:text-stone-600 pointer-events-none"
          : "text-stone-700 hover:text-stone-600 dark:text-stone-300 dark:hover:text-stone-400 ")
      }>

      {children}
      {router.asPath === href && (
        <span className="absolute inset-x-1 bottom-0 h-px bg-gradient-to-r from-stone-700 dark:from-stone-300 lg:from-transparent lg:dark:from-transparent lg:via-stone-700 lg:dark:via-stone-300 to-transparent"></span>
      )}

    </Link>)
  );
}
