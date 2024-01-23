import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import "./Header.scss";

const Header = () => {
  const menuItems = [
    { id: 1, label: "Our coffee", to: "/About" },
    { id: 2, label: "For your pleasure", to: "/Products" },
    // Add more menu items as needed
  ];

  return (
    <div className="header d-flex position-absolute align-items-end flex-wrap">
      <div className="logo">
        <Link to="/">
          <Image src="/images/svg/logo.svg" fluid />
        </Link>
      </div>

      <nav>
        <ul className="header__list d-flex m-0 p-0">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link className="item" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
