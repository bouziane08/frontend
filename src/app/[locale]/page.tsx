import { useTranslations } from 'next-intl';
import HeroSection from '@/features/HeroSection/components/HeroSection';
import ServicesSection from '@/features/services/components/ServicesSection';
import EducationSection from '@/features/education/components/EducationSection';
import CommerceSection from '@/features/commerce/components/CommerceSection';
import AISection from '@/features//ai/components/AISection';
import ChatSection from '@/features/chat/components/ChatSection';
// يمكنك إضافة أقسام أخرى هنا...

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main className="space-y-16">
      <HeroSection
        title={t('hero.title')}
        description={t('hero.description')}
        cta={t('hero.cta')}
      />
      <ServicesSection
        title={t('services.title')}
        description={t('services.description')}
      />
      <EducationSection
        title={t('education.title')}
        description={t('education.description')}
      />
      <CommerceSection
        title={t('commerce.title')}
        description={t('commerce.description')}
      />
      <AISection
        title={t('ai.title')}
        description={t('ai.description')}
      />
      <ChatSection
        title={t('chat.title')}
        description={t('chat.description')}
      />
      {/* يمكن إضافة أقسام مثل: TourismSection، RealEstateSection... */}
    </main>
  );
}
