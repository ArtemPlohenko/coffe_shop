import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AboutImages from "../AboutImages/AboutImages";
import AboutTitle from "../AboutTitle/AboutTitle";
import AboutText from "../AboutText/AboutText";

import "./AboutSection.scss";

const AboutSection = ({ title, image, text, isHome, id }) => {
  const className = "info-home text-center mx-auto";
  const secondClass = "info";

  const additionalClass = text === "beans" ? "beans text-start" : "";

  return (
    <section>
      <>
        {isHome ? (
          <div className={`${className} ${additionalClass}`}>
            <AboutTitle title={title} />
            <Image src="/images/beans_logo.png" fluid />
            <div className={`info__content d-flex ${additionalClass}`}>
              <AboutImages image={image} />
              <AboutText text={text} additionalClass={additionalClass} />
            </div>
          </div>
        ) : (
          <div className={`${secondClass} ${additionalClass}`}>
            <Container>
              <Row className="flex-column flex-sm-row ">
                <Col>
                  <AboutImages image={image} />
                </Col>
                <Col>
                  <div className="text-center">
                    <AboutTitle title={title} />
                    <Image src="/images/beans_logo.png" fluid />
                    <div className={`about-text-container ${additionalClass}`}>
                      <AboutText text={text} additionalClass={additionalClass} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </>
    </section>
  );
};

export default AboutSection;
