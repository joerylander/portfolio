import { inter } from '@/lib/fonts';
import { Button } from '../ui/button';
import SectionWrapper from '../layout/sectionWrapper';

export default function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="min-h-[calc(100vh-168px)]"
      animate={true}
    >
      <div className="ml-7 flex w-2xl flex-col gap-5">
        <h3 className={inter.variable}>Hi there, I'm Joe</h3>
        <h2 className={inter.variable}>Designer &amp; Developer</h2>
        <p className={inter.variable}>
          I help people and brands to reach their goals by designing and
          building user-centric digital products and interactive experiences
        </p>
        <Button className="mt-4 w-56 text-white">Let's get started</Button>
      </div>
    </SectionWrapper>
  );
}
