import "./AboutText.scss";

const AboutText = ({ text, additionalClass }) => {
  const text1 = [
    <p>
      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do
      things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve
      an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is
      song that held help face.
    </p>,
    <p>
      Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for
      ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set
      preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies
      now.
    </p>,
  ];

  const text2 = [
    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>,
    <p>
      Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly
      removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
      answered followed. At it went is song that held help face.
    </p>,
  ];

  const text3 = [
    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>,
    <p>
      Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly
      removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
      answered followed. At it went is song that held help face.
    </p>,
  ];

  const text4 = [
    <p>
      <strong>Country: </strong> Brasil
    </p>,
    <p>
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p>
      Price: <span>16.99$</span>
    </p>,
  ];

  const Texts = {
    home: { label: text1, id: "text1" },
    about: { label: text2, id: "text2" },
    products: { label: text3, id: "text3" },
    beans: { label: text4, id: "text4" },
  };

  const selectedTexts = Texts[text];

  if (!(text && selectedTexts)) {
    return null;
  }

  return (
    <div className={`${additionalClass}`} key={selectedTexts.id}>
      <>{selectedTexts.label}</>
    </div>
  );
};

export default AboutText;
