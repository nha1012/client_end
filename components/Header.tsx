import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toogleMenu = () => setShowMenu(!showMenu);
  return (
    <header className="ralative flex justify-between items-center px-6 py-4 shadow-header">
      <div className="header__left">
        {!showMenu ? (
          <Image onClick={toogleMenu} src="/icons/menu-mobile-icons.svg" alt="menu" width="25" height="25" />
        ) : (
          <Image onClick={toogleMenu} src="/icons/close.svg" alt="menu" width="25" height="25" />
        )}
      </div>
      <div className="header__logo text-[#ff6683] text-lg font-bold">
        <Link href="/">
          <a>Mega</a>
        </Link>
      </div>
      <div className="header__left flex">
        <div className="input-button relative">
          <input
            placeholder="Nhập sản phẩm"
            className="pl-5 h-[45px] flex items-center rounded-[10px] w-full bg-[#FAFAFA]"
          />
          <div className="absolute right-4 top-[30%]">
            <Image src="/icons/search.svg" alt="search" width="20" height="20" />
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="menu-container active w-[100vw] p-6 absolute top-[65px] bg-[white] z-10 flex justify-center left-0">
          <ul className="flex gap-4 flex-col">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      ) : (
        <div className="menu-container w-[100vw] p-6 absolute top-[65px] bg-[white] z-10 flex justify-center left-0">
          <ul className="flex gap-4 flex-col">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
