import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";
import ProductsGroup from "../Components/ProductsGroup/ProductsGroup";

const Home = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/banner.jpg" mainTitle="YouLove" />
      <AboutSection title="aboutUs" text="home" isHome={true} />
      <ProductsGroup imageShow={true} titleShow={true} numberOfCards={3} additionalClass="custom-class" />
    </>
  );
};

export default Home;
