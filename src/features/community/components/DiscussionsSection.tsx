'use client'

import React from 'react';

interface DiscussionsSectionProps {
  title: string;
  description: string;
}

export default function DiscussionsSection({ title, description }: DiscussionsSectionProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
        {/* يمكنك إضافة قسم تعليقات أو مناقشات مجتمعية هنا لاحقًا */}
      </div>
    </section>
  );
}
