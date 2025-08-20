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
import CalendlyExtLink from '../shared/calendlyExtLink';
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
    <header className="bg-background/10 fixed top-0 z-50 flex h-20 w-full max-w-full items-center justify-between border-b border-white/20 px-8 shadow-lg backdrop-blur-md">
      <Logo />

      {/* Desktop Navigation */}
      <NavigationMenu className="mx-4 hidden md:flex">
        <NavigationMenuList className="gap-10">
          {menuItems.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link
                href={`#${item.link}`}
                className={`${azaret_mono.className} hover:text-primary text-sm font-medium tracking-tight capitalize transition-colors lg:text-base`}
              >
                {item.text}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <CalendlyExtLink className="hidden px-4 py-2 md:flex" />

      <MobileMenu
        menuItems={menuItems}
        openNav={openNav}
        setOpenNav={setOpenNav}
        className="md:hidden"
      />
    </header>
  );
}
