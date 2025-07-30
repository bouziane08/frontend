// src/i18n/config.ts
import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export const languages = ['ar', 'en', 'fr'] as const;
export type Locale = (typeof languages)[number];
export const defaultLocale: Locale = 'ar';

export const isValidLocale = (locale: string): locale is Locale =>
  languages.includes(locale as Locale);

export const getDirection = (locale: Locale): 'rtl' | 'ltr' =>
  locale === 'ar' ? 'rtl' : 'ltr';

export function getLocaleFromPath(path: string): Locale | null {
  return path
    .split('/')
    .find((segment) => isValidLocale(segment)) as Locale | null;
}

export function hasLocaleInPath(path: string): boolean {
  return languages.some((locale) => path.includes(`/${locale}/`));
}

// LocalStorage (browser only)
export function getLocaleFromLocalStorage(): Locale | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('locale');
  return isValidLocale(stored || '') ? (stored as Locale) : null;
}

export function setLocaleInLocalStorage(locale: Locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);
  }
}

// Cookies
export function getLocaleFromCookies(cookie: string): Locale | null {
  const match = cookie.match(/locale=([^;]+)/);
  return match && isValidLocale(match[1]) ? (match[1] as Locale) : null;
}

export function setLocaleInCookies(locale: Locale, res: NextResponse) {
  res.cookies.set('locale', locale, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
  });
}

// Headers
function extractLocaleFromAcceptLanguage(value: string | null | undefined): Locale | null {
  if (!value) return null;
  return value
    .split(',')
    .map((lang) => lang.trim())
    .find(isValidLocale) ?? null;
}

export function getLocaleFromHeaders(headers: Headers): Locale | null {
  return extractLocaleFromAcceptLanguage(headers.get('accept-language'));
}

export function getLocaleFromNextApiHeaders(headers: NextApiRequest['headers']): Locale | null {
  return extractLocaleFromAcceptLanguage(headers['accept-language']);
}
