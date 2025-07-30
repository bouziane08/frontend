import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  // ✅ تمكين الوضع الداكن باستخدام class (مفضل للتحكم اليدوي)
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // لون أزرق مخصص
        secondary: '#64748b',  // لون رمادي مائل للأزرق

        // 🎨 ألوان الأقسام (الفاتحة)
        section: {
          hero: '#f0f4ff',
          services: '#f8fafc',
          chat: '#f1f5f9',
          commerce: '#fefce8',
          community: '#fdf2f8',
          education: '#ecfdf5',
          entertainment: '#fef2f2',
          jobs: '#eff6ff',
          news: '#fff7ed',
          realestate: '#f3f4f6',
          stories: '#ede9fe',
          travel: '#f0fdfa',
        },

        // 🌙 ألوان الوضع الداكن (تُستخدم مع `dark:`)
        dark: {
          background: '#0f172a',  // خلفية عامة داكنة
          surface: '#1e293b',     // خلفية البطاقات أو العناصر
          text: '#f1f5f9',        // النصوص الفاتحة
          border: '#334155',      // حدود فاتحة
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
