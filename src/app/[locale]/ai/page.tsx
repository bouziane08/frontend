'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AIPage() {
  const t = useTranslations('ai')

  return (
    <section className="container py-16 space-y-8">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-primary dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('title')}
      </motion.h1>

      <motion.p
        className="text-muted-foreground max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t('description')}
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/register">
          <Button variant="default">{t('cta')}</Button>
        </Link>
        <Link href="/">
          <Button variant="outline">{t('backToHome')}</Button>
        </Link>
      </motion.div>
    </section>
  )
}
