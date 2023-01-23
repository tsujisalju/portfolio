import Link from "next/link";
import { ReactFragment, ReactNode } from "react";

export default function Button({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href} target={"_blank"} rel="noreferrer noopener">
      <div className="transition duration-100 bg-stone-50 dark:bg-stone-800 w-max px-4 py-2 rounded-lg shadow-md hover:bg-opacity-50 dark:hover:bg-opacity-50 hover:shadow-lg">
        <p className="font-sans text-lg">{title}</p>
      </div>
    </Link>
  );
}
