'use client';
import Image from 'next/image';
import CtaBtn from '../shared/ctaBtn';

type AboutProps = {
  variant: 'homePage' | 'resumePage';
};

export default function About({ variant }: AboutProps) {
  const content = {
    homePage: [
      `Hey, I'm Joe Rylander — a full-stack web developer & designer who helps fitness professionals and small businesses build websites that actually work for them.`,
      `I use modern tools like React, Next.js, WordPress, Laravel, and Docker to create responsive, fast-loading, and secure sites that are easy to maintain.`,
      `My process focuses on mobile-first design, accessibility (WCAG standards), and layouts built to turn visitors into customers.`,
      `I work closely with clients from the first idea to launch, making sure the site looks great, runs smoothly, and supports real business growth.`,
      `When I'm not coding, you'll probably find me working on calisthenics skills — handstands are still a work in progress!`,
      `Want the full story? Check out my resume below.`,
    ],
    resumePage: [
      `Full-stack web developer with 3+ years of experience building scalable, maintainable solutions for industries including health & fitness, property management, and news agencies.`,
      `Skilled in modern JavaScript frameworks (React, Next.js, Angular), backend development (Node.js, Laravel, PHP), containerization with Docker, and database management (MySQL, PostgreSQL).`,
      `Experienced in responsive UI/UX, cross-browser compatibility, accessibility compliance (WCAG), and SEO best practices that improve site performance and engagement.`,
      `Proficient in Agile workflows, Git version control, API integration (REST & GraphQL), and cloud deployment (Vercel, Netlify).`,
    ],
  };
  return (
    <>
      <div className="border-accent-foreground relative size-32 overflow-hidden rounded-full border-8 sm:size-40 md:size-48">
        <Image
          src="/images/profile_transparent_bg.png"
          alt="profile image"
          className="scale-90 object-cover"
          fill
          priority
          quality={90}
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
        />
      </div>
      <header className="text-center">
        <h2 className="h2-responsive font-bold text-balance capitalize">
          About me
        </h2>
      </header>
      <article className="flex max-w-2xl flex-col gap-4 text-justify text-pretty hyphens-auto">
        {content[variant].map((paragraph, i) => (
          <p key={i} className="text-responsive">
            {paragraph}
          </p>
        ))}

        {variant === 'homePage' && (
          <CtaBtn
            text="View my resumé"
            className="mx-auto mt-4 w-1/3"
            variant="secondary"
            navigateTo="resumePage"
          />
        )}
      </article>
    </>
  );
}
