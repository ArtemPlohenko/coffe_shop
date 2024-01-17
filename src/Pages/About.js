import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";

const About = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/coffee-shop.jpg" />
      <AboutSection showImages={true} showTitles={true} />
    </>
  );
};

export default About;
