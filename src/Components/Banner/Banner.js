import Image from "react-bootstrap/Image";
import Titles from "../../Components/Title/Title";

import "./Banner.scss";

const Banner = ({ imageUrl, mainTitle }) => {
  return (
    <div className="banner">
      <div className="image-wrapper position-relative">
        <Image src={imageUrl} fluid />
        <Titles mainTitle={mainTitle} />
      </div>
    </div>
  );
};

export default Banner;
