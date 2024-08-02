import { ReactNode } from "react";

type Border = "t" | "b" | "l" | "r" | "x" | "y" | "all" | "none";

const borders: Record<Border, string> = {
  t: "border-t",
  b: "border-b",
  l: "border-l",
  r: "border-r",
  x: "border-x",
  y: "border-y",
  all: "border",
  none: "",
};

export default function GeoDiv({
  children,
  border,
  corner = false,
  cornertl = false,
  cornertr = false,
  cornerbl = false,
  cornerbr = false,
  cornersize = 4,
  className,
}: {
  children: ReactNode;
  border?: Border;
  corner?: boolean;
  cornertl?: boolean;
  cornertr?: boolean;
  cornerbl?: boolean;
  cornerbr?: boolean;
  cornersize?: number;
  className?: string;
}) {
  return (
    <div
      className={
        className +
        " relative border-solid border-black/20 dark:border-white/20 overflow-hidden " +
        (border && borders[border])
      }
    >
      {(cornertl || corner) && (
        <div
          className={`absolute h-${cornersize} w-${cornersize} -top-${cornersize / 2} -left-${cornersize / 2} rotate-45 bg-black/20 dark:bg-white/20`}
        ></div>
      )}
      {(cornertr || corner) && (
        <div
          className={`absolute h-${cornersize} w-${cornersize} -top-${cornersize / 2} -right-${cornersize / 2} rotate-45 bg-black/20 dark:bg-white/20`}
        ></div>
      )}
      {(cornerbl || corner) && (
        <div
          className={`absolute h-${cornersize} w-${cornersize} -bottom-${cornersize / 2} -left-${cornersize / 2} rotate-45 bg-black/20 dark:bg-white/20`}
        ></div>
      )}
      {(cornerbr || corner) && (
        <div
          className={`absolute h-${cornersize} w-${cornersize} -bottom-${cornersize / 2} -right-${cornersize / 2} rotate-45 bg-black/20 dark:bg-white/20`}
        ></div>
      )}
      {children}
    </div>
  );
}
