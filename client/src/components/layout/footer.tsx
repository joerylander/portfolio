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
    <footer className="mx-6 flex h-28 min-h-20 snap-start items-center justify-between">
      <p className={`${azaret_mono.className} whitespace-nowrap capitalize`}>
        &#169;rylander media 2025. all rights reserved
      </p>

      <div className="flex space-x-12">
        <a
          className="h-10 w-10"
          href="https://github.com/joerylander"
          target="_blank"
        >
          <FontAwesomeIcon icon={githubIcon} />
        </a>
        <a
          className="h-10 w-10"
          href="https://www.linkedin.com/in/joerylander/"
          target="_blank"
        >
          <FontAwesomeIcon icon={linkedinIcon} />
        </a>
        <a
          className="h-10 w-10"
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
