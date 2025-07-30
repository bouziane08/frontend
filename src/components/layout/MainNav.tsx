'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
  { href: '', key: 'home' }, // سيتم استبداله بـ `/${locale}`
  { href: 'education', key: 'education' },
  { href: 'commerce', key: 'commerce' },
  { href: 'ai', key: 'ai' },
  { href: 'chat', key: 'chat' },
  { href: 'real-estate', key: 'realEstate' },
  { href: 'entertainment', key: 'entertainment' },
  { href: 'community', key: 'community' },
  { href: 'news', key: 'news' },
  { href: 'jobs', key: 'jobs' },
  { href: 'subscriptions', key: 'subscriptions' },
]

export default function MainNav() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap items-center gap-4">
      {navItems.map(({ href, key }) => {
        const fullHref = `/${locale}${href ? `/${href}` : ''}`
        const active = pathname === fullHref

        return (
          <Link
            key={key}
            href={fullHref}
            className={clsx(
              'text-sm font-medium transition-colors hover:text-primary',
              active ? 'text-primary underline' : 'text-muted-foreground'
            )}
          >
            {t(key)}
          </Link>
        )
      })}
    </nav>
  )
}
