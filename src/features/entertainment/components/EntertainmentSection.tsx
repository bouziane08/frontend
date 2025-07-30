'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface EntertainmentSectionProps {
  title: string;
  description: string;
}

export default function EntertainmentSection({ title, description }: EntertainmentSectionProps) {
  return (
    <section className="py-20 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* 🔜 مستقبلًا: أضف معرض فيديو / ألعاب تفاعلية / مقاطع مميزة */}
      </div>
    </section>
  );
}
