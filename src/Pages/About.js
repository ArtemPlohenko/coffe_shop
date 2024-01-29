import { Image } from "react-bootstrap";

import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";

const AboutPageProps = {
  bannerAbout: { imageUrl: "/images/banner/coffee-shop.jpg", mainTitle: "OurCoffee" },
  section: { title: "aboutOurBeans", text: "about", additionalClass: "content" },
};

const About = () => {
  return (
    <>
      <Banner {...AboutPageProps.bannerAbout} />
      <Section {...AboutPageProps.section}>
        <div className="info">
          <Image src="/images/our-1.png" />
        </div>
      </Section>
    </>
  );
};

export default About;
