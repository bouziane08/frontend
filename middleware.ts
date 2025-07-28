// middleware.ts
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from '@/i18n/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed' // URL بها /ar أو بدون
});

export const config = {
  matcher: ['/', '/(ar|en|fr)/:path*']
};
