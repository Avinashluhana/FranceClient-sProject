import React from "react";
import Footer from "../Footer/Footer";
import LargeCards from "../Layouts/LargeCards";
import "./Page3.css";
const Page3 = () => {
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
            <LargeCards
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="PROJET DE REBOISEMENT NAATAL TOUBA"
            />
            <LargeCards
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="PROJET DE REBOISEMENT NAATAL TOUBA"
            />
          </div>
          <div className="row1">
            <LargeCards
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="PROJET DE REBOISEMENT NAATAL TOUBA"
            />
            <LargeCards
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="PROJET DE REBOISEMENT NAATAL TOUBA"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page3;
