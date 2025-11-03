import About from "../components/About";
import Category from "../components/Category";
import FollowInsta from "../components/FollowInsta";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Menu from "../components/Menu";
import NewProducts from "../components/NewProducts";
import PopularProducts from "../components/PopularProducts";
import Weblog from "../components/Article";

export default function Home() {     
  return (
    <>
      <Menu />
      <Header />
      <Category />
      <NewProducts />
      <Gallery />
      <PopularProducts />
      <About />
      <FollowInsta />
      <Weblog />
      <Footer />
    </>
  );
}
