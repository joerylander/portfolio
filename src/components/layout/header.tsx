'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { azaret_mono } from '@/lib/fonts';
import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CalendlyBtn from '../shared/calendlyBtn';

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
] as const;

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

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={openNav} onOpenChange={setOpenNav}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Use the links below to navigate through the site.
              </SheetDescription>
            </SheetHeader>

            <nav className="mt-6 flex flex-col items-center gap-8">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={`#${item.link}`}
                  className={`${azaret_mono.className} hover:text-primary text-sm capitalize transition-colors hover:underline`}
                  onClick={() => setOpenNav(false)}
                >
                  {item.text}
                </Link>
              ))}
            </nav>

            <CalendlyBtn<void>
              text="Book now"
              className="mx-auto mt-8 w-1/2"
              callback={() => setOpenNav(false)}
            />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
