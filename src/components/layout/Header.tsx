'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  LogIn,
  LogOut,
  User,
  Settings,
  Bell,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/layout/Sidebar';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/shared/LanguageToggle';
import { useUserStore } from '@/store/userStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('header');
  const pathname = usePathname();
  const { user, isLoggedIn, login, logout } = useUserStore();

  const baseLinks = [
    { name: t('home'), href: '/' },
    { name: t('education'), href: '/education' },
    { name: t('commerce'), href: '/commerce' },
    { name: t('blog'), href: '/blog' },
    { name: t('community'), href: '/community' },
    { name: t('chat'), href: '/chat' },
  ];

  const adminLinks = [
    { name: t('dashboard'), href: '/admin', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const navLinks = isLoggedIn && user?.role === 'admin'
    ? [...baseLinks, ...adminLinks]
    : baseLinks;

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm backdrop-blur-sm px-4 py-2 flex items-center justify-between">
      {/* الشعار والقائمة الجانبية للجوال */}
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <Sidebar links={navLinks} />
        </Sheet>

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt={t('appName')}
            width={36}
            height={36}
            className="rounded-full object-contain"
          />
          <span className="text-xl font-bold text-primary hidden sm:inline">
            {t('appName')}
          </span>
        </Link>
      </div>

      {/* روابط التنقل للشاشات الكبيرة */}
      <nav className="hidden lg:flex gap-6 font-medium text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors ${
              pathname === link.href
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-primary'
            } pb-0.5`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* أدوات التحكم */}
      <div className="flex items-center gap-3">
        {/* البحث */}
        <input
          type="search"
          placeholder={t('searchPlaceholder')}
          className="hidden md:block px-3 py-1.5 rounded-md border border-muted bg-background text-foreground text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* إشعارات */}
        <Button variant="ghost" size="icon" aria-label={t('notifications')}>
          <Bell className="w-5 h-5 text-muted-foreground hover:text-primary" />
        </Button>

        {/* الوضع الليلي */}
        <ThemeToggle />

        {/* تغيير اللغة */}
        <LanguageToggle />

        {/* الحساب */}
        {isLoggedIn && user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-8 h-8 cursor-pointer border">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[200px]">
              <DropdownMenuItem className="gap-2">
                <User className="w-4 h-4" />
                {t('profile')}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Settings className="w-4 h-4" />
                {t('settings')}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="gap-2 text-red-500"
                onClick={() => logout()}
              >
                <LogOut className="w-4 h-4" />
                {t('logout')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() =>
              login({
                id: '1',
                name: 'بوزيان',
                email: 'bouziane@example.com',
                avatar: '/images/avatar.png',
                role: 'admin',
              })
            }
          >
            <LogIn className="w-4 h-4" />
            {t('login')}
          </Button>
        )}
      </div>
    </header>
  );
}
