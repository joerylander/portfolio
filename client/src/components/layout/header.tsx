import { azaret_mono } from '@/lib/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/logo';

export default function Header() {
  return (
    <header className="mx-6 flex h-42 items-center justify-between">
      <Logo />
      <nav className="space-x-24">
        <Link href="#services" className={azaret_mono.className}>
          Service
        </Link>
        <Link href="/" className={azaret_mono.className}>
          Projects
        </Link>
        <Link href="/" className={azaret_mono.className}>
          Testimonials
        </Link>
      </nav>
      <Button size={'lg'}>Book us</Button>
    </header>
  );
}
