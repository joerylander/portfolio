import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="border-accent-foreground relative size-48 overflow-hidden rounded-full border-8 md:size-60">
        <Image
          src="/images/profile_transparent_bg.png"
          alt="profile image"
          className="scale-90 object-cover"
          fill
          priority
          quality={90}
          sizes="100vw"
        />
      </div>
      <h2 className="h2-responsive text-center font-bold text-balance capitalize">
        My story
      </h2>
      <article className="flex max-w-2xl flex-col gap-4 text-justify text-pretty hyphens-auto">
        <p className="text-responsive">
          Hello there! I&apos;m Joe Rylander, a professional web developer with
          focus on helping fitness professionals and small businesses build
          clean, high-performing &amp; conversion-focused websites.
        </p>
        <p className="text-responsive">
          I use modern tools like React, WordPress, and Laravel to build
          websites that are fast, SEO-friendly, and easy to manage — whether
          you&apos;re starting fresh or updating an existing one.
        </p>
        <p className="text-responsive">
          When I&apos;m not working, you&apos;ll often find me training
          calisthenics (
          <span className="italic">bodyweight training &amp; skills</span>).
        </p>
        <p className="text-responsive">Let&apos;s build together!</p>
      </article>
    </>
  );
}
