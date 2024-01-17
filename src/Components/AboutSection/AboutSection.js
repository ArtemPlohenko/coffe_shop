import Image from "react-bootstrap/Image";

import AboutImages from "../AboutImages/AboutImages";
import AboutTitle from "../AboutTitle/AboutTitle";
import AboutText from "../AboutText/AboutText";

import "./AboutSection.scss";

const AboutSection = ({ title, image, text }) => {
  const className = "info text-center mx-auto";

  return (
    <section>
      <div className={className}>
        <AboutTitle title={title} />
        <Image src="./images/beans_logo.png" fluid />
        <div className="info__content d-flex">
          <AboutImages image={image} />
          <AboutText text={text} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
