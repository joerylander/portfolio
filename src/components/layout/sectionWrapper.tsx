'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
};

export default function SectionWrapper({
  id,
  children,
  className,
  animate,
}: Props) {
  const baseClasses =
    'flex min-h-screen w-full scroll-mt-16 px-4 py-16 lg:py-24 mx-auto container';

  if (animate) {
    return (
      <motion.section
        id={id}
        className={cn(baseClasses, className)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={cn(baseClasses, className)}>
      {children}
    </section>
  );
}
