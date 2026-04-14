import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { rooms } from "@/app/data/rooms";

export const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-32 bg-pine-earth/30">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-pine-charcoal mb-6">Our Rooms</h2>
          <p className="text-pine-gray max-w-2xl mx-auto font-light leading-relaxed">
            We offer 4 distinct room types, each thoughtfully designed to provide a restful sanctuary during your stay in the Khasi Hills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {rooms.map((room) => (
            <Link 
              key={room.slug}
              href={`/rooms/${room.slug}`} 
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-pine-accent font-serif tracking-wide">{room.price}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-pine-charcoal mb-2">{room.name}</h3>
                <p className="text-[#4a4a4a] font-light mb-6 line-clamp-2">{room.shortDescription}</p>
                <span className="text-pine-accent text-sm tracking-wider uppercase font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
