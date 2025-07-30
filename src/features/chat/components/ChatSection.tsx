// src/features/chat/components/ChatSection.tsx
'use client';

import React from 'react';

interface ChatSectionProps {
  title: string;
  description: string;
}

export default function ChatSection({ title, description }: ChatSectionProps) {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
    </section>
  );
}
