import { Image, Container, Row, Col } from "react-bootstrap";

import AboutImages from "../AboutImages/AboutImages";
import AboutTitle from "../AboutTitle/AboutTitle";
import AboutText from "../AboutText/AboutText";

import "./AboutSection.scss";

const AboutSection = ({ title, image, text, isHome, price }) => {
  const className = "info-home text-center mx-auto";
  const secondClass = "info";

  const additionalClass = text === "beans" ? "beans text-start" : "";

  console.log(price);

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
                      <AboutText text={text} additionalClass={additionalClass} price={price} />
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
