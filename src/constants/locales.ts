export const SUPPORTED_LOCALES = [
  // order as they appear in the language dropdown
  "en-US",
  "de-DE",
  "ms-MY",
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "en-US";

// eslint-disable-next-line
export const LOCALE_LABEL: { [locale in SupportedLocale]: string } = {
  "de-DE": "Deutsch",
  "en-US": "English",
  "ms-MY": "Bahasa Malaysia",
};
