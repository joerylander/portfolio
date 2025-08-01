import Typewriter from '@/components/shared/typewriter';
import Image from 'next/image';

export default function Resume() {
  return (
    <>
      <section className="relative flex min-h-[100vh] flex-col justify-center">
        <Image
          src="/images/hero_banner.webp"
          alt="Hero profile image"
          fill
          priority
          className="-z-10 object-cover"
          quality={90}
          sizes="100vw"
        />
        <div className="flex min-w-xs flex-col gap-4 pl-20">
          <h1 className="h1-responsive">Joe Rylander</h1>
          <Typewriter
            prefix="I'm a"
            words={['Freelancer', 'Developer']}
            className="h3-responsive"
            speed={100}
          />
        </div>
      </section>
    </>
  );
}
