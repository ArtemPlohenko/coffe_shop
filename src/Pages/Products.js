import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";
import ProductsGroup from "../Components/ProductsGroup/ProductsGroup";

const Products = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/coffee-shop-2.jpg" mainTitle="ForYourPleasure" />
      <Section className="text-center" image="Products" title="aboutOurGoods" text="products" />
      <ProductsGroup numberOfCards={6} additionalClass="second-prodects" />
    </>
  );
};

export default Products;
