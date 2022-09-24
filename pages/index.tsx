import type { NextPage } from 'next';
import { Fragment } from 'react';
import Products from '../components/Products';
import SubCategories from '../components/SubCategories';
const Home: NextPage = () => {
  return (
    <Fragment>
      <SubCategories />
      <Products />
    </Fragment>
  );
};
export default Home;
