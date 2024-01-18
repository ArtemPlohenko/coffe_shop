const AboutTitle = ({ title }) => {
  const Titles = {
    aboutUs: { label: "About Us", id: "label1" },
    aboutOurBeans: { label: "About our beans", id: "label2" },
    aboutOurGoods: { label: "About our goods", id: "label3" },
    aboutIt: { label: "About it", id: "label4" },
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
