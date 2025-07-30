// src/i18n/navigation.ts
export const languages = ['ar', 'en', 'fr'] as const;
export type Locale = (typeof languages)[number];
export const defaultLocale: Locale = 'ar';
