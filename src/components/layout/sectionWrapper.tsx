'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  fullWidth?: boolean; // Option to disable container for full-width sections
};

export default function SectionWrapper({
  id,
  children,
  className,
  animate,
  fullWidth = false,
}: Props) {
  const baseClasses = `flex min-h-screen w-full scroll-mt-16 ${!fullWidth ? ' container mx-auto px-4 py-16 lg:py-24' : ''}`;

  if (animate) {
    return (
      <motion.section
        id={id}
        className={cn(baseClasses, className)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
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
