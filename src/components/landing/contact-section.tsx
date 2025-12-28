"use client";

import { Mail, Phone } from 'lucide-react';
import { ContactForm } from './contact-form';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 overflow-hidden bg-black/50">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's Create{' '}
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 tracking-wide leading-relaxed">
            Have a project in mind? We'd love to hear about it.
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Card className="glass-card-dark border-white/20 p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Contact Information</h3>
              <p className="text-base text-white/60 mb-8 leading-relaxed">
                Fill out the form or use the details below to get in touch.
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@sukasuka.setudio"
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-base text-white/70 group-hover:text-white transition-colors">
                    hello@sukasuka.setudio
                  </span>
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-base text-white/70 group-hover:text-white transition-colors">
                    +1 (234) 567-890
                  </span>
                </motion.a>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card-dark border-white/20 p-6 lg:p-8">
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
