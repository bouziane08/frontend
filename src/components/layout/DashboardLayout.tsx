'use client';

import Sidebar from './Sidebar';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const t = useTranslations('dashboard');

  const links = [
    { name: t('home'), href: '/dashboard' },
    { name: t('chat'), href: '/dashboard/chat' },
    { name: t('profile'), href: '/dashboard/profile' },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar links={links} />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
