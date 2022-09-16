import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full p-6 h-[40vw] relative">
      <Image src="/imgs/banner-1.png" alt="" layout="fill" objectFit="contain" />
    </div>
  );
};

export default Banner;
