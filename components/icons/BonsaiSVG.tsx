import React from "react";

interface BonsaiSVGProps {
  className?: string;
}

export const BonsaiSVG: React.FC<BonsaiSVGProps> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M50 90C50 70 45 60 40 50C35 40 30 35 25 30"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M45 60C55 55 65 45 70 35C75 25 75 20 70 15"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M40 50C30 45 20 40 15 35"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M65 45C75 45 85 40 90 35"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M35 80C60 80 65 90 65 90"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <line x1="20" y1="90" x2="80" y2="90" stroke="#333333" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
  </svg>
);
