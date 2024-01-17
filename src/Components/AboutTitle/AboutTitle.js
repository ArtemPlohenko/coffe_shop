const AboutTitle = ({ title }) => {
  const Titles = {
    aboutUs: { label: "About Us", id: "label1" },
    aboutOurBeans: { label: "About our beans", id: "label2" },
  };

  const selectedTitle = Titles[title];

  if (!(title && selectedTitle)) {
    return null;
  }

  return (
    <div key={selectedTitle.id}>
      <h2 className="title-2">{selectedTitle.label}</h2>
    </div>
  );
};

export default AboutTitle;
