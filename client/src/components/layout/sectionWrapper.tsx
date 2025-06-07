'use client';

import { motion } from 'motion/react';

namespace SectionWrapper {
  export type Props = {
    id: string;
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
  };
}

export default function SectionWrapper({
  id,
  children,
  className,
  animate,
}: SectionWrapper.Props) {
  if (animate) {
    return (
      <motion.section
        id={id}
        className={`snap-start scroll-m-20 py-10 ${className || ''}`}
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
    <section id={id} className={`py-10' ${className || ''}`}>
      {children}
    </section>
  );
}
