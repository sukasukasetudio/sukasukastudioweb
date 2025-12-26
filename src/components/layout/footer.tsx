import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 sm:flex-row sm:gap-2 sm:px-0">
          <Link href="/" className="flex items-center">
            <span className="font-bold">Sukasuka Setudio</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Sukasuka Setudio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
