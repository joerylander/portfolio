import '../globals.css';
import '@/lib/fontawesome';
import type { Metadata, Viewport } from 'next';
import { azaret_mono, inter } from '@/lib/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {
  FileDown,
  FileText,
  GalleryHorizontalEnd,
  House,
  User,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume | Rylander Media',
  description: 'Professional resume of Joe Rylander - Full Stack Developer',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-expect-error currently only way to insert icon type inside FontAwesome
  const githubIcon: IconProp = 'fa-brands fa-github';
  // @ts-expect-error currently only way to insert icon type inside FontAwesome
  const linkedinIcon: IconProp = 'fa-brands fa-linkedin';
  // @ts-expect-error currently only way to insert icon type inside FontAwesome
  const xTwitterIcon: IconProp = 'fa-brands fa-x-twitter';
  const iconStyle = 'size-6  flex place-center';
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${azaret_mono.variable} flex h-screen w-full justify-self-center antialiased`}
      >
        <header className="flex w-60 flex-col items-center bg-black px-4 py-8">
          <div className="border-accent-foreground/40 relative mb-4 size-30 overflow-hidden rounded-full border-8">
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
          <h4 className="h4-responsive mb-6">Joe Rylander</h4>
          <div className="mb-10 flex gap-12">
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
          <nav className="w-full">
            <ul className={`${azaret_mono.className} flex flex-col gap-4`}>
              <li>
                <a href="#home" className="flex gap-2 px-2 py-4 capitalize">
                  <House />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="flex gap-2 px-2 py-4 capitalize">
                  <User />
                  About
                </a>
              </li>
              <li>
                <a href="#resume" className="flex gap-2 px-2 py-4 capitalize">
                  <FileText />
                  Resumé
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="flex gap-2 px-2 py-4 capitalize"
                >
                  <GalleryHorizontalEnd />
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/files/Joakim_Rylander_CV.pdf"
                  className="flex gap-2 px-2 py-4 capitalize"
                  download
                >
                  <FileDown />
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="scrollbar-hide flex-1 overflow-y-auto scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
