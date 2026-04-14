import React from "react";
import Image from "next/image";

export const Lounge: React.FC = () => {
  return (
    <section id="lounge" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-5xl text-pine-charcoal mb-8">The Guest Lounge</h2>
            <p className="text-pine-gray leading-loose mb-6 font-light">
              More than just a waiting area, our Guest Lounge is designed as a communal space for connection, reflection, and inspiration.
            </p>
            <p className="text-pine-gray leading-loose mb-8 font-light">
              Whether you are here for an entrepreneurial program, a social event, or simply to unwind with a cup of local tea, the lounge embodies our philosophy of fostering new thinking and positive action.
            </p>

          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/images/lounge.jpg"
                alt="Pine Air Guest Lounge"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pine-mist rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
