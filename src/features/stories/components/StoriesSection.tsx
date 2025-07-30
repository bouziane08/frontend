'use client'

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export type StoriesSectionProps = {
  title: string;
  description: string;
};

export default function StoriesSection({ title, description }: StoriesSectionProps) {
  const t = useTranslations('storiesSection');

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark.surface">
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
          className="text-lg text-gray-600 dark:text-dark.text mb-10 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { author: 'author1', story: 'story1' },
            { author: 'author2', story: 'story2' },
            { author: 'author3', story: 'story3' },
          ].map(({ author, story }, index) => (
            <StoryCard
              key={index}
              author={t(author)}
              story={t(story)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type StoryCardProps = {
  author: string;
  story: string;
};

function StoryCard({ author, story }: StoryCardProps) {
  return (
    <div className="bg-white dark:bg-dark.elevated border border-gray-200 dark:border-dark.border rounded-xl p-6 shadow-md transition">
      <p className="text-gray-700 dark:text-gray-300 mb-4">“{story}”</p>
      <p className="text-sm font-semibold text-gray-900 dark:text-white">– {author}</p>
    </div>
  );
}
