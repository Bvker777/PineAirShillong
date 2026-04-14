import React from "react";
import { Wifi, Coffee, Car } from "lucide-react";

export const Amenities: React.FC = () => {
  return (
    <section className="bg-pine-mist py-12 border-y border-pine-primary/10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-24">
          <div className="flex items-center space-x-4">
            <Wifi className="text-pine-accent" size={28} strokeWidth={1.5} />
            <span className="font-sans tracking-widest uppercase text-sm text-pine-charcoal font-medium">Free Wi-Fi</span>
          </div>
          <div className="flex items-center space-x-4">
            <Coffee className="text-pine-accent" size={28} strokeWidth={1.5} />
            <span className="font-sans tracking-widest uppercase text-sm text-pine-charcoal font-medium">Complementary Breakfast</span>
          </div>
          <div className="flex items-center space-x-4">
            <Car className="text-pine-accent" size={28} strokeWidth={1.5} />
            <span className="font-sans tracking-widest uppercase text-sm text-pine-charcoal font-medium">Free Parking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
