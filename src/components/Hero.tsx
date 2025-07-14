import { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-5xl flex flex-1 flex-col px-4 py-28 xl:px-0 gap-4">
      {children}
    </div>
  );
}
