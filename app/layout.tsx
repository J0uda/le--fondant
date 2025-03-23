import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from '@/lib/constants';
import './globals.css';

const satoshi = localFont({
  src: [
    { path: '/fonts/Satoshi-Light.woff2', weight: '300', style: 'normal' },
    { path: '/fonts/Satoshi-Light.woff', weight: '300', style: 'normal' },
    { path: '/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '/fonts/Satoshi-Regular.woff', weight: '400', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `%s | Le Fondant`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${satoshi.className}`}>{children}</body>
    </html>
  );
}
