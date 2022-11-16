import React from "react";
import Footer from "../Footer/Footer";
import Page5Card from "../Layouts/Page5Card";

const Page5 = () => {
  return (
    <div className="page3-main">
      <div className="page2-banner">
        <div className="banner2-text">
          <h1>NOS PROJETS</h1>
          <p>Accueil - Nos projets</p>
        </div>
      </div>
      <div className="page3-content">
        <div className="borders">
          <img src="./images/border.png" alt="border" className="text-center" />
          <img
            src="./images/mini-border.png"
            alt="mini-border"
            className="mini-border"
          />
        </div>

        <div className="page3-options">
          <h4 className="first-option">TOUT</h4>
          <h4>SANTÉ</h4>
          <h4>ENVIRONNEMENT</h4>
          <h4>EDUCATION </h4>
          <h4>INFRASTRUCTURES </h4>
          <h4>SOCIAL</h4>
        </div>
        <div className="page3-cards">
          <div className="row1">
            <Page5Card
              image="./images/card1.jpeg"
              text1="14 OCTOBRE 2022 | INFRASTRUCTURE"
              text2="FIN DES TRAVAUX DE
              CONSTRUCTION DU COMPLEXE
              CHEIKH AHMADOUL KHADIM
              À TOUBA..."
              text3="EN SAVOIR +"
            />
            <Page5Card
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="TOUBA CA KANAM DÉMARRE
              UN AUTRE DES SES ACTIVITÉS
              AVEC L’OPERATION DEFA
              YONE YI..."
              text3="EN SAVOIR +"
            />
          </div>
          <div className="row1">
            <Page5Card
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="NAATAL TOUBA, OPÉRATION
              DE REBOISEMENT EN ETROITE
              COLLABORATION AVEC LES
              EAUX ET DORETS..."
              text3="EN SAVOIR +"
            />
            <Page5Card
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="NAATAL TOUBA, OPÉRATION
              DE REBOISEMENT EN ETROITE
              COLLABORATION AVEC LES
              EAUX ET DORETS.."
              text3="EN SAVOIR +"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page5;
