import "./Title.scss";

const Titles = ({ mainTitle }) => {
  const Titles = {
    YouLove: { label: "Everything You Love About Coffee", id: "title-1" },
    OurCoffee: { label: "Our Coffee", id: "title-2" },
    ForYourPleasure: { label: "For your pleasure", id: "title-3" },
  };

  const selectedTitle = Titles[mainTitle];

  if (!(mainTitle && selectedTitle)) {
    return null;
  }

  return (
    <div className="title position-absolute" data-toggle="title-show" key={selectedTitle.id}>
      <h1>{selectedTitle.label}</h1>
    </div>
  );
};

export default Titles;
