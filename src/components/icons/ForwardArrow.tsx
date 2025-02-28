'use client';

import { IconProps } from '@/types/general';

const ForwardArrowIcon: React.FC<IconProps> = ({
  height,
  width,
  fill,
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 96 96"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill ?? '#000000'}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <title></title>
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"></path>
    </g>
  </svg>
);

export default ForwardArrowIcon;
