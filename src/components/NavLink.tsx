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
    <Link href={href}>
      <a
        className={
          "transition duration-100 truncate font-sans text-lg " +
          (router.asPath === href &&
            "underline underline-offset-4 decoration-2 ") +
          (disabled
            ? "text-stone-400 dark:text-stone-600 "
            : "text-stone-700 hover:text-stone-600 dark:text-stone-300 dark:hover:text-stone-400 ")
        }
      >
        {children}
      </a>
    </Link>
  );
}
