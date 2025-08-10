import '../globals.css';
import type { Metadata, Viewport } from 'next';
import { azaret_mono, inter } from '@/lib/fonts';
import Image from 'next/image';
import {
  ChevronLeft,
  FileDown,
  FileText,
  GalleryHorizontalEnd,
  House,
  User,
} from 'lucide-react';
import SocialLinks from '@/components/shared/socialLinks';
import Link from 'next/link';

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
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${azaret_mono.variable} flex h-screen w-full justify-self-center antialiased`}
      >
        <header className="flex w-60 flex-col items-center bg-black px-4 py-8">
          <Link
            href="/"
            className="hover:text-accent-foreground mb-8 flex items-center gap-2 self-start text-sm transition-colors duration-300"
          >
            <ChevronLeft size={20} />
            View my projects
          </Link>
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
          <SocialLinks
            className="mb-10 flex gap-8"
            iconSize={24}
            containerSize="size-6 md:size-12"
          />
          <nav className="w-full">
            <ul className={`${azaret_mono.className} flex flex-col gap-4`}>
              <li className="w-fit">
                <a
                  href="#home"
                  className="hover:text-accent-foreground flex gap-2 px-2 py-4 capitalize transition-colors duration-300"
                >
                  <House />
                  Home
                </a>
              </li>
              <li className="w-fit">
                <a
                  href="#about"
                  className="hover:text-accent-foreground flex gap-2 px-2 py-4 capitalize transition-colors duration-300"
                >
                  <User />
                  About
                </a>
              </li>
              <li className="w-fit">
                <a
                  href="#resume"
                  className="hover:text-accent-foreground flex gap-2 px-2 py-4 capitalize transition-colors duration-300"
                >
                  <FileText />
                  Resumé
                </a>
              </li>
              <li className="w-fit">
                <a
                  href="#portfolio"
                  className="hover:text-accent-foreground flex gap-2 px-2 py-4 capitalize transition-colors duration-300"
                >
                  <GalleryHorizontalEnd />
                  Portfolio
                </a>
              </li>
              <li className="w-fit">
                <a
                  href="/files/Joakim_Rylander_CV.pdf"
                  className="hover:text-accent-foreground flex gap-2 px-2 py-4 capitalize transition-colors duration-300"
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
