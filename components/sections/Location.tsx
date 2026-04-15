import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Location: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-pine-charcoal mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-pine-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-10">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-pine-mist flex items-center justify-center text-pine-accent">
                  <MapPin size={20} />
                </div>
                <h3 className="font-serif text-xl text-pine-charcoal">Find Us</h3>
              </div>
              <p className="text-pine-gray leading-relaxed font-light pl-14">
                Mawroh Kyntonlieh. Opposite Mawroh Dorbar Shnong Office. <br /> Shillong 793008.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-pine-mist flex items-center justify-center text-pine-accent">
                  <Phone size={20} />
                </div>
                <h3 className="font-serif text-xl text-pine-charcoal">Contact</h3>
              </div>
              <p className="text-pine-gray leading-relaxed font-light pl-14">
                +91 879 433 8802<br />
                contact@pineairshillong.com
              </p>
            </div>

            {/* <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-pine-mist flex items-center justify-center text-pine-accent">
                  <Clock size={20} />
                </div>
                <h3 className="font-serif text-xl text-pine-charcoal">Check-in / Out</h3>
              </div>
              <p className="text-pine-gray leading-relaxed font-light pl-14">
                Check-in: 12:00 PM<br />
                Check-out: 11:00 AM
              </p>
            </div> */}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-pine-accent/5 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2578176150582!2d91.89885869999999!3d25.5963478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507eda3d660673%3A0x6c97e4b7df8c7967!2sPine%20Air!5e0!3m2!1sen!2sin!4v1776197780717!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pine Air Location"
              />
            </div>
            <div className="flex justify-start">
              <a
                href="https://maps.app.goo.gl/uX7GfVz8Vz8Vz8Vz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-pine-accent text-white px-6 py-3 rounded-full hover:bg-pine-primary transition-all duration-300 font-sans tracking-widest uppercase text-xs font-bold shadow-lg shadow-pine-accent/20"
              >
                <span>Get Directions</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
