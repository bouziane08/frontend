'use client'

import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function RegisterPage() {
  const t = useTranslations('auth')

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">{t('registerTitle')}</h1>
          <form className="space-y-4">
            <Input placeholder={t('name')} type="text" required />
            <Input placeholder={t('email')} type="email" required />
            <Input placeholder={t('password')} type="password" required />
            <Button className="w-full" type="submit">{t('register')}</Button>
          </form>
          <p className="mt-4 text-sm text-center">
            {t('haveAccount')} <Link href="/login" className="text-blue-500 underline">{t('loginNow')}</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
