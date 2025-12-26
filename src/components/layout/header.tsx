"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick?: () => void }) => {
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
    <Link href={href} onClick={handleClick} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
      {children}
    </Link>
  );
};


export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="font-bold">Sukasuka Setudio</span>
        </Link>
        <nav className="hidden flex-1 md:flex items-center space-x-6 text-sm font-medium">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#portfolio">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="mb-4 flex items-center space-x-2">
                  <Mountain className="h-6 w-6" />
                  <span className="font-bold">Sukasuka Setudio</span>
                </Link>
                <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
                <NavLink href="#services" onClick={() => setIsOpen(false)}>Services</NavLink>
                <NavLink href="#portfolio" onClick={() => setIsOpen(false)}>Work</NavLink>
                <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
