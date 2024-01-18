import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./ProductsGroup.scss";

const ProductsGroup = () => {
  const CardIds = [
    { id: 1, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
    { id: 2, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Kenya", price: "6.99$" },
    { id: 3, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Columbia", price: "6.99$" },
    { id: 4, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
    { id: 5, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
    { id: 6, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
  ];

  const buttons = CardIds.map(({ id, src, label, countryProducer, price }) => {
    return (
      <Link
        to={`/product/${id}`}
        className="our-best__card d-flex flex-column align-items-end justify-content-end"
        key={id}
      >
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body className="d-flex flex-column align-items-end justify-content-end p-0">
            <Card.Text>{label}</Card.Text>
            <Card.Text className="country justify-content-end">{countryProducer}</Card.Text>
            <Card.Text className="small justify-content-end">{price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  });

  return (
    <>
      <div className="our-best__products d-flex justify-content-center flex-wrap gap-5 px-4 px-md-0">{buttons}</div>
    </>
  );
};

export default ProductsGroup;
