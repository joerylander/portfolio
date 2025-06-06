import { azaret_mono, inter } from '@/lib/fonts';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mx-auto my-12 flex max-w-6xl justify-between px-6">
      {/* Logo */}
      <h1 className={inter.className}>Header from component</h1>
      {/* Navbar */}
      <nav className="flex gap-2">
        <Link href="/" className={azaret_mono.className}>
          Home
        </Link>
        <Link href="/" className={azaret_mono.className}>
          Home
        </Link>
        <Link href="/" className={azaret_mono.className}>
          Home
        </Link>
      </nav>
    </header>
  );
}
