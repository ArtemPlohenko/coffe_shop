import { useParams } from "react-router-dom";

import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";

const Beans = () => {
  // console.log(props);
  const { id } = useParams();

  return (
    <>
      <Banner imageUrl="./images/banner/coffee-shop.jpg" mainTitle="OurCoffee" />
      <AboutSection image="aboutOurCoffee" title="aboutIt" text="beans" isHome={false} id={id} />
      <p>Displaying details for Bean with ID: {id}</p>
    </>
  );
};

export default Beans;
