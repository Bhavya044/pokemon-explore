'use client';

import React from 'react';
import { IconProps } from '@/types/general';

const PokeballIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="5" />
    <path d="M5 50a45 45 0 0 1 90 0H65a15 15 0 0 0-30 0H5Z" fill="#ef4444" />
    <circle
      cx="50"
      cy="50"
      r="12"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    <circle cx="50" cy="50" r="6" fill="black" />
  </svg>
);

export default PokeballIcon;
