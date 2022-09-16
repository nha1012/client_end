import Image from 'next/image';
import React from 'react';

const Search = () => {
  return (
    <div className="p-6">
      <div className="input-button relative">
        <input
          placeholder="Search product name"
          className="pl-5 h-[50px] flex items-center rounded-[10px] w-full bg-[#FAFAFA]"
        />
        <div className="absolute right-4 top-[30%]">
          <Image src="/icons/search.svg" alt="search" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default Search;
