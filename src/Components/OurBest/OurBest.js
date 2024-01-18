import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./OurBest.scss";

const OurBest = () => {
  const CardIds = [
    { id: 1, src: "./images/bwst-1.png", label: "Solimo Coffee Beans 2 kg", price: "10.73$" },
    { id: 2, src: "./images/best-2.png", label: "Presto Coffee Beans 1 kg", price: "15.99$" },
    { id: 3, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", price: "6.99$" },
  ];

  const buttons = CardIds.map(({ id, src, label, price }) => {
    const key = `${id}-${src}`;

    return (
      <Link to="/Beans" className="our-best__card d-flex flex-column align-items-end justify-content-end" key={key}>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body className="d-flex flex-column align-items-end justify-content-end p-0">
            <Card.Text>{label}</Card.Text>
            <Card.Text className="small justify-content-end">{price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  });

  return (
    <div className="our-best d-flex align-items-center justify-content-center">
      <Image className="position-absolute" src="./images/banner/paper.jpg" fluid />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="title-2">Our best</h2>
        <div className="d-flex justify-content-center flex-wrap flex-md-nowrap gap-5 px-4 px-md-0">{buttons}</div>
      </div>
    </div>
  );
};

export default OurBest;
