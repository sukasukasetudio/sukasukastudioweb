"use client";

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Card className="glass-card-dark border-white/20 p-5 lg:p-6">
              <div className="mb-5">
                <h3 className="text-lg font-bold text-white mb-1.5">Contact Information</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Reach out to us for inquiries or support.
                </p>
              </div>
              <div className="space-y-3">
                <motion.a
                  href="mailto:hello@sukasuka.setudio"
                  className="flex items-center gap-2.5 group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-1.5 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors flex-shrink-0">
                    <Mail className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 mb-0.5">Email</p>
                    <span className="text-xs text-white/70 group-hover:text-white transition-colors break-all">
                      hello@sukasuka.setudio
                    </span>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-2.5 group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-1.5 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 mb-0.5">Phone</p>
                    <span className="text-xs text-white/70 group-hover:text-white transition-colors">
                      +1 (234) 567-890
                    </span>
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=Jalan+Setia+Gemilang+BJ+U13%2FBJ%2C+Setia+Alam%2C+40170+Shah+Alam%2C+Selangor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-1.5 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors flex-shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 mb-0.5">Location</p>
                    <span className="text-xs text-white/70 group-hover:text-white transition-colors leading-relaxed">
                      Jalan Setia Gemilang BJ U13/BJ, Setia Alam, 40170 Shah Alam, Selangor
                    </span>
                  </div>
                </motion.a>
              </div>
            </Card>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base font-semibold text-white">Book Your Session</span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4 text-white/90" />
              </motion.div>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
