import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header d-flex position-absolute align-items-end flex-wrap">
      <div className="logo">
        <Link to="/">
          <Image src="./images/svg/logo.svg" fluid />
        </Link>
      </div>

      <nav>
        <ul className="header__list d-flex m-0 p-0">
          <li>
            <Link className="item" to="/About">
              Our coffee
            </Link>
          </li>
          <li>
            <Link className="item" to="/Products">
              For your pleasure
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
