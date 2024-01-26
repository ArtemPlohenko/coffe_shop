import { Image } from "react-bootstrap";

import SubTitle from "../SubTitle/SubTitle";
import ProductCard from "../ProductCard/ProductCard";

import "./ProductsGroup.scss";

const ProductsGroup = ({ title, additionalClass, products }) => {
  let classNames = "our-best d-flex align-items-center justify-content-center";

  if (additionalClass) {
    classNames += ` ${additionalClass}`;
  }

  return (
    <div className={classNames}>
      <Image className="position-absolute" src="./images/banner/paper.jpg" fluid />
      <div className="d-flex flex-column align-items-center justify-content-center">
        {title && <SubTitle title="OurBest" />}
        <div className="our-best__products d-flex justify-content-center flex-wrap gap-5 px-4 px-md-0">
          {products && products.map((props) => <ProductCard key={props.id} {...props} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsGroup;
