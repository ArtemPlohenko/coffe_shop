import { useParams } from "react-router-dom";

import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";

const Beans = ({ price }) => {
  const { id } = useParams();

  console.log(price);

  return (
    <>
      <Banner imageUrl="/images/banner/coffee-shop.jpg" mainTitle="OurCoffee" />
      <Section image="AboutProducts" title="aboutIt" text="beans" id={id} price={price} />
    </>
  );
};

export default Beans;
