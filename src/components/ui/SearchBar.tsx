'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useLocale } from 'next-intl'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const locale = useLocale()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return

    // توجيه مع دعم اللغة الحالية في الرابط
    router.push(`/${locale}/search?q=${encodeURIComponent(trimmedQuery)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 w-full max-w-lg">
      <Input
        type="text"
        placeholder="ابحث..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" variant="default" className="shrink-0">
        <Search className="w-4 h-4 mr-2" />
        بحث
      </Button>
    </form>
  )
}
