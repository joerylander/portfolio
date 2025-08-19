'use client';

import { useEffect } from 'react';
import SectionWrapper from '@/components/layout/sectionWrapper';
import Hero from '@/components/page/hero';
import Services from '@/components/page/services';
import Projects from '@/components/page/projects';
import Testimonials from '@/components/page/testimonials';
import Contact from '@/components/page/contact';
import About from '@/components/page/about';
import TechSkills from '@/components/page/techSkills';

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
        fullWidth
      >
        <Hero />
      </SectionWrapper>

      <SectionWrapper
        id="services"
        className="snap-start flex-col items-center"
        animate={true}
      >
        <Services />
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        className="snap-start flex-col items-center"
        animate={true}
      >
        <Projects />
      </SectionWrapper>

      <SectionWrapper
        id="testimonials"
        className="snap-start flex-col items-center"
        animate={true}
      >
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper
        id="about"
        className="snap-center flex-col items-center gap-8"
        animate={true}
      >
        <About variant="homePage" />
      </SectionWrapper>
      <SectionWrapper
        id="techskills"
        className="snap-start flex-col"
        animate={true}
      >
        <TechSkills />
      </SectionWrapper>
      <SectionWrapper
        id="contact"
        className="snap-center flex-col items-center"
        animate={true}
      >
        <Contact />
      </SectionWrapper>
    </>
  );
}
