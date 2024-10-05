import { ReactNode } from "react";

type CornerType = "normal" | "large";

export default function GeoDiv({
  children,
  border = false,
  bordert = false,
  borderb = false,
  borderr = false,
  borderl = false,
  borderx = false,
  bordery = false,
  corner = false,
  cornertl = false,
  cornertr = false,
  cornerbl = false,
  cornerbr = false,
  cornersize = "normal",
  className,
}: {
  children?: ReactNode;
  border?: boolean;
  bordert?: boolean;
  borderb?: boolean;
  borderr?: boolean;
  borderl?: boolean;
  borderx?: boolean;
  bordery?: boolean;
  corner?: boolean;
  cornertl?: boolean;
  cornertr?: boolean;
  cornerbl?: boolean;
  cornerbr?: boolean;
  cornersize?: CornerType;
  className?: string;
}) {
  return (
    <div
      className={
        className +
        " relative border-solid border-black/20 dark:border-white/20 overflow-hidden " +
        (border ? "border " : "") +
        (bordert ? "border-t " : "") +
        (borderb ? "border-b " : "") +
        (borderl ? "border-l " : "") +
        (borderr ? "border-r " : "") +
        (borderx ? "border-x " : "") +
        (bordery ? "border-y " : "")
      }
    >
      {children}
      {(cornertl || corner) && (
        <div
          className={
            "absolute rotate-45 bg-black/20 dark:bg-white/20 " +
            (cornersize == "normal"
              ? "h-4 w-4 -top-2 -left-2"
              : "h-8 w-8 -top-4 -left-4")
          }
        ></div>
      )}
      {(cornertr || corner) && (
        <div
          className={
            "absolute rotate-45 bg-black/20 dark:bg-white/20 " +
            (cornersize == "normal"
              ? "h-4 w-4 -top-2 -right-2"
              : "h-8 w-8 -top-4 -right-4")
          }
        ></div>
      )}
      {(cornerbl || corner) && (
        <div
          className={
            "absolute rotate-45 bg-black/20 dark:bg-white/20 " +
            (cornersize == "normal"
              ? "h-4 w-4 -bottom-2 -left-2"
              : "h-8 w-8 -bottom-4 -left-4")
          }
        ></div>
      )}
      {(cornerbr || corner) && (
        <div
          className={
            "absolute rotate-45 bg-black/20 dark:bg-white/20 " +
            (cornersize == "normal"
              ? "h-4 w-4 -bottom-2 -right-2"
              : "h-8 w-8 -bottom-4 -right-4")
          }
        ></div>
      )}
    </div>
  );
}
