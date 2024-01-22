import { useParams } from "react-router-dom";

import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";

const Beans = (props) => {
  const { id } = useParams();
  console.log(props);

  return (
    <>
      <Banner imageUrl="/images/banner/coffee-shop.jpg" mainTitle="OurCoffee" />
      <AboutSection image={id} title="aboutIt" text="beans" isHome={false} id={id} />
    </>
  );
};

export default Beans;
