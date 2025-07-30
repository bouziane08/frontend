import { getMessages } from '@/i18n/getMessages';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n/i18n';
import type { Metadata } from 'next';
import  ThemeProvider  from '@/components/theme/ThemeProvider'; // إذا كنت تستخدمها
import Layout from '@/components/layout/Layout'; // الهيدر والفوتر الموحد

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'My App',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
