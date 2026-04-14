import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Amenities } from "@/components/sections/Amenities";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Lounge } from "@/components/sections/Lounge";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-pine-bone">
      <Navbar />
      
      <main>
        <Hero />
        <Amenities />
        <About />
        <Rooms />
        <Lounge />
        <Testimonials />
        <Location />
      </main>
    </div>
  );
}
