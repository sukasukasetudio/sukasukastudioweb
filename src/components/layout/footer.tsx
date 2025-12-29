"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

// TikTok Icon SVG
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Threads Icon SVG (stylized @ symbol)
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
    <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"/>
    <path d="M12 8v8"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-screen-2xl flex-col md:flex-row items-center justify-between py-12 px-6 gap-8">
        <div>
          <Link href="/" className="flex items-center group">
            <span className="font-bold text-lg group-hover:opacity-80 transition-opacity bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Sukasuka Setudio
            </span>
          </Link>
          <div className="mt-3">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Sukasuka Setudio. All rights reserved.
            </p>
            <p className="text-xs text-white/40 mt-1.5">
              Designed & Developed by Aimwave Labs
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <motion.a
            href="https://www.tiktok.com/@sukasuka.film_?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TikTokIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/p/C50fw8ovu6X/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Threads"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThreadsIcon className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
