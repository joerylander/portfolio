'use client';

import Link from 'next/link';
import { useState } from 'react';
import { azaret_mono } from '@/lib/fonts';
import Logo from '@/components/shared/logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import CalendlyBtn from '../shared/calendlyBtn';
import MobileMenu from '../shared/mobileMenu';

const menuItems = [
  {
    link: 'services',
    text: 'services',
  },
  {
    link: 'projects',
    text: 'projects',
  },
  {
    link: 'testimonials',
    text: 'testimonials',
  },
  {
    link: 'about',
    text: 'about',
  },
];

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="bg-background/95 border-border/40 sticky top-0 z-50 mx-8 flex h-20 max-w-full items-center justify-between border-b backdrop-blur-sm">
      <Logo />

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-10">
          {menuItems.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link
                href={`#${item.link}`}
                className={`${azaret_mono.className} hover:text-primary text-sm capitalize transition-colors lg:text-base`}
              >
                {item.text}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <CalendlyBtn text="Book us" className="hidden md:block" />

      <MobileMenu
        menuItems={menuItems}
        openNav={openNav}
        setOpenNav={setOpenNav}
        className="md:hidden"
      />
    </header>
  );
}
