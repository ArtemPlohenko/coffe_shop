import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";

const AboutPageProps = {
  bannerAbout: { imageUrl: "/images/banner/coffee-shop.jpg", mainTitle: "OurCoffee" },
  section: { image: "About", title: "aboutOurBeans", text: "about" },
};

const About = () => {
  return (
    <>
      <Banner {...AboutPageProps.bannerAbout} />
      <Section {...AboutPageProps.section} />
    </>
  );
};

export default About;
