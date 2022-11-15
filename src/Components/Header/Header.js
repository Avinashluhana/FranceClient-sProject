import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-main">
        <div className="logo-section">
          <img src="./images/logo-white.png" alt="logo" className="logo-image" />
        </div>
        {/* <div className="upper-section">
          <p>OUVRIR UN COMPTE</p>
        </div> */}
        <div className="lower-section">
          <ul className="list">
            <Link className="links" to="/">
              <li>ACCUEIL</li>
            </Link>
            <Link className="links" to="/page2">
              <li>QUI SOMMES-NOUS?</li>
            </Link>
            <Link className="links" to="/page3">
              <li>NOS PROJETS </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
