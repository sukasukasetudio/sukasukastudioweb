"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

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
          <p className="mt-3 text-sm text-white/60">
            © {new Date().getFullYear()} Sukasuka Setudio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <motion.a
            href="#"
            aria-label="Twitter"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Instagram"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="LinkedIn"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
