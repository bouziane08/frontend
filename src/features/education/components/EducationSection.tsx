// src/features/education/components/EducationSection.tsx
'use client';

import React from 'react';

interface EducationSectionProps {
  title: string;
  description: string;
}

export default function EducationSection({ title, description }: EducationSectionProps) {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
    </section>
  );
}
