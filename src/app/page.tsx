'use client';

import { useEffect } from 'react';
import SectionWrapper from '@/components/layout/sectionWrapper';
import Hero from '@/components/page/hero';
import Services from '@/components/page/services';
import Projects from '@/components/page/projects';
import Testimonials from '@/components/page/testimonials';
import Contact from '@/components/page/contact';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <SectionWrapper id="hero" className="snap-center" animate={true}>
        <Hero />
      </SectionWrapper>

      <SectionWrapper
        id="services"
        className="mt-16 snap-start flex-col items-center gap-20 px-8"
      >
        <Services />
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        className="mt-16 snap-start flex-col items-center gap-20 px-8"
      >
        <Projects />
      </SectionWrapper>

      <SectionWrapper
        id="testimonials"
        className="mt-16 snap-start flex-col items-center gap-20 px-8"
      >
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        className="mt-16 snap-center flex-col items-center gap-20 px-8"
      >
        <Contact />
      </SectionWrapper>
    </>
  );
}
