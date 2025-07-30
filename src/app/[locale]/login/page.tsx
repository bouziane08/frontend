'use client'

import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function LoginPage() {
  const t = useTranslations('auth')

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">{t('loginTitle')}</h1>
          <form className="space-y-4">
            <Input placeholder={t('email')} type="email" required />
            <Input placeholder={t('password')} type="password" required />
            <Button className="w-full" type="submit">{t('login')}</Button>
          </form>
          <p className="mt-4 text-sm text-center">
            {t('noAccount')} <Link href="/register" className="text-blue-500 underline">{t('registerNow')}</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
