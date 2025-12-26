"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        "group text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative",
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
};


export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-lg">Sukasuka Setudio</span>
        </Link>
        
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Work</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4 ml-8">
            <Button asChild variant="outline" size="sm" className="font-semibold">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden ml-4">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" className="mb-4 flex items-center" onClick={() => setIsOpen(false)}>
                  <span className="font-bold text-lg">Sukasuka Setudio</span>
                </Link>
                <NavLink href="#about" onClick={() => setIsOpen(false)} className="text-base">About</NavLink>
                <NavLink href="#services" onClick={() => setIsOpen(false)} className="text-base">Services</NavLink>
                <NavLink href="#portfolio" onClick={() => setIsOpen(false)} className="text-base">Work</NavLink>
                <NavLink href="#contact" onClick={() => setIsOpen(false)} className="text-base">Contact</NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
