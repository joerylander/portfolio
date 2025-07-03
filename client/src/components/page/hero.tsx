import Image from 'next/image';
import { azaret_mono, inter } from '@/lib/fonts';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col justify-center">
      <Image
        src="/images/hero_banner.png"
        alt="Hero Background"
        fill
        className="-z-10 object-cover"
        priority
        quality={85}
      />
      <section className="z-10 flex w-full max-w-2xl flex-col gap-5 pl-20">
        <h3 className={`${inter.variable} text-3xl font-normal`}>
          Hi there, I'm Joe
        </h3>
        <h1 className={`${inter.variable} text-5xl`}>
          Designer &amp; Developer
        </h1>
        <p className={`${azaret_mono.variable} text-xl`}>
          I help people and brands to reach their goals by designing and
          building user-centric digital products and interactive experiences
        </p>
        <Button size={'lg'} className="mt-8 w-1/2">
          Let's get started!
        </Button>
      </section>
    </div>
  );
}
