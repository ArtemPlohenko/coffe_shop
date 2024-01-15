import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import "./OurBest.scss";
import { Link } from "react-router-dom";

const OurBest = () => {
  return (
    <div className="our-best d-flex align-items-center justify-content-center">
      <Image src="./images/banner/paper.jpg" fluid />

      <div className="d-flex flex-column align-items-center justify-content-center position-absolute">
        <h2 className="title-2">Our best</h2>
        <div className="d-flex gap-5">
          <Card className="our-best__card ">
            <Card.Img variant="top" src="./images/bwst-1.png" style={{ width: "151px", margin: "0 auto" }} />
            <Card.Body>
              <Card.Text>Presto Coffee Beans 1 kg</Card.Text>
              <Card.Text className="small">10.73$</Card.Text>
            </Card.Body>
          </Card>

          <Card className="our-best__card">
            <Card.Img variant="top" src="./images/bwst-1.png" style={{ width: "151px", margin: "0 auto" }} />
            <Card.Body>
              <Card.Text>Presto Coffee Beans 1 kg</Card.Text>
              <Card.Text className="small">10.73$</Card.Text>
            </Card.Body>
          </Card>

          <Card className="our-best__card">
            <Card.Img variant="top" src="./images/bwst-1.png" style={{ width: "151px", margin: "0 auto" }} />
            <Card.Body>
              <Card.Text>Presto Coffee Beans 1 kg</Card.Text>
              <Card.Text className="small">10.73$</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurBest;
