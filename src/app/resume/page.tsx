import SectionWrapper from '@/components/layout/sectionWrapper';
import About from '@/components/page/about';
import Capabilities from '@/components/page/capabilities';
import ExperienceTimeline from '@/components/page/experienceTimeline';
import ResumeProjects from '@/components/page/resumeProjects';
import Typewriter from '@/components/shared/typewriter';
import Image from 'next/image';

export default function Resume() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-center">
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
      <ExperienceTimeline />
      {/* <SectionWrapper id="resume" className="">
      </SectionWrapper> */}
      <SectionWrapper id="capabilities" className="flex-col">
        <Capabilities />
      </SectionWrapper>
      <SectionWrapper id="projects" className="flex-col gap-20">
        <ResumeProjects />
      </SectionWrapper>
      <SectionWrapper id="about" className="flex-col items-center gap-20">
        <About />
      </SectionWrapper>
    </>
  );
}
