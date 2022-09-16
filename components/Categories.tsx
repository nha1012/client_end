import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { categoriesApi } from '../pages/api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const fetch = async () => {
    try {
      const _categories = await categoriesApi.getCategories();
      setCategories(_categories.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetch();
  }, []);
  console.log('render');
  return (
    <div className="py-6">
      <div className="flex px-6 justify-between items-center">
        <h2 className="text-base mb-2">Categories</h2>
        <span className="text-xs mb-2 text-[#3669C9]">See All</span>
      </div>
      <ul className="grid list-none grid-cols-5 px-2">
        {categories.map((category: any) => (
          <li key={category.id} className="flex items-center flex-col">
            <div className="w-full h-[48px] relative">
              <Image src="/icons/Button Icon.svg" alt="" layout="fill" objectFit="contain" />
            </div>
            <span className="text-xs mt-1">{category?.name ?? ''}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
