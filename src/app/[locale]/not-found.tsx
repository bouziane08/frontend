// app/not-found.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <h1 className="text-7xl font-extrabold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          {t('message')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          <ArrowLeft size={18} />
          {t('back')}
        </Link>
      </motion.div>
    </div>
  );
}
