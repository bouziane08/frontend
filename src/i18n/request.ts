// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import type { GetRequestConfigParams, RequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './i18n';

export default getRequestConfig(
  async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
    const lang = locale && locales.includes(locale as typeof locales[number])
      ? (locale as typeof locales[number])
      : defaultLocale;

    const mod = await import(`../messages/${lang}.ts`);
    return { locale: lang, messages: mod.default };
  }
);
