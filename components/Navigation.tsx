import Image from 'next/image';
import React from 'react';

const Navigation = () => {
  return (
    <div className="w-full h-[60px] bg-[white] fixed bottom-0 shadow left-0 z-10">
      <ul className="grid grid-cols-4">
        <li className="flex flex-col p-2 items-center">
          <Image src="/icons/ic_menu_home.svg" alt="" width="24" height="24" />
          <span className="text-xs uppercase mt-1">home</span>
        </li>
        <li className="flex flex-col p-2 items-center">
          <Image src="/icons/ic_menu_wishlist.svg" alt="" width="24" height="24" />
          <span className="text-xs uppercase mt-1">wishlist</span>
        </li>
        <li className="flex flex-col p-2 items-center">
          <Image src="/icons/ic_menu_pesanan.svg" alt="" width="24" height="24" />
          <span className="text-xs uppercase mt-1">order</span>
        </li>
        <li className="flex flex-col p-2 items-center">
          <Image src="/icons/avatar.svg" alt="" width="24" height="24" />
          <span className="text-xs uppercase mt-1">Account</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
