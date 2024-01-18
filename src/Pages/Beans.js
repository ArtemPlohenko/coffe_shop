import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";

const Beans = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/coffee-shop.jpg" mainTitle="OurCoffee" />
      <AboutSection image="aboutOurCoffee" title="aboutIt" text="beans" isHome={false} />
    </>
  );
};

export default Beans;
