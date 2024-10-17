import GeoDiv from "../components/GeoDiv";
import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link href={href} target={"_blank"} rel="noreferrer noopener">
      <GeoDiv
        className="transition duration-100 bg-stone-50 dark:bg-stone-800 w-max px-4 py-2 shadow-md hover:bg-opacity-50 dark:hover:bg-opacity-50 hover:shadow-lg"
        border
      >
        <p className="font-sans">{children}</p>
      </GeoDiv>
    </Link>
  );
}
