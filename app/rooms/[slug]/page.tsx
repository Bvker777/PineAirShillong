import { rooms } from "@/app/data/rooms";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Wifi,
  Coffee,
  Baby,
  Bath,
  Wind,
  Clock,
  ShieldCheck,
  Info,
  Waves
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RoomDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-pine-bone pb-20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-pine-bone/80 backdrop-blur-md border-b border-pine-primary/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <Link
            href="/#rooms"
            className="group flex items-center text-pine-gray hover:text-pine-accent transition-colors"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-widest uppercase font-medium">Back to Rooms</span>
          </Link>
          <div className="hidden md:block">
            <Image
              src="/logo.webp"
              alt="Pine Air Logo"
              width={50}
              height={50}
              className="object-contain opacity-80"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Image & Amenities */}
          <div className="space-y-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-pine-primary/10">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-white p-8 rounded-2xl border border-pine-primary/5 shadow-sm">
              <h3 className="font-serif text-xl text-pine-charcoal mb-6 border-b border-pine-primary/5 pb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-y-6">
                <div className="flex items-center space-x-3 text-pine-gray">
                  <Wifi className="text-pine-accent" size={20} />
                  <span className="text-sm font-light">Free High-speed Wi-Fi</span>
                </div>
                <div className="flex items-center space-x-3 text-pine-gray">
                  <Bath className="text-pine-accent" size={20} />
                  <span className="text-sm font-light">Attached Bathroom</span>
                </div>
                <div className="flex items-center space-x-3 text-pine-gray">
                  <Waves className="text-pine-accent" size={20} />
                  <span className="text-sm font-light">Geyser / Hot Water</span>
                </div>
                <div className="flex items-center space-x-3 text-pine-gray">
                  <Coffee className="text-pine-accent" size={20} />
                  <span className="text-sm font-light">Complimentary Breakfast</span>
                </div>
                {room.slug === "family-room" && (
                  <div className="flex items-center space-x-3 text-pine-gray">
                    <Baby className="text-pine-accent" size={20} />
                    <span className="text-sm font-light">Family Friendly</span>
                  </div>
                )}
                <div className="flex items-center space-x-3 text-pine-gray">
                  <ShieldCheck className="text-pine-accent" size={20} />
                  <span className="text-sm font-light">Safe & Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Policies */}
          <div className="space-y-10">
            <div>
              <h1 className="font-serif text-4xl mb-4 uppercase tracking-tight">{room.name}</h1>
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-3xl font-serif text-pine-accent">{room.price}</span>
                <span className="text-pine-gray font-light text-sm italic">/ night for {room.occupancy}</span>
              </div>
              <p className="text-lg text-pine-gray font-light leading-relaxed">
                {room.shortDescription}
              </p>
            </div>

            <div className="space-y-8">
              {/* Feature Highlights */}
              <div className="flex flex-col space-y-4">
                <div className="p-5 bg-pine-mist/40 rounded-xl border-l-4 border-pine-accent">
                  <div className="flex items-start space-x-4">
                    <Clock className="text-pine-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-pine-charcoal mb-1">Breakfast Hours</h4>
                      <p className="text-sm text-pine-gray font-light">Daily 7:30 AM – 9:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Policies */}
              <div className="space-y-10">
                <section>
                  <h3 className="font-serif text-lg mb-3 flex items-center text-pine-charcoal">
                    <span className="w-6 h-px bg-pine-accent mr-3"></span>
                    Complimentary Breakfast
                  </h3>
                  <p className="text-pine-gray font-light leading-loose text-[15px]">
                    {room.details.breakfast}
                  </p>
                </section>

                <section>
                  <h3 className="font-serif text-lg mb-3 flex items-center text-pine-charcoal">
                    <span className="w-6 h-px bg-pine-accent mr-3"></span>
                    Housekeeping & Cleaning
                  </h3>
                  <p className="text-pine-gray font-light leading-loose text-[15px]">
                    {room.details.cleaning}
                  </p>
                </section>

                {room.details.meals && (
                  <section>
                    <h3 className="font-serif text-lg mb-3 flex items-center text-pine-charcoal">
                      <span className="w-6 h-px bg-pine-accent mr-3"></span>
                      Simple Home Cooked Meals
                    </h3>
                    <p className="text-pine-gray font-light leading-loose text-[15px]">
                      {room.details.meals}
                    </p>
                  </section>
                )}

                {room.details.laundry && (
                  <section>
                    <h3 className="font-serif text-lg mb-3 flex items-center text-pine-charcoal">
                      <span className="w-6 h-px bg-pine-accent mr-3"></span>
                      Laundry Services
                    </h3>
                    <p className="text-pine-gray font-light leading-loose text-[15px]">
                      {room.details.laundry}
                    </p>
                  </section>
                )}

                {room.details.extraCharges && (
                  <section className="bg-pine-earth/20 p-6 rounded-2xl">
                    <h3 className="font-serif text-lg mb-4 flex items-center text-pine-charcoal">
                      <Info className="text-pine-accent mr-3" size={20} />
                      Additional Information
                    </h3>
                    <ul className="space-y-3">
                      {room.details.extraCharges.map((charge, index) => (
                        <li key={index} className="text-sm text-pine-gray font-light flex items-center italic">
                          <span className="w-1.5 h-1.5 rounded-full bg-pine-accent/40 mr-3 shrink-0"></span>
                          {charge}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {room.details.understanding && (
                  <section className="bg-pine-deep text-white p-8 rounded-2xl shadow-xl">
                    <h3 className="font-serif text-xl mb-6 flex items-center text-white">
                      Important Understanding
                    </h3>
                    <ul className="space-y-4">
                      {room.details.understanding.map((point, index) => (
                        <li key={index} className="text-sm font-light flex items-start leading-relaxed opacity-90">
                          <span className="w-2 h-2 rounded-full bg-pine-accent mt-1.5 mr-4 shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/918794338802?text=${encodeURIComponent(
                    `Hello! I'm interested in booking the ${room.name} at Pine Air Shillong.\n\nRoom Details:\n- Price: ${room.price}\n- Occupancy: ${room.occupancy}\n\nPlease let me know the availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-pine-accent hover:bg-pine-accent/90 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-pine-accent/20 tracking-wider uppercase text-sm"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
