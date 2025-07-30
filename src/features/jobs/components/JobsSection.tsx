'use client'

import { motion } from 'framer-motion';

interface JobsSectionProps {
  title: string;
  description: string;
}

export default function JobsSection({ title, description }: JobsSectionProps) {
  return (
    <section className="py-20 bg-gray-100 dark:bg-dark.surface">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* مستقبلاً: قائمة وظائف أو زر تصفح منصة التوظيف */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-500 dark:text-gray-400 italic"
        >
          Explore career opportunities coming soon.
        </motion.div>
      </div>
    </section>
  );
}
