import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="upper-section">
        <div className="upper-section-content">
          <p>
            <i class="fa-regular fa-user"></i> OUVRIR UN COMPTE
          </p>
          <p>
            <i class="fa-duotone fa-lock-keyhole"></i>SE CONNSCTER
          </p>
        </div>
      </div>
      <div className="header-main">
        <div className="logo-section">
          <img
            src="./images/logo-white.png"
            alt="logo"
            className="logo-image"
          />
        </div>

        <div className="lower-section">
          <ul className="list">
            <NavLink className="links" to="/" activeClassName="active">
              <li>ACCUEIL</li>
            </NavLink>
            <NavLink className="links" to="/page2" activeClassName="active">
              <li>QUI SOMMES-NOUS?</li>
            </NavLink>
            <NavLink className="links" to="/page3" activeClassName="active">
              <li>NOS PROJETS </li>
            </NavLink>
            <NavLink className="links" to="/page4" activeClassName="active">
              <li> NOS RÉALISATIONS</li>
            </NavLink>
            <NavLink className="links" to="/page5" activeClassName="active">
              <li> ACTUALITÉS</li>
            </NavLink>
            <NavLink className="links" to="/page6" activeClassName="active">
              <li>CONTACTS </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
