import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = ({ navigationRoutes }) => {
  return (
    <footer>
      <div className="footer__container d-flex justify-content-sm-center align-items-end flex-wrap">
        <div className="footer__logo ">
          <Link to="/">
            <Image src="/images/logo-footer.png" fluid />
          </Link>
        </div>

        <nav>
          <ul className="footer__list d-flex m-0 p-0">
            <li>
              <Link className="footer__item" to="/About">
                Our coffee
              </Link>
            </li>
            <li>
              <Link className="footer__item" to="/Products">
                For your pleasure
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__img d-flex justify-content-center">
        <Image src="/images/beans_logo.png" fluid />
      </div>
    </footer>
  );
};

export default Footer;
