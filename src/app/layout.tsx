import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { WebGLShader } from '@/components/ui/web-gl-shader';

export const metadata: Metadata = {
  title: 'Sukasuka Setudio',
  description: 'Jom rayakan momen indah dengan suka suka',
  icons: {
    icon: [
      { url: '/img/favicon/favicon.ico' },
      { url: '/img/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/img/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/img/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/img/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/img/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/img/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />
      </head>
      <body className="font-body antialiased relative">
        <WebGLShader />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
