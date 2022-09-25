import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useMemo, useState } from 'react';
import { IProduct } from '../types/global';
import { formatMoney } from '../helpers/money';
import { ProductOption } from '@prisma/client';
interface Props {
  products: IProduct[];
}
interface PropsItem {
  product: IProduct;
}
const ProductItem: FC<PropsItem> = ({ product }) => {
  const [size, setSize] = useState<string>(product.productOptions.length ? product.productOptions[0].id : '');
  const price = useMemo(() => {
    let _price = 0;
    if (!product.productOptions.length) return product.promotionPrice;
    product.productOptions.map((option) => {
      if (option.id === size) _price = option.promotionPrice;
    });
    return _price;
  }, [product, size]);
  const handleSetSize = (event: any, size: string) => {
    event.preventDefault();
    setSize(size);
  };
  return (
    <li key={product.id} className="flex flex-col rounded-lg shadow-card bg-[white] pb-4">
      <Link href={{ pathname: `/san-pham/${product.slug}/${product.id}` }} className="p-4">
        <a>
          <div className="w-full relative h-[150px]">
            <Image src="/imgs/Minion-nieng-rang-7.jpeg" alt="Image Alt" layout="fill" objectFit="fill" />
          </div>
          <div className="product__desc flex mt-4 flex-col p-2 items-center">
            <h3 className="text-[#333] text-center">{product.name}</h3>
            <span className="font-bold text-[#ff6683]">{formatMoney(price)}₫</span>
            <ul className="flex gap-1 mt-1">
              {product.productOptions &&
                product.productOptions.map((option: ProductOption) => {
                  if (option.id === size)
                    return (
                      <li
                        onClick={(e) => e.preventDefault()}
                        className="rounded-sm text-sm text-white text-10 px-[4px] bg-[#ff6683] flex items-center"
                        key={option.id}
                      >
                        {option.size}
                      </li>
                    );
                  return (
                    <li
                      onClick={(e) => handleSetSize(e, option.id)}
                      className="rounded-sm border-solid border border-pink text-sm text-10 px-[4px] bg-[white] flex items-center"
                      key={option.id}
                    >
                      {option.size}
                    </li>
                  );
                })}
            </ul>
          </div>
        </a>
      </Link>
    </li>
  );
};

const Products: FC<Props> = ({ products }) => {
  return (
    <div className="p-4">
      <div>
        <h2 className="mb-4 text-center text-2xl font-black text-[#ff6683]">Sản phẩm nổi bật</h2>
      </div>
      <ul className="grid list-none grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Products;
