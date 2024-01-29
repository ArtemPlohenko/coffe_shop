import { Image } from "react-bootstrap";

import SubTitle from "../SubTitle/SubTitle";
import ComponentTexts from "../ComponentTexts/ComponentTexts";

import "./Section.scss";

const Section = ({ title, text, children }) => {
  const additionalClass = text === "beans" ? "beans text-start " : "";
  const additionalClassContent = text === "home" ? "" : "content";

  return (
    <section>
      <div className={`section-wrap d-flex ${additionalClassContent}`}>
        {children}
        <div className="text-center">
          <SubTitle title={title} />
          <Image src="/images/beans_logo.png" fluid />
          <div className={`about-text-container ${additionalClass}`}>
            <ComponentTexts text={text} additionalClass={additionalClass} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
