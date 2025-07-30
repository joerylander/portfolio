import Image from 'next/image';

export default function About() {
  const paragraphStyle = 'text-xl text-pretty';
  return (
    <>
      <div className="border-accent-foreground relative size-60 overflow-hidden rounded-full border-2">
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
      <h2 className="text-center text-2xl font-bold text-balance capitalize md:text-3xl lg:text-4xl">
        My story
      </h2>
      <article className="flex max-w-2xl flex-col gap-2">
        <p className={paragraphStyle}>
          Hello there, I&apos;m Joe Rylander, a web developer and designer
          focused on helping fitness professionals and small businesses build
          high-performing, conversion-focused websites.
        </p>
        <p className={paragraphStyle}>
          With a background in modern web technologies like Next.js, React,
          Laravel &amp; Wordpress , I create fast, responsive sites that not
          only look great — they work hard to grow your business.
        </p>
        <p className={paragraphStyle}>
          Whether you&apos;re a personal trainer, gym owner, or wellness coach,
          I understand what your clients are looking for online — trust,
          transformation, and simplicity. I make sure your website delivers just
          that. You focus on changing lives — I&apos;ll take care of the tech.
        </p>
        <p className={paragraphStyle}>
          When I&apos;m not working, you&apos;ll often find me in the gym doing
          calisthenics focued workout (
          <span className="italic">pull-ups, push-ups, handstands</span>).
        </p>
        <p className={paragraphStyle}>Let&apos;s build together!</p>
      </article>
    </>
  );
}
