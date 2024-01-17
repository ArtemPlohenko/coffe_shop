import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";

const Products = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/coffee-shop-2.jpg" mainTitle="ForYourPleasure" />
      <AboutSection className="text-center" image="aboutOurBeans" title="aboutOurGoods" text="products" />
    </>
  );
};

export default Products;
