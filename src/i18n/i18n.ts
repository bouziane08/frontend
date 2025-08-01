// frontend/src/i18n/i18n.ts

export const locales = ['ar', 'en', 'fr'] as const;
export const defaultLocale = 'ar';

export type Locale = (typeof locales)[number];
