'use client';

import Image from 'next/image';
import Typewriter from '../shared/typewriter';

export default function ResumeHero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center">
      <Image
        src="/images/hero_banner.webp"
        alt="Hero profile image"
        fill
        priority
        className="-z-10 object-cover object-right sm:object-center"
        quality={80}
        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      <div className="flex min-w-xs flex-col gap-4 text-center md:pl-20 md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-balance transition-colors sm:text-5xl md:text-6xl">
          Joakim &quot;Joe&quot; Rylander
        </h1>
        <Typewriter
          prefix="I'm a"
          words={['Freelancer', 'Full-stack Developer', 'Designer']}
          className="h3-responsive"
          speed={100}
        />
      </div>
    </div>
  );
}
