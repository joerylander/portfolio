'use client';

import { useState } from 'react';
import SideNavBar from '@/components/page/sideNavBar';
import MobileMenu from '@/components/shared/mobileMenu';
import { MenuItem } from '@/types/types';
import {
  House,
  User,
  FileText,
  GalleryHorizontalEnd,
  FileDown,
} from 'lucide-react';

const menuItems: MenuItem[] = [
  { link: '#home', text: 'Home', icon: House },
  { link: '#about', text: 'About', icon: User },
  { link: '#resume', text: 'Resumé', icon: FileText },
  { link: '#projects', text: 'Portfolio', icon: GalleryHorizontalEnd },
  {
    link: '/files/Joakim_Rylander_CV.pdf',
    text: 'Download CV',
    icon: FileDown,
    download: true,
  },
];

type ResumeLayoutClientProps = {
  children: React.ReactNode;
};

export default function ResumeLayoutClient({
  children,
}: ResumeLayoutClientProps) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="relative flex h-screen w-full justify-self-center">
      <SideNavBar menuItems={menuItems} />
      <MobileMenu
        openNav={openNav}
        setOpenNav={setOpenNav}
        menuItems={menuItems}
        className="bg-card absolute top-4 right-4 z-10 rounded-lg md:hidden"
      />
      <main className="scrollbar-hide flex-1 overflow-y-auto scroll-smooth">
        {children}
      </main>
    </div>
  );
}
