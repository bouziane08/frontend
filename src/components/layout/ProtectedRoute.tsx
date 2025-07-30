'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace('/login'); // توجيه لصفحة تسجيل الدخول
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-muted-foreground">
        <span className="text-lg animate-pulse">جاري التحقق من الحساب...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-red-500">
        <span className="text-lg">تم رفض الوصول، سيتم توجيهك...</span>
      </div>
    );
  }

  return <>{children}</>;
}
