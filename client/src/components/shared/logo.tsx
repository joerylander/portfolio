import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className="relative aspect-[3/2] w-38">
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="object-contain"
        fill
      />
    </Link>
  );
}
