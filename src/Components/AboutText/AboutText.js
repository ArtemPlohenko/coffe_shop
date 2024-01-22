import "./AboutText.scss";

const AboutText = ({ text, additionalClass }) => {
  const text1 = [
    <p key="paragraph1">
      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do
      things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve
      an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is
      song that held help face.
    </p>,
    <p key="paragraph2">
      Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for
      ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set
      preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies
      now.
    </p>,
  ];

  const text2 = [
    <p key="paragraph1">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>,
    <p key="paragraph2">
      Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly
      removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
      answered followed. At it went is song that held help face.
    </p>,
  ];

  const text3 = [
    <p key="paragraph1">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>,
    <p key="paragraph2">
      Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly
      removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
      answered followed. At it went is song that held help face.
    </p>,
  ];

  const text4 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>16.99$</span>
    </p>,
  ];

  const text5 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>7.99$</span>
    </p>,
  ];

  const text6 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>8.99$</span>
    </p>,
  ];

  const text7 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>7.99$</span>
    </p>,
  ];

  const text8 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>8.99$</span>
    </p>,
  ];

  const text9 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>7.99$</span>
    </p>,
  ];

  const text10 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>8.99$</span>
    </p>,
  ];

  const text11 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>8.99$</span>
    </p>,
  ];

  const text12 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>12.99$</span>
    </p>,
  ];

  const text13 = [
    <p key="paragraph1">
      <strong>Country: </strong> Brasil
    </p>,
    <p key="paragraph2">
      <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>,
    <p key="paragraph3">
      Price: <span>13.99$</span>
    </p>,
  ];

  const Texts = {
    home: { label: text1, id: "text1" },
    about: { label: text2, id: "text2" },
    products: { label: text3, id: "text3" },
    beans: { label: text4, id: "text4" },
    beans5: { label: text5, id: "text5" },
    beans6: { label: text6, id: "text6" },
    beans7: { label: text7, id: "text7" },
    beans8: { label: text8, id: "text8" },
    beans9: { label: text9, id: "text9" },
    beans10: { label: text10, id: "text10" },
    beans11: { label: text11, id: "text11" },
    beans12: { label: text12, id: "text12" },
    beans13: { label: text13, id: "text13" },
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
