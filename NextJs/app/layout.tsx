import { inter } from "./fonts";
import "./globals.css";
import Script from 'next/script';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layout.tsx',
  description: 'Codecademy Image Gallery',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Image Gallery</title>
        <meta name="description" content="Gallery to hold all of your media" />
      </head>
      <body className={inter.className}>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" strategy='afterInteractive'></Script>
        {children}
      </body>
    </html>
  );
}
