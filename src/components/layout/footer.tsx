import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  // @ts-expect-error currently only way to insert icon type inside FontAwesome
  const githubIcon: IconProp = 'fa-brands fa-github';
  // @ts-expect-error currently only way to insert icon type inside FontAwesome
  const linkedinIcon: IconProp = 'fa-brands fa-linkedin';
  // @ts-expect-error currently only way to insert icon type inside FontAwesome
  const xTwitterIcon: IconProp = 'fa-brands fa-x-twitter';
  const iconStyle = 'size-6 md:size-8';
  return (
    <footer className="mx-0 my-4 flex max-h-36 min-h-28 snap-start flex-col items-center justify-between px-8 lg:mx-8 lg:mb-0 lg:flex-row lg:px-0">
      <p className="text-responsive break-all capitalize md:break-normal">
        &#169;rylander media 2025. all rights reserved
      </p>

      <div className="my-6 flex gap-12 lg:mx-8 lg:my-0">
        <a
          className={iconStyle}
          href="https://github.com/joerylander"
          target="_blank"
        >
          <FontAwesomeIcon icon={githubIcon} />
        </a>
        <a
          className={iconStyle}
          href="https://www.linkedin.com/in/joerylander/"
          target="_blank"
        >
          <FontAwesomeIcon icon={linkedinIcon} />
        </a>
        <a
          className={iconStyle}
          href="https://x.com/Overload_JR"
          target="_blank"
        >
          <FontAwesomeIcon icon={xTwitterIcon} />
        </a>
      </div>

      <a href="mailto:rylander.media@gmail.com">rylander.media@gmail.com</a>
    </footer>
  );
}
