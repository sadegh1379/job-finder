import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const digiKala = localFont({
  src: './fonts/digi-kala.ttf',
  weight: '100 900',
  variable: '--font-digi-kala',
});

export const metadata: Metadata = {
  title: 'Job Finder',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${digiKala.variable} antialiased`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
