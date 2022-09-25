import type { NextPage } from 'next';
import { Fragment } from 'react';
import Products from '../components/Products';
import SubCategories from '../components/SubCategories';
import prisma from '../lib/prisma';
import { makeSerializable } from '../lib/util';
import { IProduct } from '../types/global';
interface Props {
  products: IProduct[];
}
const Home: NextPage<Props> = ({ products }) => {
  return (
    <Fragment>
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
