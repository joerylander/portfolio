import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className="relative aspect-[3/2] h-16 md:h-20 lg:h-24">
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="object-contain"
        fill
        sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
        priority
      />
    </Link>
  );
}
