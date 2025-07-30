'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  const t = useTranslations('dashboard');

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-xl font-bold mb-6">{t('welcome')} 👋</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4">{t('stats.services')}</Card>
          <Card className="p-4">{t('stats.chat')}</Card>
          <Card className="p-4">{t('stats.profile')}</Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
