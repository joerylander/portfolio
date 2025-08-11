import { azaret_mono } from '@/lib/fonts';
import { Menu } from 'lucide-react';
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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    setOpenNav(false);
  };

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
                  onClick={() => scrollToSection(item.link.replace('#', ''))}
                  className="cursor-pointer"
                >
                  {linkContent}
                </button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
}
