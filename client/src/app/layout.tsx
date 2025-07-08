import './globals.css';
import type { Metadata, Viewport } from 'next';
import { azaret_mono, inter } from '@/lib/fonts';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import '@/lib/fontawesome';
import { Toaster } from '@/components/ui/sonner';

// static metadata
export const metadata: Metadata = {
  title: {
    default: 'Rylander Media Portfolio',
    template: '%s | Rylander Media Portfolio',
    absolute: '',
  },
  description:
    'Portfolio of Rylander Media - web developer and designer crafting impactful, responsive websites for businesses and creators',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${azaret_mono.variable} flex h-screen w-full flex-col justify-self-center antialiased`}
      >
        <Header />
        <main className="scrollbar-hide flex-1 snap-y snap-proximity overflow-y-auto scroll-smooth">
          {children}
          <Toaster position="bottom-center" richColors />
          <Footer />
        </main>
      </body>
    </html>
  );
}
