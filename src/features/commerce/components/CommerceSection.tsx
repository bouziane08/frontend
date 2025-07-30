// src/features/commerce/components/CommerceSection.tsx
'use client';

import React from 'react';

interface CommerceSectionProps {
  title: string;
  description: string;
}

export default function CommerceSection({ title, description }: CommerceSectionProps) {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
    </section>
  );
}
