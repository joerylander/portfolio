'use client';

import { motion } from 'motion/react';

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
  const tailwindClasses =
    'flex min-h-screen w-full scroll-mt-16 justify-center';

  if (animate) {
    return (
      <motion.section
        id={id}
        className={`${tailwindClasses} ${className ?? ''}`}
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
    <section id={id} className={`${tailwindClasses} ${className ?? ''}`}>
      {children}
    </section>
  );
}
