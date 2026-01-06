"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Briefcase, Info, MessageSquare, Menu, Calendar, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FloatingNav } from '../ui/floating-nav';
import { useIsMobile } from '@/hooks/use-mobile';


const NavLink = ({ href, children, onClick, className }: { href: string; children: React.ReactNode; onClick?: () => void; className?: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      className={cn(
        "group text-sm font-medium transition-colors relative",
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
};


export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    {
      name: "Feedback",
      link: "#about",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Collection",
      link: "#portfolio",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  // Return null while hydrating to prevent layout shift
  if (isMobile === undefined) {
    return null;
  }

  if (isMobile) {
    return <FloatingNav navItems={navItems} />;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60 shadow-sm">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/img/iconsuka.png"
            alt="Sukasuka Setudio Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-bold text-lg group-hover:opacity-80 transition-opacity bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            SUKASUKA SETUDIO
          </span>
        </Link>
        
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink href="#about" className="text-white/70 hover:text-white">Feedback</NavLink>
            <NavLink href="#services" className="text-white/70 hover:text-white">Services</NavLink>
            <NavLink href="#portfolio" className="text-white/70 hover:text-white">Collection</NavLink>
            <NavLink href="#contact" className="text-white/70 hover:text-white">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-3 ml-8">
            <Button asChild variant="outline" size="sm" className="font-medium text-xs px-4 py-2 hover:scale-105 transition-transform duration-300 bg-transparent border-white/30 text-white hover:bg-white/10 gap-2">
              <a 
                href="https://ezflows--studio-1796733651-612d4.asia-southeast1.hosted.app/form/sabf719HccpNfW919NfI/Lrp9bqPoYKXoIMEEgSJD/jJAvX6ObUtFFDUnmEcsG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-3.5 w-3.5" />
                Book Now
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden ml-4 text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black border-white/20">
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" className="mb-4 flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/img/iconsuka.png"
                    alt="Sukasuka Setudio Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="font-bold text-lg text-white">Sukasuka Setudio</span>
                </Link>
                <NavLink href="#about" onClick={() => setIsOpen(false)} className="text-base text-white/70 hover:text-white">Testimonials</NavLink>
                <NavLink href="#services" onClick={() => setIsOpen(false)} className="text-base text-white/70 hover:text-white">Services</NavLink>
                <NavLink href="#portfolio" onClick={() => setIsOpen(false)} className="text-base text-white/70 hover:text-white">Package</NavLink>
                <NavLink href="#contact" onClick={() => setIsOpen(false)} className="text-base text-white/70 hover:text-white">Contact</NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
