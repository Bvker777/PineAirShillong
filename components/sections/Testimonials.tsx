"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquarePlus } from "lucide-react";
import { PineBranchSVG } from "@/components/icons/PineBranchSVG";

interface Testimonial {
  name: string;
  rating: number;
  review: string;
  date: string;
}

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const googleReviewsUrl = "https://www.google.com/maps/place/Pine+Air/@25.5963478,91.8988587,17z/data=!4m11!3m10!1s0x37507eda3d660673:0x6c97e4b7df8c7967!5m2!4m1!1i2!8m2!3d25.5963478!4d91.8988587!9m1!1b1!16s%2Fg%2F11fjtbbl4j";

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/data/testimonials.json");
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 md:py-32 bg-pine-earth/30 text-pine-charcoal relative overflow-hidden border-t border-pine-primary/5">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <PineBranchSVG className="w-full h-full text-pine-accent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <Quote className="mx-auto text-pine-accent mb-6 opacity-30" size={48} />
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-pine-charcoal italic">Guest Experiences</h2>
          <p className="text-pine-gray font-light tracking-wide max-w-lg mx-auto">
            Voices from around the world who found their peaceful retreat at PineAir.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          className="relative px-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden w-full min-h-[450px] sm:min-h-[400px] md:min-h-[350px] flex items-stretch">
            <div
              className="flex w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-2 sm:px-4 md:px-12 flex flex-col">
                  <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl shadow-pine-primary/10 border border-white/50 relative group transition-all duration-500 hover:shadow-pine-accent/10 h-full flex flex-col justify-center">

                    {/* Google Branding Badge */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-8 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-gray-100 shadow-sm">
                      <div className="flex -space-x-0.5">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} size={10} className="fill-yellow-400 text-yellow-400 sm:w-[12px] sm:h-[12px]" />
                        ))}
                      </div>
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gray-400 tracking-wider">Verified Review</span>
                    </div>

                    <p className="font-light leading-relaxed mb-8 sm:mb-10 text-pine-charcoal text-lg sm:text-xl md:text-2xl italic">
                      &quot;{t.review}&quot;
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-px bg-pine-accent"></div>
                        <div>
                          <p className="font-serif text-lg tracking-wide text-pine-charcoal">{t.name}</p>
                          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">{t.date}</p>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-2 text-gray-300">
                        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.52 5.4-7.84 5.4-4.64 0-8.44-3.84-8.44-8.6s3.8-8.6 8.44-8.6c2.64 0 4.44 1.12 5.44 2.12l2.6-2.6C18.8 1.48 15.92 0 12.48 0 5.56 0 0 5.52 0 12.4s5.56 12.4 12.48 12.4c7.24 0 12.04-5.08 12.04-12.24 0-.84-.08-1.48-.2-2.12h-11.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-pine-charcoal hover:bg-pine-accent hover:text-white transition-all z-20"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-pine-charcoal hover:bg-pine-accent hover:text-white transition-all z-20"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-8 bg-pine-accent' : 'w-2 bg-pine-accent/20 hover:bg-pine-accent/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-4 sm:mt-4 pt-4 border-t border-pine-primary/5 text-center">
          <p className="text-sm text-pine-gray mb-6 font-medium tracking-widest uppercase italic">Enjoyed your stay?</p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white border border-pine-accent/20 text-pine-charcoal hover:bg-pine-accent hover:text-white hover:border-pine-accent rounded-2xl transition-all duration-300 font-serif text-lg shadow-xl shadow-pine-primary/5 group"
          >
            <MessageSquarePlus size={20} className="text-pine-accent group-hover:text-white transition-colors" />
            Write a Google Review
          </a>
        </div>
      </div>
    </section>
  );
};
