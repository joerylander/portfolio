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
        quality={75}
        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      <section className="z-10 flex max-w-3xl min-w-xs flex-col items-center gap-5 px-4 sm:w-full sm:items-start sm:px-0 sm:pl-20">
        <h3 className="h3-responsive text-center font-normal text-balance sm:text-left">
          Hey, I&apos;m Joe - a digital artisan.
        </h3>
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-balance transition-colors sm:text-left sm:text-5xl md:text-6xl">
          Designer &amp; Developer
        </h1>
        <h4 className="h4-responsive text-center text-pretty sm:text-left">
          I craft fast, beautiful websites that help grow your brand.
        </h4>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:justify-start sm:gap-8">
          <CtaBtn text="Let's talk" className="w-1/2 min-w-48" />
          <CtaBtn
            text="View my work"
            navigateTo="projects"
            className="w-1/3 min-w-40"
            variant="secondary"
          />
        </div>
      </section>
    </div>
  );
}
