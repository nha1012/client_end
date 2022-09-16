import Image from 'next/image';
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
      <div className="header__logo text-[#3669C9] text-lg font-bold">Mega Mall</div>
      <div className="header__left gap-5 flex">
        <Image src="/icons/bell.svg" alt="menu" width="20" height="20" />
        <Image src="/icons/shopping-cart.svg" alt="menu" width="20" height="20" />
      </div>
      {showMenu && (
        <div className="menu-container w-[100vw] p-6 h-[100vh] absolute top-[65px] bg-[white] z-10 flex justify-center left-0">
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
