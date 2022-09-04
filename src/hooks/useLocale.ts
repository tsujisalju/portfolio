import { useRouter } from "next/router";

export function useLocale() {
  const router = useRouter();

  return {
    locale: router.locale as string,
    defaultLocale: router.defaultLocale as string,
  };
}
