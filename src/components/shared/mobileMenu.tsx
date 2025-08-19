'use client';
import { azaret_mono } from '@/lib/fonts';
import { ChevronLeft, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Dispatch, SetStateAction } from 'react';
import { MenuItem } from '@/types/types';
import { scrollToSection } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CalendlyBtn from './calendlyBtn';

type MobileMenuProps = {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItem[];
  className: string;
};

export default function MobileMenu({
  openNav,
  setOpenNav,
  menuItems,
  className,
}: MobileMenuProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return (
    <section className={className}>
      <Sheet open={openNav} onOpenChange={setOpenNav}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 md:hidden">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Use the links below to navigate through the site.
            </SheetDescription>
          </SheetHeader>

          <nav className="mt-6 flex flex-col items-center gap-8">
            {menuItems.map((item, i) => {
              if (isHomePage) {
                return (
                  <Link
                    key={i}
                    href={`#${item.link}`}
                    className={`${azaret_mono.className} hover:text-primary text-sm font-medium capitalize transition-colors hover:underline`}
                    onClick={() => setOpenNav(false)}
                  >
                    {item.text}
                  </Link>
                );
              } else {
                const Icon = item.icon;
                const linkContent = (
                  <span
                    className={`${azaret_mono.className} hover:text-primary flex items-center gap-2 text-sm capitalize transition-colors hover:underline`}
                  >
                    {Icon && <Icon size={16} />}
                    {item.text}
                  </span>
                );

                if (item.download) {
                  return (
                    <a
                      key={i}
                      href={item.link}
                      download={item.download}
                      onClick={() => setOpenNav(false)}
                    >
                      {linkContent}
                    </a>
                  );
                }

                return (
                  <button
                    key={i}
                    onClick={() =>
                      scrollToSection(item.link.replace('#', ''), setOpenNav)
                    }
                  >
                    {linkContent}
                  </button>
                );
              }
            })}
          </nav>
          <Link
            href={isHomePage ? '/resume' : '/'}
            className="hover:text-accent-foreground mx-auto my-4 flex items-center gap-2 self-start text-sm transition-colors duration-300"
          >
            <ChevronLeft size={20} />
            {isHomePage ? 'View my resumé' : 'View my portfolio'}
          </Link>

          {isHomePage && (
            <CalendlyBtn<void>
              text="Book now"
              className="mx-auto mt-4 w-1/2"
              callback={() => setOpenNav(false)}
            />
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
