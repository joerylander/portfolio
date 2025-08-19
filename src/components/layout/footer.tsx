import Link from 'next/link';
import SocialLinks from '../shared/socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-0 grid w-full grid-cols-1 gap-4 px-4 pt-14 pb-8 sm:grid-cols-3 sm:px-8">
      <SocialLinks
        className="flex justify-center gap-6 sm:gap-8"
        iconSize={20}
      />

      <div className="mt-4 flex flex-col items-center gap-2 sm:mt-0">
        <h4 className="text-xs font-bold sm:text-sm">Navigation</h4>
        <ul className="flex w-full flex-col items-center gap-2">
          <li className="w-full text-center">
            <Link href="/" className="text-xs font-light sm:text-sm">
              Home
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/resume" className="text-xs font-light sm:text-sm">
              Resumé
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2 sm:mt-0">
        <h4 className="text-xs font-bold sm:text-sm">Get in touch</h4>
        <ul className="flex w-full flex-col items-center gap-2">
          <li className="w-full text-center">
            <a
              href="mailto:rylander.media@gmail.com"
              className="inline-block max-w-full overflow-hidden text-xs font-light text-ellipsis whitespace-nowrap sm:text-sm"
              title="rylander.media@gmail.com"
            >
              rylander.media@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-1 mt-4 flex items-center justify-center border-t border-white/20 pt-6 sm:col-span-3">
        <p className="text-center text-xs font-light capitalize sm:text-sm">
          all rights reserved &copy; rylander media {currentYear}
        </p>
      </div>
    </footer>
  );
}
