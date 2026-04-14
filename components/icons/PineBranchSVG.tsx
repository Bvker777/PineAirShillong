import React from "react";

interface PineBranchSVGProps {
  className?: string;
}

export const PineBranchSVG: React.FC<PineBranchSVGProps> = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M200 0C180 10 150 30 120 60C90 90 70 120 60 150C50 180 45 190 40 200"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M160 20C140 30 120 50 100 70C80 90 70 100 60 110"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M180 40C160 50 140 70 120 90C100 110 90 120 80 130"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M130 50C110 50 90 60 70 80C50 100 40 110 30 120"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M100 80C80 80 60 90 40 110C20 130 10 140 0 150"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);
