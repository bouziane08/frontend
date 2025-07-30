'use client';

import { Briefcase, BookOpen, Gamepad2, Building, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';

type BottomNavProps = {
  activeTab: string;
  onChange: (value: string) => void;
};

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const t = useTranslations('sections');

  const navItems = useMemo(() => [
    { id: 'education', icon: BookOpen, label: t('education') },
    { id: 'commerce', icon: Briefcase, label: t('commerce') },
    { id: 'entertainment', icon: Gamepad2, label: t('entertainment') },
    { id: 'realestate', icon: Building, label: t('realestate') },
    { id: 'services', icon: Wrench, label: t('services') },
  ], [t]);

  return (
    <nav
      className="bg-background border-t shadow-md flex justify-around items-center px-2 py-1 text-xs text-muted-foreground"
      role="navigation"
      aria-label="Bottom Navigation"
    >
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md transition',
              isActive
                ? 'text-primary font-semibold'
                : 'hover:text-foreground'
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
