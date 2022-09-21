import Image from 'next/image';
import React from 'react';

const Categories = () => {
  return (
    <div className="py-4">
      <ul className="grid list-none grid-cols-5">
        <li className="flex items-center flex-col">
          <div className="w-full h-[48px] relative">
            <Image src="/icons/Button Icon-2.svg" alt="" layout="fill" objectFit="contain" />
          </div>
          <span className="text-xs mt-1">Fashion</span>
        </li>

        <li className="flex items-center flex-col">
          <div className="w-full h-[48px] relative">
            <Image src="/icons/Button Icon-3.svg" alt="" layout="fill" objectFit="contain" />
          </div>
          <span className="text-xs mt-1">Gadget</span>
        </li>

        <li className="flex items-center flex-col">
          <div className="w-full h-[48px] relative">
            <Image src="/icons/Button Icon-4.svg" alt="" layout="fill" objectFit="contain" />
          </div>
          <span className="text-xs mt-1">Bear</span>
        </li>

        <li className="flex items-center flex-col">
          <div className="w-full h-[48px] relative">
            <Image src="/icons/Button Icon-4.svg" alt="" layout="fill" objectFit="contain" />
          </div>
          <span className="text-xs mt-1">Bear</span>
        </li>

        <li className="flex items-center flex-col">
          <div className="w-full h-[48px] relative">
            <Image src="/icons/Button Icon-4.svg" alt="" layout="fill" objectFit="contain" />
          </div>
          <span className="text-xs mt-1">Bear</span>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
