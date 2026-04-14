import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GoogleRating } from "../GoogleRating";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20">
      {/* Abstract misty background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Misty hills of Shillong"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 max-w-5xl">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
            Pine Air <br />
            <span className="italic font-light text-white/80">Shillong™</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed font-light max-w-lg">
            A unique alternative stay experience in the Khasi Hills. Inspiring to do the right things.
          </p>
          <div className="mb-10">
            <GoogleRating variant="dark" />
          </div>
          <a
            href="#rooms"
            className="inline-flex bg-pine-accent hover:bg-pine-accent/90 text-white px-8 py-4 rounded-2xl transition-all duration-300 items-center space-x-3 text-sm tracking-wider uppercase shadow-lg shadow-pine-accent/20"
          >
            <span>View Rooms</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
