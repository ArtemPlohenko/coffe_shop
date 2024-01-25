import { Image, Container, Row, Col } from "react-bootstrap";

import Images from "../Images/Images";
import SubTitle from "../SubTitle/SubTitle";
import ComponentTexts from "../ComponentTexts/ComponentTexts";

import "./Section.scss";

const Section = ({ title, image, text, isHome, price }) => {
  const className = "info-home text-center mx-auto";
  const secondClass = "info";

  const additionalClass = text === "beans" ? "beans text-start" : "";

  return (
    <section>
      <>
        {isHome ? (
          <div className={className}>
            <SubTitle title={title} />
            <Image src="/images/beans_logo.png" fluid />
            <div className={`info__content d-flex ${additionalClass}`}>
              <Images image={image} />
              <ComponentTexts text={text} additionalClass={additionalClass} />
            </div>
          </div>
        ) : (
          <div className={`${secondClass} ${additionalClass}`}>
            <Container>
              <Row className="flex-column flex-sm-row ">
                <Col>
                  <Images image={image} />
                </Col>
                <Col>
                  <div className="text-center">
                    <SubTitle title={title} />
                    <Image src="/images/beans_logo.png" fluid />
                    <div className={`about-text-container ${additionalClass}`}>
                      <ComponentTexts text={text} additionalClass={additionalClass} price={price} />
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

export default Section;
