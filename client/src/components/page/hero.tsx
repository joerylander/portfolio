'use client';

import { azaret_mono, inter } from '@/lib/fonts';
import Image from 'next/image';
import CtaBtn from '../shared/cta-btn';

export default function Hero() {
  return (
    <div className="relative flex min-h-[60vh] w-full flex-col justify-center sm:min-h-[70vh] md:min-h-[80vh]">
      <Image
        src="/images/hero_banner.webp"
        alt="Hero Background"
        fill
        className="-z-10 object-cover object-right"
        priority
        quality={90}
        sizes="100vw"
      />
      <section className="z-10 flex max-w-2xl min-w-xs flex-col items-center gap-5 px-4 sm:w-full sm:items-start sm:px-0 sm:pl-20">
        <h3
          className={`${inter.variable} text-xl font-normal sm:text-2xl md:text-3xl`}
        >
          Hi there, I&apos;m Joe
        </h3>
        <h1
          className={`${inter.variable} text-center text-3xl sm:text-4xl md:text-5xl`}
        >
          Designer &amp; Developer
        </h1>
        <h4
          className={`${azaret_mono.variable} text-center text-base sm:text-left sm:text-lg md:text-xl`}
        >
          I help people and brands to reach their goals by designing and
          building user-centric digital products and interactive experiences
        </h4>
        <CtaBtn text="Let's work together" className="mt-8 w-1/2" />
      </section>
    </div>
  );
}
