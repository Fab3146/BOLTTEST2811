import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import OpeningBanner from '@/components/opening-banner';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Village Padel - Installation et Automatisation de Terrains de Padel',
  description: 'Village Padel installe et gère des terrains sans frais pour les clubs, en partenariat avec les mairies pour favoriser le développement local du padel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <OpeningBanner />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}