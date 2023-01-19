import { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="container m-auto max-w-5xl flex flex-1 flex-col p-16 xl:px-0 space-y-4">
      {children}
    </div>
  );
}
