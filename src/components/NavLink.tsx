import GeoDiv from "../utilities/GeoDiv";
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

export default function NavLink({
  children,
  href,
  disabled,
  mobile,
}: {
  children: ReactNode;
  href: string;
  disabled?: boolean;
  mobile?: boolean;
}) {
  const router = useRouter();
  return (
    <GeoDiv
      className="relative px-6 py-1"
      border={router.asPath === href && !mobile ? "y" : "none"}
      cornertl={router.asPath === href && !mobile}
      cornerbr={router.asPath === href && !mobile}
    >
      <Link
        scroll={false}
        href={href}
        className={
          "relative transition duration-100 truncate font-sans text-lg " +
          (disabled
            ? "text-stone-400 dark:text-stone-600 pointer-events-none"
            : "text-stone-700 hover:text-stone-600 dark:text-stone-300 dark:hover:text-stone-400 ")
        }
      >
        {children}
      </Link>
      {router.asPath === href && (
        <>
          <div className="absolute h-4 w-4 -top-2 -left-2 rotate-45 bg-black/20 dark:bg-white/20"></div>
          <div className="absolute h-4 w-4 -bottom-2 -right-2 rotate-45 bg-black/20 dark:bg-white/20"></div>
        </>
      )}
    </GeoDiv>
  );
}
