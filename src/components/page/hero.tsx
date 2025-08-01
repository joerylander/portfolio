'use client';

import Image from 'next/image';
import CtaBtn from '../shared/ctaBtn';

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
      <section className="z-10 flex max-w-3xl min-w-xs flex-col items-center gap-5 px-4 sm:w-full sm:items-start sm:px-0 sm:pl-20">
        <h3 className="h3-responsive text-center font-normal text-balance sm:text-left">
          Hey, I&apos;m Joe - a digital artisan.
        </h3>
        <h1 className="h1-responsive text-center text-balance sm:text-left">
          Designer &amp; Developer
        </h1>
        <h4 className="h4-responsive text-center text-pretty sm:text-left">
          I craft fast, beautiful websites that help grow your brand.
        </h4>
        <CtaBtn text="Let's work together" className="mt-8 w-1/2" />
      </section>
    </div>
  );
}
