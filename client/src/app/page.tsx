import SectionWrapper from '@/components/layout/sectionWrapper';
import Hero from '@/components/page/hero';
import Services from '@/components/page/services';

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full max-w-7xl self-center px-6">
        <SectionWrapper
          id="hero"
          className="min-h-[calc(100vh-168px)] items-center justify-between"
          animate={true}
        >
          <Hero />
        </SectionWrapper>
        <SectionWrapper
          id="services"
          className="flex flex-col gap-10 md:flex-row"
        >
          <Services />
        </SectionWrapper>
      </main>
    </>
  );
}
