import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="px-3 py-1 rounded-full border-solid border border-black/20 dark:border-white/20 font-sans text-sm bg-stone-50 dark:bg-stone-800">
      {children}
    </div>
  );
}
