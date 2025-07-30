// src/features/services/components/ServicesSection.tsx
'use client';

import React from 'react';

interface ServicesSectionProps {
  title: string;
  description: string;
}

export default function ServicesSection({ title, description }: ServicesSectionProps) {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>

      {/* هنا تضع عناصر القسم الحقيقية مثل بطاقات الخدمات */}
    </section>
  );
}
