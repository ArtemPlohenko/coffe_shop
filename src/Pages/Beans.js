import { useParams } from "react-router-dom";

import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";

const Beans = ({ price }) => {
  const { id } = useParams();

  console.log(price);

  return (
    <>
      <Banner imageUrl="/images/banner/coffee-shop.jpg" mainTitle="OurCoffee" />
      <AboutSection image={id} title="aboutIt" text="beans" isHome={false} id={id} price={price} />
    </>
  );
};

export default Beans;
