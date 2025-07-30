'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowUp, Facebook, Instagram, Mail, Twitter } from 'lucide-react';

import { SearchBar } from '@/components/ui/SearchBar';
import  ThemeProvider from '@/components/theme/ThemeProvider'; // ✅ استدعاء الزر الصحيح

export default function Footer() {
  const t = useTranslations('footer');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t text-muted-foreground px-6 py-12 text-sm mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* القسم 1 */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-3">{t('title')}</h2>
          <p className="text-sm leading-relaxed">{t('description')}</p>
          <div className="mt-4">
          </div>
        </div>

        {/* القسم 2: روابط سريعة */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">{t('quickLinks')}</h3>
          <ul className="space-y-1">
            <li><Link href="/education" className="hover:text-primary transition">{t('links.education')}</Link></li>
            <li><Link href="/commerce" className="hover:text-primary transition">{t('links.commerce')}</Link></li>
            <li><Link href="/entertainment" className="hover:text-primary transition">{t('links.entertainment')}</Link></li>
            <li><Link href="/jobs" className="hover:text-primary transition">{t('links.jobs')}</Link></li>
          </ul>
        </div>

        {/* القسم 3: خريطة الموقع */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">{t('sitemap')}</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-primary transition">{t('links.about')}</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">{t('links.contact')}</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition">{t('links.privacy')}</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition">{t('links.faq')}</Link></li>
          </ul>
        </div>

        {/* القسم 4: النشرة البريدية وأيقونات التواصل */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">{t('newsletter')}</h3>
          <form className="flex items-center space-x-2 rtl:space-x-reverse">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="px-3 py-2 rounded-md border w-full text-sm bg-background text-foreground placeholder:text-sm"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition"
            >
              {t('subscribe')}
            </button>
          </form>

          <div className="flex items-center gap-4 mt-4 text-muted-foreground">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-primary transition" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-primary transition" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-primary transition" size={20} />
            </a>
            <a href="mailto:support@example.com">
              <Mail className="hover:text-primary transition" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* حقل البحث */}
      <div className="max-w-xl mx-auto mt-10">
        <SearchBar />
      </div>

      {/* زر العودة للأعلى */}
      <div className="text-center mt-8">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition text-sm"
        >
          <ArrowUp size={16} />
          {t('backToTop')}
        </button>
      </div>

      {/* الحقوق */}
      <div className="text-center text-xs mt-6 text-muted-foreground">
        {t('rights', { year: currentYear })}
      </div>
    </footer>
  );
}
