import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { WebGLShader } from '@/components/ui/web-gl-shader';

export const metadata: Metadata = {
  title: 'Sukasuka Setudio',
  description: 'Raya dengan suka suka',
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
