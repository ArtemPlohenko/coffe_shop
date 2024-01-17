import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";

const About = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/coffee-shop.jpg" mainTitle="OurCoffee" />
      <AboutSection image="aboutUs" title="aboutOurBeans" text="about" />
    </>
  );
};

export default About;
