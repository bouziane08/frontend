// src/i18n/getMessages.ts
import { notFound } from 'next/navigation';
import { type Locale } from '@/i18n/i18n';

export async function getMessages(locale: Locale) {
  try {
    return (await import(`@/messages/${locale}`)).default;
  } catch (error) {
    notFound();
  }
}
