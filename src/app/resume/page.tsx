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
        <div className="flex flex-col">
          <h1 className="text-7xl">Joe Rylander</h1>
          <Typewriter
            prefix="I'm a "
            words={['Freelancer', 'Developer']}
            className="text-3xl"
            speed={100}
          />
          {/* <Typewriter words={['hello world']} showCaret={true} /> */}
        </div>
      </section>
    </>
  );
}
