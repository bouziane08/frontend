'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  description: string;
  register: string;
  explore: string;
}

export default function HeroSection({
  title,
  description,
  register,
  explore,
}: HeroSectionProps) {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 py-12">
      <div className="flex-1 text-center lg:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-4 justify-center lg:justify-start"
        >
          <Link href="/register">
            <Button>{register}</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">{explore}</Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="flex-1 mt-10 lg:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Image
          src="/images/hero.svg"
          alt="Hero"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
