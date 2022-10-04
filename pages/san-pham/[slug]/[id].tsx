import { Product } from '@prisma/client';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React, { FC } from 'react';
import prisma from '../../../lib/prisma';
import { makeSerializable } from '../../../lib/util';
import { IProduct } from '../../../types/global';
interface Props {
  product: IProduct;
}
const ProductDetails: FC<Props> = ({ product }) => {
  console.log(product);
  return (
    <div className="px-4 w-[full]">
      <div className="w-full h-[100%] relative">
        <Image
          src={product.productImages.length ? product.productImages[0].url ?? '' : ''}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) return { props: {} };
  const product = await prisma.product.findUnique({
    where: {
      id: params.id.toString(),
    },
    include: {
      productImages: true,
      productOptions: true,
    },
  });
  return {
    props: { product: makeSerializable(product) }, // will be passed to the page component as props
  };
};

export async function getStaticPaths() {
  const products = await prisma.product.findMany({});
  const paths = products.map((product: Product) => ({
    params: { slug: product.slug, id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export default ProductDetails;
