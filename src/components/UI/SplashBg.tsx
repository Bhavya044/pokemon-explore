'use client';

import Image from 'next/image';
import React from 'react';

const SplashBg: React.FC<{
  isLoading?: boolean;
  imageUrl: string;
  pokemonName: string;
  setIsLoading?: (loading: boolean) => void;
}> = ({ isLoading = false, imageUrl, pokemonName, setIsLoading }) => {
  return (
    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto overflow-hidden ">
      <Image
        src="/blue-splash.png"
        alt="Blue Splash Background"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-80 z-0"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 animate-pulse rounded-full">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full" />
          </div>
        )}
        <div className="relative w-[85%] h-[85%] sm:w-[90%] sm:h-[90%] rounded-full">
          <Image
            src={imageUrl}
            alt={pokemonName}
            layout="fill"
            objectFit="contain"
            className={`transition-transform duration-300 ease-in-out group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading?.(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashBg;
