import { Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ProductsGroup.scss";

const ProductCard = ({ id, src, label, countryProducer, price }) => (
  <Link to={`/Beans/${id}`} className="our-best__card d-flex flex-column align-items-end justify-content-end" key={id}>
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

const ProductsGroup = ({ numberOfCards, titleShow, additionalClass }) => {
  const CardIds = [
    { id: 1, src: "./images/bwst-1.png", label: "Solimo Coffee Beans 2 kg", countryProducer: "", price: "10.73$" },
    { id: 2, src: "./images/best-2.png", label: "Presto Coffee Beans 1 kg", countryProducer: "", price: "15.99$" },
    { id: 3, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "", price: "6.99$" },
    //
    { id: 4, src: "./images/our-2.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "16.99$" },
    { id: 5, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Kenya", price: "6.99$" },
    { id: 6, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Columbia", price: "6.99$" },
    { id: 7, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
    { id: 8, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
    { id: 9, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
  ];

  // Вибрати лише останні 6 елементів з CardIds для компонента Products або перші 3 елементи для компонента Home
  const selectedCards = numberOfCards === 6 ? CardIds.slice(-6) : CardIds.slice(0, 3);

  const buttons = selectedCards.map(({ id, src, label, countryProducer, price }) => (
    <ProductCard key={id} id={id} src={src} label={label} countryProducer={countryProducer} price={price} />
  ));

  let classNames = "our-best d-flex align-items-center justify-content-center";
  // Додавання додаткового класу, якщо він переданий
  if (additionalClass) {
    classNames += ` ${additionalClass}`;
  }

  return (
    <div className={classNames}>
      <Image className="position-absolute" src="./images/banner/paper.jpg" fluid />
      <div className="d-flex flex-column align-items-center justify-content-center">
        {titleShow && <h2 className="title-2">Our best</h2>}
        <div className="our-best__products d-flex justify-content-center flex-wrap gap-5 px-4 px-md-0">{buttons}</div>
      </div>
    </div>
  );
};

export default ProductsGroup;
