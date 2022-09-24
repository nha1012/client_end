import Header from '../Header';
import Banner from '../Banner';
import Categories from '../Categories';
export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <main>{children}</main>
    </>
  );
}
