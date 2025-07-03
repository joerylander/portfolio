import { azaret_mono } from '@/lib/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/logo';

export default function Header() {
  return (
    <header className="bg-background/95 border-border/40 sticky top-0 z-50 mx-8 flex h-16 items-center justify-between border-b backdrop-blur-sm">
      <Logo />
      <nav className="flex gap-24">
        <Link
          href="#services"
          className={`${azaret_mono.className} hover:text-primary transition-colors`}
        >
          Service
        </Link>
        <Link
          href="#projects"
          className={`${azaret_mono.className} hover:text-primary transition-colors`}
        >
          Projects
        </Link>
        <Link
          href="#testimonials"
          className={`${azaret_mono.className} hover:text-primary transition-colors`}
        >
          Testimonials
        </Link>
      </nav>
      <Button variant={'default'} size={'lg'}>
        Book us
      </Button>
    </header>
  );
}
