import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";
import ProductsGroup from "../Components/ProductsGroup/ProductsGroup";

const Products = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/coffee-shop-2.jpg" mainTitle="ForYourPleasure" />
      <AboutSection
        className="text-center"
        image="aboutOurBeans"
        title="aboutOurGoods"
        text="products"
        isHome={false}
      />
      <ProductsGroup numberOfCards={6} additionalClass="second-prodects" />
    </>
  );
};

export default Products;
