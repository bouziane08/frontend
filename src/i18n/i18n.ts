// src/i18n/i18n.ts
export const locales = ['ar', 'en', 'fr'] as const;
export const defaultLocale = 'ar';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
