import SectionWrapper from '@/components/layout/sectionWrapper';
import Hero from '@/components/page/hero';
import Services from '@/components/page/services';
import Projects from '@/components/page/projects';
import Testimonials from '@/components/page/testimonials';
import Contact from '@/components/page/contact';

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
          className="flex flex-col items-center gap-20"
        >
          <Services />
        </SectionWrapper>

        <SectionWrapper
          id="projects"
          className="flex flex-col items-center gap-20"
        >
          <Projects />
        </SectionWrapper>

        <SectionWrapper
          id="testimonials"
          className="flex flex-col items-center gap-20"
        >
          <Testimonials />
        </SectionWrapper>

        <SectionWrapper
          id="contact"
          className="flex flex-col items-center gap-20"
        >
          <Contact />
        </SectionWrapper>
      </main>
    </>
  );
}
