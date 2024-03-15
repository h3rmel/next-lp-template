// #region Imports

import { ReactNode } from 'react';

import type { Metadata } from 'next';
// GTM (Google Tag Manager), uncomment if you wanna use it
// import { GoogleTagManager } from "@next/third-parties/google";

import { inter } from '@/ui/fonts';

import '@/ui/globals.css';

// #endregion

export const metadata: Metadata = {
  title: 'Landing Page XXXX',
  description: 'Template muito absurdo.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt">
      <body className={`${inter.className}`}>{children}</body>
      {/* <GoogleTagManager/> */}
    </html>
  );
}
