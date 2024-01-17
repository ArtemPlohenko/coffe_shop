import Banner from "../Components/Banner/Banner";
import AboutSection from "../Components/AboutSection/AboutSection";
import OurBest from "../Components/OurBest/OurBest";

const Home = () => {
  return (
    <>
      <Banner imageUrl="./images/banner/banner.jpg" />
      <AboutSection showImages={false} showTitles={true} />
      <OurBest />
    </>
  );
};

export default Home;