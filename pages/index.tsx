import type { NextPage } from 'next';
import { Fragment } from 'react';
import Products from '../components/Products';
import SubCategories from '../components/SubCategories';
import prisma from '../lib/prisma';
import { makeSerializable } from '../lib/util';
import { IProduct } from '../types/global';
import { NextSeo } from 'next-seo';
interface Props {
  products: IProduct[];
}
const Home: NextPage<Props> = ({ products }) => {
  return (
    <Fragment>
      <NextSeo title="Lala store" description="Gấu Bông lalashop | Shop mua bán Gấu Bông Đẹp, Giá Rẻ ở đà nẵng" />
      <SubCategories />
      <Products products={products} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const products = await prisma.product.findMany({
    include: {
      productImages: true,
      productOptions: true,
    },
  });
  return {
    props: { products: makeSerializable(products) }, // will be passed to the page component as props
  };
}
export default Home;
