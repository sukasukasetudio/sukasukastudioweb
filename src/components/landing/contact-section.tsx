import { Mail, Phone } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's Create Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground tracking-wide">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="mt-2 text-muted-foreground">
              Fill out the form or use the details below to get in touch.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@sukasuka.setudio" className="hover:text-primary transition-colors">
                  hello@sukasuka.setudio
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
