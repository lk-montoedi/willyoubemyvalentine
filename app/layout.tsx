import './globals.css';
import type { Metadata } from 'next';
import { Inter, Great_Vibes } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Valentine\'s Date Planner',
  description: 'Plan your perfect Valentine\'s date',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable}`}>
      <body className="min-h-screen">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}