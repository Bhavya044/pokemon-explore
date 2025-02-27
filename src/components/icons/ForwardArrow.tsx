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
    viewBox="0 0 32 32"
    enableBackground="new 0 0 32 32"
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
      {' '}
      <g id="Home"></g> <g id="Print"></g> <g id="Mail"></g> <g id="Camera"></g>{' '}
      <g id="Video"></g> <g id="Film"></g> <g id="Message"></g>{' '}
      <g id="Telephone"></g> <g id="User"></g> <g id="File"></g>{' '}
      <g id="Folder"></g> <g id="Map"></g> <g id="Download"></g>{' '}
      <g id="Upload"></g> <g id="Video_Recorder"></g> <g id="Schedule"></g>{' '}
      <g id="Cart"></g> <g id="Setting"></g> <g id="Search"></g>{' '}
      <g id="Pencils"></g> <g id="Group"></g> <g id="Record"></g>{' '}
      <g id="Headphone"></g> <g id="Music_Player"></g> <g id="Sound_On"></g>{' '}
      <g id="Sound_Off"></g> <g id="Lock"></g> <g id="Lock_open"></g>{' '}
      <g id="Love"></g> <g id="Favorite"></g> <g id="Film_1_"></g>{' '}
      <g id="Music"></g> <g id="Puzzle"></g> <g id="Turn_Off"></g>{' '}
      <g id="Book"></g> <g id="Save"></g> <g id="Reload"></g> <g id="Trash"></g>{' '}
      <g id="Tag"></g> <g id="Link"></g> <g id="Like"></g> <g id="Bad"></g>{' '}
      <g id="Gallery"></g> <g id="Add"></g> <g id="Close"></g>{' '}
      <g id="Forward">
        {' '}
        <g>
          {' '}
          <path
            d="M2,31c-0.4,0-0.7-0.2-0.9-0.6c-0.2-0.5,0-1.1,0.4-1.3L27.8,16L1.6,2.9C1.1,2.6,0.9,2,1.1,1.6 C1.4,1.1,2,0.9,2.4,1.1l28,14c0.3,0.2,0.6,0.5,0.6,0.9s-0.2,0.7-0.6,0.9l-28,14C2.3,31,2.2,31,2,31z"
            fill={fill ?? '#9C27B0'}
          ></path>{' '}
        </g>{' '}
      </g>{' '}
      <g id="Back"></g> <g id="Buy"></g> <g id="Mac"></g>{' '}
      <g id="Laptop"></g>{' '}
    </g>
  </svg>
);

export default ForwardArrowIcon;
