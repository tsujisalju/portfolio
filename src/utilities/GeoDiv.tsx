import { ReactNode } from "react";

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
  cornersize = 4,
  className,
}: {
  children: ReactNode;
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
  cornersize?: number;
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
