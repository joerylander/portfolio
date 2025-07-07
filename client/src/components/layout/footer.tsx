import { azaret_mono } from '@/lib/fonts';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  // @ts-ignore
  const githubIcon: IconProp = 'fa-brands fa-github';
  // @ts-ignore
  const linkedinIcon: IconProp = 'fa-brands fa-linkedin';
  // @ts-ignore
  const xTwitterIcon: IconProp = 'fa-brands fa-x-twitter';
  return (
    <footer className="mx-8 flex h-28 min-h-20 snap-start flex-col items-center justify-between lg:flex-row">
      <p
        className={`${azaret_mono.className} text-sm whitespace-nowrap capitalize`}
      >
        &#169;rylander media 2025. all rights reserved
      </p>

      <div className="my-6 flex gap-12 lg:mx-8 lg:my-0">
        <a
          className="h-6 w-6 md:h-8 md:w-8"
          href="https://github.com/joerylander"
          target="_blank"
        >
          <FontAwesomeIcon icon={githubIcon} />
        </a>
        <a
          className="h-6 w-6 md:h-8 md:w-8"
          href="https://www.linkedin.com/in/joerylander/"
          target="_blank"
        >
          <FontAwesomeIcon icon={linkedinIcon} />
        </a>
        <a
          className="h-6 w-6 md:h-8 md:w-8"
          href="https://x.com/CyberJojo9"
          target="_blank"
        >
          <FontAwesomeIcon icon={xTwitterIcon} />
        </a>
      </div>

      <a
        href="mailto:rylander.media@gmail.com"
        className={`${azaret_mono.className}`}
      >
        rylander.media@gmail.com
      </a>
    </footer>
  );
}
