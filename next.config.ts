// next.config.ts
import createIntlMiddleware from 'next-intl/middleware';

const locales = ['ar', 'en', 'fr'];
const defaultLocale = 'ar';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: true
});

export default {
  middleware: {
    matcher: ['/', '/(ar|en|fr)/:path*']
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb' // أو يمكنك حذف هذا إن لم تستخدم serverActions
    }
  }
};
