const AboutTitle = ({ showTitles }) => {
  const Titles = [
    { label: "About Us", id: "label1" },
    { label: "About our beans", id: "label2" },
  ];

  const selectedTitle = showTitles ? Titles[0] : Titles[1];

  return (
    <div key={selectedTitle.id}>
      <h2 className="title-2">{selectedTitle.label}</h2>
    </div>
  );
};

export default AboutTitle;
