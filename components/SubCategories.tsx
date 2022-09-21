import Image from 'next/image';
import React from 'react';

const SubCategories = () => {
  return (
    <div>
      <ul className="grid list-none grid-cols-2 px-3 gap-2">
        <li className="flex items-center flex-col">
          <div className="w-full h-[92px] relative">
            <Image src="/imgs/gaubong.png" alt="" layout="fill" objectFit="contain" />
          </div>
        </li>
        <li className="flex items-center flex-col">
          <div className="w-full h-[92px] relative">
            <Image src="/imgs/gaubong1.png" alt="" layout="fill" objectFit="contain" />
          </div>
        </li>

        <li className="flex items-center flex-col">
          <div className="w-full h-[92px] relative">
            <Image src="/imgs/gaubong2.png" alt="" layout="fill" objectFit="contain" />
          </div>
        </li>

        <li className="flex items-center flex-col">
          <div className="w-full h-[92px] relative">
            <Image src="/imgs/gaubong3.png" alt="" layout="fill" objectFit="contain" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SubCategories;
