'use client'

import React from 'react';
import { useTranslations } from 'next-intl';

export default function TravelSection() {
  const t = useTranslations('travel');

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 dark:text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t('description')}
        </p>
        {/* يمكن لاحقاً إضافة وجهات سفر، صور، خريطة، إلخ */}
      </div>
    </section>
  );
}
