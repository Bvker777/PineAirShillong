import Link from 'next/link';
import Image from 'next/image';
import { GoogleRating } from './GoogleRating';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Clock,
  ShieldCheck
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '918794338802';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="relative bg-pine-charcoal text-white overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pine-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pine-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>



      <div className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Column 1: Brand & Social */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                <Image
                  src="/logo.webp"
                  alt="Pine Air Logo"
                  width={100}
                  height={100}
                  className="opacity-100"
                />
              </Link>
              <p className="text-gray-400 font-light leading-relaxed max-w-xs">
                A unique alternative stay experience in the Khasi Hills. Inspiring to do the right things through responsible hospitality.
              </p>
              <div className="pt-2">
                <GoogleRating variant="dark" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/pineairshillong/' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pine-accent hover:border-pine-accent transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-8">
            <h4 className="text-lg font-serif tracking-wide relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-pine-accent"></span>
            </h4>
            <nav className="flex flex-col space-y-4">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Rooms', href: '#rooms' },
                { label: 'The Lounge', href: '#lounge' },

              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-pine-accent transition-colors duration-300 flex items-center group text-sm"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-pine-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-8">
            <h4 className="text-lg font-serif tracking-wide relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-pine-accent"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-pine-accent/30 transition-colors">
                  <MapPin size={18} className="text-pine-accent" />
                </div>
                <div className="text-sm leading-relaxed">
                  <p className="text-white font-medium mb-1">Address</p>
                  <a
                    href="https://www.google.com/maps/place/Pine+Air/@25.5963478,91.8988587,17z/data=!4m11!3m10!1s0x37507eda3d660673:0x6c97e4b7df8c7967!5m2!4m1!1i2!8m2!3d25.5963478!4d91.8988587!9m1!1b1!16s%2Fg%2F11fjtbbl4j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pine-accent transition-colors"
                  >
                    Mawroh Kyntonlieh. Opposite Mawroh Dorbar Shnong Office. <br /> Shillong 793008.
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-pine-accent/30 transition-colors">
                  <Phone size={18} className="text-pine-accent" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium mb-1">Call Us</p>
                  <a href={`tel:+${whatsappNumber}`} className="hover:text-pine-accent transition-colors">
                    +91 87943 38802
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-pine-accent/30 transition-colors">
                  <Mail size={18} className="text-pine-accent" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium mb-1">Email Us</p>
                  <a href="mailto:contact@pineairshillong.com" className="hover:text-pine-accent transition-colors lowercase">
                    contact@pineairshillong.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust Elements */}
          <div className="space-y-8">
            <h4 className="text-lg font-serif tracking-wide relative inline-block">
              Why PineAir
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-pine-accent"></span>
            </h4>
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Verified property with 24/7 security' },
                { icon: Clock, title: 'Easy Check-in', desc: 'Frictionless check-in process' },
                { icon: MessageSquare, title: 'Expert Support', desc: 'Always available via WhatsApp' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <item.icon size={20} className="text-pine-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-white mb-0.5">{item.title}</p>
                    <p className="text-[11px] text-gray-500 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {currentYear} Pine Air Shillong™. All rights reserved.</p>

          </div>
          <p className="flex items-center gap-2 group italic">
            <span className="w-4 h-px bg-pine-accent/30 group-hover:w-8 transition-all duration-300"></span>
            Designed and Developed by <a href="https://www.mindbitsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pine-accent transition-colors font-bold">Mindbit Solutions</a>
            <span className="w-4 h-px bg-pine-accent/30 group-hover:w-8 transition-all duration-300"></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
