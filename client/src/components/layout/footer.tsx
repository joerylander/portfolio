import { azaret_mono } from '@/lib/fonts';

export default function Footer() {
  return (
    <footer className="mx-6 flex min-h-20 items-center justify-between">
      <p className={`${azaret_mono.className} capitalize`}>
        &#169; rylander media 2025. all rights reserved
      </p>

      <div className="flex">
        <div className="">Github</div>
        <div className="">Linkedin</div>
        <div className="">Instagram</div>
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
