import Image from 'next/image';
import React from 'react';

const Products = () => {
  return (
    <div className="p-4">
      <div>
        <h2 className="mb-4 text-center text-2xl font-black text-[#ff6683]">Sản phẩm nổi bật</h2>
      </div>
      <ul className="grid list-none grid-cols-2 gap-2">
        <li className="flex flex-col rounded-lg shadow-card bg-[white]">
          <div className="w-full relative h-[150px]">
            <Image src="/imgs/Minion-nieng-rang-7.jpeg" alt="Image Alt" layout="fill" objectFit="fill" />
          </div>
          <div className="product__desc flex mt-4 flex-col p-2 items-center">
            <h3 className="text-[#333] text-center">Gấu bông Minion niềng răng</h3>
            <span className="font-bold text-[#ff6683] mt-1">148.000₫</span>
          </div>
        </li>
        <li className="flex flex-col rounded-lg shadow-card bg-[white]">
          <div className="w-full relative h-[150px]">
            <Image src="/imgs/Minion-nieng-rang-7.jpeg" alt="Image Alt" layout="fill" objectFit="fill" />
          </div>
          <div className="product__desc flex mt-4 flex-col p-2 items-center">
            <h3 className="text-[#333] text-center">Gấu bông Minion niềng răng</h3>
            <span className="font-bold text-[#ff6683] mt-1">148.000₫</span>
          </div>
        </li>
        <li className="flex flex-col rounded-lg shadow-card bg-[white]">
          <div className="w-full relative h-[150px]">
            <Image src="/imgs/Minion-nieng-rang-7.jpeg" alt="Image Alt" layout="fill" objectFit="fill" />
          </div>
          <div className="product__desc flex mt-4 flex-col p-2 items-center">
            <h3 className="text-[#333] text-center">Gấu bông Minion niềng răng</h3>
            <span className="font-bold text-[#ff6683] mt-1">148.000₫</span>
          </div>
        </li>
        <li className="flex flex-col rounded-lg shadow-card bg-[white]">
          <div className="w-full relative h-[150px]">
            <Image src="/imgs/Minion-nieng-rang-7.jpeg" alt="Image Alt" layout="fill" objectFit="fill" />
          </div>
          <div className="product__desc flex mt-4 flex-col p-2 items-center">
            <h3 className="text-[#333] text-center">Gấu bông Minion niềng răng</h3>
            <span className="font-bold text-[#ff6683] mt-1">148.000₫</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Products;
