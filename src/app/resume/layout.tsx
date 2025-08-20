import '../globals.css';
import type { Metadata, Viewport } from 'next';
import { azaret_mono, inter } from '@/lib/fonts';
import ResumeLayoutClient from './resumeClientLayout';

export const metadata: Metadata = {
  title: 'Resumé | Joe Rylander',
  description:
    'Full-stack developer with 3+ years experience building modern web applications. Specialized in React, Next.js, and creating scalable solutions for businesses.',
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
      <body className={`${inter.variable} ${azaret_mono.variable} antialiased`}>
        <ResumeLayoutClient>{children}</ResumeLayoutClient>
      </body>
    </html>
  );
}
