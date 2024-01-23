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

const ProductsGroup = ({ titleShow, additionalClass, CardIds }) => {
  let classNames = "our-best d-flex align-items-center justify-content-center";

  if (additionalClass) {
    classNames += ` ${additionalClass}`;
  }

  return (
    <div className={classNames}>
      <Image className="position-absolute" src="./images/banner/paper.jpg" fluid />
      <div className="d-flex flex-column align-items-center justify-content-center">
        {titleShow && <h2 className="title-2">Our best</h2>}
        <div className="our-best__products d-flex justify-content-center flex-wrap gap-5 px-4 px-md-0">
          {CardIds && CardIds.map(({ id, ...cardProps }) => <ProductCard key={id} id={id} {...cardProps} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsGroup;
