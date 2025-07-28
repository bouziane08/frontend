// next.config.ts
import type { NextConfig } from 'next';
import withNextIntl from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // هنا ضع باقي إعداداتك (ترحيل الصور، صفحات 404...) دون i18n
};

export default withNextIntl()(nextConfig);
