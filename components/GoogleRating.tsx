"use client";

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface GoogleRatingProps {
  initialRating?: number;
  initialReviewCount?: number;
  hotelLabel?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

interface RatingData {
  rating: number;
  reviewCount: number;
  hotelLabel: string;
}

/**
 * GoogleRating Component
 * Displays Google Review ratings with stars and review count.
 * Data is fetched from /data/ratings.json for dynamic updates.
 */
export const GoogleRating: React.FC<GoogleRatingProps> = ({
  initialRating = 4.4,
  initialReviewCount = 157,
  hotelLabel: initialLabel = "Hotel",
  className = "",
  variant = 'dark'
}) => {
  const [data, setData] = useState<RatingData>({
    rating: initialRating,
    reviewCount: initialReviewCount,
    hotelLabel: initialLabel
  });

  const googleReviewsUrl = "https://www.google.com/maps/place/Pine+Air/@25.5963478,91.8988587,17z/data=!4m11!3m10!1s0x37507eda3d660673:0x6c97e4b7df8c7967!5m2!4m1!1i2!8m2!3d25.5963478!4d91.8988587!9m1!1b1!16s%2Fg%2F11fjtbbl4j";

  useEffect(() => {
    // Fetch dynamic rating data
    const fetchRating = async () => {
      try {
        const response = await fetch('/data/ratings.json');
        if (response.ok) {
          const jsonData = await response.json();
          setData({
            rating: jsonData.rating,
            reviewCount: jsonData.reviewCount,
            hotelLabel: jsonData.hotelLabel
          });
        }
      } catch (error) {
        console.error("Failed to fetch rating data, using defaults:", error);
      }
    };

    fetchRating();
  }, []);

  const { rating, reviewCount, hotelLabel } = data;

  // Helper to render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const remainder = rating % 1;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400 shrink-0"
          />
        );
      } else if (i === fullStars + 1 && remainder >= 0.3) {
        // Precise partial star rendering using clip-path
        const fillPercentage = remainder * 100;
        stars.push(
          <div key={i} className="relative shrink-0">
            <Star size={16} className="text-gray-300 fill-gray-300" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star
            key={i}
            size={16}
            className="text-gray-300 fill-gray-300 shrink-0"
          />
        );
      }
    }
    return stars;
  };

  return (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col items-start gap-1 group transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`text-xl font-serif font-bold ${variant === 'dark' ? 'text-white' : 'text-pine-charcoal'}`}>
          {rating.toFixed(1)}
        </span>
        <div className="flex items-center -space-x-0.5">
          {renderStars(rating)}
        </div>
      </div>
      <div className={`flex items-center gap-1.5 text-xs font-medium tracking-wide ${variant === 'dark' ? 'text-white' : 'text-pine-gray'}`}>
        <span>({reviewCount}) Reviews</span>
        <span>•</span>
        <span>{hotelLabel}</span>
        <span className="invisible group-hover:visible ml-1 text-[10px] uppercase font-bold text-pine-accent transition-all">
          Verify →
        </span>
      </div>
    </a>
  );
};
