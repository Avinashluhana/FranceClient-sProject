import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./images/real-logo.png" alt="logo" />
        </div>
        <div className="footer-section">
          <h3>LAAJ LUÑU MAN, </h3>
          <h3>DEF KO FU ÑU XAM</h3>
          <div className="mini-content">
            <span>Tél.</span>
            <p>+221 33 888 28 28</p>
          </div>
          <div className="mini-content">
            <span>Email: </span>
            <p>contact@toubacakanam.sn</p>
          </div>
          <p>© 2022 - TOUBA CA KANAM | Tous les droits réservés</p>
          <div className="mini-content">
            <span>Réalisation:</span>
            <p> MOURID PROFESSIONALS</p>
          </div>
        </div>
        <div className="footer-section1">
          <h3>JOTALIL SA BARKEELU</h3>
          <h3>FO MEUNTI NEK</h3>
          <p>Télécharger l’application touba ca kanam</p>
          <div className="footer-buttons">
            <img
              src="./images/google-button.png"
              alt="google-button"
              className="google-button"
            />
            <img src="./images/apple-button.png" alt="google-button" />
            <div className="icons">
              <p>SUIVEZ-NOUS SUR :</p>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
