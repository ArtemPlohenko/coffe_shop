import Image from "react-bootstrap/Image";

import "./Banner.scss";

const Banner = ({ imageUrl }) => {
  return (
    <div className="banner">
      <div className="image-wrapper">
        <Image src={imageUrl} fluid />
      </div>
    </div>
  );
};

export default Banner;
