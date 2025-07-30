'use client'

import { motion } from 'framer-motion';

interface RealEstateSectionProps {
  title: string;
  description: string;
}

export default function RealEstateSection({ title, description }: RealEstateSectionProps) {
  return (
    <section className="py-20 bg-slate-100 dark:bg-dark.surface">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* مستقبلاً: قائمة عقارات، صور، خريطة، بحث، فلاتر */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 dark:text-gray-400 italic"
        >
          {/* Placeholder لعنصر مستقبلي */}
          Coming soon: Featured real estate listings.
        </motion.div>
      </div>
    </section>
  );
}
