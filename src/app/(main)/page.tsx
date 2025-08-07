'use client';

import { useEffect } from 'react';
import SectionWrapper from '@/components/layout/sectionWrapper';
import Hero from '@/components/page/hero';
import Services from '@/components/page/services';
import Projects from '@/components/page/projects';
import Testimonials from '@/components/page/testimonials';
import Contact from '@/components/page/contact';
import About from '@/components/page/about';

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
      <SectionWrapper
        id="hero"
        className="snap-center p-0 lg:p-0"
        animate={true}
      >
        <Hero />
      </SectionWrapper>

      <SectionWrapper
        id="services"
        className="snap-start flex-col items-center"
      >
        <Services />
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        className="snap-start flex-col items-center"
      >
        <Projects />
      </SectionWrapper>

      <SectionWrapper
        id="testimonials"
        className="snap-start flex-col items-center"
      >
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper id="about" className="snap-start flex-col items-center">
        <About />
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        className="snap-center flex-col items-center"
      >
        <Contact />
      </SectionWrapper>
    </>
  );
}
