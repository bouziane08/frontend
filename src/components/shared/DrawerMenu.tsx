'use client';

import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

type DrawerMenuProps = {
  onSelect: (id: string) => void;
};

export function DrawerMenu({ onSelect }: DrawerMenuProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('sections');
  const locale = useLocale();

  const isRTL = locale === 'ar';

  const sections = [
    { id: 'education', label: t('education') },
    { id: 'commerce', label: t('commerce') },
    { id: 'entertainment', label: t('entertainment') },
    { id: 'jobs', label: t('jobs') },
    { id: 'realestate', label: t('realestate') },
    { id: 'services', label: t('services') },
  ];

  const handleSelect = (id: string) => {
    onSelect(id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="fixed bottom-5 right-5 z-50 rounded-full shadow-lg p-3 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </DialogTrigger>

      <DialogContent
        className={`fixed bottom-0 inset-x-0 z-50 bg-background border-t rounded-t-lg p-4 shadow-xl space-y-4 ${
          isRTL ? 'rtl' : 'ltr'
        }`}
      >
        <h3 className="text-lg font-semibold text-center">{t('navigate')}</h3>
        <ul className="grid gap-3 text-center">
          {sections.map((section) => (
            <li key={section.id}>
              <DialogClose asChild>
                <button
                  onClick={() => handleSelect(section.id)}
                  className="w-full py-2 text-sm font-medium text-foreground hover:text-primary transition"
                >
                  {section.label}
                </button>
              </DialogClose>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
