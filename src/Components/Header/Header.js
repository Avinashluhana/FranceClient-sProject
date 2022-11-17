import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="upper-section">
        <div className="upper-section-content">
          <div className="header-text">
            <p className="p-text">
              <i class="fa-regular fa-user"></i> OUVRIR UN COMPTE{" "}
            </p>
            <p>SE CONNSCTER</p>
          </div>
          <div className="header-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
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
              <li>
                ACCUEIL
                <img
                  alt="border"
                  src="./images/vertical-border.png"
                  className="vertical-border"
                />
              </li>
            </NavLink>
            <NavLink className="links" to="/page2" activeClassName="active">
              <li>
                QUI SOMMES-NOUS?{" "}
                <img
                  alt="border"
                  src="./images/vertical-border.png"
                  className="vertical-border"
                />
              </li>
            </NavLink>
            <NavLink className="links" to="/page3" activeClassName="active">
              <li>
                NOS PROJETS{" "}
                <img
                  alt="border"
                  src="./images/vertical-border.png"
                  className="vertical-border"
                />
              </li>
            </NavLink>
            <NavLink className="links" to="/page4" activeClassName="active">
              <li>
                NOS RÉALISATIONS
                <img
                  alt="border"
                  src="./images/vertical-border.png"
                  className="vertical-border"
                />
              </li>
            </NavLink>
            <NavLink className="links" to="/page5" activeClassName="active">
              <li>
                {" "}
                ACTUALITÉS{" "}
                <img
                  alt="border"
                  src="./images/vertical-border.png"
                  className="vertical-border"
                />
              </li>
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
