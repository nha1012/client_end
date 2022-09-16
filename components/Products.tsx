import Image from 'next/image';
import React from 'react';

const Products = () => {
  return (
    <div className="p-6 bg-[#FAFAFA]">
      <div className="flex justify-between items-center">
        <h2 className="text-base mb-2">Feature Products</h2>
        <span className="text-xs mb-2 text-[#3669C9]">See All</span>
      </div>
      <ul className="grid list-none grid-cols-2 gap-4">
        <li className="flex flex-col rounded-lg shadow-card bg-[white] p-4">
          <div className="w-full h-[130px] relative">
            <Image src="/icons/Button Icon.svg" alt="" width="125" height="125" />
          </div>
          <span className="font-medium mt-4">Name-23 FSA</span>
          <span className="text-xs text-[#FE3A30] mt-1">1.500.555 </span>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/icons/Vector.svg" alt="" width="14" height="14" />
              <span className="text-xs ml-1">4.6</span>
            </div>
            <div className="review text-xs">86 Review</div>
            <div>
              <Image src="/icons/vector-2.svg" alt="" width="14" height="14" />
            </div>
          </div>
        </li>
        <li className="flex flex-col rounded-lg shadow-card bg-[white] p-4">
          <div className="w-full h-[130px] relative">
            <Image src="/icons/Button Icon.svg" alt="" width="125" height="125" />
          </div>
          <span className="font-medium mt-4">Name-23 FSA</span>
          <span className="text-xs text-[#FE3A30] mt-1">1.500.555 </span>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/icons/Vector.svg" alt="" width="14" height="14" />
              <span className="text-xs ml-1">4.6</span>
            </div>
            <div className="review text-xs">86 Review</div>
            <div>
              <Image src="/icons/vector-2.svg" alt="" width="14" height="14" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Products;
