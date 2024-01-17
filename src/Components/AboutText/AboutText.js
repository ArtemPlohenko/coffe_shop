import "./AboutText.scss";

const AboutText = ({ text }) => {
  const test1 = [
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

  const test2 = [
    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>,
    <p>
      Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly
      removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
      answered followed. At it went is song that held help face.
    </p>,
  ];

  const test3 = [
    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>,
    <p>
      Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly
      removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
      answered followed. At it went is song that held help face.
    </p>,
  ];

  const Texts = {
    home: { label: test1, id: "text1" },
    about: { label: test2, id: "text2" },
    products: { label: test3, id: "text3" },
  };

  const selectedTexts = Texts[text];

  if (!(text && selectedTexts)) {
    return null;
  }

  return (
    <div key={selectedTexts.id}>
      <>{selectedTexts.label}</>
    </div>
  );
};

export default AboutText;
