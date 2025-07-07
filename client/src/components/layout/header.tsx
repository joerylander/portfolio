'use client';

import Link from 'next/link';
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CtaBtn from '../shared/cta-btn';

export default function Header() {
  return (
    <header className="bg-background/95 border-border/40 sticky top-0 z-50 mx-8 flex h-16 items-center justify-between border-b backdrop-blur-sm">
      <Logo />

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          <NavigationMenuItem>
            <Link
              href="#services"
              className={`${azaret_mono.className} hover:text-primary transition-colors`}
            >
              Services
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="#projects"
              className={`${azaret_mono.className} hover:text-primary transition-colors`}
            >
              Projects
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="#testimonials"
              className={`${azaret_mono.className} hover:text-primary transition-colors`}
            >
              Testimonials
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <CtaBtn text="Book us" className="hidden md:block" />

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <nav className="mt-6 flex flex-col items-center gap-8">
              <Link
                href="#services"
                className={`${azaret_mono.className} hover:text-primary transition-colors hover:underline`}
              >
                Services
              </Link>
              <Link
                href="#projects"
                className={`${azaret_mono.className} hover:text-primary transition-colors hover:underline`}
              >
                Projects
              </Link>
              <Link
                href="#testimonials"
                className={`${azaret_mono.className} hover:text-primary transition-colors hover:underline`}
              >
                Testimonials
              </Link>
            </nav>

            <CtaBtn text="Book us" className="mx-auto mt-8 w-1/2" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
