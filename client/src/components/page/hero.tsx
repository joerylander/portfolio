import Image from 'next/image';
import { azaret_mono, inter } from '@/lib/fonts';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <>
      <div className="ml-7 flex w-full max-w-2xl flex-col gap-5">
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
        <Button className="mt-4 w-56 text-white">Let's get started</Button>
      </div>
      <div className="relative h-60 w-60">
        <Image
          src="/images/profile.jpg"
          alt="profile image"
          className="object-cover"
          fill
        ></Image>
      </div>
    </>
  );
}
