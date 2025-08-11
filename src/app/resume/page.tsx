import SectionWrapper from '@/components/layout/sectionWrapper';
import About from '@/components/page/about';
import Capabilities from '@/components/page/capabilities';
import ExperienceTimeline from '@/components/page/experienceTimeline';
import ResumeHero from '@/components/page/resumeHero';
import ResumeProjects from '@/components/page/resumeProjects';

export default function Resume() {
  return (
    <>
      <SectionWrapper id="home" fullWidth>
        <ResumeHero />
      </SectionWrapper>
      <SectionWrapper id="about" className="flex-col items-center gap-10">
        <About variant="resumePage" />
      </SectionWrapper>
      <SectionWrapper
        id="resume"
        className="relative m-0 p-0 lg:p-0"
        fullWidth={true}
      >
        <ExperienceTimeline />
      </SectionWrapper>
      <SectionWrapper id="capabilities" className="min-h-fit flex-col">
        <Capabilities />
      </SectionWrapper>
      <SectionWrapper id="portfolio" className="flex-col">
        <ResumeProjects />
      </SectionWrapper>
    </>
  );
}
