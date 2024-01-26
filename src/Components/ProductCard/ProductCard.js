import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ id, src }) => {
  return (
    <Link to={`/Beans/${id}`} className="our-best__card d-flex flex-column align-items-end justify-content-end">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={src} alt="" />
        <Card.Body className="d-flex flex-column align-items-end justify-content-end p-0">
          {/* <Card.Text>{label}</Card.Text>
            <Card.Text className="country justify-content-end">{countryProducer}</Card.Text>
            <Card.Text className="small justify-content-end">{price}</Card.Text> */}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
