import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { azaret_mono } from '@/lib/fonts';
import SocialLinks from '../shared/socialLinks';
import { MenuItem } from '@/types/types';
import { scrollToSection } from '@/lib/utils';

type SideNavBarProps = {
  menuItems: MenuItem[];
};

export default function SideNavBar({ menuItems }: SideNavBarProps) {
  return (
    <header className="hidden w-60 flex-col items-center bg-black px-4 py-8 md:flex">
      <Link
        href="/"
        className="hover:text-accent-foreground mb-8 flex items-center gap-2 self-start text-sm transition-colors duration-300"
      >
        <ChevronLeft size={20} />
        View my portfolio
      </Link>
      <div className="border-accent-foreground/40 relative mb-4 aspect-square w-30 flex-shrink-0 overflow-hidden rounded-full border-8">
        <Image
          src="/images/profile_transparent_bg.png"
          alt="profile image"
          className="scale-90 object-cover"
          fill
          priority
          quality={90}
          sizes="120px"
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
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className="w-fit">
                {item.download ? (
                  <a
                    href={item.link}
                    className="hover:text-accent-foreground flex gap-2 px-2 py-4 capitalize transition-colors duration-300"
                    download
                  >
                    {Icon && <Icon />}
                    {item.text}
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.link.replace('#', ''))}
                    className="hover:text-accent-foreground flex cursor-pointer gap-2 px-2 py-4 capitalize transition-colors duration-300"
                  >
                    {Icon && <Icon />}
                    {item.text}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
