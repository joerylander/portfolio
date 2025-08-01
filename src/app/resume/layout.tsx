import '../globals.css';
import '@/lib/fontawesome';
import type { Metadata, Viewport } from 'next';
import { azaret_mono, inter } from '@/lib/fonts';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Resume | Rylander Media',
  description: 'Professional resume of Joe Rylander - Full Stack Developer',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${azaret_mono.variable} flex h-screen w-full flex-col justify-self-center antialiased`}
      >
        <main className="flex-1 overflow-y-auto scroll-smooth">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
