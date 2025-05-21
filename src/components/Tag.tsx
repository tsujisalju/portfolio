import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="px-3 py-1 rounded-md border-solid border border-black/20 dark:border-white/20 font-sans text-sm bg-zinc-50 dark:bg-zinc-800">
      {children}
    </div>
  );
}
