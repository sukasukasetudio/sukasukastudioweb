"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from 'lucide-react';

export function ContactForm() {
  // Booking form URL - opens in new tab to avoid affecting your system
  const bookingUrl = "https://ezflows--studio-1796733651-612d4.asia-southeast1.hosted.app/form/sabf719HccpNfW919NfI/Lrp9bqPoYKXoIMEEgSJD/jJAvX6ObUtFFDUnmEcsG";

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center py-6 px-5 rounded-xl border border-white/20 bg-white/5 h-full">
        <div className="mb-5 text-center">
          <Calendar className="h-10 w-10 text-white/70 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-1.5">Ready to Book?</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Access our booking system to schedule your session.
          </p>
        </div>
        <Button 
          asChild
          className="h-10 px-6 font-medium text-sm hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg bg-white text-black hover:bg-white/90 gap-2"
        >
          <a 
            href={bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Calendar className="h-4 w-4" />
            Book Your Session
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
        <p className="text-xs text-white/40 text-center mt-3">
          Opens in a new window
        </p>
      </div>
    </div>
  );
}
