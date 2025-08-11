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
        className="-z-10 object-cover"
        quality={90}
        sizes="100vw"
      />
      <div className="flex min-w-xs flex-col gap-4 pl-20 text-center md:text-left">
        <h1 className="h1-responsive">Joe Rylander</h1>
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
